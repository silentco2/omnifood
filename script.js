function hide_icon() {
    var icon = document.getElementById("icon");
    var nav_list = document.getElementById("nav-items")
    if(icon.classList.contains("fa-xmark")) {
        icon.classList.remove("fa-xmark");
        nav_list.style.animationName = "slide-down";
    }
    else {
        icon.classList.add("fa-xmark");
        nav_list.style.animationName = "slide-up";
        nav_list.style.animationPlayState = "running";
    }
}
function hide_icon_sub() {
    var icon = document.getElementById("icon-sub");
    var nav_list = document.getElementById("nav-items-sub")
    if(icon.classList.contains("fa-xmark")){
        icon.classList.remove("fa-xmark");
        nav_list.style.animationName = "slide-down";
        setTimeout(function(){
            nav_list.style.display = "none";},200);
    }
    else {
        icon.classList.add("fa-xmark");
        nav_list.style.display = "flex";
        nav_list.style.animationName = "slide-up";
        nav_list.style.animationPlayState = "running";
    }
}
function show_bar(){
    if (window.pageYOffset > window.innerHeight-50)document.getElementById("nav-sub").style.display = "flex";
    else document.getElementById("nav-sub").style.display = "none";
    if(in_viewport(document.getElementById("food-delivery")))document.getElementById("features").style.opacity = 1;
    if(in_viewport(document.getElementById("how-it-works")))document.getElementById("iphone").style.animationPlayState = "running";
    if(in_viewport(document.getElementById("our-cities")))document.getElementById("cities").style.opacity = 1;
    if(in_viewport(document.getElementById("sign-up")))document.getElementById("premium").style.animationPlayState = "running";

}
function show_list(){
    if (window.innerWidth>820) document.getElementById("nav-items-sub").style.display = "flex";
    else if(!document.getElementById("icon-sub").classList.contains("fa-xmark")) document.getElementById("nav-items-sub").style.display = "none";
}
function in_viewport(elem){
    return (elem.getBoundingClientRect().top <= 180);
}
function sign_scroll(){
    document.getElementById("sign-up").scrollIntoView({behavior: "smooth"});
}
function feat_scroll(){
    document.getElementById("food-delivery").scrollIntoView({behavior: "smooth"});
}
document.addEventListener("scroll", show_bar);
window.addEventListener("resize", show_list);
document.addEventListener("scroll", feat_appear);