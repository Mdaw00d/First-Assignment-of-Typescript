function BBQ(...BBQItems: string[]) : void{
    BBQItems.forEach(Item => console.log(' -'+ Item))
    }
    console.log('Regular Sandwich')
    BBQ('Iceberg', 'Pattie', 'Lettuce')
    console.log('Tikka Sandwich')
    BBQ('Mayo', 'Tikka', 'Garlic Sauce')
    console.log('Turkey Sandwich')
    BBQ('Turkey', 'Swiss Cheese')