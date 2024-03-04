"use strict";
let ordinals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinals.length; i++) {
    if (ordinals[i] === 1) {
        console.log(ordinals[0] + 'st');
    }
    else if (ordinals[i] === 2) {
        console.log(ordinals[1] + 'nd');
    }
    else if (ordinals[i] === 3) {
        console.log(ordinals[2] + 'rd');
    }
    else {
        console.log(ordinals[i] + 'th');
    }
}
