//auto hide nav bar when a link is clicked?
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


//dinamic text cacher

const myheader = new AutoTyping({
    id: 'bHightLite',
    typeText: ["MERN Stack Developer","Full Stack Developer","UI/UX Designer","Full Time Freelancer"],
    textColor: 'rgba(0,204,0)',
    cursor: '|',
  cursorColor: 'rgba(0,204,0)',
  cursorSpeed: 300
});
myheader.init();



//screenShow
var about=document.querySelector(".aboutnav");
var skill=document.querySelector(".skillnav");
var servise=document.querySelector(".servisenav");
var project=document.querySelector(".projectnav");
var navberResponse=document.querySelector("#navberResponse");











//Top scroll bar
var btn=document.querySelector(".attachBtn");
window.onscroll=function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
    btn.style.display="block";
    }else{
        btn.style.display="none";
    }
}
btn.addEventListener("click",()=>{
    document.body.scrollTop =0 ;
    document.documentElement.scrollTop=0;
});



var articalSeeMored=document.querySelector('.articalSeeMore');
articalSeeMored.addEventListener("click",()=>{
    if(articalSeeMored.innerHTML=='See More'){
        articalSeeMored.innerHTML='See Less';
    }else{
        articalSeeMored.innerHTML='See More';
    }
});



//aos animation
AOS.init({
    duration:1000,
    offset:200,
    delay:100, 
});


// see more btn
var seeMoreBtn=document.querySelector(".seeMoreBtn");
var lasti=document.querySelector("#lasti");
var lastii=document.querySelector("#lastii");
var lastiii=document.querySelector("#lastiii");

seeMoreBtn.addEventListener("click",()=>{
    if(seeMoreBtn.innerHTML=='See More'){
        seeMoreBtn.textContent="See Less";
        setTimeout(() => {
            lasti.style.display="block";
            lastii.style.display="block";
            lastiii.style.display='block'
        
        },30);
    }else if(seeMoreBtn.innerHTML=='See less'){
        seeMoreBtn.textContent="See More";
        lastii.style.display="none";
        lasti.style.display="none";
       lastiii.style.display='none'
    }else{
        seeMoreBtn.textContent="See More";
        lasti.style.display="none";
        lastii.style.display="none";
        lastiii.style.display="none";
        

    }
   
})

window.onresize=()=>{
    if(window.innerWidth>1513){
        lasti.style.display="block";
       lastii.style.display="block";
    }else if(window.innerWidth<1513){
        lasti.style.display="none";
       lastii.style.display="none";
    }
    if(window.innerWidth < 1513 && seeMoreBtn.innerHTML=='See Less'){
        seeMoreBtn.textContent="See More";
    }
    }

//sptp cdn for sending Emon form

emailjs.init('IuRqC37G35YJjtk3T');
var btn=document.querySelector(".sendBtn");
var form=document.querySelector("#form");
form.addEventListener("submit",(e)=>{
   e.preventDefault();
    btn.innerHTML = 'Sending..';

    const serviceID = 'default_service';
    const templateID = 'template_0dkwbxm';
 
    emailjs.sendForm(serviceID, templateID)
     .then(() => {
       btn.innerHTML = 'Send Email';
       alert('Email send Successfully!');
     }, (err) => {
       alert(JSON.stringify(err));
     });
});



    var exprienceProjectCompled=document.querySelector(".exprienceProjectCompled");
    var yearsOfExprience=document.querySelector(".yearsOfExprience");
    var happyClient=document.querySelector(".happyClient");
    var wonAword=document.querySelector(".wonAword");
    var i=0;
    setInterval(()=>{
        
 





        if(i<=13){
            exprienceProjectCompled.innerHTML=i+"+";  
        }
        if(i<=2){
            yearsOfExprience.innerHTML=i+"+";
        }
        if(i<=9){
            happyClient.innerHTML=i+"+";
        }
        if(i<=1){
            wonAword.innerHTML=i+"+";
        }
        i++;
    },200);


















    // VANTA.BIRDS({
    //     el:"#contact",
    //     mouseControls: true,
    //     touchControls: true,
    //     gyroControls: false,
    //     minHeight: 200.00,
    //     minWidth: 200.00,
    //     scale: 1.00,
    //     scaleMobile: 1.00,
    //     backgroundColor: 0x0,
    //     color1: 0xff77,
    //     color2: 0xff69,
    //     colorMode: "lerp",
    //     alignment: 17.00,
    //     quantity: 4.00,
    //     backgroundAlpha: 0.77,
    //     birdSize:1
    //   })
         
    // VANTA.BIRDS({
    //     el:"#serviseandproject",
    //     mouseControls: true,
    //     touchControls: true,
    //     gyroControls: false,
    //     minHeight: 200.00,
    //     minWidth: 200.00,
    //     scale: 1.00,
    //     scaleMobile: 1.00,
    //     backgroundColor: 0x0,
    //     color1: 0xff77,
    //     color2: 0xff69,
    //     colorMode: "lerp",
    //     alignment: 17.00,
    //     quantity: 4.00,
    //     backgroundAlpha: 0.77,
    //     birdSize:1
    //   })
      
    // VANTA.BIRDS({
    //     el:"#vintas-globalSection",
    //     mouseControls: true,
    //     touchControls: true,
    //     gyroControls: false,
    //     minHeight: 200.00,
    //     minWidth: 200.00,
    //     scale: 1.00,
    //     scaleMobile: 1.00,
    //     backgroundColor: 0x0,
    //     color1: 0xff77,
    //     color2: 0xff69,
    //     colorMode: "lerp",
    //     alignment: 17.00,
    //     quantity: 4.00,
    //     backgroundAlpha: 0.77,
    //     birdSize:1
    //   })
    //   VANTA.BIRDS({
    //     el:"#vintaz-global-head",
    //     mouseControls: true,
    //     touchControls: true,
    //     gyroControls: false,
    //     minHeight: 200.00,
    //     minWidth: 200.00,
    //     scale: 1.00,
    //     scaleMobile: 1.00,
    //     backgroundColor: 0x0,
    //     color1: 0xff77,
    //     color2: 0xff69,
    //     colorMode: "lerp",
    //     alignment: 17.00,
    //     quantity: 4.00,
    //     backgroundAlpha: 0.77,
    //     birdSize:1
    //   })