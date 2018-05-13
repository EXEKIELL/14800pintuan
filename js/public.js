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