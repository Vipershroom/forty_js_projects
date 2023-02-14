const btn = document.querySelector('#button')!
const content = document.querySelector('.content')

btn.addEventListener('click', () => {
    if (content === null) {
        console.log("Null")
        return
    }
    content.classList.toggle('active')
})