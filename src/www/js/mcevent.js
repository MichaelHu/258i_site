/*
* Author: Michael Hu
* Date: 2009-3-17
* Version: 
*/

var McEvent = {
	//����¼�������
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

	//�Ƴ��¼�������
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

	//��������¼���targetԪ�����Ͻ�֮���ƫ����
	computeOffset: function(event, target){
        if(!McEvent.checkRequirement())return;
		var e = event || window.event;
		var mousePos = this.pagePos(e);
		var offsets = getOffsets(target);
		var offset = {x:0,y:0};
		offset.x = offsets.x - mousePos.x;
		offset.y = offsets.y - mousePos.y;
		//������target��
		target.offset = offset;
		return offset;
	},

	//��������¼���ҳ���ϵ�����
	pagePos: function(event){
        if(!McEvent.checkRequirement())return;
		var pt = {x:0, y:0};
		var docElement = document.documentElement, body = document.body || { scrollLeft: 0, scrollTop: 0 };
		var evt = event || window.event;
		pt.x = evt.pageX || (evt.clientX + (docElement.scrollLeft || body.scrollLeft) - (docElement.clientLeft || 0));
		pt.y = evt.pageY || (evt.clientY + (docElement.scrollTop || body.scrollTop) - (docElement.clientTop || 0));
		return pt;
	},

	//ֹͣ�¼�����
	stopPropagation: function(event){
        if(!McEvent.checkRequirement())return;
		var e = event || window.event;
		if(isIE) e.cancelBubble = true;
		else e.stopPropagation();
	},

	//��ֹĬ���¼���Ϊ
	preventDefault: function(event){
        if(!McEvent.checkRequirement())return;
		var e = event || window.event;
		if(isIE) e.returnValue =false;
		else e.preventDefault();
	}
};

        //��֤�����ļ�    
McEvent.checkRequirement = function (){
    if(typeof isIE == 'undefined'){
        alert('Requires JS File: base.js!');
        return false;
    }
    return true;
};



