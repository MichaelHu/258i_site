var Module = (function(){

var module = function(){
    this.tests = [];
};

module.prototype = {

    showInfo: function(){}

    , execute: function(){
        var i = 0, len = this.tests.length;
        while(i < len){
            this.tests[i].state = 
                this.tests[i].func.apply(window);
        } 
    }

    , addTest: function(test, desc){
        if(typeof test == 'function'){
            this.tests.push({
                func: test
                , desc: desc || 'unknown'
            });
        }
    }
    
};

})();
