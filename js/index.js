const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const topContent = document.querySelector('.top-content');
const bottomContent = document.querySelector('.bottom-content');
const navigation = document.querySelector('nav');
const navs = document.querySelectorAll('a');
const navsArray = Array.from(navs);
const headings = document.querySelectorAll('h4');
const headingsArray = Array.from(headings);
const paragraphs = document.querySelectorAll('p');
const paragraphsArray = Array.from(paragraphs);
const mainContent = document.querySelector('.main-content');
const ctaImg = document.querySelector('#cta-img');
const middleImg = document.querySelector('#middle-img');
const headingOne = document.querySelector('h1');
const button = document.querySelector('button');

ctaImg.src = 'img/header-img.png';
middleImg.src = 'img/mid-page-accent.jpg';

headingOne.textContent = 'DOM Is Awesome';
button.textContent = 'Get Started';

navsArray[0].textContent = 'Services';
navsArray[1].textContent = 'Product';
navsArray[2].textContent = 'Vision';
navsArray[3].textContent = 'Features';
navsArray[4].textContent = 'About';
navsArray[5].textContent = 'Contact';

headingsArray[0].textContent = 'Features';
headingsArray[1].textContent = 'About';
headingsArray[2].textContent = 'Services';
headingsArray[3].textContent = 'Product';
headingsArray[4].textContent = 'Vision';
headingsArray[5].textContent = 'Contact';

paragraphsArray[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsArray[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsArray[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsArray[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsArray[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
paragraphsArray[5].textContent = '123 Way 456 Street Somewhere, USA';
paragraphsArray[6].textContent = '1 (888) 888-8888';
paragraphsArray[7].textContent = 'sales@greatidea.io';
paragraphsArray[8].textContent = 'Copyright Great Idea! 2018';

navsArray[0].style.color = 'green';
navsArray[1].style.color = 'green';
navsArray[2].style.color = 'green';
navsArray[3].style.color = 'green';
navsArray[4].style.color = 'green';
navsArray[5].style.color = 'green';

const homeNav = document.createElement('a');
homeNav.href = '#';
homeNav.textContent = 'Home';
homeNav.style.color = 'green';
navigation.prepend(homeNav);


const randomNav = document.createElement('a');
randomNav.href = '#';
randomNav.textContent = 'Random';
randomNav.style.color = 'green';
navigation.appendChild(randomNav);