const baseURL = "https://batlearena.onrender.com";
const regTeamURL = `${baseURL}/teams`;


//Post /teams

const myTeam = {
"name": "TrashPandas",
"members":["Alexandra","Ronja","Kjetil","Oliver","Alena"],
"password": "Pandas"
}


const config = {
    method: "POST",
    headers : {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authentification: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHJhc2hQYW5kYXMiLCJjcmVhdGVkIjoiMjAyNi0wMy0yNFQxMTo1NDoxNi43MDdaIn0.QgRWBIfIAIgWlGtJFdTCZ2Ehr0zvd6hgb7UlBT3qJ60',
        
    },
body: JSON.stringify(myTeam),
}

let response = await fetch (regTeamURL, config);
if (response.status == 200){
    let token = await response.json();
    console.log(token);

}

