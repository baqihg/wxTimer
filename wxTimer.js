let intervarID;
function wxTimer(beginTime="00:00:00",fn,interval=1,intervalFn){
    var getTime = new Date("2011/01/01 "+beginTime);

    //开始倒计时
    var that = this;
    
    var count = 0;
    //倒计时定时器
    function a(){
        
        var tmpTime = new Date(getTime.getTime()-1000*count++);
        var tmpTimeStr = tmpTime.toString().substr(16,8);
        that.setData({
            wxTimer:tmpTimeStr,
            wxTimerSecond:(tmpTime.getTime() - new Date("2011/01/01 00:00:00").getTime()) / 1000
        });
        //计时结束
        if( 0 == (count-1) % interval && intervalFn){
            intervalFn();
        }
        if(tmpTimeStr == "00:00:00"){
            if(fn){
                fn();
            }
            stop();
        }
    }
    a();
    intervarID = setInterval(a,1000);
}

function stop(){
    clearInterval(intervarID);
}

module.exports = {
    wxTimer: wxTimer,
    stop:stop
};
