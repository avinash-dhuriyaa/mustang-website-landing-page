var tl = gsap.timeline()


tl.from(".logo h2, .navlinks ul, .ham",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5
})

tl.from(".image img",{
    x:-50,
    duration:0.4,
    opacity:0,
    blur:1,
    scale:0.8
})

tl.from(".content h2, .content h3",{
    y:50,
    duration:0.8,
    opacity:0,
    stagger:0.5
})

tl.from(".bottom-content",{
    x:100,
    duration:0.8,
    opacity:0,
    stagger:0.5
})

tl.from(".specification span",{
    y:100,
    duration:0.5,
    opacity:0,
    stagger:0.3
})
