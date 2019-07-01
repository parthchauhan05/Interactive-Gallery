const $heading = document.querySelector('h1')
$heading.classList.add('animated', 'fadeIn')

const $grid = document.querySelector('.grid')
let images = ['./image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg', './image/6.jpg', './image/7.jpg', './image/8.jpg', './image/9.jpg', './image/10.jpg', './image/11.jpg', './image/12.jpg']

images = images.sort(function () { return 0.5 - Math.random() })
// const $htmlContent = []

// for (const image of images) {
//   $htmlContent.push(`<div class='thumbnail'><img src=${image}></div>`)
// }
// $grid.innerHTML += $htmlContent.join('\n')

const $htmlContent = []
// for (const image of images) {
//     $htmlContent.push(`<div class="thumbnail"></div>`)
// }

for (let i = 0; i < images.length; i++) {
    $htmlContent.push(`<div class="thumbnail" id="${i}" role="img"></div>`)
    // $thumbnails[i].style.background - image = URL(images[i])
}
$grid.innerHTML += $htmlContent.join('\n')

for (let i = 0; i < images.length; i++) {
    const $element = document.getElementById(i)
    $element.style.backgroundImage = `url(${images[i]})`
    $element.style.backgroundSize = 'cover'
    $element.style.backgroundPosition = 'center'
}

const $thumbnails = document.querySelectorAll('.thumbnail')
for (const $thumbnail of $thumbnails) {
    $thumbnail.addEventListener('mouseover', function (event) {
        event.target.style.backgroundColor = '#333333'
        event.target.style.backgroundBlendMode = 'overlay'
    })
    $thumbnail.addEventListener('mouseout', function (event) {
        event.target.style.backgroundColor = ''
        event.target.style.backgroundBlendMode = ''
    })
}
