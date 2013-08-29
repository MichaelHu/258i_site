/*
 * Author: Michael Hu
 * File: mcdebug.js
 * Date: 2009-3-18
 * Version:
 * Require: mcdrag.js
 */

//提供JS编写过程中输出调试信息
var McDebug = (function(){
    //验证包含文件
    if(!checkRequirement())return;
    //调试信息窗父对象
    var oDivBG = document.createElement('DIV');
    oDivBG.name = '拖动容器';
    //用于显示内容的DOM元素
    var oDiv = document.createElement('DIV');
    //清空内容按钮
    var oButton = document.createElement('BUTTON');
    oButton.innerHTML = '清空内容';
    //拖动条
    var oDragBar = document.createElement('DIV');
    oDragBar.innerHTML = '点击可拖动';

    var oBody = document.getElementsByTagName('BODY')[0];
    //设定调试信息父对象样式
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
    //设定调试信息窗样式
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
    //设定清空按钮框样式
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

    //设定拖动条样式
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

    

    //注册清空按钮事件以及拖动事件
    if(window.attachEvent){
        oButton.attachEvent('onclick', _clear);
        oDragBar.attachEvent('onmousedown', McDrag.start);
    }
    else{
        oButton.addEventListener('click', _clear, false);
        oDragBar.addEventListener('mousedown', McDrag.start, false);
    }

    //记录调试信息窗是否已经添加到DOM Tree
    var bAppend = false;

    //清空调试窗口
    function _clear(){
        oDiv.innerHTML = '';
    }
    //显示调试信息
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

    //设置调试信息窗的位置，type为1表示设置右下角坐标，其他值或未设置表示设置左上角坐标
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

    //验证包含文件    
    function checkRequirement(){
        if(typeof McDrag == 'undefined'){
            alert('Requires JS File: mcdrag.js!');
            return false;
        }
        return true;
    }

    return {
        //输出调试信息
        log: _log,
        //设置调试窗口的位置
        setPos: _setPos
    };
})();