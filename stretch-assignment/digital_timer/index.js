const digit = document.querySelectorAll('.digits');
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const secondOnes = document.querySelector('#secondOnes');
const secondTens = document.querySelector('#secondTens');

const timer = () => {
    let Count = 0;
    let msHundredsCount = 0;
    let secondOnesCount = 0;
    let secondTensCount = 0;

    const countdown = setInterval(() => {
        msTens.textContent = Count;
        Count++;
        if (Count === 10) {
            Count = 0;
            msTens.textContent = Count;
            msHundredsCountDown();            
        }
    }, 10);

    const msHundredsCountDown = () => {
        msHundredsCount++;
        msHundreds.textContent = msHundredsCount;   
        if (msHundredsCount === 10) {
            msHundredsCount = 0;
            msHundreds.textContent = msHundredsCount;
            secondOnesCountDown();            
        }
    };

    const secondOnesCountDown = () => {
        secondOnesCount++;
        secondOnes.textContent = secondOnesCount;      
        if (secondOnesCount === 10) {
            secondOnesCount = 0;
            secondOnes.textContent = secondOnesCount;
            secondTensCountDown();
        }
    };

    const secondTensCountDown = () => {
        secondTensCount++;
        secondTens.textContent = secondTensCount;        
        if (secondTensCount === 1) {
            clearInterval(countdown);
            digit.forEach(element => element.style.color = 'red');
        }
    };
}

timer();