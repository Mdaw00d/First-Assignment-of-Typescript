"use strict";
console.log("class1");
var guests = ['Hamza', 'Talha', 'Faiq'];
let senten = " I hope you will come to my place";
for (let i = 0; i < guests.length; i++)
    guests[2] = 'Shaffan';
var sentenz2 = " the DInner timing is 8.00 O clock.";
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i] + sentenz2);
}
guests.unshift('moiz');
guests.splice(3, 0, 'Inaya');
guests.push('Umer');
let centencz = " You are still invited to the dinner";
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i] + centencz);
}
let p1 = guests.pop();
console.log("Sorry," + p1 + " You can't come over to my place");
let p2 = guests.pop();
console.log("Sorry," + p2 + " You can't come over to my place");
let p3 = guests.pop();
console.log("Sorry," + p3 + " You can't come over to my place");
let p4 = guests.pop();
console.log("Sorry," + p4 + " You can't come over to my place");
let line = " You are still invited to the dinner";
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i] + line);
}
let no = guests.length;
console.log(no);
