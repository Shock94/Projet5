class DetailTeddieView {
    render(teddie) {
        let conteneur  = document.getElementById('produitTeddie') //Prendre la div ou il y a l'ID
        conteneur.innerHTML += `<div class="teddie">`+
        `<div class="name">${teddie.name}</div>` +
        `<div class="price">${teddie.price/100}€</div>` +
        `<div class="imgTeddie"><a href="${teddie.imageUrl}" alt="Teddie"><img src="${teddie.imageUrl}"></a></div>` +
        `<div class="description">${teddie.description}</div>` +
        `<div class="lienTeddie"><button id="boutton"><a href="./panier.html?id=${teddie._id}"> Ajouter au panier </a></button></div>` +
        `<div class="commande"><button id="btnCommande"><a href="./panier.html"> Aller au panier </a></div></div>`;

        let btnPanier = document.getElementById("boutton")
        btnPanier.addEventListener('click', event => {
            let controller = new Controller()
            controller.addToCart(teddie) 
            event.preventDefault(); // annuler la fonction du boutton 
        });
    }
}