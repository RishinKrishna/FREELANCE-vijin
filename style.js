gsap.registerPlugin(ScrollTrigger);

//Main_Heading
const content1 = document.querySelector(".content1")
const section1 = document.querySelector(".heading2")


//Main_Heading
let hiAnim = gsap.timeline({
    scrollTrigger: {
        trigger: content1,
        markers: false,
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
        markers: false,
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
        markers: false,
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
        markers: false,
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
        markers: false,
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
        markers: false,
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
        markers: false,
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
        markers: false,
        start: "top 80% ",
        end: "bottom 80% ",
        toggleActions: "play  restart "
    } 
});


hiAnim8.fromTo(index_woek_section_chaild,{opacity:"0" ,x:100}, {duration:2,opacity:"1" ,x:0,ease: "power2.inOut"})


/////////////////////////////////////////////////////////////////////////////////////////////////////////


const work_header = document.querySelector(".work-header")
const work_header_chald = document.querySelector(".work-header-chald")

let hiAnim9 = gsap.timeline({
    scrollTrigger: {
        trigger: work_header,
        markers: false,
        start: "top 80% ",
        end: "bottom 80% ",
        toggleActions: "play  restart "
    } 
});


hiAnim9.fromTo(work_header_chald,{opacity:"0" ,x:-100}, {duration:1.3,opacity:"1" ,x:0,ease: "power2.inOut"})


////////////////////////////////////////////////////////////////////////////////////


const work_paragraph = document.querySelector(".work-paragraph")
const work_paragraph_chaild = document.querySelector(".work-paragraph-chaild")

let hiAnim10 = gsap.timeline({
    scrollTrigger: {
        trigger: work_paragraph,
        markers: false,
        start: "top 80% ",
        end: "bottom 80% ",
        toggleActions: "play  restart "
    } 
});


hiAnim10.fromTo(work_paragraph_chaild,{opacity:"0" ,y:-100}, {duration:1.3,opacity:"1" ,y:0,ease: "elastic"})

/////////////////////////////////////////////////////////////////////////////////////


const work_cards_animation_1 = document.querySelector(".work-cards-animation-1")
const work_cards_chaild_1 = document.querySelector(".work-cards-chaild-1")

let hiAnim11 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_animation_1,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim11.fromTo(work_cards_chaild_1,{opacity:"0" ,y:100}, {duration:0.3,opacity:"1" ,y:0,ease: "power2.inOut"})


//////////////////////////////////////////////////////////////////////


 
const work_cards_viewBtn_animation_1 = document.querySelector(".work-cards-viewBtn-animation-1")
const work_cards_viewBtn_chaild_1 = document.querySelector(".work-cards-viewBtn-chaild-1")

let hiAnim12 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_viewBtn_animation_1,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim12.fromTo(work_cards_viewBtn_chaild_1,{opacity:"0" ,y:100}, {duration:0.5,opacity:"1" ,y:0,ease: "power2.inOut"})

//////////////////////////////////////////////////////////////////////////////////////


const work_cards_animation_2 = document.querySelector(".work-cards-animation-2")
const work_cards_chaild_2 = document.querySelector(".work-cards-chaild-2")

let hiAnim13 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_animation_2,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim13.fromTo(work_cards_chaild_2,{opacity:"0" ,y:100}, {duration:0.3,opacity:"1" ,y:0,ease: "power2.inOut"})

////////////////////////////////////////////////////////////////////////////

const work_cards_viewBtn_animation_2 = document.querySelector(".work-cards-viewBtn-animation-2")
const work_cards_viewBtn_chaild_2 = document.querySelector(".work-cards-viewBtn-chaild-2")

