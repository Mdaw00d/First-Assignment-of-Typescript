function describe_City (city: string, country: string = 'Pakistan')  : void{
    console.log(city+' is in '+country)
}
describe_City('Karachi')
describe_City('Islamabad')
describe_City('Texas', 'USA')