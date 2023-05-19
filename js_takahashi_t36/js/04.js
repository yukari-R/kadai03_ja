
var btn_start2 = document.querySelector(".btn_start2");
var btn_stop = document.querySelector(".btn_stop");


btn_start2.addEventListener("click", function () {
    document.querySelector(".anm_img").animate([
        { transform: 'translateX(0)'},
        { transform: 'translateX(1000px)'}],
        { fill: 'backwards', duration: 8000, });
    });

