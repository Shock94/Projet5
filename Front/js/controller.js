class Controller{
    async showAllTeddies(){
        let teddies = await Model.get("http://localhost:3000/api/teddies") // retourne tous les teddies
        console.log(teddies)

        let listTeddieView = new ListTeddieView()
        listTeddieView.render(teddies)
    }
    
    async showTeddie(){
        let searchParams = new URLSearchParams(window.location.search) // recuperer l'id du
        let id = searchParams.get('id')
        let teddie = await Model.get("http://localhost:3000/api/teddies/"+ id) // retourne le teddie avec son id
        
        let detailTeddieView = new DetailTeddieView()
        detailTeddieView.render(teddie)
    }

    async addToCart(teddie){ // fonction ajouter les teddies dans le panier
        let panier = localStorage.getItem("panier") // recuperer le panier dans le localstorage via la clé 
        if(panier == null){ // si le panier est vide alors créer un tableau
            panier = []
        }else{
            panier = JSON.parse(panier) // convertit le JSON en valeur js
        }
        panier.push(teddie) // ajouter le teddie dans le tableau 
        localStorage.setItem("panier", JSON.stringify(panier)) // convertit les valeurs js en JSON
    }

    async order(panier){
        var order = { // créer un objet contact via le localstorage (formulaire)
            "contact": {
                "firstName" : localStorage.getItem("firstname"),
                "lastName" : localStorage.getItem("lastname"),
                "address" : localStorage.getItem("address"),
                "city" : localStorage.getItem("city"),
                "email" : localStorage.getItem("email")
            },
            "products" : panier
        }
        let command = await Model.post(order) // faire le post pour numéro de commande
        return command
    }

    async showRecapitulatif(){
        let panier = localStorage.getItem('panier') // fonction pour afficher panier
        panier = JSON.parse(panier)
        let command = await this.order(panier)
        let recapitulatifTeddieView = new RecapitulatifTeddieView()
        recapitulatifTeddieView.render(panier, command)
        localStorage.clear();   
    }
    
    async showPanier(){
        let panier = localStorage.getItem('panier') // fonction pour afficher panier
        panier = JSON.parse(panier)
        let panierTeddieView = new PanierTeddieView()
        panierTeddieView.render(panier)
    }

}

