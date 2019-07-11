const $heading = document.querySelector('h2')
$heading.classList.add('animated', 'zoomIn')

const $grid = document.querySelector('.grid')
$grid.classList.add('animated', 'zoomIn')
// let images = ['./image/1.jpg', './image/2.jpg', './image/3.jpg', './image/4.jpg', './image/5.jpg', './image/6.jpg', './image/7.jpg', './image/8.jpg', './image/9.jpg', './image/10.jpg', './image/11.jpg', './image/12.jpg']

const $banner = document.querySelector('.banner')
$banner.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./image/${Math.ceil(Math.random() * 12)}.jpg')`
let images = [
  { 'url': './image/1.jpg', 'description': 'Vivekananda Rock Memorial is a popular tourist monument in Vavathurai, Kanyakumari, India. It was built in 1970 in honour of Swami Vivekananda who is said to have attained enlightenment on the rock. According to local legends, it was on this rock that Goddess Kumari performed austerity. A meditation hall known as Dhyana Mandapam is also attached to the memorial for visitors to meditate. The rocks are surrounded by the Laccadive Sea. The memorial consists of two main structures, the Vivekananda Mandapam and the Shripada Mandapam.', 'title': 'Vivekananda Rock Memorial' },
  { 'url': './image/2.jpg', 'description': 'Jal Mahal (meaning "Water Palace") is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace and the lake around it were renovated and enlarged in the 18th century by Maharaja Jai Singh II of Amber.', 'title': 'Jal Mahal (Water Palace)' },
  { 'url': './image/3.jpg', 'description': `Hawa Mahal (English translation: "The Palace of Winds" or "The Palace of Breeze") is a palace in Jaipur, India. Made with the red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The structure was built in 1799 by Maharaja Sawai Pratap Singh, the grandson of Sawai Jai Singh, who was the founder of Jaipur[1]. He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace. It was designed by Lal Chand Ustad. Its unique five floors exterior is akin to the honeycomb of a beehive with its 953 small windows called Jharokhas decorated with intricate latticework.`, 'title': 'Hawa Mahal' },
  { 'url': './image/4.jpg', 'description': 'The Adiyogi statue is a 34.3-metre-tall (112.4 ft) excluding plinth, 45-metre-long (147 ft) and 7.62-metre-wide (24.99 ft) statue of the Hindu deity Shiva with white Thirunamam at Coimbatore in the Indian state of Tamil Nadu, which has been recognized by the Guinness World Records as the "Largest Bust Sculpture” in the world.[1][2] Designed by Sadhguru Jaggi Vasudev, founder of the Isha Foundation, it was built by the foundation and weighs around 500 tonnes (490 long tons; 550 short tons).[3] Sadhguru said that the statue is for inspiring and promoting yoga, and is named Adiyogi, which means "the first yogi", because Shiva is known as the originator of yoga.', 'title': 'Adiyogi Shiva statue' },
  { 'url': './image/5.jpg', 'description': 'Jal Mahal (meaning "Water Palace") is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. The palace and the lake around it were renovated and enlarged in the 18th century by Maharaja Jai Singh II of Amber.', 'title': 'Jal Mahal (Water Palace)' },
  { 'url': './image/6.jpg', 'description': 'The Victoria Memorial is a large marble building in Kolkata, West Bengal, India, which was built between 1906 and 1921. It is dedicated to the memory of Queen Victoria (1819–1901) and is now a museum and tourist destination under the auspices of the Ministry of Culture. The memorial lies on the Maidan (grounds) by the bank of the Hooghly River, near Jawaharlal Nehru Road (better known as Chowringhee Road). Every year thousands of people come to visit this museum.', 'title': 'Victoria Memorial' },
  { 'url': './image/7.jpg', 'description': `The Taj Mahal, meaning "Crown of the Palaces") is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan, the builder. The tomb is the centerpiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.`, 'title': 'Taj Mahal' },
  { 'url': './image/8.jpg', 'description': 'Raj Mandir Cinema is a movie theatre in Jaipur in Rajasthan state in India. Situated on the Bhagwan Das Road, near M.I. Road, the meringue-shaped auditorium opened in 1976, and over the years has seen many movie premieres of Hindi films, and has become a popular symbol of Jaipur.', 'title': 'Raj Mandir Cinema' },
  { 'url': './image/9.jpg', 'description': `Mysore Palace is a historical palace and a royal residence at Mysore in the Indian State of Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward. Mysore is commonly described as the 'City of Palaces', and there are seven palaces including this one; however, 'Mysore Palace' refers specifically to this one within the Old Fort. The land on which the palace now stands was originally known as puragiri (literally, citadel), and is now known as the Old Fort.`, 'title': 'Mysore Palace' },
  { 'url': './image/10.jpg', 'description': 'Adalaj Stepwell or Rudabai Stepwell is a stepwell located in the village of Adalaj, close to Ahmedabad city and in Gandhinagar district in the Indian state of Gujarat. It was built in 1498 in the memory of Rana Veer Singh (the Vaghela dynasty of Dandai Des), by his wife Queen Rudadevi. It is a fine example of Indian architecture work.', 'title': 'Adalaj Stepwell' },
  { 'url': './image/11.jpg', 'description': 'Isa Khan Niazi was a Pashtun noble in the courts of Sher Shah Suri and his son Islam Shah Suri, of the Sur dynasty, who fought the Mughal Empire. Isa Khan Niazi was born in 1453 and his last brother was born in 1478. He died in Delhi in 1548 at the age of 95. The time of 1451 – 1525 was the golden period for these khans. It was the time when Lodhis completely dominated the subcontinent (Hindustan). Isa Khan Niazi was a prominent member among the ruling family. He was in the same tribal unit of nobles as Ibrahim Lodhi, Sher Shah Suri. Most of these families were attached with the Delhi sultanate. There, a contention arose between Isa Khan Niazi and Sher Shah Suri which ended in mutiny.', 'title': 'Isa Khan Niazi' },
  { 'url': './image/12.jpg', 'description': `Rajgad (Ruling Fort) is a hill fort situated in the Pune district of Maharashtra, India. Formerly known as Murumdev, the fort was the capital of the Maratha Empire under the rule of Chhatrapati Shivaji Maharaj for almost 26 years, after which the capital was moved to the Raigad Fort. Treasures discovered from an adjacent fort Torna were used to completely build and fortify the Rajgad Fort.[citation needed] The Rajgad Fort is located around 60 km (37 mi) to the south-west of Pune and about 15 km (9.3 mi) west of Nasrapur in the Sahyadris range. The fort lies 1,376 m (4,514 ft) above the sea level. The fort's ruins consist of palaces, water cisterns, and caves.`, 'title': 'Rajgad Fort' }]

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
  // $htmlContent.push(`<div class="thumbnail" id="t${i}" role="img"><p class="hide">${images[i].description}</p></div>`)
  $htmlContent.push(`<div class="thumbnail" id="${i}" role="img" data-text="${images[i].title}"></div>`)
  // $htmlContent.push(`<div class="thumbnail" id="t${i}" role="img"></div>`)
  // $thumbnails[i].style.background - image = URL(images[i])
}
$grid.innerHTML += $htmlContent.join('\n')

