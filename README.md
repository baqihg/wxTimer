# wxTimer
## 介绍：用于在微信小程序中进行倒计时的组件。  

## 功能：  
1、最基础的当然就是倒计时功能了。  
2、可以设置倒计时结束后执行的事件。  
3、可以设置倒计时执行过程中每隔多少秒，执行一次对应的事件。  

## 用法  
引入：  
    `var timer = require('../../plugins/wxTimer.js');  `

最简单的调用方式： 

```
var wxTimer = new timer({
    beginTime:"00:00:10"
})
wxTimer.start(this);
wxTimer.stop();
``` 

倒计时结束后执行事件 

```
var wxTimer = new timer({
    beginTime:"00:00:10",
    complete:function(){
        console.log("完成了")
    }
})
wxTimer.start(this);
wxTimer.stop();
``` 

间隔执行事件  

```
var wxTimer = new timer({
    beginTime:"00:00:10",
    complete:function(){
        console.log("完成了")
    },
    interval:2,
    intervalFn:function(){
        console.log("过去了2秒");
    }
})
```  
校准时间  

```
wxTimer.calibration();
```

注意： 

1、由于内部需要调用到小程序的setData方法，所以我们需要把this传过去。  
2、此方法会在page中生成一个名为wxTimer和wxTimerSecond的data，分别是倒计时的 时/分/秒 版本和倒计时的纯秒数版本，如果需要在wxml中引用倒计时的数据直接{{wxTimer}}或者{{wxTimerSecond}}即可  

其他参数：  

1、beginTime    需要倒计时的时间，比如："01:11:12"，默认值为"00:00:00"，也可以省略秒数，如:"01:10"

2、complete     倒计时归零0时的回调函数，如果为beginTime = "00:00:00"则立即调用

3、interval     倒计时的过程中，规定每隔几秒执行一次intervalFn，如果为0则永远不会执行，默认为1

4、intervalFn   每隔interval秒执行一次的函数。  

## 历史更新 
2017.03.22 应对在息屏和挂起状态下倒计时无法进行的问题，加入了校准功能，可以在onShow()函数中直接调用wxTimer.calibration()来校准时间
