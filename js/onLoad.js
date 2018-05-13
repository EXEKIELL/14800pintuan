var App = new Vue({
    el:'#App',
    data:{
        //显示状态
        idx:0,
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
        //邀请弹窗状态
        maskInvite:false,
        maskErWei:false,
        //支付弹窗状态
        mask1:false,
        //用于检测dom更新的状态
        domFlash:0
    },
    methods:{
        btn0(){
            this.idx = 1
        },
        btn3(){
            this.mask1 = true
        },
        invite(){
            //邀请点击右上角弹窗
            // this.maskInvite = true
            //邀请二维码弹窗
            // this.maskErWei = true
            this.idx = 2
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
        }
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
        this.$nextTick(function () {
            this.domFlash = this.idx
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
    }
})