var playersList=[
    {
        playerNumber:0,
        playerName:"Misas",
        playerDescription:"",
    },
    {
        playerNumber:2,
        playerName:"Manu",
        playerDescription:"",
    },
    {
        playerNumber:3,
        playerName:"Rafa",
        playerDescription:"",
    },
    {
        playerNumber:4,
        playerName:"Juanito",
        playerDescription:"",
    },
    {
        playerNumber:5,
        playerName:"Ziny",
        playerDescription:"",
    },
    {
        playerNumber:6,
        playerName:"Reyes",
        playerDescription:"",
    },
    {
        playerNumber:8,
        playerName:"R. Campos",
        playerDescription:"",
    },
    {
        playerNumber:9,
        playerName:"Manolo",
        playerDescription:"",
    },
    {
        playerNumber:10,
        playerName:"Lobito",
        playerDescription:"",
    },
    {
        playerNumber:11,
        playerName:"Jorge Mario",
        playerDescription:"",
    },
    {
        playerNumber:12,
        playerName:"Utrilla",
        playerDescription:"",
    },
    {
        playerNumber:13,
        playerName:"Peque",
        playerDescription:"",
    },
    {
        playerNumber:14,
        playerName:"Rodo",
        playerDescription:"",
    },
    {
        playerNumber:15,
        playerName:"Dani N.",
        playerDescription:"",
    },
    {
        playerNumber:16,
        playerName:"Sebas Br.",
        playerDescription:"",
    },
    {
        playerNumber:17,
        playerName:"Álex",
        playerDescription:"",
    },
    {
        playerNumber:18,
        playerName:"Carreto",
        playerDescription:"",
    },
    {
        playerNumber:19,
        playerName:"Isaac",
        playerDescription:"",
    },
    {
        playerNumber:20,
        playerName:"Benji",
        playerDescription:"",
    },
    {
        playerNumber:21,
        playerName:"Paco",
        playerDescription:"",
    },
    {
        playerNumber:22,
        playerName:"David N.",
        playerDescription:"",
    },
    {
        playerNumber:23,
        playerName:"Joaquín Z.",
        playerDescription:"",
    },
    {
        playerNumber:24,
        playerName:"Vargas",
        playerDescription:"",
    },
    {
        playerNumber:25,
        playerName:"David",
        playerDescription:"",
    },
    
];

var teams = [
    {
        name:"V.C.S. Troya",
        logo:"team1.png",
        lat:"41.51473296842232",
        lon:"2.1132101325321173",
        maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6444.723423604754!2d2.1090492876235447!3d41.51452198322228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a495cf74db6301%3A0xcd10081b1591cadd!2sCampo%20de%20F%C3%BAtbol%20Municipal%20Sergio%20Busquets%20Burgos!5e0!3m2!1ses!2ses!4v1592898919287!5m2!1ses!2ses"
    },
    {
        name:"V. Turó de la Peira",
        logo:"team2.png",
        lat:"41.432634",
        lon:"2.166692"
    },
    {
        name:"Can Buxeres",
        logo:"team3.png",
        lat:"41.366591",
        lon:"2.095434"
    },
    {
        name:"UD. Lourdes A",
        logo:"team4.png",
        lat:"41.554245",
        lon:"2.216818"
    },
    {
        name:"C.F. Damm",
        logo:"team5.png",
        lat:"41.442191",
        lon:"2.170314"
    },
    {
        name:"V. Gladiador",
        logo:"team6.png",
        lat:"41.412973",
        lon:"2.214562"
    },
    {
        name:"V. Lliçà de Vall",
        logo:"team7.png",
        lat:"41.588231",
        lon:"2.237750"
    },
    {
        name:"UD. Andalucía",
        logo:"team8.png",
        lat:"41.519568",
        lon:"2.130095"
    },
    {
        name:"Gornal Derbi",
        logo:"team9.png",
        lat:"41.357842",
        lon:"2.117560"
    },
    {
        name:"V. Alzamora",
        logo:"team10.png",
        lat:"41.438204",
        lon:"2.183895"
    },
    {
        name:"Esc. Ripollet",
        logo:"team11.png",
        lat:"41.499542",
        lon:"2.149221"
    },
    {
        name:"UD. Lourdes B",
        logo:"team12.png",
        lat:"41.554245",
        lon:"2.216818"
    },
    {
        name:"La Creueta",
        logo:"team13.png",
        lat:"41.507351",
        lon:"2.194417"
    },
    {
        name:"La Celeste",
        logo:"team14.png",
        lat:"41.463363",
        lon:"2.186299"
    },
    {
        name:"U. Bellvitge",
        logo:"team15.png",
        lat:"41.346803",
        lon:"2.101849"
    },
    {
        name:"V. Singuerlín",
        logo:"team16.png",
        lat:"41.454416",
        lon:"2.200734"
    },

]

