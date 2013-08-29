/*
* Author: Michael Hu
* Date: 2009-5-21
* Version: 1.0
*/
var McListBox = (function(){

    /**
     * ���캯��
     * @param {object} listObj �б����
     * @param {object} dataSource ����Դ��JSON��ʽ����ײ�Ϊ����
     * @param {function} onchangeHandler �¼�����������ѡ
     */
    function klass(listObj, dataSource, onchangeHandler){
        //�б����
        this.listObj = listObj;
        //����Դ
        this.data = dataSource;
        //�¼��б��������
        this.observers = [];
        //�ϼ��б�ѡ�������飬����һ���б���˵Ϊ������
        this.prefix = [];
        //onchange�¼�������
        if(onchangeHandler && typeof onchangeHandler == 'function'){
            this.onchangeHandler = onchangeHandler;
        }
        else{
            this.onchangeHandler = function(){};
        }
    }
    
    /**
     * ��ʼ��������������б��������
     */
    klass.prototype.initialize = function(){
        if(!this.listObj) return false;
        var me = this;
        if(document.attachEvent){
            this.listObj.attachEvent('onchange', onSelectionChange);
        }
        else if(document.addEventListener){
            this.listObj.addEventListener('change', onSelectionChange, false);
        }
        else{
            this.listObj.onchange = onSelectionChange;
        }
        //�հ�����
        function onSelectionChange(e){
            var prefix = [];
            prefix = prefix.concat(me.prefix, [me.listObj.options[me.listObj.selectedIndex].value]);
            //֪ͨ�ͼ�����б������и���
            me.notify(prefix);
            //�����û��Զ���Ĵ�����
            me.onchangeHandler(e);
        }
    }

    /**
     * �����б�ѡ���Ҫ�������µͼ��б�
     * @param {array} prefix ���ϼ��б�ѡ������ɵ�����
     */
    klass.prototype.updateOptions = function(prefix){
        if(!prefix || prefix.length == undefined){
            return;
        }
        //����ϼ��б�ѡ����
        this.prefix.length = 0;
        //�����ϼ��б�ѡ����
        this.prefix = this.prefix.concat(prefix);
        //��ȡ��Ӧ������Դ
        var opts = this.data;
        for(var i=0, len=prefix.length; i<len; i++){
            opts = opts[prefix[i]];
        }
        //������Դ�����ڣ������κβ���
        if(!opts) return;

        var optObj = this.listObj.options;
        //����ԴΪ����
        if(opts.length){
            optObj.length = 0;
            for(var j=0, len=opts.length; j<len; j++){
                optObj[optObj.length] = new Option(opts[j], opts[j]);
            }
        }
        //������Ϊ����Դ��JSON����
        else{
            optObj.length = 0;
            for(var j in opts){
                optObj[optObj.length] = new Option(j,j);
            }
        }

        var prefix = [];
        prefix = prefix.concat(this.prefix, [this.listObj.options[this.listObj.selectedIndex].value]);
        McDebug.log('prefix length: ' + prefix.length);
        this.notify(prefix);
    };

    /**
     * ֪ͨ�ͼ��б�����и���
     * @param {array} prefix ���ϼ��ͱ����б�ѡ������ɵ�����
     */
    klass.prototype.notify = function(prefix){
        for(var i=0, len=this.observers.length; i<len; i++){
            this.observers[i].updateOptions(prefix);
        }   
    };

    /**
     * ��Ӷ�����Ӧ���¼��б���
     * @param {object} observer �б����
     * @
     */
    klass.prototype.addObserver = function(observer){
        if(observer){
            this.observers.push(observer);
        }
    };

    return klass;
})();

