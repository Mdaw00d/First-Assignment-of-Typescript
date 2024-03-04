function showMagicians(magicianName: string[] ): void{
   
    magicianName.forEach( magics => console.log(magics));  
}

function greatMagicians(magicianName: string[] ): void{
    for(let i = 0; i < magicianName.length; i++){
    console.log('The Great '+ Magicia_nNames[i])
    // magicianName[i] = "the Great " + magicianName[i];
}
}

let Magicia_nNames = ['Harry Houdini', 'David Blaine', 'Derren Brown', 'Dynamo', 'Ricky J', 'Teller'] 
let copyOfOriginalNames = [...Magicia_nNames]

console.log('Show with modification: ')
let greatMagician = greatMagicians(copyOfOriginalNames)



// greatMagicians(magicianNames)
console.log('Show without modification: ')
showMagicians(Magicia_nNames)