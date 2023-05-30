import products from "./products.js";

export default class {

    static getAll() {
        return products
    }

    static getStockPrice(code) {
        return fetch(`api/stockprice/${code}`)
    }
}