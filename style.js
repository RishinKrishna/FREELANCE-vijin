gsap.registerPlugin(ScrollTrigger);

//Main_Heading
const content1 = document.querySelector(".content1")
const section1 = document.querySelector(".heading2")

//Right_Main-Peragraph
const index_main_pera_animate_right = document.querySelector(".index-main-pera-animate-right")
const index_main_pera_animate_chaild_right = document.querySelector(".index-main-pera-animate-chaild-right")

//Left_Main_Paragraph
const index_main_pera_animate_left = document.querySelector(".index-main-pera-animate-left")
const index_main_pera_animate_chaild_left = document.querySelector(".index-main-pera-animate-chaild-left")


// const workperant = document.querySelector(".work-perant")
// const workchaild = document.querySelector(".work-chaild")



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


//Right_Main-Peragraph
let hiAnim3 = gsap.timeline({
  scrollTrigger: {
      trigger: index_main_pera_animate_right,
      markers: true,
      start: "top 80% ",
      end: "bottom 10% ",
      toggleActions: "play  restart "
  } 
});
hiAnim3.fromTo(index_main_pera_animate_chaild_right,{opacity:"0" ,x:100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"})



//Left_Main_Paragraph
let hiAnim2 = gsap.timeline({
    scrollTrigger: {
        trigger: index_main_pera_animate_left,
        markers: true,
        start: "top 80% ",
        end: "bottom 10% ",
        toggleActions: "play  restart "
    } 
});
hiAnim3.fromTo(index_main_pera_animate_chaild_left,{opacity:"0" ,x:100}, {duration:1,opacity:"1" ,x:0,ease: "power2.inOut"})


  


//disord
// let hiAnim2 = gsap.timeline({
//   scrollTrigger: {
//       trigger: workperant,
//       markers: true,
//       start: "top 80% ",
//       end: "bottom 10% ",
//       toggleActions: "play  restart "
//   } 
// });
// hiAnim2.fromTo(workchaild,{opacity:".5",scale:"1"}, {duration:1,opacity:"1" ,scale:"1",ease: "power2.inOut"})






    