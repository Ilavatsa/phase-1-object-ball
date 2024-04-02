function numPointsScored(playerName){
    let Object = gameObject()
    let playerObj = {}

    for(let teamKey in Object){

        playerObj = Object[teamKey]["players"][playerName]

    }
    return playerObj["shoe"];
};

    function teamColors(teamName) {
        let newObj = gameObject()
        for(let teamKey in newObj){
            if(teamName === newObj[teamKey]["teamName"])
            return newObj[teamKey]['colors']}
        }

    function teamNames(){
        let Obj = gameObject()
        const newTeamNames = []
        for(let teamKey in Obj){
            newTeamNames.push(Obj[teamKey]["teamName"]);
        }
            return newTeamNames;
    }
    console.log(teamNames())





    function playerNumbers(teamName){
        let myGameObject = gameObject()
        const numbersArray = []
        for(let teamKey in myGameObject){
            if(teamName === myGameObject[teamKey]['teamName']){
                let playersObj = myGameObject[teamKey]['players'];
                for(let playerKey in playersObj){
                    numbersArray.push(playersObj[playerKey]['number'])
                }
            }

        }
        return numbersArray
    }
    console.log(playerNumbers("Brooklyn Nets"));
    console.log(playerNumbers('Charlotte Hornets'));