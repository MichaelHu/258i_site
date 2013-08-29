/*
* Author: Michael Hu
* Date: 2009-6-17
* Date: 2012-10-09
* Version: 
*/

var ClickMonitor = (function(){
    /**
     * ������
     * @variable {object} Conf_Params ҳ�����͵Ĺ�����ز���
     * @variable {number} Conf_ProdID ��Ʒ��ID��NewsΪ107
     * @variable {number} Conf_SubProdType ��Ʒ�ߵ������ͣ�0Ϊ����ˣ�1Ϊ������
     * @variable {string} Conf_URL ��ط�������ַ
     * @variable {string} Conf_PageType ҳ������
     * @variable {string} Conf_Custermized_Property �Զ���������
     * @variable {string} Conf_PlaceHolder �Զ������Ե�ռλ���������ֿ��ִ�
     * @variable {string} Conf_ExtraParams �������
     */
    var Conf_Params = {
            // ��ҳ
            'INDEX': 'page=index'
        },
        Conf_URL = '/click.gif',
        Conf_PageType = '',
        Conf_Custermized_Property = 'mon',
        Conf_PlaceHolder = 'ph',
        Conf_ExtraParams = '';

    /**
     * ��ʼ����ע��document�ĵ���¼�
     * @param {string} pageType ҳ������
     * @param {string} extraParams ��ѡ����ʽΪm=n����������
     *     ҳ���ṩ�Ĳ�������Ϊһ����������
     */
    function _init(pageType, extraParams){
        if(!pageType){
            return;
        }
        Conf_PageType = pageType;

        if(extraParams){
            Conf_ExtraParams = extraParams;
        }

        // ��ȡ��������ط�ʽ��ע��mousedown�¼�
        if(window.attachEvent){
            document.attachEvent('onmousedown', _monitor);
        }
        else if(window.addEventListener){
            document.addEventListener('mousedown', _monitor,
                false);
        }
    }
    
    /**
     * �����غ���
     * @param {event object} event �¼�����
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
        // ����ͼƬ�������丸�ڵ��е����ӽڵ�
        if('a' != tag){
            var parent = target.parentNode,
                parentTag = '';
            while(parent){
                // ���ڵ����û��tagName����
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
     * ����������
     * @param {dom object} linkObj ���Ӷ���
     */
    function _send(linkObj){
        var common = _commonParams(),
            special = _specialParams(linkObj),
            ph = Conf_PlaceHolder;

        // �������ڼ�����ԣ��򲻷��ͼ������
        if(!special){
            return;
        }

        // ����ռλ��
        if(special == ph){
            special = '';
        } 

        var url = encodeURIComponent(linkObj.href),
            title = encodeURIComponent(_stripHTML(linkObj.innerHTML)),
            // �����ļ������URL
            wholeUrl = [Conf_URL, '?url=', url,
                '&title=', title].join(''),
            random = Math.random();

        // ���й��������������֮
        if(common){
            wholeUrl += '&' + common;
        }

        // ���ж�������������֮
        if(Conf_ExtraParams){
            wholeUrl += '&' + Conf_ExtraParams;
        }

        // �����ض������������֮
        if(special){
            wholeUrl += '&' + special;
        }

        // �����������
        wholeUrl += '&' + random;
            

        // ����nsclickͼƬ�������
        _imgReq(wholeUrl);

    }

    /**
     * ����ͼƬ����
     * @param {string} ͼƬ����URL
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
     * ���칫������
     * @return {string} �����������ɵ�����
     */
    function _commonParams(){
        if('' == Conf_PageType){
            return '';
        }
        return Conf_Params[Conf_PageType];
    }

    /**
     * �����ض�����
     * @param {dom object} linkObj ���Ӷ���
     * @return {string} �ض��������ɵ�����
     */
    function _specialParams(linkObj){
        var prop = Conf_Custermized_Property;
        // return linkObj[prop];
        return linkObj.getAttribute(prop);
    }

    /**
     * ����HTML��ǩ
     * @param {string} htmlStr �ַ���
     * @return {string} ����HTML��ǩ����ַ���
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
