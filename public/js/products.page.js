import ProductsService from "./products.service.js";
import { productUrlEncode } from "./utils.js";

const getHtmlProduct = (product) => `
<div class="col-6 col-md-3">
    
        <div
        class="card mb-3 bg-white border-0"
        style="border-radius: 12px 12px 12px 12px"
        >
            <div class="card-header fw-bold border-0 bg-white fs-6 pb-0"
                style="border-radius: 12px 32px 12px 12px"
            >${product.brand}
            </div>
            <div class="card-body text-primary bg-white pt-0 pb-0">
            <a href="${productUrlEncode(
              product.id,
              product.brand
            )}" style="text-decoration: none; color: inherit">
                <img src="./img${product.image}" alt="${
  product.brand
}" class="w-100" />
</a>
            </div>            
            <div
                class="card-footer bg-white border-0 p-0"
                style="border-radius: 0px 0px 12px 12px"
            >
                <div class="row d-flex flex-row align-items-center w-100 m-0">
                    <div class="col-9 p-0">
                        <span class="fw-bold ps-3">$${parseInt(
                          product.price / 100
                        )}</span>
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
  .map((i) => getHtmlProduct(i))
  .join("");
