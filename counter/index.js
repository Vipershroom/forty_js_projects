const amount = document.querySelector('#amount')
const btns = document.querySelector('.btns').children

let count = 0

btn_array = []
for (let i of btns) {
    btn_array.push(i)
}


let counter = 0
btn_array.forEach((btn) => {
    if (counter === 0) {
        btn.addEventListener('click',() => {
            if (count === 0) {
                return
            }
            count -= 1
            amount.textContent = `${count}`
        })
        counter += 1
    } else if (counter === 1) {
        btn.addEventListener('click', () => {
            count = 0
            amount.textContent = `${count}`
        })
        counter += 1
    } else {
        btn.addEventListener('click',() => {
            count += 1
            amount.textContent = `${count}`
        })
    }
})