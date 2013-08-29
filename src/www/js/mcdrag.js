/*
 * Author: Michael Hu
 * File: mcdrag.js
 * Date: 2009-5-14
 * Version: 
 * Require: base.js, mcevent.js
 */

function isBody(element){
    return (/^(?:body|html)$/i).test(element.tagName);
}

function getOffsets(element){
    var position = {x: 0, y: 0};
    if (isBody(this)) return position;

    while (element && !isBody(element)){
        position.x += element.offsetLeft;
        position.y += element.offsetTop;

        element = element.offsetParent;
        if (isIE){
            while (element && !element.currentStyle.hasLayout) element = element.offsetParent;
        }
    }
    return position;
}

function leftBorder(element){
    return element.style.borderLeftWidth;
}

var McDrag = (function(){
    //---------私有属性--------
    //表示被拖动的容器元素，注意容器元素不要设置margin
    var drgElement = null;
    
    //---------私有方法--------
    //处理鼠标移动事件
    var move = function(event){
        //McDebug.log('moving...');
        //验证包含文件
        if(!checkRequirement())return;
        var e = event|| window.event;
        var target = e.target || e.srcElement;
        var pt = McEvent.pagePos(e);
        var offset = drgElement.offset;
        drgElement.style.top=(pt.y + offset.y)+'px';
        drgElement.style.left=(pt.x + offset.x)+'px';

        McEvent.stopPropagation(e);
        McEvent.preventDefault(e);
    };

    //处理鼠标弹起事件
    var end = function(event){
        //验证包含文件
        if(!checkRequirement())return;
        //获取事件对象
        var e = event || window.event;
        var target = e.target || e.srcElement;
        if(isIE){
            target.detachEvent('onlosecapture', end);
            target.detachEvent('onmouseup', end);
            target.detachEvent('onmousemove', move);
            target.releaseCapture();
        }
        else{
            document.removeEventListener('mousemove', move, false);
            document.removeEventListener('mouseup', end, false);
        }

        McEvent.stopPropagation(e);
        McEvent.preventDefault(e);
    };

    //--------公共方法---------
    var start = function(event){
        //验证包含文件
        if(!checkRequirement())return;
        //McDebug.log('mouse down...');
        //获取事件对象
        var e = event || window.event;
        var target = e.target || e.srcElement;
        //McDebug.log('target: '+ target.tagName);
        //被拖动的元素
        drgElement = target.parentNode;

        //McDebug.log('drgElement: '+ drgElement.name);
        //计算偏移信息，并保存在拖动元素的属性中
        var offset = {x:0,y:0};
        offset = McEvent.computeOffset(e,drgElement);
        //McDebug.log('isIE: ' + isIE);
        if(!isIE){
            //为eleToDrag注册mousemove事件
            document.addEventListener('mousemove', move, false);
            //为eleToDrag注册mouseup事件
            document.addEventListener('mouseup', end, false);
            //McDebug.log('注册FF事件。。。');
        }
        else{
            target.setCapture();
            target.attachEvent('onmousemove', move);
            target.attachEvent('onmouseup', end);
            target.attachEvent('onlosecapture', end);
        }

        McEvent.stopPropagation(e);
        McEvent.preventDefault(e);
    };

    //验证包含文件    
    function checkRequirement(){
        if(typeof isIE == 'undefined'){
            alert('Requires JS File: base.js!');
            return false;
        }
        if(typeof McEvent == 'undefined'){
            alert('Requires JS File: mcevent.js!');
            return false;
        }
        return true;
    }

    return {
        start: start
    };
})();

