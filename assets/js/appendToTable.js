import { tableList  } from './expenseInput.js';
import { field } from './config.js';

const form = document.getElementById("input-form");
const table = document.getElementById('table-body');

export function appendToTable(arr) {
    const row = document.createElement('tr');
    const button = document.createElement('button');
    button.setAttribute('onclick', 'deleteRow(this);');
    button.textContent = '-';
    let date = arr[1].split("-").reverse().join("/"); // Converts date to dd/mm/yyyy format instead of yyyy-mm-dd
    arr[1] = date;
    arr[2] = `${field.currency}${arr[2]}`;
    table.appendChild(row);
    for (let item of arr) {
        let column = document.createElement("td");
        column.textContent = item;
        row.appendChild(column);
    }
    let deleteColumn = document.createElement('td');
    row.appendChild(deleteColumn);
    deleteColumn.appendChild(button);
    form.reset();
    tableList.length = 0; // Clear array
}