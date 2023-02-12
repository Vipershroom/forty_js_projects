const body = document.querySelector('#body')
const btn = document.querySelector('#btn')
const h1 = document.querySelector('#h1')
const r = document.querySelector(':root')

const color = ["white","rgb(25,25,25)","brown","purple"]
let curColor = "rgb(25,25,25)"
const genColor = () => {
    return color[Math.floor(Math.random() * (color.length))]
}

btn.addEventListener('click', () => {
    let newColor = genColor()
    let rs = getComputedStyle(r).getPropertyValue('--bg')
    while (true) {
        if (newColor !== rs) {
            console.log(newColor)
            console.log(rs)
            break;
        }
        newColor = genColor()
    }
    r.style.setProperty(`--bg`, `${newColor}`)
    h1.textContent = `Color Picker: ${newColor}`
})