class Model {

    /**
     * Cette méthode appelle une url qui retourne du JSON et retourne son contenu.
     * Pour s'en servir : let content = await Model.get("url");
     * @param {string} url 
     */
    static get(url) {
        // return Promise.resolve(
        //     { name: 'Teddie', description: 'description teddie', price: 29000 }
        // )

        return fetch(url)
            .then(function(httpBodyResponse) {
                // httpBodyResponse contient la réponse dans son entièreté, avec le header & le reste. 
                // Du coup, avec .json, on réccupère la partie "json" de la réponse, qui est ce dont
                // on a réellement besoin. 
                let response = httpBodyResponse.json();
                //console.log(response);
                return response;
            })
            .catch(function(error) {
                // gestion basique des erreurs. 
                console.log("Une erreur s'est produite :");
                console.log(error);
            })
    }
    static post(order) {
        return fetch("http://localhost:3000/api/teddies/order",{
            method : 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"}, // bon format et bien du json
            body : JSON.stringify(order)
        }).then(function(response){
            let reponse = response.json()
            console.log(reponse)
            return reponse
        })   
    }

}

