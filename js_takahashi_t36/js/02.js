document.querySelector(".btn_no").onclick = function(){
    var random1 = Math.floor(Math.random() *3+1 );
    if(random1 ==1){
        console.log("美味しいものを食べたい！");
        var sp_doc = document.querySelector(".sp_doc");
        sp_doc.innerHTML = ("");
        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.backgroundColor="#db7093";
        var mb_img = document.querySelector("#mb_img");
        document.getElementById("mb_img").src = "pt1.png";
    }else if(random1 ==2){
        console.log("ゆっくり過ごしたい");
        var sp_doc = document.querySelector(".sp_doc");
        sp_doc.innerHTML = ("");
        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.backgroundColor="#db7093";
        var mb_img = document.querySelector("#mb_img");
        document.getElementById("mb_img").src = "pt2.png";
    }else if(random1 ==3){
        console.log("新しいものに触れたい");
        var sp_doc = document.querySelector(".sp_doc");
        sp_doc.innerHTML = ("");
        var btn_yes = document.querySelector(".btn_yes");
        btn_yes.style.backgroundColor="#db7093";
        var mb_img = document.querySelector("#mb_img");
        document.getElementById("mb_img").src = "pt3.png";
    }

    var btn_start2 = document.querySelector(".btn_start2");
var btn_stop = document.querySelector(".btn_stop");
var startTime;
var elapsedTime = 0;
var intervalID;

btn_start2.addEventListener("click", function(){
    startTime = new Date()
    intervalID = setInterval(function(){
        elapsedTime += Date.now() - startTime
        console.log(elapsedTime)
    },10)
});

btn_stop.addEventListener("click", function(){
    clearInterval(intervalID)

var random2 = Math.floor(Math.random() *2+1 );

if(random2 ==1 && random1 == 1 && elapsedTime <= 300000 ){    
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("A通りに最近オープンしたカフェへ");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "A通りに最近オープンしたカフェへ、";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "fd_st_1.png";

}else if(random2 == 2 && random1 == 1 && elapsedTime <= 300000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("サンドイッチを持ってB公園でピクニック");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "サンドイッチを持ってB公園でピクニック、";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "fd_st_2.png";

}else if(random2 ==1 && random1 ==1 && elapsedTime <= 1000000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("隣の県でモーニング");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "隣の県でモーニング、";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "fd_md_1.png";

}else if(random2 ==2 && random1 ==1 && elapsedTime <= 100000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("隣の県へかき氷を食べに");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "隣の県へかき氷を食べに、";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "fd_md_2.png";

}else if(random2 == 1 && random1 ==1 && elapsedTime <= 2900000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("C島までドライブで海鮮を食べに行こう");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "C島までドライブで海鮮を食べに行こう、";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "fd_lg_1.png";

}else if(random2 == 2 && random1 ==1 && elapsedTime <= 2900000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("D半島でフルーツ狩りをしよう");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "D半島でフルーツ狩りをしよう、";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "fd_lg_2.png";

}else if(random2 == 1 && random1 == 2 && elapsedTime <= 300000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("シートの広い映画館へ");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "シートの広い映画館へ、";

    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "yy_st_1.png";

}else if(random2 == 2 && random1 == 2 && elapsedTime <= 300000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("E市にできた新しいビジネスホテルへ");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "E市にできた新しいビジネスホテルへ、";
    
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "yy_st_2.png";

}else if(random2 == 1 && random1 == 2 && elapsedTime <= 1000000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("水族館へ");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "水族館へ、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "yy_md_1.png";

}else if(random2 == 2 && random1 == 2 && elapsedTime <= 1000000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("温泉施設で１日ゆっくり過ごす");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "温泉施設で１日ゆっくり過ごす、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "yy_md_2.png";
}else if(random2 == 1 && random1 == 2 && elapsedTime <= 2900000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("グランピングへ");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "グランピングへ、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "yy_lg_1.png";

}else if(random2 == 2 && random1 == 2 && elapsedTime <= 2900000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("温泉旅館で１日ゆっくり過ごす");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "温泉旅館で１日ゆっくり過ごす、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "yy_lg_2.png";
}else if(random2 == 1 && random1 == 3 && elapsedTime <= 300000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("F美術館の美術展へ");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "F美術館の美術展へ、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "ch_st_1.png";

}else if(random2 == 2 && random1 == 3 && elapsedTime <= 300000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("G市の科学館で勉強");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "G市の科学館で勉強、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "ch_st_2.png";

}else if(random2 == 1 && random1 == 3 && elapsedTime <= 1000000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("アートフェスタで新しいものに触れる");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "アートフェスタで新しいものに触れる、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "ch_md_1.png";

}else if(random2 == 2 && random1 == 3 && elapsedTime <= 1000000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("新しくオープンしたショッピングモールへ");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "新しくオープンしたショッピングモールへ、";
        
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "ch_md_2.png";

}else if(random2 == 1 && random1 == 3 && elapsedTime <= 2900000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("マルシェで食材調達");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "マルシェで食材調達、";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "ch_lg_1.png";

}else if(random2 == 2 && random1 == 3 && elapsedTime <= 2900000){
    var result_text = document.querySelector(".result_text");
    result_text.style.display = "block";
    result_text.innerHTML = ("野外フェスで新たな音楽と出会う");

    var fixedtext = document.getElementById("fixedtext");
    fixedtext.innerHTML += "野外フェスで新たな音楽と出会う";
        
    var result_img = document.querySelector("#result_img");
    result_img.style.display = "block";
    document.getElementById("result_img").src = "ch_lg_2.png";

}});
}
