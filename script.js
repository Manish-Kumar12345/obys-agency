function loadingAnimation(){
    var tl = gsap.timeline();
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.8,   // Slightly increased for smoother effect
        delay: 1,
        ease: "Power3.easeOut",   // Smoother easing
    });
    tl.from("#line1-part1", {
        opacity: 0,
        duration: 1,     // Increased duration for smooth opacity transition
        ease: "Power2.easeOut",  // Smooth fade-in
        onStart: function(){
            var h5timer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function(){
                if(grow < 100){
                    h5timer.innerHTML = grow++;
                } else {
                    h5timer.innerHTML = grow;
                }
            }, 33);
        },
    });
    tl.to("#loader", {
        opacity: 0,
        duration: 0.6,   // Increased duration for smoother fade-out
        delay: 4,
        ease: "Power2.easeInOut",  // Smooth in and out easing
    });
    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        opacity: 0,
        duration: 0.8,  // Increased for smooth entry
        ease: "Power3.easeOut",
    });
    tl.to("#loader", {
        display: "none",
    });
    tl.from("#nav", {
        opacity: 0,
        duration: 0.6,   // Fade-in for nav bar
        ease: "Power2.easeInOut",
    });
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 120,
        stagger: 0.2,
        duration: 0.8,   // Longer for smooth staggered animation
        ease: "Power3.easeOut",
    });
}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
            duration:0.5,
            ease:Power4,
        })
    });
    
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}
loadingAnimation();

cursorAnimation();