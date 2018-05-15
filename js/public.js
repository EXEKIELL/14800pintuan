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

function countDown(h,min,s,ms,that) {
   return function () {
       if(h>10&&min>10&&s>10){
           that.time = h+':'+min+':'+s+':'+ms
       }else if(h>10&&min>10&&s<10){
           that.time = h+':'+min+':'+'0'+s+':'+ms
       }else if(h>10&&min<10&&s>10){
           that.time = h+':'+'0'+min+':'+s+':'+ms
       }else if(h<10&&min>10&&s>10){
           that.time = '0'+h+':'+min+':'+s+':'+ms
       }else if(h<10&&min<10&&s<10){
           that.time = '0'+h+':'+'0'+min+':'+'0'+s+':'+ms
       }else if(h<10&&min>10&&s<10){
           that.time = '0'+h+':'+min+':'+'0'+s+':'+ms
       }else if(h<10&&min<10&&s>10){
           that.time = '0'+h+':'+'0'+min+':'+s+':'+ms
       }else{
           that.time = h+':'+'0'+min+':'+'0'+s+':'+ms
       }
       // if(s<10){
       //     that.time = h+':'+min+':'+'0'+s+':'+ms
       // }else{
       //
       // }
       // if(min<10){
       //     that.time = h+':'+'0'+min+':'+s+':'+ms
       // }
       // that.time = h+':'+min+':'+s+':'+ms
       if(ms>0){
           ms--;
       }else{
           ms = 9;
           if(s>0){
               s--;
           }else{
               s = 59;
               if(min>0){
                   min--;
               }else{
                   min = 59
                   if(h>0){
                       h--;
                   }else{
                       clearInterval(that.timer1)
                   }
               }
           }
       }
   }
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

function getTime(value) {
    var value = value;
    var startDate = new Date(value).getTime();
    var endDate = startDate+86400000;
    return endDate
}


