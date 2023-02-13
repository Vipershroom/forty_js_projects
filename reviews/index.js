const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ]

const img = document.querySelector('#img')
const name = document.querySelector('#name')
const job = document.querySelector('#job')
const content = document.querySelector('#content')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const random = document.querySelector('#random')

function update(index) {
  if (index > (reviews.length - 1)) {
    index = 0
  }
  newReview = reviews[index]
  img.setAttribute('src', newReview.img)
  name.textContent = newReview.name
  job.textContent = newReview.content
  content.textContent = newReview.text

}

let index = 0
update(index)

left.addEventListener('click', () => {
  if (index === 0) {
    index = (reviews.length - 1)
    update(index)
    return
  }
  index -= 1
  update(index)
})

right.addEventListener('click', () => {
  if (index === (reviews.length - 1)) {
    index = 0
    update(index)
    return
  }
  index += 1
  update(index)
})

random.addEventListener('click', () => {
  while (true) {
    num = Math.floor(Math.random() * (reviews.length))
    if (num !== index) {
      index = num
      break
    }
  }
  update(index)
})