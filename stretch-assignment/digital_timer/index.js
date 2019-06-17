const newArray = [0,1,2,3,4,5,6,7,8,9,10]

const secondTen = document.querySelector('#secondTens');
secondTen = document.setInterval(timerOne, 1000);

function timerOne(){
    let count = 10;
    function minus(){
        return count--;
    }
    console.log(minus());
}
console.log(timerOne());

const secondOne = document.querySelector('#secondOnes');
secondOne.textContent = 0;

const msHun = document.querySelector('#msHundreds');
msHun.textContent = 0;

const msTens = document.querySelector('#msTens');
msTens.textContent = 0;








