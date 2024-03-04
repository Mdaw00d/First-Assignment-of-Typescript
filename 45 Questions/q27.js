"use strict";
let alien_clr = 'Yellow';
{
    if (alien_clr == 'Yellow')
        console.log('player earned 10 points');
    else if (alien_clr == 'Green')
        console.log('player earned 5 points');
    else if (alien_clr == 'Red')
        console.log('player earned 15 points');
    else
        console.log();
}
{
    alien_clr = 'Red';
    {
        if (alien_clr === 'Yellow')
            console.log('player earned 10 points');
        else if (alien_clr === 'Green')
            console.log('player earned 5 points');
        else if (alien_clr === 'Red')
            console.log('player earned 15 points');
        else
            console.log();
    }
}
{
    alien_clr = 'Green';
    {
        if (alien_clr === 'Yellow')
            console.log('player earned 10 points');
        else if (alien_clr === 'Green')
            console.log('player earned 5 points');
        else if (alien_clr === 'Red')
            console.log('player earned 15 points');
        else
            console.log();
    }
}
