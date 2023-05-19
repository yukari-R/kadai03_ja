document.querySelector(".btn_back").onclick = function(){

    var elapsedTime = 0;

    var mb = document.querySelector("#mb");
    mb.style.display = "block";

    var mb_img = document.querySelector("#mb_img");
    document.getElementById("mb_img").src = "mb.png";

    var btn_start = document.querySelector(".btn_start");
    btn_start.style.display = "block";

    var anm_title = document.querySelector(".anm_title");
    anm_title.style.display ="none";

    var anm_imgbox = document.querySelector(".anm_imgbox");
    anm_title.style.display ="none";

    var btn_start2 = document.querySelector(".btn_start2");
    btn_start2.style.display ="none";

    var btn_stop = document.querySelector(".btn_stop");
    btn_stop.style.display ="none";

    var anm_img = document.querySelector(".anm_img");
    anm_img.style.display ="none";

    var hr = document.querySelector(".hr");
    hr.style.display ="none";

    var btn_back = document.querySelector(".btn_back");
    btn_back.style.display ="none";

    var result_text = document.querySelector(".result_text");
    result_text.style.display = "none";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "none";

}