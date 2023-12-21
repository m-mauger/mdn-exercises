const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageList = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altList = ['human eye close up', 'rock zoomed in', 'flowers', 'egyptian art', 'butterfly'];

/* Looping through images */
for (let i = 0; i < imageList.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageList[i]}`);
    newImage.setAttribute('alt', altList[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', (event) =>{
        displayedImage.setAttribute('src', event.target.getAttribute('src'));
        displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
    });
}

/* Wiring up the Darken/Lighten button */
function lightenOrDarkenButton(){
    const className = btn.getAttribute('class');
    if (className === 'dark'){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';        
    }
}

btn.addEventListener('click', lightenOrDarkenButton);