const $heading = document.querySelector('h1')
$heading.classList.add('animated', 'fadeIn')

const $grid = document.querySelector('.grid')
const images = ['./image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg', './image/6.jpg', './image/7.jpg', './image/8.jpg', './image/9.jpg', './image/10.jpg', './image/11.jpg', './image/12.jpg']

const $htmlContent = []

for (const image of images) {
  $htmlContent.push(`<div class='thumbnail'><img src=${image}></div>`)
}
$grid.innerHTML += $htmlContent.join('\n')
