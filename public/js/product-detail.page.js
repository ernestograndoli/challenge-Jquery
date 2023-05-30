import ProductsService from "./products.service.js"

import { productUrlEncode } from './utils.js'

const INTERVAL_REFRESH_MS = 5000

const updateView = (product, priceStock) => {
    console.log(document.getElementById("price"))
    document.getElementById("brand").innerHTML = product.brand
    document.getElementById("origin").innerHTML = product.origin
    document.getElementById("description").innerHTML = product.information
    document.getElementById("price").innerHTML = parseInt(priceStock.price) / 100
    document.getElementById("stock").innerHTML = priceStock.stock
}

const fetchPriceStock = async (product) => {
    const response = await ProductsService.getStockPrice(product.skus[0].code)
    const stockPrice = await response.json()

    updateView(product, stockPrice)

    setTimeout(async () => await fetchPriceStock(product), INTERVAL_REFRESH_MS)
}

const currentProductIdBrand = window.location.pathname.substring(1)

const product = ProductsService.getAll().find(i => productUrlEncode(i.id, i.brand) == currentProductIdBrand)

if (!product)
    window.location.replace("/")

fetchPriceStock(product)
