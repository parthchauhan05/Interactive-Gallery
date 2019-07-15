# Interactive Gallery of Indian Architecture

This project is about exploring some great pieces of Indian Architecture. This website demonstrates animations and layouts provided by ```HTML``` and ```CSS``` while dynamics of it is controlled using ```JS```.

## Layout

This website uses ```Grid``` layout provided by CSS3. Creating a grid is easy. We need to give value ```grid``` to ```display``` property. Advantage of using ```grid``` is: it is responsive. In this project, ```auto-fit``` and ```minmax``` is used to make it responsive. Using those, it is just ```grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));``` to make it response depending on screen sizes. 

## Animation

Animation are used in three ways for this project. 

### 1. Using CSS Animation:
For some animations, ```tranisition```, ```opacity``` and ```transfrom``` CSS properties are used. For example: On the main grid of images, hovering on image will show title. Animation for that is done by using CSS Animations. 
### 2. Using JS for CSS Animation:
```JS``` can give us access to manipulate ```CSS``` properties by targeting elements. Once an element is targeted, we can manipulate almost every ```CSS``` property including animations. For example: On main grid of images, hovering on an image will enlarge the thumbnail and add drop shadow to it, is working with the help of ```JS```. 
### 3. Using Animate.css:
Animate.css made CSS animations easy. We just have to add ```animated``` class for using animations provide by that and after that we have to add just the animation we want to use. For example: while loading main grid of images, ```zoom``` animation is used by just adding ```zoomIn``` class.

## Features:
- Randomly Generated Banner.
- Responsive to different Screen sizes.
- Randomly sorted grid of images.
- OnClick Image Modal, Description and download option.
- Modal respond to different keyboard events.

## Challenges:
1. At first, I was trying to dynamically look for images inside the folder. But after spending time on ```Google``` and ```Stackoverflow```, I just found out that I cannot do that using ```VanillaJS```. I need to use serverside JS modules for that. So, I just dropped that idea.  

2. After that, I do not want to store two different versions of same image; One for thumbnail and Original Version of Image. So, I tried to crop and/or set image inside the ```div```. But it was always overflowing. So, I tried using ```div``` and giving them ```role``` as ```img```. Using ```ARIA``` rules to making it schemantic, I was able to do it as I wanted.

3. After adding images, i was trying to have title of image on ```hover```. I was trying to add it using ```<p>```.  What was happening is, it was taking ```hover``` effects from images. So, I tried it using ```pseudo elements``` of ```CSS```.

4. For adding images dynamically using ```JS```, I wanted to have an ```JSON``` file containing information about them and then by importing it, I can use those. But after reading about it on different websites, I just turned that idea down because I need to import another libraries for reading ```JSON```. I can use ```JSON``` if it contains ```JS``` array. So, I just included that array in ```index.js```.

5. After finishing with main grid of images, I was trying to add a banner to this. For that I tried it with ```videos``` but I had issues with height and width of image. So, I just went with Images. While working on that I just had an idea of having images from images for grids. Then, I just went for randomized image selector for banner.

6. After using randomized banner, I just had an idea of random order of images inside the main grid of images. So, I googled for that and found a function randomly shuffling array. This was done by ```array.sort(function () { return 0.5 - Math.random() })```. This is randomly choosing one number between 0 and 1; subtract it from 0.5. So, some time we will have positive number and some times we will have negative number. When the number is positive, first image will be sorted before second and the number is negative, then first image will be sorted after second image. This process will occure for each pair of images in array. In that way, everytime array will be shuffled reandomly.

## Credits for Photos:
- Adityan Ramkumar on Unsplash
- Ravi Shekhar on Unsplash
- Peal Ami on Unsplash
- Mitchell Ng Liang an on Unsplash
- Martin Jernberg on Unsplash
- Julian Yu on Unsplash
- elCarito on Unsplash
- Ashim D’Silva on Unsplash
- Ankit Patel on Unsplash
- Aman Tyagi on Unsplash
- Aditya Shahane on Unsplash 