function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var cursor=document.querySelector(".cursor");
var main=document.querySelector(".main");

document.addEventListener("mousemove",(e)=>{
    // cursor.style.left=e.x+20+"px";
    // cursor.style.top=e.y+20+"px";
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
    })
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
     scale: 1.5,
     duration:0.5,
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -115%",
        end: "top -125%",
        scrub: 3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff"
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -290%",
        end: "top -310%",
        scrub: 3
    }
})

tl3.to(".main",{
    backgroundColor:"#0f0d0d",
})

var box=document.querySelectorAll(".box");

box.forEach((elem)=>{
    elem.addEventListener("mouseenter",(e)=>{
        var att=elem.getAttribute("data-image");
        cursor.style.width="250px";
        cursor.style.height="200px";
        cursor.style.borderRadius="0%";
        cursor.style.backgroundImage=`url(${att})`;
        cursor.style.zIndex="9";
    })
})
box.forEach((elem)=>{
    elem.addEventListener("mouseleave",(e)=>{
        var att=elem.getAttribute("data-image");
        cursor.style.width="20px";
        cursor.style.height="20px";
        cursor.style.borderRadius="50%";
        cursor.style.backgroundImage="none";
    })
})

var h4=document.querySelectorAll("#nav-part2 h4");

h4.forEach((elem,i)=>{
    elem.addEventListener("click",()=>{
        elem.classList.add('line');
        for(let j=0;j<h4.length;j++){
            if(j!=i){
                h4[j].classList.remove('line');
            }
        }
    })
})


