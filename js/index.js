/**
 * Created by tt on 2015/6/18.
 */
var timer;
$(".items-list .fire1").on("mouseenter",function(){
    var _this=$(this);
    timer=setTimeout(function(){
        $(".items-list").animate({"margin-top":"-39px"},300,function(){
            _this.parent().find("span").css("border-top","none");
            _this.find("span").css("border-top","2px solid #c81623");
            _this.css("border-bottom","none");
        });
        $(".iform-div iframe").attr("src","http://chongzhi.jd.com/jd-index-ifame.htm");
        $(".iform-div").animate({"top":"33px"},300,function(){})
    },500);
}).on("mouseleave",function(){
    clearTimeout(timer);
});
$(".items-list .fire2").on("mouseenter",function(){
    var _this=$(this);
    timer=setTimeout(function(){
        $(".items-list").animate({"margin-top":"-39px"},300,function(){
            _this.parent().find("span").css("border-top","none");
            _this.find("span").css("border-top","2px solid #c81623");
            _this.css("border-bottom","none");
        });
        $(".iform-div iframe").attr("src","http://chongzhi.jd.com/jd-index-ifame.htm");
        $(".iform-div").animate({"top":"33px"},300,function(){})
    },500);
}).on("mouseleave",function(){
    clearTimeout(timer);
});
$(".items-list .fire3").on("mouseenter",function(){
    var _this=$(this);
    timer=setTimeout(function(){
        $(".items-list").animate({"margin-top":"-39px"},300,function(){
            _this.parent().find("span").css("border-top","none");
            _this.find("span").css("border-top","2px solid #c81623");
            _this.css("border-bottom","none");
        });
        $(".iform-div iframe").attr("src","http://chongzhi.jd.com/jd-index-ifame.htm");
        $(".iform-div").animate({"top":"33px"},300,function(){})
    },500);
}).on("mouseleave",function(){
    clearTimeout(timer);
});
$(".items-list .fire4").on("mouseenter",function(){
    var _this=$(this);
    timer=setTimeout(function(){
        $(".items-list").animate({"margin-top":"-39px"},300,function(){
            _this.parent().find("span").css("border-top","none");
            _this.find("span").css("border-top","2px solid #c81623");
            _this.css("border-bottom","none");
        });
        $(".iform-div iframe").attr("src","http://chongzhi.jd.com/jd-index-ifame.htm");
        $(".iform-div").animate({"top":"33px"},300,function(){})
    },500);
}).on("mouseleave",function(){
    clearTimeout(timer);
});




$(".iform-div .close").on("click",function(){
    $(".items-list").animate({"margin-top":"0"},300,function(){
        $(".items-list").parent().find("span").css("border-top","none");
    });
    $(".iform-div").animate({"top":"227px"},300,function(){})
});