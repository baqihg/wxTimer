var wxtimer = function (initObj){
	initObj = initObj || {};
	this.beginTime = initObj.beginTime || "00:00:00";
	this.interval = initObj.interval || 0;
	this.complete = initObj.complete;
	this.intervalFn = initObj.intervalFn;
}

wxtimer.prototype = {
	start:function(self){
		var getTime = new Date("2011/01/01 "+this.beginTime);//2011年1月1日的00：00：00的ms数
	    //开始倒计时
	    var that = this;
	    var count = 0;//这个count在这里应该是表示s数，js中获得时间是ms，所以下面*1000都换成ms
	    function begin(){
	        var tmpTime = new Date(getTime.getTime()-1000*count++);
	        //getTime.getTime()把2011年1月1日日 00：00：00换成字符串型字符串型，这样就可以直接1s，1s的减，就变成了倒计时，为了看的更明确，游泳new date把字符串换回来了
	        var tmpTimeStr = tmpTime.toString().substr(16,8);//去掉前面的年月日就剩时分秒了
	        self.setData({
	            wxTimer:tmpTimeStr,
	            wxTimerSecond:(tmpTime.getTime() - new Date("2011/01/01 00:00:00").getTime()) / 1000
	        });
	        
	        //计时结束
	        if( 0 == (count-1) % that.interval && that.intervalFn){
	            that.intervalFn();
	        }
	        if(tmpTimeStr == "00:00:00"){
	            if(that.complete){
	                that.complete();
	            }
	            that.stop();
	        }
	    }
	    begin();
	    this.intervarID = setInterval(begin,1000);
	},
	stop:function(){
		clearInterval(this.intervarID);
	}
}
module.exports = wxtimer;
