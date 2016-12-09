# wxTimer
介绍：用于在微信小程序中进行倒计时的组件。
## 用法  
引入：
>var timer = require('../../plugins/wxTimer.js');  
最简单的调用方式：  
>timer.wxTimer.call(this);  
其他参数：  

1、beginTime    需要倒计时的时间，比如："01:11:12"，默认值为"00:00:00"

2、fn                倒计时归零0时的回调函数，如果为beginTime = "00:00:00"则立即调用

3、interval        倒计时的过程中，规定每隔几秒执行一次intervalFn，如果为0则永远不会执行，默认为1

4、intervalFn    每隔interval秒执行一次的函数。

 

注意：使用此组件，会在page的data中创建一个名为wxTimer的key，如果需要在wxml中引用倒计时的数据直接{{wxTimer}}即可  
  
## 小程序中用法示例：  
js部分：  
>var wxTimer = require('../../plugins/wxTimer.js');
>Page({
>  data: {
>  },
>  onLoad: function () {
>    wxTimer.wxTimer.call(this,"00:10:01",function(){
>        console.log("完成");
>    },5,function(){
>      var that = this;
>      wx.getLocation({
>        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
>        success: function(res) {
>          that.setData({
>            latitude : res.latitude,
>            longitude : res.longitude,
>          })
>        }
>      })
>    }.bind(this));
>  }
>})  
  
wxml部分：  
><text>{{wxTimer}}</text>  


