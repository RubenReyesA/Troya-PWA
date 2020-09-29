var playersList = [
    {
        playerNumber: 0,
        playerName: "Misas",
        playerDescription: "",
    },
    {
        playerNumber: 2,
        playerName: "Manu",
        playerDescription: "",
    },
    {
        playerNumber: 3,
        playerName: "Rafa",
        playerDescription: "",
    },
    {
        playerNumber: 4,
        playerName: "Juanito",
        playerDescription: "",
    },
    {
        playerNumber: 5,
        playerName: "Ziny",
        playerDescription: "",
    },
    {
        playerNumber: 6,
        playerName: "Reyes",
        playerDescription: "",
    },
    {
        playerNumber: 7,
        playerName: "Rodo",
        playerDescription: "",
    },
    {
        playerNumber: 8,
        playerName: "R. Campos",
        playerDescription: "",
    },
    {
        playerNumber: 9,
        playerName: "Manolo",
        playerDescription: "",
    },
    {
        playerNumber: 10,
        playerName: "Lobito",
        playerDescription: "",
    },
    {
        playerNumber: 11,
        playerName: "Jorge Mario",
        playerDescription: "",
    },
    {
        playerNumber: 12,
        playerName: "Utrilla",
        playerDescription: "",
    },
    {
        playerNumber: 13,
        playerName: "Peque",
        playerDescription: "",
    },
    {
        playerNumber: 14,
        playerName: "Jordi",
        playerDescription: "",
    },
    {
        playerNumber: 15,
        playerName: "Dani N.",
        playerDescription: "",
    },
    {
        playerNumber: 16,
        playerName: "Sebas Br.",
        playerDescription: "",
    },
    {
        playerNumber: 17,
        playerName: "Álex",
        playerDescription: "",
    },
    {
        playerNumber: 18,
        playerName: "Carreto",
        playerDescription: "",
    },
    {
        playerNumber: 19,
        playerName: "Isaac",
        playerDescription: "",
    },
    {
        playerNumber: 20,
        playerName: "Benji",
        playerDescription: "",
    },
    {
        playerNumber: 21,
        playerName: "Paco",
        playerDescription: "",
    },
    {
        playerNumber: 22,
        playerName: "David N.",
        playerDescription: "",
    },
    {
        playerNumber: 23,
        playerName: "Joaquín Z.",
        playerDescription: "",
    },
    {
        playerNumber: 24,
        playerName: "Vargas",
        playerDescription: "",
    },
    {
        playerNumber: 25,
        playerName: "David",
        playerDescription: "",
    },

];

var stadiums = [
    {
        name:"V.C.S. Troya",
        location:"Carrer del Tibidabo s/n, Badia del Vallès 08214, Barcelona",
        lat:"41.51473296842232",
        lon:"2.1132101325321173",
        
    },

]

var teams = [
    {
        name: "V.C.S. Troya",
        logo: "team1.png",
        stadium: stadiums[0],
        maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6444.723423604754!2d2.1090492876235447!3d41.51452198322228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a495cf74db6301%3A0xcd10081b1591cadd!2sCampo%20de%20F%C3%BAtbol%20Municipal%20Sergio%20Busquets%20Burgos!5e0!3m2!1ses!2ses!4v1592898919287!5m2!1ses!2ses"
    },
    {
        name: "V. Mirasol",
        logo: "team2.png",
        lat: "41.432634",
        lon: "2.166692",
        maps: "",
    },
    {
        name: "UD. Lourdes B",
        logo: "team3.png",
        lat: "41.366591",
        lon: "2.095434",
        maps: "",
    },
    {
        name: "V. Polinyà B",
        logo: "team4.png",
        lat: "41.554245",
        lon: "2.216818",
        maps: "",
    },
    {
        name: "V. Singuerlín",
        logo: "team5.png",
        lat: "41.442191",
        lon: "2.170314",
        maps: "",
    },
    {
        name: "Sabadell Nord",
        logo: "team6.png",
        lat: "41.588231",
        lon: "2.237750",
        maps: "",
    },
    {
        name: "V. Turó de la Peira",
        logo: "team7.png",
        lat: "41.519568",
        lon: "2.130095",
        maps: "",
    },
    {
        name: "La Creueta",
        logo: "team8.png",
        lat: "41.357842",
        lon: "2.117560",
        maps: "",
    },
    {
        name: "Gornal-Derbi",
        logo: "team9.png",
        lat: "41.438204",
        lon: "2.183895",
        maps: "",
    },
    {
        name: "UD. Lourdes A",
        logo: "team10.png",
        lat: "41.499542",
        lon: "2.149221",
        maps: "",
    },
    {
        name: "Sacachispas",
        logo: "team11.png",
        lat: "41.554245",
        lon: "2.216818",
        maps: "",
    },
    {
        name: "Esc. Ripollet",
        logo: "team12.png",
        lat: "41.507351",
        lon: "2.194417",
        maps: "",
    },
    {
        name: "UD. Andalucía",
        logo: "team13.png",
        lat: "41.463363",
        lon: "2.186299",
        maps: "",
    },
    {
        name: "Can Buxeres",
        logo: "team14.png",
        lat: "41.346803",
        lon: "2.101849",
        maps: "",
    },
    {
        name: "V. Gladiador",
        logo: "team15.png",
        lat: "41.454416",
        lon: "2.200734",
        maps: "",
    },
    {
        name: "V. Vilanova",
        logo: "team16.png",
        lat: "",
        lon: "",
        maps: "",
    },

]

