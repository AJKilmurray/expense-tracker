import { tableNames } from "./config.js";

const firstColumn = document.getElementById('column1');
const secondColumn = document.getElementById("column2");
const thirdColumn = document.getElementById("column3"); 

firstColumn.textContent = `${tableNames.column1}`;
secondColumn.textContent = `${tableNames.column2}`;
thirdColumn.textContent = `${tableNames.column3}`;

