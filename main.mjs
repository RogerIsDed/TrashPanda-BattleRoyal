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
        
    },
body: JSON.stringify(myTeam),
}

let response = await fetch (regTeamURL, config);
if (response.status == 200){
    let token = await response.json();
    console.log(token);

}

