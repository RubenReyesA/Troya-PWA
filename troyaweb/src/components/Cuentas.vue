<template>
  <div class="accounts">
    <div class="try">
      <v-row justify="center">
        <v-dialog v-model="showEditTotal" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Opciones para editar</v-card-title>
            <v-card-text>¿Qué quieres editar?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="editOptions(0)">Saldo total</v-btn>
              <v-btn color="green darken-1" text @click="editOptions(1)">Lista de ítems</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-row justify="center">
        <v-dialog v-model="showDialog" persistent max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{dialogInfo.title}}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" :style="dialogInfo.showSelector">
                    <v-select
                      v-model="selector"
                      :label="dialogInfo.selectorTitle"
                      :items="dialogInfo.selectorItems"
                    ></v-select>
                  </v-col>

                  <v-col cols="12" :style="dialogInfo.showInput3">
                    <v-dialog
                      ref="dialog"
                      v-model="showDatePicker"
                      :return-value.sync="dialogInfo.input3"
                      persistent
                      width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="computedDateFormatted"
                          :label="dialogInfo.label3"
                          required
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="dialogInfo.input3"
                        color="green lighten-1"
                        scrollable
                        :first-day-of-week="1"
                        locale="es-es"
                        elevation="15"
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="showDatePicker = false">Cancelar</v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.dialog.save(dialogInfo.input3)"
                        >Aceptar</v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>

                  <v-col cols="12" :style="dialogInfo.showInput1">
                    <v-text-field
                      :disabled="dialogInfo.input1disabled"
                      v-model="dialogInfo.input1"
                      :label="dialogInfo.label1"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" :style="dialogInfo.showInput2">
                    <v-text-field
                      :disabled="dialogInfo.input2disabled"
                      v-model="dialogInfo.input2"
                      :label="dialogInfo.label2"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <v-alert v-model="dialogInfo.showError" type="error">{{dialogInfo.errorText}}</v-alert>
              <v-alert v-model="dialogInfo.showSuccess" type="success">{{dialogInfo.successText}}</v-alert>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
              <v-btn
                color="blue darken-1"
                :disabled="dialogInfo.btnDisabled"
                text
                @click="dialogInfo.FBfunction"
              >{{dialogInfo.btnText}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>

      <v-simple-table style="width: 85vw">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Concepto</th>
              <th class="text-center">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.concept">
              <td style="text-align:center">{{ item.concept }}</td>
              <td style="text-align:center">{{ item.price }} €</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-card id="saldoCard">
        <h4>Saldo total: {{infoSaldo.total}} €</h4>
        <v-divider style="margin:5px;"></v-divider>
        <h6>{{infoSaldo.date}}</h6>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import fb from "@/fb";

export default {
  props: ["mode"],
  data: function() {
    return {
      showDatePicker: false,
      datePicker: null,
      infoSaldo: {
        id: null,
        date: null,
        total: ""
      },
      items: [],
      status: null,
      showDialog: false,
      showEditTotal: false,
      selector: "",
      dialogInfo: {
        title: "",
        input1disabled: true,
        input2disabled: true,
        input1: "",
        input2: "",
        input3: "",
        label1: "",
        label2: "",
        label3: "",
        selectorTitle: "",
        selectorItems: [],
        errorText: "",
        successText: "",
        showError: false,
        showSuccess: false,
        showSelector: "display:none",
        showInput1: "display:block",
        showInput2: "display:block",
        showInput3: "display:none",
        btnText: "",
        FBfunction: "null"
      }
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.dialogInfo.input3);
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    openEdit: function() {
      this.showEditTotal = true;
    },
    editSaldo: function() {
      this.showDialog = true;
      this.showDatePicker = false;

      this.dialogInfo.title = "Editar Saldo Total";
      this.dialogInfo.label2 = "Total";
      this.dialogInfo.errorText = "Falta algún campo por rellenar";
      this.dialogInfo.successText = "Saldo editado con éxito";
      this.dialogInfo.btnText = "Editar";
      this.dialogInfo.btnDisabled = false;
      this.dialogInfo.input2disabled = false;
      this.dialogInfo.showInput1 = "display:none";
      this.dialogInfo.showInput2 = "display:block";
      this.dialogInfo.showInput3 = "display:block";

      this.dialogInfo.input3 = "";
      this.dialogInfo.label3 = "Fecha";

      this.dialogInfo.FBfunction = () => {
        if (this.dialogInfo.input3 == "" || this.dialogInfo.input2 == "") {
          this.dialogInfo.showError = true;
        } else {
          fb.db
            .collection("Accounts")
            .doc(this.infoSaldo.id)
            .update({
              date: this.formatDate(this.dialogInfo.input3),
              total: this.dialogInfo.input2
            });

          this.dialogInfo.showSuccess = true;

          setTimeout(this.close, 2000);
        }
      };
    },
    editOptions: function(id) {
      this.showEditTotal = false;
      if (id == 0) {
        this.editSaldo();
      } else if (id == 1) {
        this.editItem();
      }
    },
    updateSite: function() {
      this.$router.push("/accounts");
    },
    addItem: function() {
      this.showDialog = true;

      this.dialogInfo.title = "Añadir Item";
      this.dialogInfo.label1 = "Concepto";
      this.dialogInfo.label2 = "Precio";
      this.dialogInfo.errorText = "Falta algún campo por rellenar";
      this.dialogInfo.successText = "Item añadido con éxito";
      this.dialogInfo.btnText = "Añadir";
      this.dialogInfo.btnDisabled = false;
      this.dialogInfo.input1disabled = false;
      this.dialogInfo.input2disabled = false;
      this.dialogInfo.showInput1 = "display:block";
      this.dialogInfo.showInput2 = "display:block";

      this.dialogInfo.FBfunction = () => {
        this.dialogInfo.showError = false;
        this.dialogInfo.showSuccess = false;

        if (this.dialogInfo.input1 == "" || this.dialogInfo.input2 == "") {
          this.dialogInfo.showError = true;
        } else {
          let p = {
            Concepto: this.dialogInfo.input1,
            Precio: this.dialogInfo.input2,
            type: 1
          };
          fb.db.collection("Accounts").add(p);

          this.dialogInfo.showSuccess = true;

          setTimeout(this.close, 2000);
        }
      };
    },
    editItem: function() {
      this.showDialog = true;
      this.dialogInfo.title = "Editar Item";
      this.dialogInfo.input1disabled = true;
      this.dialogInfo.input2disabled = true;
      this.dialogInfo.btnDisabled = true;
      this.dialogInfo.showSelector = true;
      this.dialogInfo.label1 = "Nuevo concepto (vacio no se modifica)";
      this.dialogInfo.label2 = "Nuevo precio (vacio no se modifica)";
      this.dialogInfo.selectorTitle = "Escoger concepto";
      this.dialogInfo.errorText = "Falta algún campo por rellenar";
      this.dialogInfo.successText = "Item editado con éxito";
      this.dialogInfo.btnText = "Editar";
      this.dialogInfo.showInput1 = "display:block";
      this.dialogInfo.showInput2 = "display:block";

      this.dialogInfo.selectorItems = [];

      for (let i = 0; i < this.items.length; i++) {
        this.dialogInfo.selectorItems.push(this.items[i].concept);
      }

      this.dialogInfo.FBfunction = () => {
        this.dialogInfo.showError = false;

        if (this.dialogInfo.input1 == "" && this.dialogInfo.input2 == "") {
          this.dialogInfo.showError = true;
        } else {
          if (this.dialogInfo.input1 == "") {
            this.dialogInfo.input1 = this.selector;
          }
          if (this.dialogInfo.input2 == "") {
            this.dialogInfo.input2 = this.lookforPrice(this.selector);
          }

          let id = this.lookforID(this.selector);

          fb.db
            .collection("Accounts")
            .doc(id)
            .delete();

          let p = {
            Concepto: this.dialogInfo.input1,
            Precio: this.dialogInfo.input2,
            type: 1
          };

          fb.db.collection("Accounts").add(p);

          this.dialogInfo.showSuccess = true;

          setTimeout(this.close, 2000);
        }
      };
    },
    deleteItem: function() {
      this.showDialog = true;

      this.dialogInfo.title = "Eliminar Item";
      this.dialogInfo.errorText = "Falta algún campo por rellenar";
      this.dialogInfo.successText = "Item eliminado con éxito";
      this.dialogInfo.btnText = "Eliminar";

      this.dialogInfo.showSelector = true;
      this.dialogInfo.selectorTitle = "Escoger concepto";

      this.dialogInfo.showInput1 = "display:none";
      this.dialogInfo.showInput2 = "display:none";

      this.dialogInfo.selectorItems = [];

      for (let i = 0; i < this.items.length; i++) {
        this.dialogInfo.selectorItems.push(this.items[i].concept);
      }

      this.dialogInfo.FBfunction = () => {
        let id = this.lookforID(this.selector);

        fb.db
          .collection("Accounts")
          .doc(id)
          .delete();

        this.dialogInfo.showSuccess = true;

        setTimeout(this.close, 2000);
      };
    },
    close: function() {
      this.update();
      this.$emit('finish');
      this.showDialog = false;
      this.dialogInfo.title = "";
      this.dialogInfo.input1disabled = true;
      this.dialogInfo.input2disabled = true;
      this.dialogInfo.input1 = "";
      this.dialogInfo.input2 = "";
      this.dialogInfo.label1 = "";
      this.dialogInfo.label2 = "";
      this.dialogInfo.selectorTitle = "";
      this.dialogInfo.selectorItems = [];
      this.dialogInfo.errorText = "";
      this.dialogInfo.successText = "";
      this.dialogInfo.showError = false;
      this.dialogInfo.showSuccess = false;
      this.dialogInfo.showSelector = "display:none";
      this.dialogInfo.showInput1 = "display:block";
      this.dialogInfo.showInput2 = "display:block";
      this.dialogInfo.showInput3 = "display:none";
      this.dialogInfo.btnText = "";
      this.dialogInfo.FBfunction = "null";
      this.selector = "";
    },
    update: function() {
      this.items = [];
      this.infoSaldo.date = null;
      this.infoSaldo.total = null;
      this.infoSaldo.id = null;

      fb.db.collection("Accounts").onSnapshot(res => {
        const changes = res.docChanges();

        changes.forEach(change => {
          if (change.type === "added") {
            let t = change.doc.data();

            if (t.type == 1) {
              let p = {
                id: change.doc.id,
                concept: t.Concepto,
                price: t.Precio
              };

              this.items.push(p);
            } else if (t.type == 0) {
              this.infoSaldo.date = t.date;
              this.infoSaldo.total = t.total;
              this.infoSaldo.id = change.doc.id;
            }
          }
        });
      });
    },
    lookforID: function(concept) {
      let i = 0;
      let size = this.items.length;
      let found = false;

      while (i < size && !found) {
        if (this.items[i].concept == concept) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return this.items[i].id;
      }
    },
    lookforPrice: function(concept) {
      let i = 0;
      let size = this.items.length;
      let found = false;

      while (i < size && !found) {
        if (this.items[i].concept == concept) {
          found = true;
        } else {
          i++;
        }
      }

      if (found) {
        return this.items[i].price;
      }
    }
  },
  watch: {
    selector: function() {
      if (this.selector == "") {
        this.dialogInfo.input1disabled = true;
        this.dialogInfo.input2disabled = true;
        this.dialogInfo.btnDisabled = true;
      } else {
        this.dialogInfo.input1disabled = false;
        this.dialogInfo.input2disabled = false;
        this.dialogInfo.btnDisabled = false;
      }
    },
    mode: function() {
      if (this.mode == 1) {
        this.addItem();
      }
      if (this.mode == 2) {
        this.openEdit();
      }
      if (this.mode == 3) {
        this.deleteItem();
      }
    }
  },
  created: function() {
    this.update();
  }
};
</script>
