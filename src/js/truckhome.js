/* 卡车之家大数据中心统计 */
var stats = 'https://stats.360che.com/';
var referrer = document.referrer || 'wulaiyuan';    // 来源
var current = location.href;

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
    var sw = screen.width,sc = screen.height;
    var hostname = location.hostname.match(/[^.$]+/);

    // 站点
    var site = sites[hostname] || 1,s = '';

    if(options){
        for(var key in options){
            s += ('&' + key + '=' + options[key]);
        };
    }

    var img = new Image();
    img.src = stats + 'tj.gif?sw='+ sw + '&sc=' + sc + '&referrer=' + referrer + '&page=' + current + '&site=' + site + s + '&ts=' + (+new Date());
};

// 停留时长
function Truckhome_duration(){
    var start,end,uuid = document.cookie.match(/udstatistics=([^;$]+)/),r = '';
    window.addEventListener('load',function(e){
        start = +new Date();
    });
    if(uuid && uuid[1]){
        r = escape(encodeURIComponent(uuid[1] + ((+new Date()) + '').substr(0,8)));
    }
    window.addEventListener('beforeunload',function(){
        end = +new Date();
        var img = new Image();
        img.src = stats + 'tlsc.gif?r=' + r + '&s=' + start + '&e=' + end + '&referer=' + referrer;
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
    img.src = stats + 'events.gif?page=' + current + s + '&ts=' + ts;
};


// 微信分享统计
function Truckhome_shares(options){
    var s = '',img = new Image(),ts = +new Date();
    if(options){
        for(var key in options){
            s += ('&' + key + '=' + options[key]);
        };
    }
    img.src = stats + 'shares.gif?page=' + current + s + '&ts=' + ts;
}
