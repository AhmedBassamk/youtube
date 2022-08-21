var sticky = document.getElementById('four')
var margin = document.getElementById('et')
var header = document.getElementById('h')
var click = document.querySelectorAll('#v')
var pop = document.getElementById('pop')
window.onscroll = (params) => {
    // if(window.scrollY >= "600"){
    //     sticky.style.position = "fixed"
    //     sticky.style.top = "-100px"
    //     margin.style.marginLeft = "230px"
    // }else{
    //     margin.style.marginLeft = "0px"
    //     sticky.style.top = "0"
    //     sticky.style.position = "relative"
    // }
    if(window.scrollY >= "5"){
        header.style.backgroundColor = "rgb(216, 1, 1)"
        header.style.transition = ".5s"
        header.style.border = "2px solid white"
        header.style.boxShadow = "inset 0 0 10px white"
    }else{
        header.style.backgroundColor = "white"

    }

}
click.forEach((item) => {
    item.onclick = function mm () {
        pop.style.display = "block" 
     }
})
pop.onclick = function out(){
    this.style.display = "none"
}