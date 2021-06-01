import { field } from './config.js';

export function invalidInput(e) {
    e.style.backgroundColor = `${field.errorColor}`; // Change errorColor in config.js
    setTimeout(() => {
        e.style.backgroundColor = `${field.defaultColor}`; // Change defaultColor in config.js
    }, 3000); 
}
