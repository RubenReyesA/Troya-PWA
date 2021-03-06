var playersList = [
    {
        playerNumber: 0,
        playerName: "Misas",
        playerDescription: "",
    },
    {
        playerNumber: 1,
        playerName: "Manuel",
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
        playerName: "Daniel Leal",
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
        name: "V.C.S. Troya",
        location: "Carrer del Tibidabo s/n, 08214 Badia del Vallès, Barcelona",
        lat: "41.51473296842232",
        lon: "2.1132101325321173",
        place_id: "ChIJAWPbdM-VpBIR3cqRFRsIEM0",
        code: 1,

    },
    {
        name: "V. Mirasol",
        location: "Camí Sant Cugat al Papiol, 132, 08195 Sant Cugat del Vallès, Barcelona",
        lat: "41.469167",
        lon: "2.046763",
        place_id: "ChIJeU97GyKRpBIRzhmlAhoMy9A",
        code: 2,

    },
    {
        name: "UD. Lourdes B",
        location: "Camí de Can Vila, s/n, 08100, Barcelona",
        lat: "41.554186",
        lon: "2.216929",
        place_id: "ChIJJ7j69kq_pBIRNkncNCPy9wA",
        code: 3,

    },
    {
        name: "V. Polinyà B",
        location: "Passeig de Sanllehy, 08213 Polinyà, Barcelona",
        lat: "41.554686",
        lon: "2.160572",
        place_id: "ChIJV9syuse_pBIRuwWH7XDnfDk",
        code: 4,

    },
    {
        name: "V. Singuerlín",
        location: "Avinguda de l'Anselm de Riu, 15, 08924 Santa Coloma de Gramenet, Barcelona",
        lat: "41.454368",
        lon: "2.201809",
        place_id: "ChIJR2zXh_O8pBIR6qlufr4zz00",
        code:5,

    },
    {
        name: "Sabadell Nord",
        location: "Ronda de Collsalarca, 4B, 08207 Sabadell, Barcelona",
        lat: "41.568006",
        lon: "2.094452",
        place_id: "ChIJ8W7YlsSUpBIRQ9JDa07pBmQ",
        code: 6,

    },
    {
        name: "V. Turó de la Peira",
        location: "Carrer de Beret, 5, 08031, Parque del Turó de la Peira, Barcelona",
        lat: "41.432598",
        lon: "2.166699",
        place_id: "ChIJreUoyDm9pBIRXovvfQR-PMg",
        code: 7,

    },
    {
        name: "La Creueta",
        location: "Passeig del Pintor Sert, 20, 08120 La Llagosta, Barcelona",
        lat: "41.507794",
        lon: "2.194480",
        place_id: "ChIJma6JKZu-pBIReFJ7dU94a9M",
        code: 8,

    },
    {
        name: "Gornal-Derbi",
        location: "Av. Carmen Amaya, 57, 08902 L'Hospitalet de Llobregat, Barcelona",
        lat: "41.358269",
        lon: "2.117228",
        place_id: "ChIJPUISD8OYpBIRLIH03ZZ-iNU",
        code: 9,

    },
    {
        name: "UD. Lourdes A",
        location: "Camí de Can Vila, s/n, 08100, Barcelona",
        lat: "41.554186",
        lon: "2.216929",
        place_id: "ChIJJ7j69kq_pBIRNkncNCPy9wA",
        code: 10,

    },
    {
        name: "Sacachispas",
        location: "Carrer d'Oristà, 8, 08033 Barcelona",
        lat: "41.463333",
        lon: "2.186291",
        place_id: "ChIJe5eN-1S8pBIRsYA8OPnvSW0",
        code: 11,

    },
    {
        name: "Esc. Ripollet",
        location: "Carrer del Padró, 96, 08291 Ripollet, Barcelona",
        lat: "41.500865",
        lon: "2.161907",
        place_id: "ChIJ39x0ggq-pBIR2mbUMK8-UMk",
        code: 12,

    },
    {
        name: "UD. Andalucía",
        location: "Ronda de Santa Maria, 173, 08210 Barberà del Vallès, Barcelona",
        lat: "41.519572",
        lon: "2.130099",
        place_id: "ChIJ2eQ6EMKVpBIRESbzyhU6DNc",
        code: 13,

    },
    {
        name: "Can Buxeres",
        location: "Ctra. Esplugues, s/n, 08906 L'Hospitalet de Llobregat, Barcelona",
        lat: "41.366539",
        lon: "2.095440",
        place_id: "ChIJr8V3UBeZpBIRn-naN6nM-e8",
        code: 14,

    },
    {
        name: "V. Gladiador",
        location: "Carrer de Puigcerdà, 56, 08019 Barcelona",
        lat: "41.412577",
        lon: "2.214052",
        place_id: "ChIJnU1OzlGjpBIRdA6lEET6cAo",
        code: 15,

    },
    {
        name: "A.V. Pallejà",
        location: "Av. del Once de Setembre, 08780 Pallejà, Barcelona",
        lat: "41.420169",
        lon: "2.000503",
        place_id: "ChIJH3fQiqaapBIRc2bqpdf23d0",
        code: 16,

    },

]

