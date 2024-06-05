gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1,
        effects: true,
    })

    gsap.fromTo('.header', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.header',
            start: "start",
            scrub: true,
        },
        duration: 2,
    })

    gsap.fromTo('.footer', {opacity: 0}, {
        opacity: 1,
        scrollTrigger: {
            trigger: '.footer',
            end: "center",
            scrub: true,
        },
        duration: 2,
    })

    gsap.fromTo('.main-skills-container', {x: 75, opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.main-skills-container',
            end: "-100",
            scrub: true,
        },
        duration: 2,
    })

    let itemsL = gsap.utils.toArray('.l-work');

    itemsL.forEach(item => {
        gsap.fromTo(item, {x: -75, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: "-100",
                scrub: true,
            }
        })
    });

    let itemsR = gsap.utils.toArray('.r-work');

    itemsR.forEach(item => {
        gsap.fromTo(item, {x: 75, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-850',
                end: "-100",
                scrub: true,
            }
        })
    });
}

var body = document.body, timer;

window.addEventListener('scroll', function() {
    clearTimeout(timer);
    if(!body.classList.contains('no-event')) {
        body.classList.add('no-event')
    }
    
    timer = setTimeout(function(){
        body.classList.remove('no-event')
    },50);

    let pr = Math.round(((window.scrollY * 100) / (document.body.scrollHeight - document.documentElement.clientHeight)));
    document.getElementById('scroll-bar').style.height = `${(pr / 100) * document.documentElement.clientHeight}px`;
}, false);