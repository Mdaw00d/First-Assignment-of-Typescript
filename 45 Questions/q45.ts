function CarInfo(manufacturer: string, modelName: string, ...options: any ): void {
    console.log(`Manufacturer: ` + manufacturer);
    console.log(`Model: ` + modelName);
    for (const key in options) {
        console.log(key + options[key]);
    }
}


CarInfo(' Toyota', ' Corolla',  ' Black',  ' Navigation',' Dawood' );