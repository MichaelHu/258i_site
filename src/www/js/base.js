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


if (typeof Mc == "undefined") {
    var Mc = {};
}


Mc.StringBuffer =function(){
    this.bf = [];
}

StringBuffer = Mc.StringBuffer;

StringBuffer.prototype.append = function(/*string*/str){
    this.bf.push(str);
};

StringBuffer.prototype.toString = function(){
    return this.bf.join('');
};

StringBuffer.prototype.len = function(){
    return this.bf.length;
};



Mc.DateUtil = {
    /**
     * 对array数组按时间字段（time）排序，并返回排序后的数组，默认按正序排，若指定参数，则按参数排序
     * @param {Array} array 数组
     * @param {Number: 0,1} sortby：1 -- 逆序，0 -- 正序
     */
    sortByTime: function(array, sortby){
        array.sort(function(objA, objB){
            var timeA = parseInt(objA.time.replace(/\[|\]|-/g, '')), timeB = parseInt(objB.time.replace(/\[|\]|-/g, ''));
            isNaN(timeA) && (timeA = 0);
            isNaN(timeB) && (timeB = 0);
            if(!!sortby)
                return timeB - timeA;
            return timeA - timeB;
        });
        return array;
    }
};

McDateUtil = Mc.DateUtil;
