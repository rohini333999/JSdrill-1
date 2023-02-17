function sortCarModel(a, b) {
    const carA = a.car_model.toUpperCase(); // ignore upper and lowercase
    const carB = b.car_model.toUpperCase(); // ignore upper and lowercase
      
  // sort in an ascending order
    if (carA < carB) {
      return -1;
    }
    if (carA > carB) {
      return 1;
    }
}

module.exports = sortCarModel