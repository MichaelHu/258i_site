/*
* Author: Michael Hu
* Date: 2009-4-16
* Version: 
*/

var Ajax={
    //Ĭ��ѡ��û������ض������еĿպ���
    defaultOptions: {
        timeout: 10000,
        oncreate: function(){},
        onheaders: function(){},
        onsuccess: function(){}
    },
    //����XHR�����Ա�����
    reqCache: [],
    //���������
    randNum: function(){
        return Math.random();
    },
    //���XHR��������������
    addToCache: function(req){
        this.reqCache.push(req);
    },
    //��ʾ�������ĳ���
    showCache: function(){tip.innerHTML += 'cache length: ' + this.reqCache.length + '<br>';},
    //��ȡ�������п��õ�XHR��������ȡ�������򷵻�null
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

    //����XHR���󣬸ö�����ߴӻ������л�ȡ�������´���
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
    //JSONת���ɲ�ѯ�ַ���
    json2Query: function(json){
        var arr = [];
        for(var key in json){
            if(!json[key]) break;
            arr.push(key + '=' + encodeURIComponent(json[key]));
        }
        return arr.join('&');
    },
    
    //����XHR���󣬲�ע��ص�����
    request: function(opt){
        var req = this.create();
        if(!req) return false;

        if(opt.oncreate)opt.oncreate();/*before OPENED*/
        else this.defaultOptions.oncreate();

        var http = req.http, state = http.readyState;
        // trident��gecko�£���ִ��xhr.abort()ʱ������ǰ״̬ΪUNSET,OPENED����ֱ�ӽ�readyState��ΪDONE��
        // ����ǰ״̬ΪHEADERS_RECEIVED,LOADINGʱ����״̬��ΪDONE������ͬ���ɷ�DONE�¼���Ҳ����abort�����ڻ���ִ��DONE�¼��ĺ������Ż��˳�abort 
        // webkit��presto��ֱ�ӽ�readyState��ΪDONE

        // ���⻹��һ������������ע�⣺Firefox��XHR��������ͬ���������ܵ���onreadystatechange�¼�
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
                /*����XHR*/
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
                // trident��gecko��abort����£����п�����������������aborted��֤��ֻҪabort�Ͳ���ִ�гɹ�����
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

