function part1(){
    var tl = gsap.timeline()
    tl.from("nav h1,nav h4, nav button",{
        y:-30,
        opacity:0,
        duration:0.4,
        stagger:0.2,
        delay:0.2
    })
    tl.from("#center-part1 h1",{
        x:-200,
        opacity:0,
        duration:0.6,
        delay:0.3
    })
    tl.from("#center-part1 p",{
        x:-100,
        opacity:0,
        duration:0.3,
        delay:0.1
    })
    tl.from("#center-part1 button",{
       
        opacity:0,
        duration:0.5,
        delay:0.2
    })
    tl.from("#center-part2 img",{
       
        opacity:0,
        duration:0.5,
        delay:0.2
    },"-=1.6")
    tl.from(".sec-bottom1 img",{
        y:30,
        opacity:0,
        duration:0.8,
        stagger:0.3,
     scrollTrigger:{
        scroller:"body",
        trigger:".sec-bottom1",
        start:"top 20%",
        end:"bottom 53%",
    scrub:1
     }
    })
}
 part1()
var tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".section2",
        start:"top 50%",
        end:"top    -50%",

    scrub:2
     }
})
tl2.from(".services",{
    x:30,
    duration:0.5,
    opacity:0
})
tl2.from(".elem.whites.left",{
    x:-300,
    duration:1,
    opacity:0,
    delay:0.5
},"first")
tl2.from(".elem.black.right",{
    x:300,
    duration:1,
    opacity:0,
    delay:0.5
},"first")
tl2.from(".elem.black.left",{
    x:-300,
    duration:1,
    opacity:0,
    delay:0.5
},"second")
tl2.from(".elem.whites.right",{
    x:300,
    duration:1,
    opacity:0,
    delay:0.5
},"second")