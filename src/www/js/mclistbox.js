/*
* Author: Michael Hu
* Date: 2009-5-21
* Version: 1.0
*/
var McListBox = (function(){

    /**
     * 构造函数
     * @param {object} listObj 列表对象
     * @param {object} dataSource 数据源，JSON格式，最底层为数组
     * @param {function} onchangeHandler 事件处理函数，可选
     */
    function klass(listObj, dataSource, onchangeHandler){
        //列表对象
        this.listObj = listObj;
        //数据源
        this.data = dataSource;
        //下级列表对象数组
        this.observers = [];
        //上级列表选中项数组，对于一级列表来说为空数组
        this.prefix = [];
        //onchange事件处理函数
        if(onchangeHandler && typeof onchangeHandler == 'function'){
            this.onchangeHandler = onchangeHandler;
        }
        else{
            this.onchangeHandler = function(){};
        }
    }
    
    /**
     * 初始化函数，构造好列表对象后调用
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
        //闭包函数
        function onSelectionChange(e){
            var prefix = [];
            prefix = prefix.concat(me.prefix, [me.listObj.options[me.listObj.selectedIndex].value]);
            //通知低级别的列表对象进行更新
            me.notify(prefix);
            //调用用户自定义的处理函数
            me.onchangeHandler(e);
        }
    }

    /**
     * 更新列表选项，需要联动更新低级列表
     * @param {array} prefix 由上级列表选中项组成的数组
     */
    klass.prototype.updateOptions = function(prefix){
        if(!prefix || prefix.length == undefined){
            return;
        }
        //清空上级列表选中项
        this.prefix.length = 0;
        //更新上级列表选中项
        this.prefix = this.prefix.concat(prefix);
        //获取对应的数据源
        var opts = this.data;
        for(var i=0, len=prefix.length; i<len; i++){
            opts = opts[prefix[i]];
        }
        //若数据源不存在，则不做任何操作
        if(!opts) return;

        var optObj = this.listObj.options;
        //数据源为数组
        if(opts.length){
            optObj.length = 0;
            for(var j=0, len=opts.length; j<len; j++){
                optObj[optObj.length] = new Option(opts[j], opts[j]);
            }
        }
        //否则认为数据源是JSON对象
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
     * 通知低级列表项进行更新
     * @param {array} prefix 由上级和本级列表选中项组成的数组
     */
    klass.prototype.notify = function(prefix){
        for(var i=0, len=this.observers.length; i<len; i++){
            this.observers[i].updateOptions(prefix);
        }   
    };

    /**
     * 添加对其响应的下级列表项
     * @param {object} observer 列表对象
     * @
     */
    klass.prototype.addObserver = function(observer){
        if(observer){
            this.observers.push(observer);
        }
    };

    return klass;
})();

