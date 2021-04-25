var afficherTeddie = function(teddie){ //fonction pour l'intégrer dans le html
    let teddieName = document.getElementById('teddieName') //Prendre la div ou il y a l'ID
    teddieName.innerHTML += `${teddie.name}`

    let teddieImg = document.getElementById('teddieImgUrl')
    teddieImg.innerHTML += `<img src="${teddie.imageUrl}">` 

    let teddiePrice = document.getElementById('teddiePrice')
    teddiePrice.innerHTML += `${teddie.price}`

    let teddieDescription = document.getElementById('teddieDescription')
    teddieDescription.innerHTML += `${teddie.description}`
}