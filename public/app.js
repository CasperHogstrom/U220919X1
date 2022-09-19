console.log('Hello world!')

function firstBtn() {
    var numberBoxValue = document.getElementById('numberbox').value;
    const primeNrArray = new Array(2, 3, 5, 7 ,11);

    const outputSequence = document.getElementById('outputSeq');
    outputSequence.innerHTML = '';

    for (var i = 0; i < numberBoxValue; i++) {
        outputSequence.innerHTML += (primeNrArray[i]) + ', ';
    };
    
}

function secondBtn() {
    var numberBoxValue = document.getElementById('numberbox').value;
    const primeNrArray = new Array(2, 3, 5, 7 ,11);
    
    //Eftersom arrayen börjar på 0
    numberBoxValue -= 1;

    const outputPosition = document.getElementById('outputPos');

    outputPosition.innerHTML = (primeNrArray[numberBoxValue]);
}

function fiboBtn() {
    const numberBoxValue = document.getElementById('numberbox').value;
    const outputFibo = document.getElementById('outputFibo');
    outputFibo.innerHTML = '';

    var fibo = [1,1];

    if (numberBoxValue == 1) {
        fibo = [1];
    };

    if (numberBoxValue == 2) {
        fibo[1,1];
    };

    for (var i = 2; i < numberBoxValue; i++) {
        fibo[+i] = fibo[i-1] + fibo[i-2];
    };
    outputFibo.innerHTML = fibo;

}

function fiboBtnPos() {
    var numberBoxValue = document.getElementById('numberbox').value;
    const outputFibo = document.getElementById('outputFiboPos');
    outputFibo.innerHTML = '';

    var fibo = [1,1];

    if (numberBoxValue == 1) {
        fibo = [1];
    };

    if (numberBoxValue == 2) {
        fibo[1,1];
    };

    for (var i = 2; i < numberBoxValue; i++) {
        fibo[+i] = fibo[i-1] + fibo[i-2];
    };
    //För att se till att man inte får undefined
    numberBoxValue -= 1;

    outputFibo.innerHTML = fibo[numberBoxValue];
}