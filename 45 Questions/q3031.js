"use strict";
let usernames = ['Hassan', 'Ibrahim', 'Maheen', 'Inayah', 'Admin', 'Zeeshan'];
{
    for (let i = 0; i < usernames.length; i++)
        if (usernames[i] == 'Admin')
            console.log('Hello admin would you like to see a status report?');
        else
            console.log('Hello, thank you for logging in again.');
}
usernames.length = 0;
{
    if (usernames.length === 0)
        console.log('We need to find some users');
    else
        console.log('Not empty');
}
// console.log('Welcome ' + usernames[i])
// console.log('Hello '+ usernames[4] +' would you like to see a status report?')
// console.log('Hello '+ usernames[0] +', thank you for logging in again.')
