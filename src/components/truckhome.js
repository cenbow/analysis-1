/* 卡车之家大数据中心统计 */
var STATS = 'https://stats.360che.com/'; 
var REFERRER = document.referrer || 'wulaiyuan';    // 来源
var CURRENT = location.href; 

// PV统计
function Truckhome_pv(options){
    var sites = {
        "product":2,
        "dealer":3,
        "m":4,
        "guache":5,
        "bbs":6,
        "mai":7,
        "tao":8,
        "vip":9
    };
    // 屏幕分辨率
    var SW = screen.width,SC = screen.height;
    var hostname = location.hostname.match(/[^.$]+/);

    // 站点
    var site = sites[hostname] || 1,s = '';

    if(options){
        for(var key in options){
            s += ('&' + key + '=' + options[key]);
        };
    }

    var img = new Image();
    img.src = STATS + 'tj.gif?sw='+ SW + '&sc=' + SC + '&referrer=' + REFERRER + '&page=' + CURRENT + '&site=' + site + s + '&ts=' + (+new Date());
};

// 停留时长
function Truckhome_duration(){
    var start,end,UUID = document.cookie.match(/udstatistics=([^;$]+)/),r = '';
    window.addEventListener('DOMContentLoaded',function(e){
        start = +new Date();
    });
    if(UUID && UUID[1]){
        r = escape(encodeURIComponent(UUID[1] + ((+new Date()) + '').substr(0,8)));
    }
    window.addEventListener('beforeunload',function(){
        end = +new Date();
        var img = new Image();
        img.src = STATS + 'tlsc.gif?r=' + r + '&s=' + start + '&e=' + end + '&referer=' + REFERRER;
    });
}

/*
    task:所属业务线
*/
// 点击统计,提交，变更等类别统计
function Truckhome_events(options){
    var s = '',img = new Image(),ts = +new Date();
    if(options){
        for(var key in options){
            s += ('&' + key + '=' + options[key]);
        };
    }
    img.src = STATS + 'events.gif?page=' + CURRENT + s + '&ts=' + ts;
};


// 微信分享统计
function Truckhome_shares(options){
    var s = '',img = new Image(),ts = +new Date();
    if(options){
        for(var key in options){
            s += ('&' + key + '=' + options[key]);
        };
    }
    img.src = STATS + 'shares.gif?page=' + CURRENT + s + '&ts=' + ts;
}
