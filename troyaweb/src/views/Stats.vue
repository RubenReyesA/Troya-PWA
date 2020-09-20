<template>
  <div class="stats">
    <v-toolbar class="toolbarPage teal lighten-4 black--text">
      <v-spacer></v-spacer>

      <v-toolbar-title>Estadísticas</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="openEdit" class="black--text" :disabled="!status1">
        <v-icon>{{icon}}</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="try">
      <v-row justify="center">
        <v-dialog v-model="showEditTotal" max-width="290">
          <v-card>
            <v-card-title class="headline">Opciones para editar</v-card-title>
            <v-card-text>¿Qué quieres editar?</v-card-text>
            <v-spacer></v-spacer>
            <div class="centeredColumn">
              <v-btn
                class="statsBtn"
                color="green darken-1"
                text
                @click="editOptions(0)"
              >Añadir Goles</v-btn>
              <v-btn
                class="statsBtn"
                color="green darken-1"
                text
                @click="editOptions(1)"
              >Eliminar Goles</v-btn>
              <v-btn
                class="statsBtn"
                color="green darken-1"
                text
                @click="editOptions(2)"
              >Añadir Amarillas</v-btn>
              <v-btn
                class="statsBtn"
                color="green darken-1"
                text
                @click="editOptions(3)"
              >Eliminar Amarillas</v-btn>
              <v-btn
                class="statsBtn"
                color="green darken-1"
                text
                @click="editOptions(4)"
              >Añadir Rojas</v-btn>
              <v-btn
                class="statsBtn"
                color="green darken-1"
                text
                @click="editOptions(5)"
              >Eliminar Rojas</v-btn>
            </div>
          </v-card>
        </v-dialog>
      </v-row>
    </div>

    <v-card style="width: 400px" class="hidden-md-and-up">
      <v-card-title>
        <v-text-field
          v-model="statsSearch"
          append-icon="mdi-magnify"
          label="Buscar jugador"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        hide-default-footer
        mobile-breakpoint="0"
        :headers="statsHeaders"
        :items="statsTable"
        :search="statsSearch"
        @click:row="update"
        :sort-by="['playerNum']"
        :sort-desc="[false]"
        :footer-props="{'items-per-page-options':[-1]}"
      ></v-data-table>
    </v-card>

    <v-card style="width: 1000px" class="hidden-sm-and-down">
      <v-card-title>
        <v-text-field
          v-model="statsSearch"
          append-icon="mdi-magnify"
          label="Buscar jugador"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        hide-default-footer
        mobile-breakpoint="0"
        :headers="statsHeaders"
        :items="statsTable"
        @click:row="update"
        :search="statsSearch"
        :sort-by="['playerNum']"
        :sort-desc="[false]"
        :footer-props="{'items-per-page-options':[-1]}"
      ></v-data-table>
    </v-card>

    <p id="updateStatsText">Actualizado a: {{dateStats}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

import fb from "@/fb";
import info from "@/information";

export default {
    mounted: function(){
    if(info.logInformation.logStatus && 
    (info.logInformation.logNum == 2 || info.logInformation.logNum == 3)){
      this.status1 = true;
    }
    else{
      this.status1 = false;
    }
  },
  data: function() {
    return {
      showEditTotal: false,
      dateStats: null,
      editMode: -1,
      icon: "mdi-pencil",
      status1: true,
      statsSearch: "",
      statsHeaders: [
        { text: "Num", value: "playerNum", align: "start", sortable: false },
        {
          text: "Jugador",
          sortable: false,
          value: "playerName"
        },
        { text: "Goles", value: "goalsPlayer" },
        { text: "Amarillas", value: "yellowCardPlayer" },
        { text: "Rojas", value: "redCardPlayer" }
      ],
      statsTable: []
    };
  },
  methods: {
    updateStats: function(a) {
      let obj = {
        playerNum: a.playerNum,
        playerName: a.playerName,
        goalsPlayer: a.goalsPlayer,
        yellowCardPlayer: a.yellowCardPlayer,
        redCardPlayer: a.redCardPlayer
      };

      fb.db
        .collection("Stats")
        .doc(a.id)
        .update(obj);
    },
    openEdit: function() {
      if (this.icon != "mdi-pencil-off") {
        this.showEditTotal = true;
      } else {
        this.editMode = -1;
        this.icon = "mdi-pencil";
      }
    },
    editOptions: function(id) {
      this.editMode = id;
      this.showEditTotal = false;
      this.icon = "mdi-pencil-off";
    },
    update: function(value) {
      if (this.editMode != -1) {
        switch (this.editMode) {
          case 0: // Añadir Goles
            if (value.goalsPlayer == "-") {
              value.goalsPlayer = 0;
            }
            value.goalsPlayer += 1;

            this.updateStats(value);

            break;
          case 1: // Eliminar Goles
            if (value.goalsPlayer != "-") {
              value.goalsPlayer -= 1;
              if (value.goalsPlayer == 0) {
                value.goalsPlayer = "-";
              }
              this.updateStats(value);
            }
            break;
          case 2: // Añadir Amarillas
            if (value.yellowCardPlayer == "-") {
              value.yellowCardPlayer = 0;
            }
            value.yellowCardPlayer += 1;

            this.updateStats(value);
            break;
          case 3: // Eliminar Amarillas
            if (value.yellowCardPlayer != "-") {
              value.yellowCardPlayer -= 1;
              if (value.yellowCardPlayer == 0) {
                value.yellowCardPlayer = "-";
              }
              this.updateStats(value);
            }
            break;
          case 4: // Añadir Rojas
            if (value.redCardPlayer == "-") {
              value.redCardPlayer = 0;
            }
            value.redCardPlayer += 1;

            this.updateStats(value);
            break;
          case 5: // Eliminar Rojas
            if (value.redCardPlayer != "-") {
              value.redCardPlayer -= 1;
              if (value.redCardPlayer == 0) {
                value.redCardPlayer = "-";
              }
              this.updateStats(value);
            }
            break;

          default:
            break;
        }
      }
    },
    searchPlayer: function(id) {
      let found = false;
      let i = 0;
      let size = info.playersList.length;
      let name = "No disponible";

      while (i < size && !found) {
        if (info.playersList[i].playerNumber == id) {
          found = true;
          name = info.playersList[i].playerName;
        } else {
          i++;
        }
      }

      return name;
    }
  },
  created: function() {
    this.dateStats = new Date().toLocaleString("en-GB");

    fb.db.collection("Stats").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          let t = change.doc.data();
          let name = this.searchPlayer(t.playerNum);
          let obj = {
            playerNum: t.playerNum,
            playerName: name,
            goalsPlayer: t.goalsPlayer,
            yellowCardPlayer: t.yellowCardPlayer,
            redCardPlayer: t.redCardPlayer,
            id: change.doc.id
          };

          if (name != "No disponible") {
            this.statsTable.push(obj);
          }
        }
      });
    });
  }
};
</script>
