const {sum,fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app');

test('adds 14 + 9 to equal 23',() =>{
    let total = sum(14,9);
    expect(total).toBe(23);
});

test('pasar 1 dolar a yen', () =>{
    let total = fromDollarToYen(2.4);
    expect (total).toBe(255.8);
});

test('pasar 1 euro a dolar', () =>{
    let total = fromEuroToDollar(1)
    expect (total).toBe(1.2);
});

test('pasar 1 yen a pound', () =>{
    let total = fromYenToPound(127.9)
    expect (total).toBe(0.8);
})