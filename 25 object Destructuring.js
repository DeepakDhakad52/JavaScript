// Object destructuring
const band = {
    bandName : "led zeppelin",
    famousSong : "Staiway to heaven",
    year : 1968,
    anotherFamousSong : "kashmiri" 
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// const {bandName, famousSong} = band;
const {bandName:var1, famousSong:var2, ...restProps} = band;
console.log(var1);
console.log(restProps); //restProps is a object
