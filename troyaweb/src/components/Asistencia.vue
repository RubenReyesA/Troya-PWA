<template>
  <div class="asistencia">
    <div class="try">
      <Dialog
        :statusDialog="showShareDialog"
        v-on:statusClosed="showShareDialog=false;"
        :content="shareContent"
      ></Dialog>
      <v-select v-model="selectedPlayer" label="Escoger jugador" :items="playersListNames"></v-select>

      <div :style="showTable" class="centeredColumn">
        <v-card id="saldoCard" style="background-color:#F4FF81">
          <h4>Partidos: {{count}}/30</h4>
        </v-card>

        <v-simple-table style="width:40vw; margin-top:20px;">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-align:center">Jugador</th>
                <th class="text-align:center">{{selectedPlayer}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in infoRow" :key="item.name">
                <td>{{ item.name }}</td>
                <td @click="mark(item.name)" :style="tableStyle">{{ item.j}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>
import info from "@/information";
import fb from "@/fb";
import Dialog from "@/components/Dialog";

export default {
  props: ["mode", "share"],
  components: {
    Dialog
  },
  data: function() {
    return {
      showTable: "display:none",
      tableStyle: "",
      showShareDialog: false,
      infoRow: null,
      count: 0,
      tabs: null,
      selectedPlayer: null,
      playersListNames: [],
      infoAsistencia: [],
      shareContent: {}
    };
  },
  watch: {
    selectedPlayer: function() {
      this.showTable = "display:flex";
      this.generateTable(this.selectedPlayer);
    },
    mode: function() {
      if (this.mode == 1) {
        this.tableStyle = "cursor:pointer; background-color:#CFD8DC";
      } else if (this.mode == 0) {
        this.tableStyle = "";
      }
    },
    share: function() {
      if (this.share == 1) {
        this.openShare();
      }
    }
  },
  methods: {
    calculateMatchesAuto: function(a) {
      let count = 0;

      for (let i = 0; i < a.length; i++) {
        if (a[i] == "YES") {
          count++;
        }
      }

      return count;
    },
    openShare: function() {
      this.$emit("endSharing");
      let t = "Resumen de la asistencia:\n";

      for (let i = 0; i < this.infoAsistencia.length; i++) {
        let n = this.infoAsistencia[i].Name;
        let p = this.calculateMatchesAuto(
          Object.values(this.infoAsistencia[i])
        );
        t += `\t${n} --> ${p}/30\n`;
      }

      this.showShareDialog = true;
      this.shareContent.title = "Resumen de la asistencia";
      this.shareContent.info = t;
    },
    generateTable: function(player) {
      this.infoRow = [];
      this.count = 0;

      let index = this.lookForIndexinInfo(player);

      for (let i = 1; i <= 30; i++) {
        let a = "";

        if (eval("this.infoAsistencia[" + index + "].StatusJ" + i) == "YES") {
          a = "X";
          this.count++;
        }

        let p = {
          name: "J" + i,
          j: a
        };

        this.infoRow.push(p);
      }
    },
    lookForIndexinInfo: function(name) {
      let i = 0;
      let found = false;
      let size = this.infoAsistencia.length;

      while (i < size && !found) {
        if (name == this.infoAsistencia[i].Name) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return i;
      }
    },
    mark: function(name) {
      if (this.mode == 1) {
        let index = this.lookForIndex(name);
        let p = {};
        let index3 = index + 1;

        if (this.infoRow[index].j == "") {
          this.infoRow[index].j = "X";
          this.count++;
          eval("p.StatusJ" + index3 + ' = "YES";');
        } else {
          this.infoRow[index].j = "";
          this.count--;
          eval("p.StatusJ" + index3 + ' = "NO";');
        }

        let index2 = this.lookForIndexinInfo(this.selectedPlayer);
        let id = this.infoAsistencia[index2].id;

        fb.db
          .collection("Asistencia")
          .doc(id)
          .update(p);

        this.update();
      }
    },
    lookForIndex: function(name) {
      let i = 0;
      let found = false;
      let size = this.infoRow.length;

      while (i < size && !found) {
        if (name == this.infoRow[i].name) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return i;
      }
    },
    update: function() {
      this.infoAsistencia = [];

      fb.db.collection("Asistencia").onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === "added") {
            let t = change.doc.data();

            t.id = change.doc.id;

            this.infoAsistencia.push(t);
          }
        });
      });
    }
  },
  created: function() {
    this.playersListNames = [];

    for (let i = 0; i < info.playersList.length; i++) {
      this.playersListNames.push(info.playersList[i].playerName);
    }

    this.update();
  }
};
</script>
