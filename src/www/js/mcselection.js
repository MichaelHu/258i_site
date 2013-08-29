/*
* Author: Michael Hu
* Date: 2009-5-17
* Version: 
*/

/**
 * ��ȡѡ�к���ı�
 * IE��֧�ָ������͵��ı���FF�²�֧�ֱ༭���ı�
 * @return {string} ����ѡ�е��ַ���
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
 * Firefox�»�ȡ�༭���ı�ʱ���øú�����ʹ��getSelectedText���ܷ��ر༭���ѡ������
 * @param {object} element �༭�����
 * @return {string} ��ѡ�е��ַ���
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
 * �ڱ��ĵ�ǰ��괦��������
 * @param {object} fieldObj ������
 * @param {string} str �ַ���
 */
function insertAtCursor(fieldObj, str){
    //IE
    if(document.selection){
        fieldObj.focus();//��һ������Ҫ
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
    //����
    else{
        fieldObj.value += str;
    }
}
