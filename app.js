const display = document.querySelector('.display')
const result = document.querySelector('.result')
const btns = document.querySelectorAll('.pad button')

function insertExp (el) {
    display.innerHTML += el.innerHTML
}

function showResults () {
    let expResult = eval(display.innerHTML)
    result.innerHTML = expResult;
}

btns.forEach(btn => {
    btn.onclick = () => {
        if (btn.classList.contains('num')) {
            if (btn.classList.contains('reload')) {
                window.location.reload()
            } else {
                insertExp(btn)
            }
        } else if (btn.classList.contains('opt')) {
            insertExp(btn)
        } else if (btn.classList.contains('equals')) {
            showResults()
        } else if (btn.innerHTML === 'AC') {
            result.innerHTML = ''
            display.innerHTML = ''
        } else if (btn.innerHTML === '+/-') {
            display.innerHTML = `-${display.innerHTML}`
        } 
    }
})