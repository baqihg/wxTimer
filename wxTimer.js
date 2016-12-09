let intervarID;
function wxTimer(beginTime="00:00:00",fn,interval=1,intervalFn){
    var getTime = new Date("2011/01/01 "+beginTime);
    //初始化定时器
    this.setData({
        wxTimer:beginTime.length > 5 ? beginTime : beginTime+":00"
    });

    //开始倒计时
    var that = this;
    
    var count = 0;
    //倒计时定时器
    intervarID = setInterval(function(){
        var tmpTime = new Date(getTime.getTime()-1000*count++).toString().substr(16,8);
        that.setData({
            wxTimer:tmpTime
        });
        //计时结束
        if(tmpTime == "00:00:00"){
            if(fn){
                fn();
            }
            stop();
        }
        if( 0 == (count-1) % interval && intervalFn){
            intervalFn();
        }
    },1000);
}

function stop(){
    clearInterval(intervarID);
}

module.exports = {
    wxTimer: wxTimer,
};