class CurrenncylocalStorage {
    constructor(key) {
        this.key = key;
    }
    get value() {
        return JSON.parse(localStorage.getItem(this.key));
    }
    set value(newItem) {
        localStorage.setItem(this.key, JSON.stringify(newItem));
    }
}
export let currenciesFavouriteStorage = new CurrenncylocalStorage('currenciesFavourite');
export let currenciesCounter = new CurrenncylocalStorage('currenciesCounter');
export let defaultSelectedCurrency = new CurrenncylocalStorage('defaultSelectedCurrency');

