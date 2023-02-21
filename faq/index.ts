const contents = document.querySelectorAll('.hidden')
const btns = document.querySelectorAll('.btn')

function* range(num: number) {
    let i = 0
    while (i < num) {
        yield i
        i++
    }
}
for (let i of range(btns.length)) {
    btns[i].addEventListener('click', () => {
        contents[i].classList.toggle('active')
    })
    console.log("hi")
}