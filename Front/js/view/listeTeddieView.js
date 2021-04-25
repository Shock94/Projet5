class ListTeddieView {
    render(teddiesList) {
        let conteneur  = document.getElementById('produitTeddie') //Prendre la div ou il y a l'ID
        for(var i = 0; i < teddiesList.length ; i++){
            conteneur.innerHTML += `<div class="teddie">`+
            `<div class="name">${teddiesList[i].name}</div>` +
            `<div class="price">${teddiesList[i].price/100}€</div>` +
            `<div class="imgTeddie"><a href="${teddiesList[i].imageUrl}" alt="Teddie"><img src="${teddiesList[i].imageUrl}"></a></div>` +
            `<div class="description">${teddiesList[i].description}</div>` +
            `<div class="lienTeddie"><a href="./product.html?id=${teddiesList[i]._id}"> voir plus </a></div></div>` 
        }
    }
}