/**
 * Created by tt on 2015/6/18.
 */
var arcnum=$(".slider").children(".imgbox").children("li").length;
var obj = $('<div class="dot-list"></div>').appendTo($(".slider"));
for(var i = 0; i < arcnum; i ++){
    if(i === 0){
        obj.append('<span class="dot dot-cur"></span>');
    } else{
        obj.append('<span class="dot"></span>');
    }
}
$(".slider").on("click",".next",function(){
    $(this).parent().children("ul").css("left","100%");
    var _this=$(this).parent().children("ul").children(".active");
    var dot_this=$(this).parent().children(".dot-list").children(".dot-cur");
    _this.css("left","-100%");
    var num=_this.next().length;
    if(num==1){
        _this.animate({"left":"-200%"},300,function(){
            _this.css("left",0)
        }).removeClass("active");
        _this.next().animate({"left":"-100%"},300).addClass("active");
        dot_this.removeClass("dot-cur").next().addClass("dot-cur");
    }else{
        _this.animate({"left":"-200%"},300,function(){
            _this.css("left",0)
        }).removeClass("active");
        _this.parent().find("li").first().animate({"left":"-100%"},300).addClass("active");
        dot_this.removeClass("dot-cur").parent().find("span").first().addClass("dot-cur");
    }
}).on("click",".prev",function(){
    $(this).parent().children("ul").css("left","-100%");
    var _this=$(this).parent().children("ul").children(".active");
    var dot_this=$(this).parent().children(".dot-list").children(".dot-cur");
    _this.css("left","100%");
    var num=_this.prev().length;
    if(num==1){
        _this.animate({"left":"200%"},300,function(){
            _this.css("left",0)
        }).removeClass("active");
        _this.prev().animate({"left":"100%"},300).addClass("active");
        dot_this.removeClass("dot-cur").prev().addClass("dot-cur");
    }else{
        _this.animate({"left":"200%"},300,function(){
            _this.css("left",0)
        }).removeClass("active");
        _this.parent().find("li").last().animate({"left":"100%"},300).addClass("active");
        dot_this.removeClass("dot-cur").parent().find("span").last().addClass("dot-cur");
    }
});
$(".dot-list").on("click",".dot",function(){
    var num=$(this).index();
    var oldNum=$(this).parent().children(".dot-cur").index();
    var _this=$(this).parent().parent().children("ul").children(".active");
    if(num>oldNum){
        $(this).parent().parent().children("ul").css("left","100%");

        _this.css("left","-100%");
        _this.animate({"left":"-200%"},300,function(){
            _this.css("left",0);

        }).removeClass("active");
        _this.parent().find("li").eq(num).animate({"left":"-100%"},300).addClass("active");
        $(this).parent().children(".dot-cur").removeClass("dot-cur");
        $(this).addClass("dot-cur");
    }else{
        $(this).parent().parent().children("ul").css("left","-100%");
        _this.css("left","100%");
        _this.animate({"left":"200%"},300,function(){
            _this.css("left",0);

        }).removeClass("active");
        _this.parent().find("li").eq(num).animate({"left":"100%"},300).addClass("active");
        $(this).parent().children(".dot-cur").removeClass("dot-cur");
        $(this).addClass("dot-cur");
    }
});

function next(){
    $(".slider .next").click();
}
var intervalObj=window.setInterval(next,3000);
$(".slider").hover(
    function(){window.clearInterval(intervalObj);},
    function(){intervalObj=window.setInterval(next,3000);}
);