var matches = [
    {
        j: 1,
        day: "Domingo, 4 de Octubre del 2020",
        eday: "Miércoles, 30 de Septiembre del 2020",
        date: "04/10/2020",
        localTeam: teams[0],
        visitanteTeam: teams[1],
    },
    {
        j: 2,
        day: "Domingo, 11 de Octubre del 2020",
        eday: "Miércoles, 7 de Octubre del 2020",
        date: "11/10/2020",
        localTeam: teams[2],
        visitanteTeam: teams[0],
    },
    {
        j: 3,
        day: "Domingo, 18 de Octubre del 2020",
        eday: "Miércoles, 14 de Octubre del 2020",
        date: "14/10/2020",
        localTeam: teams[0],
        visitanteTeam: teams[3],
    },
    {
        j: 4,
        day: "Domingo, 25 de Octubre del 2020",
        eday: "Miércoles, 21 de Octubre del 2020",
        date: "25/10/2020",
        localTeam: teams[15],
        visitanteTeam: teams[0],
    },
    {
        j: 5,
        day: "Domingo, 1 de Noviembre del 2020",
        eday: "Miércoles, 28 de Octubre del 2020",
        date: "01/11/2020",
        localTeam: teams[0],
        visitanteTeam: teams[4],
    },
    {
        j: 6,
        day: "Domingo, 8 de Noviembre del 2020",
        eday: "Miércoles, 4 de Noviembre del 2020",
        date: "08/11/2020",
        localTeam: teams[5],
        visitanteTeam: teams[0],
    },
    {
        j: 7,
        day: "Domingo, 15 de Noviembre del 2020",
        eday: "Miércoles, 11 de Noviembre del 2020",
        date: "15/11/2020",
        localTeam: teams[0],
        visitanteTeam: teams[6],
    },
    {
        j: 8,
        day: "Domingo, 22 de Noviembre del 2020",
        eday: "Miércoles, 18 de Noviembre del 2020",
        date: "22/11/2020",
        localTeam: teams[7],
        visitanteTeam: teams[0],
    },
    {
        j: 9,
        day: "Domingo, 29 de Noviembre del 2020",
        eday: "Miércoles, 25 de Noviembre del 2020",
        date: "29/11/2020",
        localTeam: teams[8],
        visitanteTeam: teams[0],
    },
    {
        j: 10,
        day: "Domingo, 6 de Diciembre del 2020",
        eday: "Miércoles, 2 de Diciembre del 2020",
        date: "06/12/2020",
        localTeam: teams[0],
        visitanteTeam: teams[9],
    },
    {
        j: 11,
        day: "Domingo, 13 de Diciembre del 2020",
        eday: "Miércoles, 9 de Diciembre del 2020",
        date: "13/12/2020",
        localTeam: teams[10],
        visitanteTeam: teams[0],
    },
    {
        j: 12,
        day: "Domingo, 20 de Diciembre del 2020",
        eday: "Miércoles, 16 de Diciembre del 2020",
        date: "20/12/2020",
        localTeam: teams[0],
        visitanteTeam: teams[11],
    },
    {
        j: 13,
        day: "Domingo, 10 de Enero del 2021",
        eday: "Miércoles, 6 de Enero del 2021",
        date: "10/01/2021",
        localTeam: teams[12],
        visitanteTeam: teams[0],
    },
    {
        j: 14,
        day: "Domingo, 17 de Enero del 2021",
        eday: "Miércoles, 13 de Enero del 2021",
        date: "17/01/2021",
        localTeam: teams[0],
        visitanteTeam: teams[13],
    },
    {
        j: 15,
        day: "Domingo, 24 de Enero del 2021",
        eday: "Miércoles, 20 de Enero del 2021",
        date: "24/01/2021",
        localTeam: teams[14],
        visitanteTeam: teams[0],
    },
    {
        j: 16,
        day: "Domingo, 31 de Enero del 2021",
        eday: "Miércoles, 27 de Enero del 2021",
        date: "31/01/2021",
        localTeam: teams[1],
        visitanteTeam: teams[0],
    },
    {
        j: 17,
        day: "Domingo, 7 de Febrero del 2021",
        eday: "Miércoles, 3 de Febrero del 2021",
        date: "07/02/2021",
        localTeam: teams[0],
        visitanteTeam: teams[2],
    },
    {
        j: 18,
        day: "Domingo, 14 de Febrero del 2021",
        eday: "Miércoles, 10 de Febrero del 2021",
        date: "14/02/2021",
        localTeam: teams[3],
        visitanteTeam: teams[0],
    },
    {
        j: 19,
        day: "Domingo, 21 de Febrero del 2021",
        eday: "Miércoles, 17 de Febrero del 2021",
        date: "21/02/2021",
        localTeam: teams[0],
        visitanteTeam: teams[15],
    },
    {
        j: 20,
        day: "Domingo, 28 de Febrero del 2021",
        eday: "Miércoles, 24 de Febrero del 2021",
        date: "28/02/2021",
        localTeam: teams[4],
        visitanteTeam: teams[0],
    },
    {
        j: 21,
        day: "Domingo, 7 de Marzo del 2021",
        eday: "Miércoles, 3 de Marzo del 2021",
        date: "07/03/2021",
        localTeam: teams[0],
        visitanteTeam: teams[5],
    },
    {
        j: 22,
        day: "Domingo, 14 de Marzo del 2021",
        eday: "Miércoles, 10 de Marzo del 2021",
        date: "14/03/2021",
        localTeam: teams[6],
        visitanteTeam: teams[0],
    },
    {
        j: 23,
        day: "Domingo, 21 de Marzo del 2021",
        eday: "Miércoles, 17 de Marzo del 2021",
        date: "21/03/2021",
        localTeam: teams[0],
        visitanteTeam: teams[7],
    },
    {
        j: 24,
        day: "Domingo, 28 de Marzo del 2021",
        eday: "Miércoles, 24 de Marzo del 2021",
        date: "28/03/2021",
        localTeam: teams[0],
        visitanteTeam: teams[8],
    },
    {
        j: 25,
        day: "Domingo, 11 de Abril del 2021",
        eday: "Miércoles, 31 de Marzo del 2021",
        date: "11/04/2021",
        localTeam: teams[9],
        visitanteTeam: teams[0],
    },
    {
        j: 26,
        day: "Domingo, 18 de Abril del 2021",
        eday: "Miércoles, 14 de Abril del 2021",
        date: "18/04/2021",
        localTeam: teams[0],
        visitanteTeam: teams[10],
    },
    {
        j: 27,
        day: "Domingo, 25 de Abril del 2021",
        eday: "Miércoles, 21 de Abril del 2021",
        date: "25/04/2021",
        localTeam: teams[11],
        visitanteTeam: teams[0],
    },
    {
        j: 28,
        day: "Domingo, 2 de Mayo del 2021",
        eday: "Miércoles, 28 de Abril del 2021",
        date: "02/05/2021",
        localTeam: teams[0],
        visitanteTeam: teams[12],
    },
    {
        j: 29,
        day: "Domingo, 9 de Mayo del 2021",
        eday: "Miércoles, 5 de Mayo del 2021",
        date: "09/05/2021",
        localTeam: teams[13],
        visitanteTeam: teams[0],
    },
    {
        j: 30,
        day: "Domingo, 16 de Mayo del 2021",
        eday: "Miércoles, 12 de Mayo del 2021",
        date: "16/05/2021",
        localTeam: teams[0],
        visitanteTeam: teams[14],
    },

]

