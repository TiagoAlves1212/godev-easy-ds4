const btnCalc = document.querySelector('button')


function fatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * fatorial(num - 1);
}

btnCalc.addEventListener('click', () => {
    const inputNum = parseFloat(document.querySelector('input').value)

    const result = document.querySelector('p').innerHTML = `${fatorial(inputNum)}n`
})