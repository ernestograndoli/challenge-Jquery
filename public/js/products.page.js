import ProductsService from "./products.service.js";
import { productUrlEncode, priceToString } from "./utils.js";

const INTERVAL_REFRESH_MS = 5000;

const getHtmlProduct = (product) => {
  const container = $("<div></div>");
  const divColumn = $("<div></div>").addClass("col-6 col-md-3");

  const card = $("<div></div>").addClass(
    "card cardRadius mb-3 bg-white border-0"
  );

  const cardHeader = $("<div></div>");
  cardHeader.text(product.brand);
  cardHeader.addClass(
    "card-header cardRadius fw-bold border-0 bg-white fs-6 pb-0"
  );

  const cardBody = $("<div></div>").addClass(
    "card-body text-primary bg-white pt-0 pb-0"
  );

  const linkCard = $("<a></a>").addClass("links");
  linkCard.attr("href", productUrlEncode(product.id, product.brand));

  const img = $("<img></img>").addClass("w-100");
  img.attr("src", `./img${product.image}`);
  img.attr("alt", `${product.brand}`);

  const cardFooter = $("<div></div>").addClass(
    "card-footer cardFooterRadius bg-white border-0 p-0"
  );

  const rowFlex = $("<div></div>").addClass(
    "row d-flex flex-row align-items-center w-100 m-0"
  );

  const rowFlexColumn9 = $("<div></div>").addClass("col-9 p-0");

  const span = $("<span></span>").addClass("fw-bold ps-3");
  span.attr("id", `price-${product.id}`);

  const rowFlexColumn3 = $("<div></div>").addClass(
    "col-3 p-0 d-flex flex-row justify-content-end"
  );

  const plusButton = $("<div></div>").addClass(
    "plusButton d-flex flex-row justify-content-center align-items-center m-0"
  );

  const spanButton = $("<span></span>").addClass("fs-1 text-white");
  spanButton.text("+");

  linkCard.append(img);
  cardBody.append(linkCard);

  card.append(cardHeader);
  card.append(cardBody);

  rowFlexColumn9.append(span);
  rowFlex.append(rowFlexColumn9);

  plusButton.append(spanButton);
  rowFlexColumn3.append(plusButton);
  rowFlex.append(rowFlexColumn3);
  cardFooter.append(rowFlex);
  card.append(cardFooter);
  divColumn.append(card);
  container.append(divColumn);

  return container.html();
};

const products = ProductsService.getAll();

const fetchPriceStock = async (product) => {
  const response = await ProductsService.getStockPrice(product.skus[0].code);
  const { price } = await response.json();

  $(`#price-${product.id}`).html(priceToString(price));

  setTimeout(async () => await fetchPriceStock(product), INTERVAL_REFRESH_MS);
};

products.forEach((i) => fetchPriceStock(i));

$("#products-container").html(products.map((i) => getHtmlProduct(i)).join(""));
