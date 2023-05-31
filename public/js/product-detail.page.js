import ProductsService from "./products.service.js";
import { productUrlEncode, priceToString } from "./utils.js";

const INTERVAL_REFRESH_MS = 5000;

const getSkuView = ({ name }) => {
  const container = $("<div></div>");
  const divColumn = $("<div></div>");
  divColumn.addClass("col-4");

  const pill = $("<div></div>");
  pill.addClass("border rounded-pill text-center");

  const nameSku = $("<span></span>").text(name);
  nameSku.addClass("skuPill");

  pill.append(nameSku);
  divColumn.append(pill);
  container.append(divColumn);

  return container.html();
};

const updateView = (product, priceStock) => {
  $("#brand").html(product.brand);
  $("#origin").html(product.origin);
  $("#description").html(product.information);
  $("#price").html(priceToString(priceStock.price));
  $("#stock").html(priceStock.stock);
  $("#img").attr("src", `./img${product.image}`);
  $("#img").attr("alt", product.brand);
  $("#skusContainer").html(product.skus.map(getSkuView).join(""));
};

const fetchPriceStock = async (product) => {
  const response = await ProductsService.getStockPrice(product.skus[0].code);
  const stockPrice = await response.json();

  updateView(product, stockPrice);

  setTimeout(async () => await fetchPriceStock(product), INTERVAL_REFRESH_MS);
};

const currentProductIdBrand = window.location.pathname.substring(1);

const product = ProductsService.getAll().find(
  (i) => productUrlEncode(i.id, i.brand) == currentProductIdBrand
);

if (!product) window.location.replace("/");

fetchPriceStock(product);
