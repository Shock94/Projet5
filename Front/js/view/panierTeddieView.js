class PanierTeddieView {
    render(panier) {
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
        let conteneurPrix = document.getElementById('panierPrix')
        conteneurPrix.innerHTML += 
        `<form method="post" action="./recapitulatif.html">` +
        `<fieldset><legend>Information personnel</legend>` +
        `<p>Entrer vos informations pour valider votre panier</p>` +
        `<label for="firstName" id="labelFirstName">Prénom</label>` +
        `<input type="text" required id="firstName" name="firstName" pattern="[a-z]{2,20}" title="Uniquement lettre minuscule">` +
        `<label for="lastName">Nom</label>` +
        `<input type="text" required id="lastName" name="lastName" pattern="[a-z]{2,20}" title="Uniquement lettre minuscule">` +
        `<label for="address">Adresse</label>` +
        `<input type="text" required id="address" name="address">` +
        `<label for="city">Ville</label>` +
        `<input type="text" required id="city" name="city" pattern="[a-z]{2,20}" title="Uniquement lettre minuscule">` +
        `<label for="email">E-mail</label>` +
        `<input type="email" required id="email" name="email">` +
        `<div class="totalPrice">Total : ${price/100}€</div>` +
        `<div class="commande"><input type="submit" id="validerBtnCommande" value="Valider la commande"></div>` +
        `</fieldset>` +
        `</form>`;

        let validerBtn = document.getElementById('validerBtnCommande');
        validerBtn.addEventListener('click', function(event) {
            localStorage.setItem("firstname", document.getElementById("firstName").value);
            localStorage.setItem("lastname", document.getElementById("lastName").value);
            localStorage.setItem("address", document.getElementById("address").value);
            localStorage.setItem("city", document.getElementById("city").value);
            localStorage.setItem("email", document.getElementById("email").value);
        })   
    }      
}
