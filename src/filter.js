// 新增一个PC端统计筛选的功能，用于过滤无效的统计
var filterAnalyisis = {
    init:function(callback,n){
        this.enabled = null;
        this.domain = location.hostname.indexOf('360che.com') >= 0 ? true : false;
        this.load(callback,n);
    },
    mini:function(){       // 小窗
        if (document.documentElement.clientWidth > 300 && document.documentElement.clientHeight > 300){
            return false;
        }else{
            return true;
        }
    },
    input:function(e){       // 键盘输入
        var code = e.keyCode;
        if (code == '37' || code == '38' || code == '39' || code == '40')
        this.enabled = true;
    },
    inFrame:function(){     // 在iframe中嵌套
        try {
            if (self != top) {
                return true;
            }else{
                return false
            }
        } catch (e) {
            return false;
        }
    },
    load:function(callback,n){
        if(!this.enabled){
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(function(){
            	filterAnalyisis.load(callback,n);
            },10);
            return;
        }
        if(!this.mini() && !this.inFrame() && this.domain){
            callback(n);
        }
    }
};
document.addEventListener('keydown',function(e){
    filterAnalyisis.input(e);
});
document.addEventListener('mouseover',function(e){
     filterAnalyisis.enabled = true;
});
document.addEventListener('mousemove',function(e){
    filterAnalyisis.enabled = true;
});
