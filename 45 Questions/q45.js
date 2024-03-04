"use strict";
function CarInfo(manufacturer, modelName, ...options) {
    console.log(`Manufacturer: ` + manufacturer);
    console.log(`Model: ` + modelName);
    for (const key in options) {
        console.log(key + options[key]);
    }
}
CarInfo(' Toyota', ' Corolla', ' Black', ' Navigation', ' Dawood');
