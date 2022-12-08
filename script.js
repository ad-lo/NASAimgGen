const resultsNav = document.getElementById('resultsNav');
const favouritesNav = document.getElementById('favouritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

// NASA API

const count = 10;
const apiKey = 'nqRBP8aqtNMnPHMjQRA740uMDPAM3CFpfC0W0DAF';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

function updateDOM() {
resultsArray.forEach((result) => {
// card container
const card = document.createElement('div');
card.classList.add('card');
// link
const link = document.createElement('a');
link.href = result.hdurl;
link.title = 'View Full Image';
link.target = '_blank';
// Image
const image = document.createElement('img');
image.src = result.url;
image.alt = 'NASA Image of the Day';
image.loading = 'lazy';
image.classList.add('card-img-top');
// card body
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
// card title
const cardTitle = document.createElement('div');
cardTitle.classList.add('card-title');
cardTitle.textContent = results.title;
// Save text
const saveText = document.createElement('p');
saveText.classList.add('clickable');
saveText.textContent = 'Add to Favourites';
//  Card text
const cardText = document.createElement('p');
cardText.textContent = result.explanation;
// Footer Container
const footer = document.createElement('small');
footer.classList.add('text-muted');
// Date
const date = document.createElement('strong');
date.textContent = result.date;
// Copyright
const copyrightResult = result.copyright === undefined ? '' : result.copyright;
const copyright = document.createElement('div');
copyright.textContent = ` ${copyrightResult}`;
// Append
footer.append(date, copyright);
cardBody.append(cardTitle, saveText, cardText, footer);
link.appendChild(image);
card.append(link, cardBody);
imagesContainer.appendChild(card);
console.log(card);
});
}


// get 10 images from NASA API
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
    updateDOM(); 
  } catch (error) {
    // catch error here
  }
}

//  On load
getNasaPictures();