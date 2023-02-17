

function allCarYears (inventory){
    let carYears = [];

    for(let x = 0; x < inventory.length; x++){
        carYears.push(inventory[x]['car_year']);
    }
    console.log(carYears.length);
}



module.exports = allCarYears