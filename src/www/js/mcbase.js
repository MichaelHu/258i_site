/*
* Author: Michael Hu
* Date: 2009-3-17
* Version: 
*/

function C(tag){
    if(typeof tag != 'string') return null;
    return document.createElement(tag);
};

function $(id){
	if(typeof id == 'undefined') return null;
	if(typeof id == 'object') return id;
	return document.getElementById(id);
};

var isGecko = navigator.userAgent.indexOf('Gecko') > -1 &&
        navigator.userAgent.indexOf('KHTML') === -1;

var isIE = !!(window.attachEvent && 
        navigator.userAgent.indexOf('Opera') === -1);

function nextElement(element){
    if(!element) return null;
    var next = element.nextSibling,
        type = next.nodeType;
    while(type != 1 && next.nextSibling){
        next = next.nextSibling;
        type = next.nodeType;
    }
    if(type == 1)return next;
    else return null;
}

function previousElement(element){
    if(!element) return null;
    var prev = element.previousSibling,
        type = prev.nodeType;
    while(type != 1 && prev.previousSibling){
        prev = prev.previousSibling;
        type = prev.nodeType;
    }
    if(type == 1)return prev;
    else return null;
}