var currentInfo = {
    currentDay: "",
    currentHour: "",
    currentMatch: "",
    currentJ: "",
}

var accounts = [
    {
        user: "admin",
        pass: "troya",
        mailFB: "admin1@troya.com",
        passFB: "troya0"
    },
    {
        user: "admin",
        pass: "1007",
        mailFB: "admin2@troya.com",
        passFB: "100700"
    },
    {
        user: "cuentas",
        pass: "misas",
        mailFB: "gestion@troya.com",
        passFB: "misas0"
    }
];

var logInformation = {
    logStatus: false,
    logNum: 0,
};

var jornadasText = '["Jornada 1","04/10/2020", "V.C.S. TROYA","V. Mirasol", "Esc. Ripollet","UD. Andalucía", "Sacachispas","Can Buxeres", "UD. Lourdes A","V. Gladiador", "La Creueta","UD. Lourdes B", "V. Turó - Peira","V. Polinyà B", "Sabadell Nord","V. Vilanova", "Gornal-Derbi","V. Singuerlín", "Jornada 2","11/10/2020", "UD. Lourdes B","V.C.S. TROYA", "UD. Andalucía","Gornal-Derbi", "Can Buxeres","Esc. Ripollet", "V. Gladiador","Sacachispas", "V. Mirasol","UD. Lourdes A", "V. Polinyà B","La Creueta", "V. Vilanova","V. Turó - Peira", "V. Singuerlín","Sabadell Nord", "Jornada 3","18/10/2020", "V.C.S. TROYA","V. Polinyà B", "UD. Andalucía","Can Buxeres", "Esc. Ripollet","V. Gladiador", "Sacachispas","V. Mirasol", "UD. Lourdes A","UD. Lourdes B", "La Creueta","V. Vilanova", "V. Turó - Peira","V. Singuerlín", "Gornal-Derbi","Sabadell Nord", "Jornada 4","25/10/2020", "V. Vilanova","V.C.S. TROYA", "Can Buxeres","Gornal-Derbi", "V. Gladiador","UD. Andalucía", "V. Mirasol","Esc. Ripollet", "UD. Lourdes B","Sacachispas", "V. Polinyà B","UD. Lourdes A", "V. Singuerlín","La Creueta", "Sabadell Nord","V. Turó - Peira", "Jornada 5","01/11/2020", "V.C.S. TROYA","V. Singuerlín", "Can Buxeres","V. Gladiador", "UD. Andalucía","V. Mirasol", "Esc. Ripollet","UD. Lourdes B", "Sacachispas","V. Polinyà B", "UD. Lourdes A","V. Vilanova", "La Creueta","Sabadell Nord", "Gornal-Derbi","V. Turó - Peira", "Jornada 6","08/11/2020", "Sabadell Nord","V.C.S. TROYA", "V. Gladiador","Gornal-Derbi", "V. Mirasol","Can Buxeres", "UD. Lourdes B","UD. Andalucía", "V. Polinyà B","Esc. Ripollet", "V. Vilanova","Sacachispas", "V. Singuerlín","UD. Lourdes A", "V. Turó - Peira","La Creueta", "Jornada 7","15/11/2020", "V.C.S. TROYA","V. Turó - Peira", "V. Gladiador","V. Mirasol", "Can Buxeres","UD. Lourdes B", "UD. Andalucía","V. Polinyà B", "Esc. Ripollet","V. Vilanova", "Sacachispas","V. Singuerlín", "UD. Lourdes A","Sabadell Nord", "Gornal-Derbi","La Creueta", "Jornada 8","22/11/2020", "La Creueta","V.C.S. TROYA", "V. Mirasol","Gornal-Derbi", "UD. Lourdes B","V. Gladiador", "V. Polinyà B","Can Buxeres", "V. Vilanova","UD. Andalucía", "V. Singuerlín","Esc. Ripollet", "Sabadell Nord","Sacachispas", "V. Turó - Peira","UD. Lourdes A", "Jornada 9","29/11/2020", "Gornal-Derbi","V.C.S. TROYA", "V. Mirasol","UD. Lourdes B", "V. Gladiador","V. Polinyà B", "Can Buxeres","V. Vilanova", "UD. Andalucía","V. Singuerlín", "Esc. Ripollet","Sabadell Nord", "Sacachispas","V. Turó - Peira", "UD. Lourdes A","La Creueta", "Jornada 10","06/12/2020", "V.C.S. TROYA","UD. Lourdes A", "UD. Lourdes B","Gornal-Derbi", "V. Polinyà B","V. Mirasol", "V. Vilanova","V. Gladiador", "V. Singuerlín","Can Buxeres", "Sabadell Nord","UD. Andalucía", "V. Turó - Peira","Esc. Ripollet", "La Creueta","Sacachispas", "Jornada 11","13/12/2020", "Sacachispas","V.C.S. TROYA", "UD. Lourdes B","V. Polinyà B", "V. Mirasol","V. Vilanova", "V. Gladiador","V. Singuerlín", "Can Buxeres","Sabadell Nord", "UD. Andalucía","V. Turó - Peira", "Esc. Ripollet","La Creueta", "Gornal-Derbi","UD. Lourdes A", "Jornada 12","20/12/2020", "V.C.S. TROYA","Esc. Ripollet", "V. Polinyà B","Gornal-Derbi", "V. Vilanova","UD. Lourdes B", "V. Singuerlín","V. Mirasol", "Sabadell Nord","V. Gladiador", "V. Turó - Peira","Can Buxeres", "La Creueta","UD. Andalucía", "UD. Lourdes A","Sacachispas", "Jornada 13","10/01/2021", "UD. Andalucía","V.C.S. TROYA", "V. Polinyà B","V. Vilanova", "UD. Lourdes B","V. Singuerlín", "V. Mirasol","Sabadell Nord", "V. Gladiador","V. Turó - Peira", "Can Buxeres","La Creueta", "Esc. Ripollet","UD. Lourdes A", "Sacachispas","Gornal-Derbi", "Jornada 14","17/01/2021", "V.C.S. TROYA","Can Buxeres", "Gornal-Derbi","V. Vilanova", "V. Singuerlín","V. Polinyà B", "Sabadell Nord","UD. Lourdes B", "V. Turó - Peira","V. Mirasol", "La Creueta","V. Gladiador", "UD. Lourdes A","UD. Andalucía", "Sacachispas","Esc. Ripollet", "Jornada 15","24/01/2021", "V. Gladiador","V.C.S. TROYA", "V. Vilanova","V. Singuerlín", "V. Polinyà B","Sabadell Nord", "UD. Lourdes B","V. Turó - Peira", "V. Mirasol","La Creueta", "Can Buxeres","UD. Lourdes A", "UD. Andalucía","Sacachispas", "Esc. Ripollet","Gornal-Derbi", "Jornada 16","31/01/2021", "V. Mirasol","V.C.S. TROYA", "UD. Andalucía","Esc. Ripollet", "Can Buxeres","Sacachispas", "V. Gladiador","UD. Lourdes A", "UD. Lourdes B","La Creueta", "V. Polinyà B","V. Turó - Peira", "V. Vilanova","Sabadell Nord", "V. Singuerlín","Gornal-Derbi", "Jornada 17","07/02/2021", "V.C.S. TROYA","UD. Lourdes B", "Gornal-Derbi","UD. Andalucía", "Esc. Ripollet","Can Buxeres", "Sacachispas","V. Gladiador", "UD. Lourdes A","V. Mirasol", "La Creueta","V. Polinyà B", "V. Turó - Peira","V. Vilanova", "Sabadell Nord","V. Singuerlín", "Jornada 18","14/02/2021", "V. Polinyà B","V.C.S. TROYA", "Can Buxeres","UD. Andalucía", "V. Gladiador","Esc. Ripollet", "V. Mirasol","Sacachispas", "UD. Lourdes B","UD. Lourdes A", "V. Vilanova","La Creueta", "V. Singuerlín","V. Turó - Peira", "Sabadell Nord","Gornal-Derbi", "Jornada 19","21/02/2021", "V.C.S. TROYA","V. Vilanova", "Gornal-Derbi","Can Buxeres", "UD. Andalucía","V. Gladiador", "Esc. Ripollet","V. Mirasol", "Sacachispas","UD. Lourdes B", "UD. Lourdes A","V. Polinyà B", "La Creueta","V. Singuerlín", "V. Turó - Peira","Sabadell Nord", "Jornada 20","28/02/2021", "V. Singuerlín","V.C.S. TROYA", "V. Gladiador","Can Buxeres", "V. Mirasol","UD. Andalucía", "UD. Lourdes B","Esc. Ripollet", "V. Polinyà B","Sacachispas", "V. Vilanova","UD. Lourdes A", "Sabadell Nord","La Creueta", "V. Turó - Peira","Gornal-Derbi", "Jornada 21","07/03/2021", "V.C.S. TROYA","Sabadell Nord", "Gornal-Derbi","V. Gladiador", "Can Buxeres","V. Mirasol", "UD. Andalucía","UD. Lourdes B", "Esc. Ripollet","V. Polinyà B", "Sacachispas","V. Vilanova", "UD. Lourdes A","V. Singuerlín", "La Creueta","V. Turó - Peira", "Jornada 22","14/03/2021", "V. Turó - Peira","V.C.S. TROYA", "V. Mirasol","V. Gladiador", "UD. Lourdes B","Can Buxeres", "V. Polinyà B","UD. Andalucía", "V. Vilanova","Esc. Ripollet", "V. Singuerlín","Sacachispas", "Sabadell Nord","UD. Lourdes A", "La Creueta","Gornal-Derbi", "Jornada 23","21/03/2021", "V.C.S. TROYA","La Creueta", "Gornal-Derbi","V. Mirasol", "V. Gladiador","UD. Lourdes B", "Can Buxeres","V. Polinyà B", "UD. Andalucía","V. Vilanova", "Esc. Ripollet","V. Singuerlín", "Sacachispas","Sabadell Nord", "UD. Lourdes A","V. Turó - Peira", "Jornada 24","28/03/2021", "V.C.S. TROYA","Gornal-Derbi", "UD. Lourdes B","V. Mirasol", "V. Polinyà B","V. Gladiador", "V. Vilanova","Can Buxeres", "V. Singuerlín","UD. Andalucía", "Sabadell Nord","Esc. Ripollet", "V. Turó - Peira","Sacachispas", "La Creueta","UD. Lourdes A", "Jornada 25","11/04/2021", "UD. Lourdes A","V.C.S. TROYA", "Gornal-Derbi","UD. Lourdes B", "V. Mirasol","V. Polinyà B", "V. Gladiador","V. Vilanova", "Can Buxeres","V. Singuerlín", "UD. Andalucía","Sabadell Nord", "Esc. Ripollet","V. Turó - Peira", "Sacachispas","La Creueta", "Jornada 26","18/04/2021", "V.C.S. TROYA","Sacachispas", "V. Polinyà B","UD. Lourdes B", "V. Vilanova","V. Mirasol", "V. Singuerlín","V. Gladiador", "Sabadell Nord","Can Buxeres", "V. Turó - Peira","UD. Andalucía", "La Creueta","Esc. Ripollet", "UD. Lourdes A","Gornal-Derbi", "Jornada 27","25/04/2021", "Esc. Ripollet","V.C.S. TROYA", "Gornal-Derbi","V. Polinyà B", "UD. Lourdes B","V. Vilanova", "V. Mirasol","V. Singuerlín", "V. Gladiador","Sabadell Nord", "Can Buxeres","V. Turó - Peira", "UD. Andalucía","La Creueta", "Sacachispas","UD. Lourdes A", "Jornada 28","02/05/2021", "V.C.S. TROYA","UD. Andalucía", "V. Vilanova","V. Polinyà B", "V. Singuerlín","UD. Lourdes B", "Sabadell Nord","V. Mirasol", "V. Turó - Peira","V. Gladiador", "La Creueta","Can Buxeres", "UD. Lourdes A","Esc. Ripollet", "Gornal-Derbi","Sacachispas", "Jornada 29","09/05/2021", "Can Buxeres","V.C.S. TROYA", "V. Vilanova","Gornal-Derbi", "V. Polinyà B","V. Singuerlín", "UD. Lourdes B","Sabadell Nord", "V. Mirasol","V. Turó - Peira", "V. Gladiador","La Creueta", "UD. Andalucía","UD. Lourdes A", "Esc. Ripollet","Sacachispas", "Jornada 30","16/05/2021", "V.C.S. TROYA","V. Gladiador", "V. Singuerlín","V. Vilanova", "Sabadell Nord","V. Polinyà B", "V. Turó - Peira","UD. Lourdes B", "La Creueta","V. Mirasol", "UD. Lourdes A","Can Buxeres", "Sacachispas","UD. Andalucía", "Gornal-Derbi","Esc. Ripollet"]'
export default { playersList, accounts, logInformation, teams, matches, currentInfo, jornadasText };