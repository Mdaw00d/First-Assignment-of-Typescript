"use strict";
// const makeShirt = new Function('size', 'message') 
// makeShirt('Small', 'Chal chai peete hain')
// question number 36 and 37
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log('You have ordered a ' + size + ' shirt with the message: ' + message);
}
make_shirt();
make_shirt('Medium');
make_shirt('XXXL', 'Hello World!');
