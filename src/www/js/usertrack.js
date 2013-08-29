/*
* Author: Michael Hu
* Date: 2009-6-17
* Date: 2012-10-09
* Version: 
*/

var ClickMonitor = (function(){
    /**
     * 配置项
     * @variable {object} Conf_Params 页面类型的公共监控参数
     * @variable {number} Conf_ProdID 产品线ID，News为107
     * @variable {number} Conf_SubProdType 产品线的子类型，0为浏览端，1为检索端
     * @variable {string} Conf_URL 监控服务器地址
     * @variable {string} Conf_PageType 页面类型
     * @variable {string} Conf_Custermized_Property 自定义属性名
     * @variable {string} Conf_PlaceHolder 自定义属性的占位符，以区分空字串
     * @variable {string} Conf_ExtraParams 额外参数
     */
    var Conf_Params = {
            // 首页
            'INDEX': 'page=index'
        },
        Conf_URL = '/click.gif',
        Conf_PageType = '',
        Conf_Custermized_Property = 'mon',
        Conf_PlaceHolder = 'ph',
        Conf_ExtraParams = '';

    /**
     * 初始化，注册document的点击事件
     * @param {string} pageType 页面类型
     * @param {string} extraParams 可选，格式为m=n，可用于由
     *     页面提供的参数，作为一个参数钩子
     */
    function _init(pageType, extraParams){
        if(!pageType){
            return;
        }
        Conf_PageType = pageType;

        if(extraParams){
            Conf_ExtraParams = extraParams;
        }

        // 采取大搜索监控方式，注册mousedown事件
        if(window.attachEvent){
            document.attachEvent('onmousedown', _monitor);
        }
        else if(window.addEventListener){
            document.addEventListener('mousedown', _monitor,
                false);
        }
    }
    
    /**
     * 点击监控函数
     * @param {event object} event 事件对象
     */
    function _monitor(event){
        event = event || window.event;
        var target = event.target || event.srcElement,
            tag = '',
            linkObj = null;

        if(!target.tagName){
            return;
        }
        tag = target.tagName.toLowerCase();
        // 若是图片，则找其父节点中的链接节点
        if('a' != tag){
            var parent = target.parentNode,
                parentTag = '';
            while(parent){
                // 父节点可能没有tagName属性
                if(!parent.tagName){
                    return;
                }

                parentTag = parent.tagName.toLowerCase();

                if('a' == parentTag){
                    break;
                }
                parent = parent.parentNode;
            }
            if('a' == parentTag){
                linkObj = parent;
            }
            else{
                return;
            }
        }
        else if('a' == tag){
            linkObj = target;
        }
        else{
            return;
        }
        _send(linkObj);
    }

    /**
     * 发起监控请求
     * @param {dom object} linkObj 链接对象
     */
    function _send(linkObj){
        var common = _commonParams(),
            special = _specialParams(linkObj),
            ph = Conf_PlaceHolder;

        // 若不存在监控属性，则不发送监控请求
        if(!special){
            return;
        }

        // 处理占位符
        if(special == ph){
            special = '';
        } 

        var url = encodeURIComponent(linkObj.href),
            title = encodeURIComponent(_stripHTML(linkObj.innerHTML)),
            // 完整的监控请求URL
            wholeUrl = [Conf_URL, '?url=', url,
                '&title=', title].join(''),
            random = Math.random();

        // 若有公共参数，则添加之
        if(common){
            wholeUrl += '&' + common;
        }

        // 若有额外参数，则添加之
        if(Conf_ExtraParams){
            wholeUrl += '&' + Conf_ExtraParams;
        }

        // 若有特定参数，则添加之
        if(special){
            wholeUrl += '&' + special;
        }

        // 添加其他参数
        wholeUrl += '&' + random;
            

        // 发起nsclick图片监控请求
        _imgReq(wholeUrl);

    }

    /**
     * 发起图片请求
     * @param {string} 图片请求URL
     */
    function _imgReq(url){
        if(!url) return;
        var n = "log__"+ (new Date()).getTime(),
            c = window[n] = new Image();
        c.onload = c.onerror = function(){window[n] = null;/*delete window[n]*/};
        c.src = url;
        c = null;
    }

    /**
     * 构造公共参数
     * @return {string} 公共参数构成的请求串
     */
    function _commonParams(){
        if('' == Conf_PageType){
            return '';
        }
        return Conf_Params[Conf_PageType];
    }

    /**
     * 构造特定参数
     * @param {dom object} linkObj 链接对象
     * @return {string} 特定参数构成的请求串
     */
    function _specialParams(linkObj){
        var prop = Conf_Custermized_Property;
        // return linkObj[prop];
        return linkObj.getAttribute(prop);
    }

    /**
     * 剥除HTML标签
     * @param {string} htmlStr 字符串
     * @return {string} 剥除HTML标签后的字符串
     */
    function _stripHTML(htmlStr){
        if(!htmlStr){
            return '';
        }
        return htmlStr.replace(/<[^>]*>/g, '');
    }

    return {
        init: _init
    };

})();
