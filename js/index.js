const navMenu = document.querySelector('.menu-bar');
const headerItem = document.getElementsByClassName('header-item');
const closeme = document.querySelector('.closeme');
const menuItem = document.getElementsByClassName('menu-items');
const hamburger = document.querySelector('.header-item4');
const popupOpen = document.getElementsByClassName('popup-open');
const overlay = document.getElementById('overlay');
const popup = document.querySelector('.project-popup');
const projectDetails = [{
  title: 'Project no 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './src/popup-img.png', tech: ['html', 'Bootstrap', 'Ruby on rails'], links: ['https://github.com/Anand8317', 'https://github.com/Anand8317'],
},
{
  title: 'Project no 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './src/popup-img.png', tech: ['html', 'Bootstrap', 'Ruby on rails'], links: ['https://github.com/Anand8317', 'https://github.com/Anand8317'],
},
{
  title: 'Project no 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './src/popup-img.png', tech: ['html', 'Bootstrap', 'Ruby on rails'], links: ['https://github.com/Anand8317', 'https://github.com/Anand8317'],
},
{
  title: 'Project no 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './src/popup-img.png', tech: ['html', 'Bootstrap', 'Ruby on rails'], links: ['https://github.com/Anand8317', 'https://github.com/Anand8317'],
},
{
  title: 'Project no 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './src/popup-img.png', tech: ['html', 'Bootstrap', 'Ruby on rails'], links: ['https://github.com/Anand8317', 'https://github.com/Anand8317'],
},
{
  title: 'Project no 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './src/popup-img.png', tech: ['html', 'Bootstrap', 'Ruby on rails'], links: ['https://github.com/Anand8317', 'https://github.com/Anand8317'],
},
{
  title: 'Project no 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: './src/popup-img.png', tech: ['html', 'Bootstrap', 'Ruby on rails'], links: ['https://github.com/Anand8317', 'https://github.com/Anand8317'],
}];

hamburger.addEventListener('click', () => {
  Array.from(headerItem).forEach((element) => {
    element.classList.toggle('active');
  });
  navMenu.classList.toggle('active');
});

closeme.addEventListener('click', () => {
  Array.from(headerItem).forEach((element) => {
    element.classList.toggle('active');
  });
  navMenu.classList.toggle('active');
});

Array.from(menuItem).forEach((element) => {
  element.addEventListener('click', () => {
    Array.from(headerItem).forEach((element) => {
      element.classList.toggle('active');
    });
    navMenu.classList.toggle('active');
  });
});

const popupParent1 = document.querySelector('.project-popup');
const popupheader1 = document.createElement('div');
popupheader1.className = 'popup-header';
const popupTitle1 = document.createElement('h2');
popupTitle1.className = 'popup-title';
const popupbut1 = document.createElement('button');
popupbut1.className = 'close-button';
popupbut1.id = 'popup-close';
popupbut1.innerHTML = '&times;';
popupheader1.appendChild(popupTitle1);
popupheader1.appendChild(popupbut1);
popupParent1.appendChild(popupheader1);

const popuplang1 = document.createElement('ul');
popuplang1.className = 'popup-lang';
const popuplangli1 = document.createElement('li');
const popuplangli2 = document.createElement('li');
const popuplangli3 = document.createElement('li');
popuplang1.appendChild(popuplangli1);
popuplang1.appendChild(popuplangli2);
popuplang1.appendChild(popuplangli3);
popupParent1.appendChild(popuplang1);

const popupBody1 = document.createElement('div');
popupBody1.className = 'popup-body';
const popupImg1 = document.createElement('img');
popupImg1.className = 'popup-image';
const popupSubbody1 = document.createElement('div');
popupSubbody1.className = 'popup-subbody1';
const popupPara1 = document.createElement('p');
popupPara1.className = 'popup-para';
const popupButtonCon1 = document.createElement('div');
popupButtonCon1.className = 'popup-buttonCont';
const popupa1 = document.createElement('a');
popupa1.className = 'button1 popup-button ';
popupa1.innerHTML = 'See Live ';
const popupa1img = document.createElement('img');
popupa1img.className = 'popup-button-img';
popupa1img.src = 'src/popup-but1.png';
popupa1.appendChild(popupa1img);
const popupa2 = document.createElement('a');
popupa2.className = 'button2 popup-button';
popupa2.innerHTML = 'See Source ';
const popupa2img = document.createElement('img');
popupa2img.className = 'popup-button-img';
popupa2img.src = 'src/popup-but2.png';
popupa2.appendChild(popupa2img);

popupButtonCon1.appendChild(popupa1);
popupButtonCon1.appendChild(popupa2);
popupSubbody1.appendChild(popupPara1);
popupSubbody1.appendChild(popupButtonCon1);
popupBody1.appendChild(popupImg1);
popupBody1.appendChild(popupSubbody1);
popupParent1.appendChild(popupBody1);

function popupFunc(evt) {
  const popupTitle = document.querySelector('.popup-title');
  const popuplang = document.querySelector('.popup-lang');
  const popupImage = document.querySelector('.popup-image');
  const popupPara = document.querySelector('.popup-para');
  const popupButton1 = document.querySelector('.button1');
  const popupButton2 = document.querySelector('.button2');

  popupTitle.innerText = projectDetails[evt.currentTarget.i].title;
  for (let i = 0; i < popuplang.children.length; i += 1) {
    popuplang.children[i].innerText = projectDetails[evt.currentTarget.i].tech[i];
  }
  popupImage.src = projectDetails[evt.currentTarget.i].image;
  popupPara.innerText = projectDetails[evt.currentTarget.i].description;
  [popupButton1.href, popupButton2.href] = projectDetails[evt.currentTarget.i].links;

  popup.classList.toggle('active');
  overlay.classList.toggle('active');
}

for (let i = 0; i < popupOpen.length; i += 1) {
  popupOpen[i].i = i;
  popupOpen[i].addEventListener('click', popupFunc);
}

const popupClose = document.querySelector('#popup-close');
popupClose.addEventListener('click', () => {
  popup.classList.toggle('active');
  overlay.classList.toggle('active');
});

const form = document.querySelector('.form');
const email = document.getElementById('form-email');
const error = document.querySelector('.error');
const text = document.querySelector('#form-in1');
const mess = document.querySelector('.form-msg');

if (typeof (localStorage) !== 'undefined') {
  const data = JSON.parse(localStorage.getItem('data'));
  text.value = data.name;
  email.value = data.email;
  mess.value = data.message;
}

form.addEventListener('submit', (e) => {
  const emailValue = email.value;
  let flag = 0;
  for (let i = 0; i < emailValue.length; i += 1) {
    if (emailValue[i] !== emailValue[i].toLowerCase()) {
      e.preventDefault();
      error.innerText = 'Please enter email in lowercase';
      flag = 1;
    }
  }

  if (flag === 0) {
    const formData = {
      name: text.value,
      email: email.value,
      message: mess.value,
    };
    localStorage.setItem('data', JSON.stringify(formData));
  }
});
