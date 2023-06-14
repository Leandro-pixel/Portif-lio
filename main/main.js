//Element selections
const targetArrow = document.querySelector('[data-animeSeta]');
const targetElements = document.querySelectorAll('[data-animeIntro]');
const targetElementsNav = document.querySelector('[data-animeNav]');
const targetElementsLinks = document.querySelector('[data-animeLinks]');
const targetElementsName = document.querySelector('[data-animeName]');
const target = document.querySelectorAll('[data-scroll]');

const seta = document.querySelector('.seta')
const javaIcon = document.querySelector('#javaIcon');
const htmlIcon = document.querySelector('#htmlIcon');
const cssIcon = document.querySelector('#cssIcon');
const nodeIcon = document.querySelector('#nodeIcon');
const reactIcon = document.querySelector('#reactIcon');

const sectionInfo = document.querySelector('.sectionInfo');
const javaInfo = document.querySelector('.java');
const htmlInfo = document.querySelector(".html");
const cssInfo = document.querySelector(".css");
const nodeInfo = document.querySelector(".node");
const reactInfo = document.querySelector(".react");

//Variables
const animationClassArrow1 = 'animateStep1';
const animationClassArrow2 = 'animateStep2';
const animationClassElements = 'animateElements';
const animationClassNav = 'animateElementNav';
const animationClassLinks = 'animateElementLinks';
const animationClassName = 'animateElementsName';
const animationClass = 'animate'

let isExecuted = false;

/*funções*/

//Arrow animation
function arrow() {
  seta.classList.remove("hide");
    targetArrow.classList.add(animationClassArrow1);
  
    setInterval(() => {
      targetArrow.classList.remove(animationClassArrow1);
      targetArrow.classList.add(animationClassArrow2);
  
      setTimeout(() => {
        targetArrow.classList.remove(animationClassArrow2);
        targetArrow.classList.add(animationClassArrow1);
      }, 1000);
    }, 2000);
  }

  setTimeout(() => {
    const nameElement = document.getElementById('name');
    nameElement.classList.add('stop-animation');
    nameElement.style.borderColor = '#161414'
}, 4000);

//Intro animation

function intro() {
  setTimeout(() => {
    targetElements.forEach(function(element) { // Itera sobre cada elemento da página
      element.classList.add(animationClassElements); // Adiciona a classe de animação aos elementos
    
  
    });
  }, 6000);
}

function nav() {
  setTimeout(() => {

      targetElementsNav.classList.add(animationClassNav); 
 
  }, 7000);
}

function Links() {
  setTimeout(() => {

      targetElementsLinks.classList.add(animationClassLinks); 
      isExecuted = true;
  }, 7000);
}

function letterName() {
  setTimeout(() => {

      targetElementsName.classList.add(animationClassName); 
 
  }, 4000);
}

//função scroll
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function animeScroll() {

  if (isExecuted == true) {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4); 
    target.forEach(function(e) { 
   
       if((windowTop)>e.offsetTop) { 
           e.classList.add(animationClass); 
       } else {
           e.classList.remove(animationClass); 
       }
      
    });
 }
  }

    

 if(target.length) { 
  window.addEventListener('scroll', debounce(function(){
      animeScroll();
  }, 50)); 
}

//Technologies mouseover animation

javaIcon.addEventListener("mouseover", function(){
  javaInfo.classList.remove("hide");
  sectionInfo.classList.add("hide");
});

htmlIcon.addEventListener("mouseover", function(){
  htmlInfo.classList.remove("hide");
  sectionInfo.classList.add("hide");
});

cssIcon.addEventListener("mouseover", function(){
  cssInfo.classList.remove("hide");
  sectionInfo.classList.add("hide");
});

nodeIcon.addEventListener("mouseover", function(){
  nodeInfo.classList.remove("hide");
  sectionInfo.classList.add("hide");
});

reactIcon.addEventListener("mouseover", function(){
  reactInfo.classList.remove("hide");
  sectionInfo.classList.add("hide");
});

//Technologies mouseout

javaIcon.addEventListener("mouseout", function(){
  javaInfo.classList.add("hide");
  sectionInfo.classList.remove("hide");
});

htmlIcon.addEventListener("mouseout", function(){
  htmlInfo.classList.add("hide");
  sectionInfo.classList.remove("hide");
});

cssIcon.addEventListener("mouseout", function(){
  cssInfo.classList.add("hide");
  sectionInfo.classList.remove("hide");
});

nodeIcon.addEventListener("mouseout", function(){
  nodeInfo.classList.add("hide");
  sectionInfo.classList.remove("hide");
});

reactIcon.addEventListener("mouseout", function(){
  reactInfo.classList.add("hide");
  sectionInfo.classList.remove("hide");
});

//events

  setTimeout(() => {

    arrow();

}, 5000);
  

intro();
nav();
Links();
letterName();
animeScroll();