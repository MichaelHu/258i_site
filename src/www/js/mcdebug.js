/*
 * Author: Michael Hu
 * File: mcdebug.js
 * Date: 2009-3-18
 * Version:
 * Require: mcdrag.js
 */

//�ṩJS��д���������������Ϣ
var McDebug = (function(){
    //��֤�����ļ�
    if(!checkRequirement())return;
    //������Ϣ��������
    var oDivBG = document.createElement('DIV');
    oDivBG.name = '�϶�����';
    //������ʾ���ݵ�DOMԪ��
    var oDiv = document.createElement('DIV');
    //������ݰ�ť
    var oButton = document.createElement('BUTTON');
    oButton.innerHTML = '�������';
    //�϶���
    var oDragBar = document.createElement('DIV');
    oDragBar.innerHTML = '������϶�';

    var oBody = document.getElementsByTagName('BODY')[0];
    //�趨������Ϣ��������ʽ
    with(oDivBG.style){
        position = 'absolute';
        width = '200px';
        height = '300px';
        background = 'gray';
        bottom = '20px';
        right = '20px';
        top = 'auto';
        left = 'auto';
        zIndex = '10';
    }
    //�趨������Ϣ����ʽ
    with(oDiv.style){
        position = 'relative';
        width = '200px';
        height = '300px';
        border = '1px solid black';
        font = 'normal 12px/16px courier,arial';
        overflow = 'auto';
        bottom = '5px';
        right = '5px';
        top = 'auto';
        left = 'auto';
        background = '#fff';
    }
    //�趨��հ�ť����ʽ
    with(oButton.style){
        position = 'absolute';
        padding = '0';
        width = '80px';
        height = '24px';
        border = '1px solid black';
        font = 'bold 12px/24px arial';
        top = '-30px';
        right = '5px';
        bottom = 'auto';
        left = 'auto';
        textDecoration = 'underline';
    }

    //�趨�϶�����ʽ
    with(oDragBar.style){
        position = 'absolute';
        padding = '0';
        width = '100px';
        height = '20px';
        border = '1px solid black';
        font = 'bold 12px/20px arial';
        top = '-30px';
        left = '-5px';
        bottom = 'auto';
        right = 'auto';
        textAlign = 'center';
        backgroundColor = 'gray';
        cursor = 'move';
        //textDecoration = 'underline';
    }

    

    //ע����հ�ť�¼��Լ��϶��¼�
    if(window.attachEvent){
        oButton.attachEvent('onclick', _clear);
        oDragBar.attachEvent('onmousedown', McDrag.start);
    }
    else{
        oButton.addEventListener('click', _clear, false);
        oDragBar.addEventListener('mousedown', McDrag.start, false);
    }

    //��¼������Ϣ���Ƿ��Ѿ���ӵ�DOM Tree
    var bAppend = false;

    //��յ��Դ���
    function _clear(){
        oDiv.innerHTML = '';
    }
    //��ʾ������Ϣ
    function _log(str){
        if(!bAppend){
            oBody.appendChild(oDivBG);
            oDivBG.appendChild(oDiv);
            oDivBG.appendChild(oButton);
            oDivBG.appendChild(oDragBar);
            bAppend = true;
        } 
        oDiv.innerHTML += str + '<br>';
    }

    //���õ�����Ϣ����λ�ã�typeΪ1��ʾ�������½����꣬����ֵ��δ���ñ�ʾ�������Ͻ�����
    function _setPos(x, y, type){
        if(1 == type){
            oDivBG.style.right =x + 'px';
            oDivBG.style.bottom = y + 'px';
            oDivBG.style.left ='auto';
            oDivBG.style.top = 'auto';
        }
        else{
            oDivBG.style.right ='auto';
            oDivBG.style.bottom ='auto';
            oDivBG.style.left =x + 'px';
            oDivBG.style.top = y + 'px';
        }
    }

    function _setSize(width, height){
        
    }

    //��֤�����ļ�    
    function checkRequirement(){
        if(typeof McDrag == 'undefined'){
            alert('Requires JS File: mcdrag.js!');
            return false;
        }
        return true;
    }

    return {
        //���������Ϣ
        log: _log,
        //���õ��Դ��ڵ�λ��
        setPos: _setPos
    };
})();