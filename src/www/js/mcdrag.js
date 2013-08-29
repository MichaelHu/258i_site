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
    //---------˽������--------
    //��ʾ���϶�������Ԫ�أ�ע������Ԫ�ز�Ҫ����margin
    var drgElement = null;
    
    //---------˽�з���--------
    //��������ƶ��¼�
    var move = function(event){
        //McDebug.log('moving...');
        //��֤�����ļ�
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

    //������굯���¼�
    var end = function(event){
        //��֤�����ļ�
        if(!checkRequirement())return;
        //��ȡ�¼�����
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

    //--------��������---------
    var start = function(event){
        //��֤�����ļ�
        if(!checkRequirement())return;
        //McDebug.log('mouse down...');
        //��ȡ�¼�����
        var e = event || window.event;
        var target = e.target || e.srcElement;
        //McDebug.log('target: '+ target.tagName);
        //���϶���Ԫ��
        drgElement = target.parentNode;

        //McDebug.log('drgElement: '+ drgElement.name);
        //����ƫ����Ϣ�����������϶�Ԫ�ص�������
        var offset = {x:0,y:0};
        offset = McEvent.computeOffset(e,drgElement);
        //McDebug.log('isIE: ' + isIE);
        if(!isIE){
            //ΪeleToDragע��mousemove�¼�
            document.addEventListener('mousemove', move, false);
            //ΪeleToDragע��mouseup�¼�
            document.addEventListener('mouseup', end, false);
            //McDebug.log('ע��FF�¼�������');
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

    //��֤�����ļ�    
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

