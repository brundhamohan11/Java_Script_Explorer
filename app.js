let element = document.getElementById("result");
let input = document.getElementById("arrayinput");

function sortArray() {
    let value = input.value.split(" ").map(Number);
    value.sort(function(a, b) { return a - b; });
    element.innerHTML = value.join(" ");
}

function reverseArray() {
    let value = input.value.split(" ").map(Number);
    element.innerHTML = value.reverse().join(" ");
}

function findEven() {
    let number = input.value.split(" ").map(Number);
    const even = number.filter((num) => num % 2 === 0);
    element.innerHTML = "Even: " + even.join(" ");
}

function findOdd() {
    let number = input.value.split(" ").map(Number);
    const odd = number.filter((num) => num % 2 !== 0);
    element.innerHTML = "Odd: " + odd.join(" ");
}

function findMax() {
    let num = input.value.split(" ").map(Number); 
    let max = num[0];
    for (let i = 1; i < num.length; i++) { 
        if (max < num[i]) {
            max = num[i];
        }
    }
    element.innerHTML = "Max: " + max;
}

function findMin() {
    let num = input.value.split(" ").map(Number); 
    let min = num[0];
    for (let i = 1; i < num.length; i++) { 
        if (min > num[i]) {
            min = num[i];
        }
    }
    element.innerHTML = "Min: " + min;
}
function AddElement(){
    element.innerHTML=input.value;
}
