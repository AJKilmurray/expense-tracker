import { appendToTable } from './appendToTable.js';
import { invalidInput } from './invalidFieldInput.js';

const inputName = document.getElementById('input-name');
const inputDate = document.getElementById('input-date');
const inputAmount = document.getElementById("input-amount");
const inputButton = document.getElementById("input-submit");

inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    validateInput(e);
});

// Validate Form Input
export let tableList = [];
function validateInput() {
    const arr = [inputName, inputDate, inputAmount];
    for (let item of arr) {
        if (item.value.length > 0) {
            tableList.push(item.value);
        } else if (!item.value.length) {
            tableList = [];
            return invalidInput(item);
        }
    }
    appendToTable(tableList);
}