for (let i = 0; i < images.length; i++) {
  const $element = document.getElementById(`${i}`)
  $element.style.backgroundImage = `url(${images[i].url})`
  $element.style.backgroundSize = 'cover'
  $element.style.backgroundPosition = 'center'
}

const $model = document.querySelector('.model')
const $modelTitle = document.querySelector('.modelTitle')
const $modelImage = document.querySelector('.modelImage')
const $modelDescription = document.querySelector('.modelDescription')

const $thumbnails = document.querySelectorAll('.thumbnail')
for (const $thumbnail of $thumbnails) {
  $thumbnail.addEventListener('mouseover', function (event) {
    // event.target.style.backgroundColor = '#1C80C3'
    // event.target.style.backgroundBlendMode = 'overlay'
    // document.querySelector(`#${$thumbnail.id} p`).classList.add('description')
    // // event.target.classList.add('animated', '')
    event.target.style.boxShadow = '0px 0px 10px 5px rgba(0,0,0,0.3)'
    event.target.style.transform = 'scale(1.05)'
    // event.target.style.backgroundSize = '125%'
    event.target.style.transition = 'all 1.5s'
    // event.target.style.filter = 'blur(2px) brightness(60%)'
  })
  $thumbnail.addEventListener('mouseout', function (event) {
    // event.target.style.backgroundColor = ''
    // event.target.style.backgroundBlendMode = ''
    // document.querySelector(`#${$thumbnail.id} p`).classList.remove('description')
    // event.target.classList.remove('animated', 'pulse')
    event.target.style.boxShadow = ''
    // event.target.style.backgroundSize = 'cover'
    event.target.style.transition = 'all 1.5s'
    event.target.style.transform = 'scale(1.0)'
    // event.target.style.filer = 'blur(0) brightness(0)'
  })

  $thumbnail.addEventListener('click', function (event) {
    const selectedImage = images[event.target.id]
    $model.style.display = 'block'
    $modelTitle.textContent = selectedImage.title
    $modelImage.src = selectedImage.url
    $modelDescription.innerHTML = selectedImage.description
  })
}