var matches = [
    {
        j:1,
        day:"Domingo, 28 de Junio del 2020",
        eday:"Miércoles, 24 de Junio del 2020",
        date:"28/06/2020",
        localTeam:teams[0],
        visitanteTeam:teams[1],
    },
    {
        j:2,
        day:"Domingo, 5 de Julio del 2020",
        eday:"Miércoles, 1 de Julio del 2020",
        date:"05/07/2020",
        localTeam:teams[2],
        visitanteTeam:teams[0],
    },
    {
        j:3,
        day:"Domingo, 12 de Julio del 2020",
        eday:"Miércoles, 8 de Julio del 2020",
        date:"12/07/2020",
        localTeam:teams[0],
        visitanteTeam:teams[3],
    },
    {
        j:4,
        day:"Domingo, 19 de Julio del 2020",
        eday:"Miércoles, 15 de Julio del 2020",
        date:"19/07/2020",
        localTeam:teams[4],
        visitanteTeam:teams[0],
    },
    {
        j:5,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[5],
    },
    {
        j:6,
        day:"",
        date:"",
        localTeam:teams[6],
        visitanteTeam:teams[0],
    },
    {
        j:7,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[7],
    },
    {
        j:8,
        day:"",
        date:"",
        localTeam:teams[8],
        visitanteTeam:teams[0],
    },
    {
        j:9,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[9],
    },
    {
        j:10,
        day:"",
        date:"",
        localTeam:teams[10],
        visitanteTeam:teams[0],
    },
    {
        j:11,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[11],
    },
    {
        j:12,
        day:"",
        date:"",
        localTeam:teams[12],
        visitanteTeam:teams[0],
    },
    {
        j:13,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[13],
    },
    {
        j:14,
        day:"",
        date:"",
        localTeam:teams[14],
        visitanteTeam:teams[0],
    },
    {
        j:15,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[15],
    },
    {
        j:16,
        day:"",
        date:"",
        localTeam:teams[1],
        visitanteTeam:teams[0],
    },
    {
        j:17,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[2],
    },
    {
        j:18,
        day:"",
        date:"",
        localTeam:teams[3],
        visitanteTeam:teams[0],
    },
    {
        j:19,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[4],
    },
    {
        j:20,
        day:"",
        date:"",
        localTeam:teams[5],
        visitanteTeam:teams[0],
    },
    {
        j:21,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[6],
    },
    {
        j:22,
        day:"",
        date:"",
        localTeam:teams[7],
        visitanteTeam:teams[0],
    },
    {
        j:23,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[8],
    },
    {
        j:24,
        day:"",
        date:"",
        localTeam:teams[9],
        visitanteTeam:teams[0],
    },
    {
        j:25,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[10],
    },
    {
        j:26,
        day:"",
        date:"",
        localTeam:teams[11],
        visitanteTeam:teams[0],
    },
    {
        j:27,
        day:"",
        date:"",
        localTeam:teams[0],
        visitanteTeam:teams[12],
    },
    {
        j:28,
        day:"",
        date:"",
        localTeam:teams[13],
        visitanteTeam:teams[0],
    },
    {
        j:29,
        day:"Domingo 3 de Mayo del 2020",
        date:"3/5/2020",
        localTeam:teams[0],
        visitanteTeam:teams[14],
    },
    {
        j:30,
        day:"Domingo 10 de Mayo del 2020",
        date:"10/5/2020",
        localTeam:teams[15],
        visitanteTeam:teams[0],
    },

]

var currentInfo = {
    currentDay: "",
    currentHour: "",
    currentMatch:"",
    currentJ:"",
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
    logStatus:false,
    logNum:0,
};

export default {playersList, accounts, logInformation, teams, matches, currentInfo};