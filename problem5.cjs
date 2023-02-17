function carYearsLessThan2000 (inventory){
    let carYears = [];

    for(let x = 0; x < inventory.length; x++){
        if (inventory[x].car_year<2000){
            carYears.push(inventory[x]['car_year'])
        }
   
    
}
console.log(carYears)
}

module.exports = carYearsLessThan2000