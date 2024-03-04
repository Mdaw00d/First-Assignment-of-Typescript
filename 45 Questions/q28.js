"use strict";
let men = 20;
{
    if (men < 2)
        console.log('Person is a baby');
    else if (men <= 4)
        console.log('Person is a toddler');
    else if (men <= 13)
        console.log('Person is a Kid');
    else if (men < 20)
        console.log('Person is a teenager');
    else if (men <= 60)
        console.log('Person is an adult');
    else
        console.log('Person is an elder');
}
