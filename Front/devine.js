const nombreATrouver = 52;
let resultat = Number(prompt("Ecrit un nombre entre 1 et 100"))

while(resultat != nombreATrouver){
    if(resultat < nombreATrouver) {
        alert("Le nombre est plus grand !")
}   else if(resultat > nombreATrouver) {
        alert("Le nombre est plus petit !")
}
    resultat = Number(prompt("Essaie encore"))  
}
    if(resultat == nombreATrouver){
        alert("Bravo, tu as réussi !")
}