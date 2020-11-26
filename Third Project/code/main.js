let tl=gsap.timeline();

tl.to('.ticket',{repeat:-1,rotation:-1,duraiton:3,ease: "sine.out"
})

d3.select('#toMuseum').on('click',entering)

function entering(){
    d3.select('.wallpaper').transition().duration(1000).style('width','0px')
    d3.select('body').style('overflow-y','auto')
    d3.select('.header').transition().duration(1000).style('opacity',1)
    tl.kill()
}
// Go to Museum Bin click했을 때, wallpaper의 width가 확 줄어드는 것을 Jquery로 할까
// 아니면 d3로 할까...