const $close = document.querySelector('.close')
$close.addEventListener('click', function (event) {
  $model.style.display = 'none'
})

const $next = document.querySelector('.next')
$next.addEventListener('click', function (event) {
  const $currentItem = images.find(item => item.url === './'.concat(document.querySelector('.modelImage').src.split('/').slice(-2).join('/')))
  const currentIndex = images.indexOf($currentItem)
  const $nextItem = images[(currentIndex + 1) % images.length]
  $modelTitle.textContent = $nextItem.title
  $modelImage.src = $nextItem.url
  $modelDescription.innerHTML = $nextItem.description
})

const $prev = document.querySelector('.prev')
$prev.addEventListener('click', function (event) {
  const $currentItem = images.find(item => item.url === './'.concat(document.querySelector('.modelImage').src.split('/').slice(-2).join('/')))
  const currentIndex = images.indexOf($currentItem)
  let nextIndex = (currentIndex - 1) % images.length
  if (nextIndex < 0) {
    nextIndex = images.length - 1
  }
  const $nextItem = images[nextIndex]
  $modelTitle.textContent = $nextItem.title
  $modelImage.src = $nextItem.url
  $modelDescription.innerHTML = $nextItem.description
})

let $currentItem
let currentIndex
let nextIndex
let $nextItem
document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      $currentItem = images.find(item => item.url === './'.concat(document.querySelector('.modelImage').src.split('/').slice(-2).join('/')))
      currentIndex = images.indexOf($currentItem)
      nextIndex = (currentIndex - 1) % images.length
      if (nextIndex < 0) {
        nextIndex = images.length - 1
      }
      $nextItem = images[nextIndex]
      $modelTitle.textContent = $nextItem.title
      $modelImage.src = $nextItem.url
      $modelDescription.innerHTML = $nextItem.description
      break
    case 39:
      $currentItem = images.find(item => item.url === './'.concat(document.querySelector('.modelImage').src.split('/').slice(-2).join('/')))
      currentIndex = images.indexOf($currentItem)
      nextIndex = (currentIndex + 1) % images.length
      $nextItem = images[nextIndex]
      $modelTitle.textContent = $nextItem.title
      $modelImage.src = $nextItem.url
      $modelDescription.innerHTML = $nextItem.description
      break
    case 27:
      $model.style.display = 'none'
      break
    case 81:
      $model.style.display = 'none'
      break
  }
}
