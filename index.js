function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}





locomotiveAnimation()













function NavAnimation() {
    var nav = document.querySelector('nav')


    nav.addEventListener("mouseenter", function () {
        const tl = gsap.timeline() //execute code step by step
        tl.to("#nav-bottom", {
            height: "25vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block"
        })

        tl.to('.nav-part2  h5 span', {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        const tl = gsap.timeline() //execute code step by step

        tl.to('.nav-part2 h5 span', {
            y: 25,
            // duration:0.3,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: "0vh",
            duration: 0.2
        })


    })

}

NavAnimation()



function page2() {
    const elem = document.querySelectorAll(".right-elem")
    const elemImg = document.querySelector(" .right-elem img")

    elem.forEach(function (element) {


        element.addEventListener("mouseenter", function () {
            // elem.style.opacity=1
            // console.log(element.childNodes)
            gsap.to(element.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        element.addEventListener("mouseleave", function () {
            gsap.to(element.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        element.addEventListener('mousemove', function (dets) {
            gsap.to(element.childNodes[3], {
                x: dets.x - element.getBoundingClientRect().x - 50,
                y: dets.y - element.getBoundingClientRect().y - 150,
            })
        })

    })

}

page2()


function page3() {

    const page3Center = document.querySelector(".page3-center")
    const video = document.querySelector("#page3 video")


    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })

}

page3()


function Video() {

    const sections = document.querySelectorAll(".sec-right")


    sections.forEach((section) => {
        section.addEventListener("mouseenter", function () {
            section.childNodes[3].style.opacity = 1
            section.childNodes[3].play()

        })

        section.addEventListener("mouseleave", function () {
            section.childNodes[3].style.opacity = 0
            // section.childNodes[3].pause();
            section.childNodes[3].load();

        })


    })
}

Video()







// this we will use when we don't use translate into css on h4's
// gsap.to("#btm6-part2 h4",{
//   x:150,
//   duration:1,
//   stagger:{
//     amount:-0.3
//   },  
//   scrollTrigger:{
//     trigger:"#btm6-part2",
//     scroller:"body",
//     markers:true,
//     start:"top 80%",
//     end:"top -80%",
//     scrub:true
//   }
// })

function page6() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        //   stagger:{
        //     amount:-0.3
        //   },
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top -10%",
            scrub: true
        }
    })
}

page6()


function loadindAnimation() {

}

var tl = gsap.timeline()

tl.from("#page1", {
    opacity:0,
    duration:0.3,
    delay:0.2
})

tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) rotate(-180deg)",
    borderRadius:"50px",
    background:"pink",
    duration:2,
    ease:"expo.out"
})

tl.from("nav", {
    opacity:0
})


tl.from("#page1 h1, #page1 div, #page1 p",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})