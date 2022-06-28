console.log("Hello World");

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}


const fromDollarToYen = function(valorEnDolar){
    /*  let valorEnEuro = valorEnDolar / oneEuroIs.USD
    let valorEnYen = (valorEnDolar / oneEuroIs.USD) * oneEuroIs.JPY; */
    return  (valorEnDolar / oneEuroIs.USD) * oneEuroIs.JPY;
}

const fromEuroToDollar = function(valorEnEuro){
    let valorEnDolar = valorEnEuro * oneEuroIs.USD;
    return valorEnDolar;
}

const fromYenToPound = function(valorEnYen){
    let valorEnEuro = valorEnYen / oneEuroIs.JPY;
    let valorEnPound = valorEnEuro * oneEuroIs.GBP;
    return valorEnPound;
}

/* let unPesoArs = {
    "CLP": 7.37,
    "USD":  0.0080,

}

let unPesoClp ={
    "ARS": 0.14,
    "USD": 0.0011,
}
 */


module.exports =  {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} ;

