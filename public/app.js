console.log('Hello world!')

function firstBtn() {
    var numberBoxValue = document.getElementById('numberbox').value;
    const primeNrArray = new Array(2, 3, 5, 7 ,11);

    //Eftersom arrayen börjar på 0
    //numberBoxValue -= 1;

    for (var i = 0; i < numberBoxValue; i++) {
        console.log(primeNrArray[i]);
    }
    
}

function secondBtn() {
    var numberBoxValue = document.getElementById('numberbox').value;
    const primeNrArray = new Array(2, 3, 5, 7 ,11);
    
    //Eftersom arrayen börjar på 0
    numberBoxValue -= 1;

    console.log(primeNrArray[numberBoxValue]);
}