function showYear(id,name){
    //获取画布对象
    var mainCtx = getCanvasContext(id);
    var maxWidth = mainCtx.width;
    var maxHeight = mainCtx.height;
    mainCtx.clearRect(0,0,600,450);
    //获取图片的实际路径
    var starImg = new Image();
    starImg.src = $('.l2-2>img').attr('src');
    //合成
    starImg.onload = function() {
        //先把图片绘制在这里
        mainCtx.drawImage(starImg, 0, 0, 600, 450);


        //读取用户的文本
        if(name) {
            var str = name;
            //设置用户文本的大小字体等属性
            mainCtx.font = "30px Microsoft YaHei";
            //设置用户文本填充颜色
            mainCtx.fillStyle = "#fffbb2";
            //绘制文字
            mainCtx.fillText(str, 25,415);
            //设置用户文本的大小字体等属性
            mainCtx.font = "24px Microsoft YaHei";
            //设置用户文本填充颜色
            mainCtx.fillStyle = "white";
            saveImageInfo(id)
            //绘制文字
            // mainCtx.fillText("长按识别二维码测运势", 152, 1142.5);
        }

    };

}
//通过id获取canvas对象
function getCanvasContext(id){
    return document.getElementById(id).getContext("2d");
}
//将画布生成图片
function saveImageInfo(id) {
    var mycanvas = document.getElementById(id);
    var image = mycanvas.toDataURL("image/jpg");
    $('.showImg>img').attr('src',image);
}



var mo=function(e){e.preventDefault()};

/***禁止滑动***/
function stop(){
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove",mo,false);//禁止页面滑动
}

/***取消滑动限制***/
function move(){
    document.body.style.overflow='';//出现滚动条
    document.removeEventListener("touchmove",mo,false);
}
//获取结束时间
function getTime(value) {
    var value = value;
    var startDate = new Date(value).getTime();
    var endDate = startDate+86400000;
    return startDate
}
//倒计时函数
function countDown(value,that) {
    return function () {
        var date = new Date().getTime();
        var time = value - date;
        var strTime = time+'';
        var h,min,s,ms;
        h = Math.floor(time/1000/60/60%24);
        min = Math.floor(time/1000/60%60);
        s = Math.floor(time/1000%60);
        ms = Math.floor(parseInt(strTime.substr(-3,1)));
        that.time = h+':'+min+':'+s+':'+ms
        if(h<=0 && min<=0 && s<=0 && ms==1){
            clearInterval(that.timer1);
            setTimeout(function () {
                that.time = 0+':'+0+':'+0+':'+0
            },100);
            return
        }
    }
}


