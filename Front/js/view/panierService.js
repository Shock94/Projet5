class PanierService {
    static getItems() {
        const itemsAsStringInLocalStorage = window.localStorage.getItem('panier');
        const items = itemsAsStringInLocalStorage ? JSON.parse(itemsAsStringInLocalStorage) : [];

        return items;
    }

    static addItem(x) {
        const items = this.getItems().concat(x);

        localStorage.setItem("panier", JSON.stringify(items));
    }

    static removeItem(x) {
        const items = this.getItems().slice(0);
        const itemSearched = items.find(item => item.name === x.name);
        const itemSearchedIndex = itemSearched ? items.indexOf(itemSearched) : -1;

        if (itemSearchedIndex !== -1) {
            items.splice(itemSearchedIndex, 1);
            localStorage.setItem("panier", JSON.stringify(items));
        }
    }
}