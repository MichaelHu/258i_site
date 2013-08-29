/*
* Author: Michael Hu
* Date: 2009-3-17
* Version: 
*/

var McEvent = {
	//添加事件处理函数
	on: function(id,type,func){
        if(!McEvent.checkRequirement())return;
		var element = $(id);
		if(!isIE){
			element.addEventListener(type,func,false);
		}	
		else{
			element.attachEvent('on'+type,function(){
                func.apply(element, arguments);
            });
		}
	},

	//移除事件处理函数
	un: function(id,type,func){
        if(!McEvent.checkRequirement())return;
		var element = $(id);
		if(!isIE){
			element.removeEventListener(type,func,false);
		}
		else{
			element.detachEvent('on'+type, func);
		}
	},

	//计算鼠标事件与target元素左上角之间的偏移量
	computeOffset: function(event, target){
        if(!McEvent.checkRequirement())return;
		var e = event || window.event;
		var mousePos = this.pagePos(e);
		var offsets = getOffsets(target);
		var offset = {x:0,y:0};
		offset.x = offsets.x - mousePos.x;
		offset.y = offsets.y - mousePos.y;
		//保存在target中
		target.offset = offset;
		return offset;
	},

	//计算鼠标事件在页面上的坐标
	pagePos: function(event){
        if(!McEvent.checkRequirement())return;
		var pt = {x:0, y:0};
		var docElement = document.documentElement, body = document.body || { scrollLeft: 0, scrollTop: 0 };
		var evt = event || window.event;
		pt.x = evt.pageX || (evt.clientX + (docElement.scrollLeft || body.scrollLeft) - (docElement.clientLeft || 0));
		pt.y = evt.pageY || (evt.clientY + (docElement.scrollTop || body.scrollTop) - (docElement.clientTop || 0));
		return pt;
	},

	//停止事件传递
	stopPropagation: function(event){
        if(!McEvent.checkRequirement())return;
		var e = event || window.event;
		if(isIE) e.cancelBubble = true;
		else e.stopPropagation();
	},

	//阻止默认事件行为
	preventDefault: function(event){
        if(!McEvent.checkRequirement())return;
		var e = event || window.event;
		if(isIE) e.returnValue =false;
		else e.preventDefault();
	}
};

        //验证包含文件    
McEvent.checkRequirement = function (){
    if(typeof isIE == 'undefined'){
        alert('Requires JS File: base.js!');
        return false;
    }
    return true;
};



