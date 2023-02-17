
function onlyTwoCars (inventory) {
    carBMWandAudi = []
    for (let eachCar of inventory){
        if ((eachCar.car_make==="BMW") || (eachCar.car_make==="Audi")){
            carBMWandAudi.push(eachCar)
        }
    }
    console.log(carBMWandAudi)
    stringCars = JSON.stringify(carBMWandAudi)
    console.log(stringCars)
    console.log(typeof(stringCars))

}


module.exports = onlyTwoCars