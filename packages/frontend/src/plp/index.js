import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import "../common.css";
import "@fontsource/dm-sans";

import { StockPriceApi } from '../services'

console.log("Prueba PLP", StockPriceApi.getAll());
