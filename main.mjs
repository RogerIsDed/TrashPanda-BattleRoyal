const baseURL = "https://batlearena.onrender.com";
const regTeamURL = `${baseURL}/teams`;
const createMatchURL =`${baseURL}/matches`;


//Post /teams

const myTeam = {
name: "TrashPandas",
members:["Alexandra","Ronja","Kjetil","Oliver","Alena"],
password: "Pandas"
}


const config = {
    method: "POST",
    headers : {
        Authentification: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHJhc2hQYW5kYXMiLCJjcmVhdGVkIjoiMjAyNi0wMy0yNFQxMTo1NDoxNi43MDdaIn0.QgRWBIfIAIgWlGtJFdTCZ2Ehr0zvd6hgb7UlBT3qJ60',
        Accept: "application/json",
        "Content-Type": "application/json",
    },
body: JSON.stringify(myTeam),
}

function register(){
    let conf = {...config};
    conf.method = "POST"
    conf.body = JSON.stringify(myTeam),


let response = await fetch (regTeamURL, conf);
if (response.status == 200){
    let matchInfo = await response.json();
    console.log(matchInfo);
}
else{
    console.error("Could not create match");
    console.error(response);
}

}

function makeMatch(){
    await makeMove(matchID,MOVE){
        let conf = ( ...config )};
        conf.method = "POST"
(response.status == 200){
    
}
    }
 
}

function joinMatch(matchID){

}

function getMatches(){
    let conf = {...config};
    conf.method = "POST"
    conf.body = "GET"
}



