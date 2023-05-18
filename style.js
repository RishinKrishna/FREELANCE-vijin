gsap.registerPlugin(ScrollTrigger);

//Main_Heading
const content1 = document.querySelector(".content1")
const section1 = document.querySelector(".heading2")


//Main_Heading
let hiAnim = gsap.timeline({
    scrollTrigger: {
        trigger: content1,
        markers: true,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});
hiAnim.fromTo(section1,{opacity:"0" ,x:-100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////////////////

//Right_Main-Peragraph
const index_main_pera_animate_right = document.querySelector(".index-main-pera-animate-right")
const index_main_pera_animate_chaild_right = document.querySelector(".index-main-pera-animate-chaild-right")



//Right_Main-Peragraph
let hiAnim2 = gsap.timeline({
    scrollTrigger: {
        trigger: index_main_pera_animate_right,
        markers: true,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
  });
  hiAnim2.fromTo(index_main_pera_animate_chaild_right,{opacity:"0" ,x:100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"})
  
  //////////////////////////////////////////////////////////////////////////////////////////////////
  
//Left_Main_Paragraph
const index_main_pera_animate_left = document.querySelector(".index-main-pera-animate-left")
const index_main_pera_animate_chaild_left = document.querySelector(".index-main-pera-animate-chaild-left")


//Left_Main_Paragraph
let hiAnim3 = gsap.timeline({
    scrollTrigger: {
        trigger: index_main_pera_animate_left,
        markers: true,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});
hiAnim3.fromTo(index_main_pera_animate_chaild_left,{opacity:"0" ,x:-100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"})


////////////////////////////////////////////////////////////////////////////////////////////////////

const index_about_paragraph_animation = document.querySelector(".index-about-paragraph-animation-chaild")
const index_about_paragraph_animation_chaild = document.querySelector(".index-about-paragraph-animation-chaild")



let hiAnim4 = gsap.timeline({
    scrollTrigger: {
        trigger: index_about_paragraph_animation,
        markers: true,
        start: "top 100% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim4.fromTo(index_about_paragraph_animation_chaild,{opacity:"0" ,y:100}, {duration:2,opacity:"1" ,y:0,ease: "power2.inOut"})

//////////////////////////////////////////////////////////////////////////////////////////////////

const index_about_social_links_animation = document.querySelector(".index-about-social-links-animation")
const index_about_social_links_animation_chaild = document.querySelector(".index-about-social-links-animation-chaild")


let hiAnim5 = gsap.timeline({
    scrollTrigger: {
        trigger: index_about_social_links_animation,
        markers: true,
        start: "top 100% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim5.fromTo(index_about_social_links_animation_chaild,{opacity:"0" ,y:-100}, {duration:1,opacity:"1" ,y:0,ease: "power2.inOut"})

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const index_work_animation = document.querySelector(".index-work-animation")
const index_work_animation_chaild = document.querySelector(".index-work-animation-chaild")



let hiAnim6 = gsap.timeline({
    scrollTrigger: {
        trigger: index_work_animation,
        markers: true,
        start: "top 100% ",
        end: "bottom 80% ",
        toggleActions: "play  restart "
    } 
});


hiAnim6.fromTo(index_work_animation_chaild,{opacity:"0" ,x:100}, {duration:2,opacity:"1" ,x:0,ease: "power2.inOut"})

//////////////////////////////////////////////////////////////////////////////////////////////////////////


const index_Expertise_section = document.querySelector(".index-Expertise-section")
const index_Expertise_section_chaild = document.querySelector(".index-Expertise-section-chaild")


let hiAnim7 = gsap.timeline({
    scrollTrigger: {
        trigger: index_Expertise_section,
        markers: true,
        start: "top 100% ",
        end: "bottom 80% ",
        toggleActions: "play  restart "
    } 
});


hiAnim7.fromTo(index_Expertise_section_chaild,{opacity:"0" ,x:-100}, {duration:2,opacity:"1" ,x:0,ease: "power2.inOut"})


//////////////////////////////////////////////////////////////////////////////////////////////////////////


const index_work_section = document.querySelector(".index-work-section")
const index_woek_section_chaild = document.querySelector(".index-woek-section-chaild")

let hiAnim8 = gsap.timeline({
    scrollTrigger: {
        trigger: index_work_section,
        markers: true,
        start: "top 80% ",
        end: "bottom 80% ",
        toggleActions: "play  restart "
    } 
});


hiAnim8.fromTo(index_woek_section_chaild,{opacity:"0" ,x:100}, {duration:2,opacity:"1" ,x:0,ease: "power2.inOut"})
