import { createImportContainer,importProducts,importSummary,getContainerByKey } from "../src/import.js";
import { log } from "../logger.js";

// create import container
const importContainerKey = "productImport-container";

const importContainer = await createImportContainer(importContainerKey);
log(importContainer);
// import products

importProducts().then(result => log(result)).catch(error=>log(error));

// check import summary

importSummary(importContainerKey).then(result=>log(result)).catch(error=>log(error));