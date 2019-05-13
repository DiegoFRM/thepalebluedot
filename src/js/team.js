$("#teamInfo").hide();

$(".imgTeam").click(function(){
    $("#teamInfo").show();
    $("#teamInfo").css("opacity",1);
});

$("#closeBtnWindow").click(function(){
    $("#teamInfo").hide();
    $("#teamInfo").css("opacity",0);
});