var teams = [
    {
        name: "V.C.S. Troya",
        logo: "team1.png",
        stadium: stadiums[0],
    },
    {
        name: "V. Mirasol",
        logo: "team2.png",
        stadium: stadiums[1],
    },
    {
        name: "UD. Lourdes B",
        logo: "team3.png",
        stadium: stadiums[2],
    },
    {
        name: "V. Polinyà B",
        logo: "team4.png",
        stadium: stadiums[3],
    },
    {
        name: "V. Singuerlín",
        logo: "team5.png",
        stadium: stadiums[4],
    },
    {
        name: "Sabadell Nord",
        logo: "team6.png",
        stadium: stadiums[5],
    },
    {
        name: "V. Turó de la Peira",
        logo: "team7.png",
        stadium: stadiums[6],
    },
    {
        name: "La Creueta",
        logo: "team8.png",
        stadium: stadiums[7],
    },
    {
        name: "Gornal-Derbi",
        logo: "team9.png",
        stadium: stadiums[8],
    },
    {
        name: "UD. Lourdes A",
        logo: "team10.png",
        stadium: stadiums[9],
    },
    {
        name: "Sacachispas",
        logo: "team11.png",
        stadium: stadiums[10],
    },
    {
        name: "Esc. Ripollet",
        logo: "team12.png",
        stadium: stadiums[11],
    },
    {
        name: "UD. Andalucía",
        logo: "team13.png",
        stadium: stadiums[12],
    },
    {
        name: "Can Buxeres",
        logo: "team14.png",
        stadium: stadiums[13],
    },
    {
        name: "V. Gladiador",
        logo: "team15.png",
        stadium: stadiums[14],
    },
    {
        name: "A.V. Pallejà",
        logo: "team16.png",
        stadium: stadiums[15],
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
        day: "Domingo, 23 de Mayo del 2021",
        eday: "Miércoles, 19 de Mayo del 2021",
        date: "23/05/2021",
        localTeam: teams[0],
        visitanteTeam: teams[3],
    },
    {
        j: 4,
        day: "Domingo, 30 de Mayo del 2021",
        eday: "Miércoles, 26 de Mayo del 2021",
        date: "30/05/2021",
        localTeam: teams[15],
        visitanteTeam: teams[0],
    },
    {
        j: 5,
        day: "Domingo, 6 de Junio del 2021",
        eday: "Miércoles, 2 de Junio del 2021",
        date: "02/06/2021",
        localTeam: teams[0],
        visitanteTeam: teams[4],
    },
    {
        j: 6,
        day: "Domingo, 13 de Junio del 2021",
        eday: "Miércoles, 9 de Junio del 2021",
        date: "13/06/2021",
        localTeam: teams[5],
        visitanteTeam: teams[0],
    },
    {
        j: 7,
        day: "Domingo, 20 de Junio del 2021",
        eday: "Miércoles, 16 de Junio del 2021",
        date: "20/06/2021",
        localTeam: teams[0],
        visitanteTeam: teams[6],
    },
    {
        j: 8,
        day: "Domingo, 27 de Junio del 2021",
        eday: "Miércoles, 23 de Junio del 2021",
        date: "27/06/2021",
        localTeam: teams[7],
        visitanteTeam: teams[0],
    },
    {
        j: 9,
        day: "Domingo, 4 de Julio del 2021",
        eday: "Miércoles, 30 de Junio del 2021",
        date: "04/07/2021",
        localTeam: teams[8],
        visitanteTeam: teams[0],
    },
    {
        j: 10,
        day: "Domingo, 11 de Julio del 2021",
        eday: "Miércoles, 7 de Julio del 2021",
        date: "11/07/2021",
        localTeam: teams[0],
        visitanteTeam: teams[9],
    },
    {
        j: 11,
        day: "Domingo, 18 de Julio del 2021",
        eday: "Miércoles, 14 de Julio del 2021",
        date: "18/07/2021",
        localTeam: teams[10],
        visitanteTeam: teams[0],
    },
    {
        j: 12,
        day: "Domingo, 01 de Enero del 2021",
        eday: "Miércoles, 01 de Enero del 2021",
        date: "18/07/2021",
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

var jornadasText = '["Jornada 1","04/10/2020", "V.C.S. TROYA","V. Mirasol", "Esc. Ripollet","UD. Andalucía", "Sacachispas","Can Buxeres", "UD. Lourdes A","V. Gladiador", "La Creueta","UD. Lourdes B", "V. Turó - Peira","V. Polinyà B", "Sabadell Nord","A.V. Pallejà", "Gornal-Derbi","V. Singuerlín", "Jornada 2","11/10/2020", "UD. Lourdes B","V.C.S. TROYA", "UD. Andalucía","Gornal-Derbi", "Can Buxeres","Esc. Ripollet", "V. Gladiador","Sacachispas", "V. Mirasol","UD. Lourdes A", "V. Polinyà B","La Creueta", "A.V. Pallejà","V. Turó - Peira", "V. Singuerlín","Sabadell Nord", "Jornada 3","23/05/2021", "V.C.S. TROYA","V. Polinyà B", "UD. Andalucía","Can Buxeres", "Esc. Ripollet","V. Gladiador", "Sacachispas","V. Mirasol", "UD. Lourdes A","UD. Lourdes B", "La Creueta","A.V. Pallejà", "V. Turó - Peira","V. Singuerlín", "Gornal-Derbi","Sabadell Nord", "Jornada 4","30/05/2021", "A.V. Pallejà","V.C.S. TROYA", "Can Buxeres","Gornal-Derbi", "V. Gladiador","UD. Andalucía", "V. Mirasol","Esc. Ripollet", "UD. Lourdes B","Sacachispas", "V. Polinyà B","UD. Lourdes A", "V. Singuerlín","La Creueta", "Sabadell Nord","V. Turó - Peira", "Jornada 5","02/06/2021", "V.C.S. TROYA","V. Singuerlín", "Can Buxeres","V. Gladiador", "UD. Andalucía","V. Mirasol", "Esc. Ripollet","UD. Lourdes B", "Sacachispas","V. Polinyà B", "UD. Lourdes A","A.V. Pallejà", "La Creueta","Sabadell Nord", "Gornal-Derbi","V. Turó - Peira", "Jornada 6","13/06/2021", "Sabadell Nord","V.C.S. TROYA", "V. Gladiador","Gornal-Derbi", "V. Mirasol","Can Buxeres", "UD. Lourdes B","UD. Andalucía", "V. Polinyà B","Esc. Ripollet", "A.V. Pallejà","Sacachispas", "V. Singuerlín","UD. Lourdes A", "V. Turó - Peira","La Creueta", "Jornada 7","20/06/2021", "V.C.S. TROYA","V. Turó - Peira", "V. Gladiador","V. Mirasol", "Can Buxeres","UD. Lourdes B", "UD. Andalucía","V. Polinyà B", "Esc. Ripollet","A.V. Pallejà", "Sacachispas","V. Singuerlín", "UD. Lourdes A","Sabadell Nord", "Gornal-Derbi","La Creueta", "Jornada 8","27/06/2021", "La Creueta","V.C.S. TROYA", "V. Mirasol","Gornal-Derbi", "UD. Lourdes B","V. Gladiador", "V. Polinyà B","Can Buxeres", "A.V. Pallejà","UD. Andalucía", "V. Singuerlín","Esc. Ripollet", "Sabadell Nord","Sacachispas", "V. Turó - Peira","UD. Lourdes A", "Jornada 9","04/07/2021", "Gornal-Derbi","V.C.S. TROYA", "V. Mirasol","UD. Lourdes B", "V. Gladiador","V. Polinyà B", "Can Buxeres","A.V. Pallejà", "UD. Andalucía","V. Singuerlín", "Esc. Ripollet","Sabadell Nord", "Sacachispas","V. Turó - Peira", "UD. Lourdes A","La Creueta", "Jornada 10","11/07/2021", "V.C.S. TROYA","UD. Lourdes A", "UD. Lourdes B","Gornal-Derbi", "V. Polinyà B","V. Mirasol", "A.V. Pallejà","V. Gladiador", "V. Singuerlín","Can Buxeres", "Sabadell Nord","UD. Andalucía", "V. Turó - Peira","Esc. Ripollet", "La Creueta","Sacachispas", "Jornada 11","18/07/2021", "Sacachispas","V.C.S. TROYA", "UD. Lourdes B","V. Polinyà B", "V. Mirasol","A.V. Pallejà", "V. Gladiador","V. Singuerlín", "Can Buxeres","Sabadell Nord", "UD. Andalucía","V. Turó - Peira", "Esc. Ripollet","La Creueta", "Gornal-Derbi","UD. Lourdes A", "Jornada 12","01/01/2021", "V.C.S. TROYA","Esc. Ripollet", "V. Polinyà B","Gornal-Derbi", "A.V. Pallejà","UD. Lourdes B", "V. Singuerlín","V. Mirasol", "Sabadell Nord","V. Gladiador", "V. Turó - Peira","Can Buxeres", "La Creueta","UD. Andalucía", "UD. Lourdes A","Sacachispas", "Jornada 13","10/01/2021", "UD. Andalucía","V.C.S. TROYA", "V. Polinyà B","A.V. Pallejà", "UD. Lourdes B","V. Singuerlín", "V. Mirasol","Sabadell Nord", "V. Gladiador","V. Turó - Peira", "Can Buxeres","La Creueta", "Esc. Ripollet","UD. Lourdes A", "Sacachispas","Gornal-Derbi", "Jornada 14","17/01/2021", "V.C.S. TROYA","Can Buxeres", "Gornal-Derbi","A.V. Pallejà", "V. Singuerlín","V. Polinyà B", "Sabadell Nord","UD. Lourdes B", "V. Turó - Peira","V. Mirasol", "La Creueta","V. Gladiador", "UD. Lourdes A","UD. Andalucía", "Sacachispas","Esc. Ripollet", "Jornada 15","24/01/2021", "V. Gladiador","V.C.S. TROYA", "A.V. Pallejà","V. Singuerlín", "V. Polinyà B","Sabadell Nord", "UD. Lourdes B","V. Turó - Peira", "V. Mirasol","La Creueta", "Can Buxeres","UD. Lourdes A", "UD. Andalucía","Sacachispas", "Esc. Ripollet","Gornal-Derbi", "Jornada 16","31/01/2021", "V. Mirasol","V.C.S. TROYA", "UD. Andalucía","Esc. Ripollet", "Can Buxeres","Sacachispas", "V. Gladiador","UD. Lourdes A", "UD. Lourdes B","La Creueta", "V. Polinyà B","V. Turó - Peira", "A.V. Pallejà","Sabadell Nord", "V. Singuerlín","Gornal-Derbi", "Jornada 17","07/02/2021", "V.C.S. TROYA","UD. Lourdes B", "Gornal-Derbi","UD. Andalucía", "Esc. Ripollet","Can Buxeres", "Sacachispas","V. Gladiador", "UD. Lourdes A","V. Mirasol", "La Creueta","V. Polinyà B", "V. Turó - Peira","A.V. Pallejà", "Sabadell Nord","V. Singuerlín", "Jornada 18","14/02/2021", "V. Polinyà B","V.C.S. TROYA", "Can Buxeres","UD. Andalucía", "V. Gladiador","Esc. Ripollet", "V. Mirasol","Sacachispas", "UD. Lourdes B","UD. Lourdes A", "A.V. Pallejà","La Creueta", "V. Singuerlín","V. Turó - Peira", "Sabadell Nord","Gornal-Derbi", "Jornada 19","21/02/2021", "V.C.S. TROYA","A.V. Pallejà", "Gornal-Derbi","Can Buxeres", "UD. Andalucía","V. Gladiador", "Esc. Ripollet","V. Mirasol", "Sacachispas","UD. Lourdes B", "UD. Lourdes A","V. Polinyà B", "La Creueta","V. Singuerlín", "V. Turó - Peira","Sabadell Nord", "Jornada 20","28/02/2021", "V. Singuerlín","V.C.S. TROYA", "V. Gladiador","Can Buxeres", "V. Mirasol","UD. Andalucía", "UD. Lourdes B","Esc. Ripollet", "V. Polinyà B","Sacachispas", "A.V. Pallejà","UD. Lourdes A", "Sabadell Nord","La Creueta", "V. Turó - Peira","Gornal-Derbi", "Jornada 21","07/03/2021", "V.C.S. TROYA","Sabadell Nord", "Gornal-Derbi","V. Gladiador", "Can Buxeres","V. Mirasol", "UD. Andalucía","UD. Lourdes B", "Esc. Ripollet","V. Polinyà B", "Sacachispas","A.V. Pallejà", "UD. Lourdes A","V. Singuerlín", "La Creueta","V. Turó - Peira", "Jornada 22","14/03/2021", "V. Turó - Peira","V.C.S. TROYA", "V. Mirasol","V. Gladiador", "UD. Lourdes B","Can Buxeres", "V. Polinyà B","UD. Andalucía", "A.V. Pallejà","Esc. Ripollet", "V. Singuerlín","Sacachispas", "Sabadell Nord","UD. Lourdes A", "La Creueta","Gornal-Derbi", "Jornada 23","21/03/2021", "V.C.S. TROYA","La Creueta", "Gornal-Derbi","V. Mirasol", "V. Gladiador","UD. Lourdes B", "Can Buxeres","V. Polinyà B", "UD. Andalucía","A.V. Pallejà", "Esc. Ripollet","V. Singuerlín", "Sacachispas","Sabadell Nord", "UD. Lourdes A","V. Turó - Peira", "Jornada 24","28/03/2021", "V.C.S. TROYA","Gornal-Derbi", "UD. Lourdes B","V. Mirasol", "V. Polinyà B","V. Gladiador", "A.V. Pallejà","Can Buxeres", "V. Singuerlín","UD. Andalucía", "Sabadell Nord","Esc. Ripollet", "V. Turó - Peira","Sacachispas", "La Creueta","UD. Lourdes A", "Jornada 25","11/04/2021", "UD. Lourdes A","V.C.S. TROYA", "Gornal-Derbi","UD. Lourdes B", "V. Mirasol","V. Polinyà B", "V. Gladiador","A.V. Pallejà", "Can Buxeres","V. Singuerlín", "UD. Andalucía","Sabadell Nord", "Esc. Ripollet","V. Turó - Peira", "Sacachispas","La Creueta", "Jornada 26","18/04/2021", "V.C.S. TROYA","Sacachispas", "V. Polinyà B","UD. Lourdes B", "A.V. Pallejà","V. Mirasol", "V. Singuerlín","V. Gladiador", "Sabadell Nord","Can Buxeres", "V. Turó - Peira","UD. Andalucía", "La Creueta","Esc. Ripollet", "UD. Lourdes A","Gornal-Derbi", "Jornada 27","25/04/2021", "Esc. Ripollet","V.C.S. TROYA", "Gornal-Derbi","V. Polinyà B", "UD. Lourdes B","A.V. Pallejà", "V. Mirasol","V. Singuerlín", "V. Gladiador","Sabadell Nord", "Can Buxeres","V. Turó - Peira", "UD. Andalucía","La Creueta", "Sacachispas","UD. Lourdes A", "Jornada 28","02/05/2021", "V.C.S. TROYA","UD. Andalucía", "A.V. Pallejà","V. Polinyà B", "V. Singuerlín","UD. Lourdes B", "Sabadell Nord","V. Mirasol", "V. Turó - Peira","V. Gladiador", "La Creueta","Can Buxeres", "UD. Lourdes A","Esc. Ripollet", "Gornal-Derbi","Sacachispas", "Jornada 29","09/05/2021", "Can Buxeres","V.C.S. TROYA", "A.V. Pallejà","Gornal-Derbi", "V. Polinyà B","V. Singuerlín", "UD. Lourdes B","Sabadell Nord", "V. Mirasol","V. Turó - Peira", "V. Gladiador","La Creueta", "UD. Andalucía","UD. Lourdes A", "Esc. Ripollet","Sacachispas", "Jornada 30","16/05/2021", "V.C.S. TROYA","V. Gladiador", "V. Singuerlín","A.V. Pallejà", "Sabadell Nord","V. Polinyà B", "V. Turó - Peira","UD. Lourdes B", "La Creueta","V. Mirasol", "UD. Lourdes A","Can Buxeres", "Sacachispas","UD. Andalucía", "Gornal-Derbi","Esc. Ripollet"]'
export default { playersList, accounts, logInformation, teams, matches, currentInfo, jornadasText };