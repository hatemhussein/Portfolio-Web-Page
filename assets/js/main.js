/**
 * change the nav color when scroll
 * smooth scroll
 * scroll to top
 * loading screen
 */

// changing navColor
let navbar = document.getElementById('navbar');
window.addEventListener('scroll',function(){
    if(window.scrollY > 50){
        navbar.classList.add('newBgColor');
        navbar.style.transition='1s';
    }
    else{
        navbar.classList.remove('newBgColor');
        navbar.style.transition='1s';
    }
    
});

//smooth scroll
let links = document.querySelectorAll('nav a');
links.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();
        let currentId =e.target.attributes.href.value;
        let sectionPosition = document.querySelector(currentId).offsetTop;
        window.scroll({
            top:sectionPosition,
            behavior:"smooth"
        });
        console.log(sectionPosition);

    })
})

// scroll to top
document.querySelector('.top').style.opacity='0';
window.addEventListener('scroll',function(){
    let aboutPosition = this.document.getElementById('about').offsetTop;
    if(window.scrollY > aboutPosition){
        document.querySelector('.top').style.opacity='1';
        document.querySelector('.top').style.transition='.7s';
    }
    else{
        document.querySelector('.top').style.opacity='0';
        document.querySelector('.top').style.transition='.7s';
    }
    
});

let topBtn = document.querySelector('.top button');
topBtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

// loading screen
let body = document.body;
body.style.overflow="hidden";
document.querySelector('.loading').style.opacity='1';
document.querySelector('.loading').style.visibility='visible';
document.querySelector('.loading').style.transition='1s';

window.addEventListener('load',function(){
    setTimeout(function(){
   
        document.querySelector('.loading').style.opacity='0';
        document.querySelector('.loading').style.visibility='hidden';
        document.querySelector('.loading').style.transition='1s';
        body.style.overflow="auto";
    },1500)
})