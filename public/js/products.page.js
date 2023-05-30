import ProductsService from "./products.service.js";

const getHtmlProduct = (brand, img) => `
<div class="col-6 col-md-3">
    <div
    class="card mb-3 bg-white border-0"
    style="border-radius: 12px 12px 12px 12px"
    >
    <div class="card-header fw-bold border-0 bg-white fs-6 pb-0"
        style="border-radius: 12px 32px 12px 12px"
    >${brand}
    </div>
    <div class="card-body text-primary bg-white pt-0 pb-0">
        <img src="./img${img}" alt="${brand}" class="w-100" />
    </div>
    <div
        class="card-footer bg-white border-0 p-0"
        style="border-radius: 0px 0px 12px 12px"
    >
        <div class="row d-flex flex-row align-items-center w-100 m-0">
        <div class="col-9 p-0">
            <span class="fw-bold ps-3">$28.65</span>
        </div>
        <div class="col-3 p-0 d-flex flex-row justify-content-end">
            <div
            style="background: #ff9f24;width: 40px;height: 40px;border-radius: 8px 0px;"
            class="d-flex flex-row justify-content-center align-items-center m-0">
            <span class="fs-1 text-white">+</span>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>`;

const products = ProductsService.getAll();

console.log(products);

document.getElementById("products-container").innerHTML = products
  .map((i) => getHtmlProduct(i.brand, i.image))
  .join("");
