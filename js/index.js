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

// Nav
const navItems = document.querySelectorAll('nav a')
navItems.forEach((el, index) => {el.textContent = siteContent.nav[`nav-item-${index + 1}`]
el.style.color = 'green' // Task 3
})

// CTA
const ctaHeader = document.querySelector('.cta .cta-text h1')
ctaHeader.textContent = siteContent.cta.h1

const ctaButton = document.querySelector('.cta .cta-text button')
ctaButton.textContent = siteContent.cta.button

const ctaLogo = document.getElementById('cta-img')
ctaLogo.setAttribute('src', siteContent.cta["img-src"])

//Main
const mainSectionTitles = document.querySelectorAll('.main-content h4')
const mainSectionContent = document.querySelectorAll('.main-content p')

const featuresTitle = mainSectionTitles[0]
featuresTitle.textContent = siteContent["main-content"]["features-h4"]

const featuresContent = mainSectionContent[0]
featuresContent.textContent = siteContent["main-content"]["features-content"]

const aboutTitle = mainSectionTitles[1]
aboutTitle.textContent = siteContent["main-content"]["about-h4"]
 
const aboutContent = mainSectionContent[1]
aboutContent.textContent = siteContent["main-content"]["about-content"]

const mainSectionMiddleImage = document.getElementById('middle-img')
mainSectionMiddleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const servicesTitle = mainSectionTitles[2]
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const servicesContent = mainSectionContent[2]
servicesContent.textContent = siteContent["main-content"]["services-content"]

const productTitle = mainSectionTitles[3]
productTitle.textContent = siteContent["main-content"]["product-h4"]

const productContent = mainSectionContent[3]
productContent.textContent = siteContent["main-content"]["product-content"]

const visionTitle = mainSectionTitles[4]
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visonContent = mainSectionContent[4]
visonContent.textContent = siteContent["main-content"]["vision-content"]

// Contact
const contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent.contact["contact-h4"]

const contactContent = document.querySelectorAll('.contact p')

const contactAdress = contactContent[0]
contactAdress.textContent = siteContent.contact.address

const contactPhone = contactContent[1]
contactPhone.textContent = siteContent.contact.phone

const contactEmail = contactContent[2]
contactEmail.textContent = siteContent.contact.email

// Footer
const footer = document.querySelector('footer p')
footer.textContent = siteContent.footer.copyright

// Task 3
// append and prepend

const navbar = document.querySelector('nav')

const prependLink = document.createElement('a')
prependLink.textContent = 'Home'
prependLink.style.color = 'green'

const appendLink = document.createElement('a')
appendLink.textContent = 'Training'
appendLink.style.color = 'green'

navbar.prepend(prependLink)
navbar.appendChild(appendLink)