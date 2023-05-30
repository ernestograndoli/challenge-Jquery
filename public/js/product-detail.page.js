import ProductsService from "./products.service.js"

import { productUrlEncode } from './utils.js'

const INTERVAL_REFRESH_MS = 5000

const fetchPrices = async (code) => {
    const response = await ProductsService.getStockPrice(code)
    const { stock, price } = await response.json()

    console.log(stock, price)

    setTimeout(fetchPrices, INTERVAL_REFRESH_MS)
}
const currentProductIdBrand = window.location.pathname.substring(1)

const product = ProductsService.getAll().find(i => productUrlEncode(i.id, i.brand) == currentProductIdBrand)

if (!product)
    window.location.replace("/")

fetchPrices(product)
