import { searchTerm } from "../src/search.js";
import { log } from "../logger.js";

const PRODUCTS_PER_PAGE = 10;

const resultPage = async (searchKeyword, page) => {
    const lastCount = PRODUCTS_PER_PAGE*(page-1);
    let result = await searchTerm(searchKeyword,PRODUCTS_PER_PAGE,lastCount);
    return result;
}

const searchKeyword = "scarf";
const page = 3;
resultPage(searchKeyword, page).then(products => products.body.results.map((product)=> log(product.name.en))).catch(error => log(error));