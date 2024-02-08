var img=[];
var curimg=0;
function load_images(){
    for(i = 1; i < 8; i++){
        img[i]=new Image();
        img[i].src="https://nvandai1111.000webhostapp.com/bai60/anh60/btapb" + i + ".png";
    }
}
function next(){
    if(curimg < img.length - 1){
        curimg++;
        document.getElementById("btap").src=img[curimg].src;
    }
    if(curimg == img.length - 1){
        curimg = 0;
    }
}
function back(){
    if(curimg > 0 ){
        curimg--;
        document.getElementById("btap").src=img[curimg].src;
    }
    if(curimg==0){
        curimg = img.length - 1;
    }
}
function myFunction1(){
    document.getElementById("projects1").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
function myFunction2(){
    document.getElementById("projects2").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
function myFunction3(){
    document.getElementById("projects3").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
function myFunction4(){
    document.getElementById("projects4").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
function myFunction5(){
    document.getElementById("projects5").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
function myFunction6(){
    document.getElementById("projects6").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
function myFunction7(){
    document.getElementById("projects7").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
function myFunction8(){
    document.getElementById("projects8").classList.toggle("show");
}
window.onclick = function(event){
    if(event.targetmatches('.text')){
        var projects = document.getElementsByClassName("projects-content");
        var i;
        for(i=0;i<projects.length;i++){
            var openprojects = tprojects[i];
            if(openprojects.classList.contains("projects")){
                openprojects.classList.remove(projects);
            }
        }
    }
}
window.addEventListener('scroll', function() {
    var sidebar = document.getElementById('sidebar');
    var offset = sidebar.offsetHeight;
    if (window.pageYOffset > offset) {
        sidebar.classList.add('fade-out');
    }else{
        sidebar.classList.remove('fade-out');
    }
});

var sidebar = document.getElementById('sidebar');
sidebar.addEventListener('mouseenter', function(){
    sidebar.style.opacity = "1";
});

sidebar.addEventListener('mouseleave', function(){
    var offset = sidebar.offsetHeight;

    if(window.pageYOffset > offset){
        sidebar.style.opacity = "0.5";
    }
});
