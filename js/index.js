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
  logo.setAttribute('src', siteContent["nav"]["img-src"]);

const header = document.querySelector('header')

const navigation = document.querySelector('nav');

const navA = document.querySelectorAll('a');
// const navArray = ['Services', 'Products', 'Vision', 'Features', 'About', 'Contact'];
// navArray.forEach(everyItem => {
//   navA.textContent = everyItem;
// });
  navA[0].textContent = 'Services';
  navA[1].textContent = 'Products';
  navA[2].textContent = 'Vision';
  navA[3].textContent = 'Features';
  navA[4].textContent = 'About';
  navA[5].textContent = 'Contact';

  navA.forEach(colorChange => colorChange.style.color = 'green');

const navArray = ['User Login', 'Password Change'];
navArray.forEach(currentValue =>{
  const listNavs = document.createElement ('a');
  listNavs.textContent = currentValue;
  navigation.append(listNavs);
})


const h1Header = document.querySelector('h1');
  h1Header.textContent = `DOM IS AWESOME`;

const buttonHeader = document.querySelector('button');
  buttonHeader.textContent = 'Get Started';

const headerImg = document.querySelector('#cta-img');
  headerImg.src = 'img/header-img.png';

const contentH1 = document.querySelectorAll('h4');
  contentH1[0].textContent = 'Features';
  contentH1[1].textContent = 'About';
  contentH1[2].textContent = 'Services';
  contentH1[3].textContent = 'Product';
  contentH1[4].textContent = 'Vision';
  contentH1[5].textContent = 'Contact';

const contentP = document.querySelectorAll('p');
  contentP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  contentP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  contentP[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  contentP[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  contentP[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  contentP[5].textContent = '123 Way 456 Street Somewhere,USA';
  contentP[6].textContent = '1 (888)888-8888';
  contentP[7].textContent = 'sale@greatidea.io';
  contentP[8].textContent = 'Copyright Great Idea! 2019';

const middleImg = document.querySelector('#middle-img');
  middleImg.src = 'img/mid-page-accent.jpg';











