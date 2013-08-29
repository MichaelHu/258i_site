/*
* Author: Michael Hu
* Date: 2009-4-16
* Version: 
*/

var Ajax={
    //默认选项，用户可以重定义其中的空函数
    defaultOptions: {
        timeout: 10000,
        oncreate: function(){},
        onheaders: function(){},
        onsuccess: function(){}
    },
    //缓存XHR对象，以便重用
    reqCache: [],
    //产生随机数
    randNum: function(){
        return Math.random();
    },
    //添加XHR对象至缓冲区中
    addToCache: function(req){
        this.reqCache.push(req);
    },
    //显示缓冲区的长度
    showCache: function(){tip.innerHTML += 'cache length: ' + this.reqCache.length + '<br>';},
    //获取缓冲区中可用的XHR对象，若获取不到，则返回null
    getCachedReq: function(){
        var cache = this.reqCache, len = cache.length;
        if(len > 0){
            for(var i=0; i<len; i++){
                var req = cache[i];
                if (req.active == false){
                    req.active = true;
                    return req;
                }
            }
        }
        else return null;
    },

    //创建XHR对象，该对象或者从缓冲区中获取，或者新创建
    create: function(){
        var req = this.getCachedReq(), http = null;
        if(req) return req;
        var xhr = ['Msxml2.XMLHTTP','Microsoft.XMLHTTP'];
        if(window.XMLHttpRequest){
            http = new XMLHttpRequest();
        }
        else{
            for(var i=0; i<xhr.length; i++){
                try{
                    http = new ActiveXObject(xhr[i]);
                    break;
                }catch(e){}
            }
        }
        req = {active:true,http:http};
        this.addToCache(req);
        return req;
    },
    //JSON转换成查询字符串
    json2Query: function(json){
        var arr = [];
        for(var key in json){
            if(!json[key]) break;
            arr.push(key + '=' + encodeURIComponent(json[key]));
        }
        return arr.join('&');
    },
    
    //发起XHR请求，并注册回调函数
    request: function(opt){
        var req = this.create();
        if(!req) return false;

        if(opt.oncreate)opt.oncreate();/*before OPENED*/
        else this.defaultOptions.oncreate();

        var http = req.http, state = http.readyState;
        // trident，gecko下，当执行xhr.abort()时，若当前状态为UNSET,OPENED，则直接将readyState置为DONE；
        // 若当前状态为HEADERS_RECEIVED,LOADING时，则将状态置为DONE，并且同步派发DONE事件，也即在abort函数内会先执行DONE事件的函数，才会退出abort 
        // webkit，presto则直接将readyState置为DONE

        // 此外还有一个问题需引起注意：Firefox的XHR请求，若是同步请求，则不能调用onreadystatechange事件
        var aborted = false;

        var url = opt.url, 
            method = opt.method ? opt.method : 'get', 
            params = null;

        if(opt.json){
            params = this.json2Query(opt.json);
        }

        if(method.toLowerCase() == 'post'){
            http.open(method, url + '?rand=' + this.randNum(),true);
            //McDebug.log(params);
        }
        else{
            http.open(method, url 
                + (url.indexOf('?')>-1?'&':'?') 
                + (params?params+'&':'')
                + 'rand=' + this.randNum(),true);
        }

        http.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        var t = window.setTimeout(
            function(){
                aborted = true; 
                http.abort(); 
                /*回收XHR*/
                req.active=false; 
                opt.ontimeout && opt.ontimeout(); 
                /*http = null;*/}, 
            opt.timeout || Ajax.defaultOptions.timeout);

        http.onreadystatechange = function(){
            var state = http.readyState,
                responseData = null;
            if(state == 2/*HEADER_RECEIVED*/){
                if(opt.onheaders)opt.onheaders();
                else Ajax.defaultOptions.onheaders();
            }
            if(state == 4/*DONE*/ && http.status >= 200 && http.status < 300){
                window.clearTimeout(t);
                req.active = false;
                // trident，gecko在abort情况下，仍有可能走这条程序流，aborted保证了只要abort就不会执行成功函数
                if(!aborted){
                    switch(http.getResponseHeader('Content-Type')){
                        case 'text/xml':
                            responseData = http.responseXML;
                            break;
                        case 'text/json':
                        case 'text/javascript':
                        case 'application/javascript':
                        case 'application/x-javascript':
                            responseData = http.responseText;
                            break;
                        default: 
                            responseData = http.responseText;
                    }

                    if(opt.onsuccess)opt.onsuccess(responseData);
                    else Ajax.defaultOptions.onsuccess(responseData);
                    //McDebug.log(escape(http.responseText));
                }
            }
        }

        http.send(params);
    }
};

