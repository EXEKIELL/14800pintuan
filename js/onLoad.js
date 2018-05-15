var App = new Vue({
    el:'#App',
    data:{
        //显示状态
        idx:1,
        //banner图
        imgs:[
            {src:'img/banner.png'},
            {src:'img/banner.png'},
            {src:'img/banner.png'},
            {src:'img/banner.png'},
            {src:'img/banner.png'}
        ],
        //购买数量
        num:1,
        value1:0,
        //首页弹窗状态
        popUp:0,
        //邀请弹窗状态
        maskInvite:false,
        maskErWei:false,
        //支付弹窗状态
        mask1:false,
        //用于检测dom更新的状态
        domFlash:0,
        time:0,
        timer1:null,
        show1:false
    },
    methods:{
        btn0(){
            this.idx = 1
        },
        btn01(){
            this.popUp = 3
            //禁止页面滑动
            stop();
        },
        btn3(){
            this.mask1 = true
        },
        close1(){
            this.popUp = 0
            //解除禁止滑动
            move();
        },
        invite(){
            //邀请点击右上角弹窗
            // this.maskInvite = true
            //邀请二维码弹窗
            // this.maskErWei = true
            // this.idx = 2
        },
        close(){
            var id = event.target.id
            this[id] = false
        },
        jian(){
            var count = this.num;
            if(count>1){
                count-=1;
                this.num = count
            }else{
                this.num = 1
            }
        },
        jia(){
            var count = this.num;
            if(count>0){
                count+=1;
                this.num = count
            }else{
                this.num = 1
            }
        },
    },
    filters:{
    },
    watch:{
        domFlash:function () {
            if(this.domFlash == 2){
                //报名成功图片合成方法
                showYear('canv','编号：2X3178')
            }
        }
    },
    updated(){
        //dom更新后执行方法
        const that = this
        this.$nextTick(function () {
            this.domFlash = this.idx
            $('#popUp1,#popUp2,#popUp3,#maskInvite,#maskErWei,#mask1').css({
                display:'flex'
            })
        })
    },
    mounted(){
        //swiper初始化
        var mySwiper = new Swiper('.swiper-container',{
            autoplay:true,
            loop:true,
            pagination:{
                el:'.swiper-pagination',
                type:'fraction'
            }
        })
        //取消图片点击事件
        $('.delImg').click(function () {
            return false
        })
        this.$nextTick(function () {
            setTimeout(function () {
                $("#index .wrap1").fadeIn("slow","linear");
                setTimeout(function () {
                    $("#index .wrap1").fadeOut("slow","linear");
                },2500)
            },1000)
            const that = this
            var endDate = getTime('2018/05/15 09:00:00');
            that.timer1 = setInterval(function () {
                var date = new Date().getTime();
                var time = endDate - date;
                var strTime = time+'';
                var h,min,s,ms;
                h = Math.floor(time/1000/60/60%24);
                min = Math.floor(time/1000/60%60);
                s = Math.floor(time/1000%60);
                ms = Math.floor(parseInt(strTime.substr(-3,1)));
                that.time = h+':'+min+':'+s+':'+ms
                if(h<0){
                    clearInterval(that.timer1)
                }
            },100)
        })
    }
})