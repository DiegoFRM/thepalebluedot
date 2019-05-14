for(var i = 1;i<=4;i++ ){
    $("#topbtn" + i).css("cursor","pointer");
    $("#topbtn" + i).mouseover(function(){
            $(this).addClass("activeBtnMenu");
    });
    $("#topbtn" + i).mouseout(function(){
            $(this).removeClass("activeBtnMenu");
    });
}

$(".logoTPBD").click(function(){
    window.open("index.html", "_self");
});

$("#topbtn1").click(function(){
    window.open("index.html", "_self");
});

$("#topbtn2").click(function(){
    window.open("quehacemos.html", "_self");
});

$("#topbtn3").click(function(){
    window.open("team.html", "_self");
});

$("#topbtn4").click(function(){
    window.open("contacto.html", "_self");
});

    $("#topArrow").click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 

    }); 


$("#openCloseMenu").click(function(){
    $(this).find("i").toggleClass("fa-times");
    $("#menuMovilWindow").toggleClass("activeMenuMovil");
});