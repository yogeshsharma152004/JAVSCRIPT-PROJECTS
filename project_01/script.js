
gsap.to(".image-container",{
        ease:Expo.easeInOut,
        width:"100%",
        stagger:2,
       

})

gsap.to(".text h1" ,{
       ease:Expo.easeInOut,
       top:0,
       stagger:2,
       
})

gsap.to(".text h1" ,{
       delay:2,
       ease:Expo.easeInOut,
       stagger:2,
       top:"-100%",
})