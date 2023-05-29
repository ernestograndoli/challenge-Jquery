import products from "./products";

const API_URL = process.env.API_URL

export default class {

    static getAll() {
        return products
    }

    static getStockPrice(code) {
        return fetch(`${API_URL}/stockprice/${code}`)
    }
}