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

// Header

const navBar = document.querySelectorAll('a');
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];


// HEADER IMAGE
const codeImg = document.querySelector('#cta-img');
codeImg.setAttribute('src', 'img/header-img.png');

// HEADER TEXT
const topText = document.querySelector('h1');
topText.textContent = 'Dom Is Awesome';

// BUTTON TEXT
const buttonText = document.querySelector('.cta .cta-text button');
buttonText.textContent = 'Get Started';


// TOP SECTION
const topSectionHeaders = document.querySelectorAll('.top-content h4');
topSectionHeaders[0].textContent = 'Features';
topSectionHeaders[1].textContent = 'About';

const topSectionPara = document.querySelectorAll('p');

topSectionPara[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisi. Nullam augue justo, at imperdiet metus scelerisque quis.'

topSectionPara[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Supsendisse eu ornare nisl. Nullam convallis augue justo, at ipmerdiet metus scelerisque quis.'

// MIDDLE IMAGE
const midImage = document.querySelector('.main-content .middle-img');
midImage.setAttribute('src', 'img/mid-page-accent.jpg');

// BOTTOM SECTION
const botSectionHeaders = document.querySelectorAll('.bottom-content h4');
botSectionHeaders[0].textContent = 'Services';
botSectionHeaders[1].textContent = 'Product';
botSectionHeaders[2].textContent = 'Vision';

const botSectionPara = document.querySelectorAll('.bottom-content p');

botSectionPara[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metuscelerisque quis';
botSectionPara[1].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metuscelerisque quis';
botSectionPara[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metuscelerisque quis';

// Contact Section

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = 'Contact';

const contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = '123 Way 456 Street, Somewhere USA';
contactPara[1].textContent = '1 (888) 888 1234';
contactPara[2].textContent = 'sales@greatidea.io';

// FOOTER

const botPara = document.querySelector('footer p');
botPara.textContent = 'Copyright Great Idea! 2018';












