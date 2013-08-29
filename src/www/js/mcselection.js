/*
* Author: Michael Hu
* Date: 2009-5-17
* Version: 
*/

/**
 * 获取选中后的文本
 * IE下支持各种类型的文本，FF下不支持编辑框文本
 * @return {string} 返回选中的字符串
 */
function getSelectedText(){
    if(window.getSelection){
        return window.getSelection().toString();
    }
    else if(document.getSelection){
        return document.getSelection();
    }
    else{
        // IE-specific
        return document.selection.createRange().text;
    }
}

/**
 * Firefox下获取编辑框文本时需用该函数，使用getSelectedText不能返回编辑框的选定内容
 * @param {object} element 编辑框对象
 * @return {string} 被选中的字符串
 */
// 
function getTextFieldSelection(element){
    if(element.selectionStart != undefined 
        && element.selectionEnd != undefined){
        var start = element.selectionStart,
            end = element.selectionEnd;
        return element.value.substring(start, end);
    }
    else{
        return '';
    }
}

/**
 * 在表单的当前光标处插入文字
 * @param {object} fieldObj 表单对象
 * @param {string} str 字符串
 */
function insertAtCursor(fieldObj, str){
    //IE
    if(document.selection){
        fieldObj.focus();//这一步很重要
        document.selection.createRange().text = str;
    }
    //Firefox
    else if(fieldObj.selectionStart != undefined
        && fieldObj.selectionEnd != undefined){
        var startPos = fieldObj.selectionStart,
            endPos = fieldObj.selectionEnd;
        //McDebug.log(startPos);
        //McDebug.log(endPos);
        fieldObj.value = fieldObj.value.substring(0,startPos)
            + str + fieldObj.value.substring(endPos, fieldObj.value.length);
    }
    //其他
    else{
        fieldObj.value += str;
    }
}