let hiAnim14 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_viewBtn_animation_2,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim14.fromTo(work_cards_viewBtn_chaild_2,{opacity:"0" ,y:100}, {duration:0.5,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////

const work_cards_animation_3 = document.querySelector(".work-cards-animation-3")
const work_cards_chaild_3 = document.querySelector(".work-cards-chaild-3")

let hiAnim15 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_animation_3,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim15.fromTo(work_cards_chaild_3,{opacity:"0" ,y:100}, {duration:0.3,opacity:"1", y:0,ease: "power2.inOut"})

////////////////////////////////////////////////////////////////////////////

const work_cards_viewBtn_animation_3 = document.querySelector(".work-cards-viewBtn-animation-3")
const work_cards_viewBtn_chaild_3 = document.querySelector(".work-cards-viewBtn-chaild-3")

let hiAnim16 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_viewBtn_animation_3,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim16.fromTo(work_cards_viewBtn_chaild_3,{opacity:"0" ,y:100}, {duration:0.5,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////

const work_cards_animation_4 = document.querySelector(".work-cards-animation-4")
const work_cards_chaild_4 = document.querySelector(".work-cards-chaild-4")

let hiAnim17 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_animation_4,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim17.fromTo(work_cards_chaild_4,{opacity:"0" ,y:100}, {duration:0.3,opacity:"1" ,y:0,ease: "power2.inOut"})

////////////////////////////////////////////////////////////////////////////

const work_cards_viewBtn_animation_4 = document.querySelector(".work-cards-viewBtn-animation-4")
const work_cards_viewBtn_chaild_4 = document.querySelector(".work-cards-viewBtn-chaild-4")

let hiAnim18 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_viewBtn_animation_4,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim18.fromTo(work_cards_viewBtn_chaild_4,{opacity:"0" ,y:100}, {duration:0.5,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////

const work_cards_animation_5 = document.querySelector(".work-cards-animation-5")
const work_cards_chaild_5 = document.querySelector(".work-cards-chaild-5")

let hiAnim19 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_animation_5,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim19.fromTo(work_cards_chaild_5,{opacity:"0" ,y:100}, {duration:0.3,opacity:"1" ,y:0,ease: "power2.inOut"})

////////////////////////////////////////////////////////////////////////////

const work_cards_viewBtn_animation_5 = document.querySelector(".work-cards-viewBtn-animation-5")
const work_cards_viewBtn_chaild_5 = document.querySelector(".work-cards-viewBtn-chaild-5")

let hiAnim20 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_viewBtn_animation_5,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim20.fromTo(work_cards_viewBtn_chaild_5,{opacity:"0" ,y:100}, {duration:0.5,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////

const work_cards_animation_6 = document.querySelector(".work-cards-animation-6")
const work_cards_chaild_6 = document.querySelector(".work-cards-chaild-6")

let hiAnim21 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_animation_6,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim21.fromTo(work_cards_chaild_6,{opacity:"0" ,y:100}, {duration:0.3,opacity:"1" ,y:0,ease: "power2.inOut"})

////////////////////////////////////////////////////////////////////////////

const work_cards_viewBtn_animation_6 = document.querySelector(".work-cards-viewBtn-animation-6")
const work_cards_viewBtn_chaild_6 = document.querySelector(".work-cards-viewBtn-chaild-6")

let hiAnim22 = gsap.timeline({
    scrollTrigger: {
        trigger: work_cards_viewBtn_animation_6,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim22.fromTo(work_cards_viewBtn_chaild_6,{opacity:"0" ,y:100}, {duration:0.5,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////


const work_bottum_heading = document.querySelector(".work-bottum-heading")
const work_bottum_heading_chaild = document.querySelector(".work-bottum-heading-chaild")

let hiAnim23 = gsap.timeline({
    scrollTrigger: {
        trigger: work_bottum_heading,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim23.fromTo(work_bottum_heading_chaild,{opacity:"0" ,x:100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////

const work_paragraph_heading = document.querySelector(".work-paragraph-heading")
const work_bottum_paragraph_chaild = document.querySelector(".work-bottum-paragraph-chaild")

let hiAnim24 = gsap.timeline({
    scrollTrigger: {
        trigger: work_paragraph_heading,
        markers: false,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim24.fromTo(work_bottum_paragraph_chaild,{opacity:"0" ,y:100}, {duration:1,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////

const index_img_1 = document.querySelector(".index-img-1")
const index_img_chaild_1 = document.querySelector(".index-img-chaild-1")

let hiAnim25 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_1,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim25.fromTo(index_img_chaild_1,{opacity:"0" ,y:100}, {duration:1,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////


const index_img_view_btn_1 = document.querySelector("index-img-view-btn-1")
const index_img_view_btn_chaild_1 = document.querySelector(".index-img-view-btn-chaild-1")

let hiAnim26 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_view_btn_1,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim26.fromTo(index_img_view_btn_chaild_1,{opacity:"0" ,y:100}, {duration:2,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////

const index_img_2 = document.querySelector(".index-img-2")
const index_img_chaild_2 = document.querySelector(".index-img-chaild-2")

let hiAnim27 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_2,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim27.fromTo(index_img_chaild_2,{opacity:"0" ,y:100}, {duration:1,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////


const index_img_view_btn_2 = document.querySelector("index-img-view-btn-2")
const index_img_view_btn_chaild_2 = document.querySelector(".index-img-view-btn-chaild-2")

let hiAnim28 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_view_btn_2,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim28.fromTo(index_img_view_btn_chaild_2,{opacity:"0" ,y:100}, {duration:2,opacity:"1" ,y:0,ease: "power2.inOut"})


const index_img_3 = document.querySelector(".index-img-3")
const index_img_chaild_3 = document.querySelector(".index-img-chaild-3")

let hiAnim29 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_3,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim29.fromTo(index_img_chaild_3,{opacity:"0" ,y:100}, {duration:1,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////


const index_img_view_btn_3 = document.querySelector("index-img-view-btn-3")
const index_img_view_btn_chaild_3 = document.querySelector(".index-img-view-btn-chaild-3")

let hiAnim30 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_view_btn_3,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim30.fromTo(index_img_view_btn_chaild_3,{opacity:"0" ,y:100}, {duration:2,opacity:"1" ,y:0,ease: "power2.inOut"})


const index_img_4 = document.querySelector(".index-img-4")
const index_img_chaild_4 = document.querySelector(".index-img-chaild-4")

let hiAnim31 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_4,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim31.fromTo(index_img_chaild_4,{opacity:"0" ,y:100}, {duration:1,opacity:"1" ,y:0,ease: "power2.inOut"})

///////////////////////////////////////////////////////////////////////////////


const index_img_view_btn_4 = document.querySelector("index-img-view-btn-4")
const index_img_view_btn_chaild_4 = document.querySelector(".index-img-view-btn-chaild-4")

let hiAnim32 = gsap.timeline({
    scrollTrigger: {
        trigger: index_img_view_btn_4,
        markers: false,
        start: "top 70% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});


hiAnim32.fromTo(index_img_view_btn_chaild_4,{opacity:"0" ,y:100}, {duration:2,opacity:"1" ,y:0,ease: "power2.inOut"})
