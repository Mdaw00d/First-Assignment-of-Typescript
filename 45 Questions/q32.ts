let people = ['maryam1', 'emaan2', 'dawood3', 'haya4', 'ismaeel5']
let newUsers = ['hania6', 'maryam1', 'dawood3', 'EMAAN2', 'farri7', 'kishmala8']
for (let i = 0; i< newUsers.length; i++)
if (people.includes(newUsers[i]))
console.log('The username you have entered is already taken.')
else 
console.log('This username is available')