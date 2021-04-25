class RecapitulatifTeddieView {
    render(panier, command) {
        let conteneur  = document.getElementById('produitTeddie') //Prendre la div ou il y a l'ID
        console.log(panier)
        let price = 0;
            for(var i = 0; i < panier.length ; i++){
                price = price + panier[i].price
                conteneur.innerHTML += 
                    `<div class="teddie">`+
                    `<div class="name">${panier[i].name}</div>` +
                    `<div class="price">${panier[i].price/100}€</div>` +
                    `<div class="imgTeddie"><a href="${panier[i].imageUrl}" alt="Teddie"><img src="${panier[i].imageUrl}"></a></div>` +
                    `<div class="description">${panier[i].description}</div>` +
                    `</div>`;
        }
        let conteneurCommande  = document.getElementById('nCommande');
        conteneurCommande.innerHTML += 
        `<div class="totalPriceCommande">Prix total : ${price/100}€</div>` +
        `Voici votre numéro de commande : ` +
        command.orderId +
        `<div class ="recapCommande"> Le récapitulatif de votre commande : </div>`;
    }
}