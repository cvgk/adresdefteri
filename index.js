   var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.floor((Math.random()*12)+1);
    if(computerChoice>=0&&computerChoice<=4) {
       computerChoice = "rock";}
       else if(computerChoice>4&&computerChoice<=8) {
       computerChoice ="scissors"; }
       else {
       computerChoice ="paper";
       }
     if(computerChoice=="rock") { 
        if(userChoice=="rock") {
           alert("tie");
        }else if(userChoice=="paper") {
           alert("paper wins");
        }else{
           alert("rock wins");
        }
     }
     if(computerChoice=="scissors") {
       if(userChoice=="scissors"){
           alert("tie");
       }else if(userChoice=="paper") {
           alert("scissors win");
       }else{
          alert("rock wins");
       }
     }
     if(computerChoice=="paper") {
        if(userChoice=="paper") {
           alert("tie");
        }else if(userChoice=="rock") {
           alert("paper wins");
        }else{
           alert("scissors wins");
        }
     }