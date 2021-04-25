let phrase ="Le deuxième mot de cette phrase va être inversé.";
let motInverse ="";
let tableau = [];
let mot = "";

for(let i = 0; i < phrase.length; i++){
    let lettre = phrase[i]

    if(lettre === " " || lettre === ".") {
        tableau.push(mot)
        mot = ""
    } else {
        mot = mot + lettre
    }   
    console.log(tableau[1])
}

for(let n = 0; n < tableau[1].length; n++){
    motInverse = tableau[1][n] + motInverse
}

tableau[1] = motInverse
console.log(tableau)

let aprec = function(note){
    if(note >= 0 && note < 7){
        console.log("Hideux")
    } else if(note >= 7 && note < 10){
        console.log("Moche")
    } else if(note >= 10 && note < 15){
        console.log("Hideux")
    } else if(note >= 15 && note <= 20){
        console.log("GG")
    } else if(note < 0 && note > 20) {
        console.log("BUG")
    }
        
}

aprec(15)

let puissance = function(a, b){
    let compteur = 0;
    let resultat = 0;
    for(let i = 0; i < b; i++){
        compteur = b;
        if(compteur != b){
            resultat = a * a
        } else 
            return resultat 
    }
}


let puissance1 = function(a,b){
    let resultat = 1;
    for(let i = 0; i < b; i++){
        resultat = resultat * a
    }   
        console.log(resultat)
}
puissance1(2,4)


let testVariable = 42;
console.log(Number)
console.log(testVariable.length)
console.log(typeof(testVariable))
if(typeof(testVariable) == "number"){
    console.log("-9999999")
}



let tab = [5,9,13,1,1000000000,0,4,5];

for(let i = 0; i < tab.length ; i++){
    for(let n = 0; n < tab.length ; n++){
        if(tab[n]  > tab[n+1]){
            [tab[n] , tab[n+1]] = [tab[n+1] , tab[n]]
        }
    }
}

console.log(tab)


let initXY = function(x,y){
    var posX = [];
    var posY = [];
    var ajout = 0;
    var ajout1 = 0;

    for(let i = 0; i < x; i++){
        ajout = ajout + 40;
        posX.push(ajout);
        console.log(posX);
    }
    for(let n = 0; n < y; n++){
        ajout1 = ajout1 + 30;
        posY.push(ajout1);
        console.log(posY);
    }
}

initXY(4,5)


let sortNumbers = function(tInit, tInf, tSup){
    for(let i = 0; i < tInit.length; i++){
        if(tInit[i] < 10){
            tInf.push(tInit[i]);
        } else if(tInit >= 10){
            tSup.push(tInit[i]);
        }
    }
}