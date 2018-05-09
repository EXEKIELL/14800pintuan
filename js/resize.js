new function (){
	var _self = this;
	_self.width = 750;//设置默认最大宽度
	_self.fontSize = 100;//默认字体大小
	_self.widthProportion = function(){
		var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;
		console.log(p);
		return p>1?1:p<0.4?0.4:p;
	};
	_self.changePage = function(){
		document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
	}
	_self.changePage();
	window.addEventListener('resize',function(){_self.changePage();},false);
};

function hengshuping(){
	if(window.orientation==180||window.orientation==0){
		//alert('竖屏状态！', window.orientation)
	}
	if(window.orientation==90||window.orientation==-90){
		//alert('横屏状态！', window.orientation)
	}
}
hengshuping();
window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', hengshuping, false);