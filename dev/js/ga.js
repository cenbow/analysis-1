/* Google */
var ua = navigator.userAgent,n = 3;
var device = {
    "m":2,
    "pc":3,
    "android":5,
    "iphone":6,
    "wechat":8,
    "qq":13
};
function _truckhomeGa(n){
    var _r = window.document.referrer.replace('http://', '');
    if (_r == '')  _r = 'wulaiyuan';
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-64002767-'+ n , 'auto');
    ga('set', 'dimension1', _r);
    ga('send', 'pageview', {
        'dimension1': _r,
        'dimension2':ua
    });
};
if(ua.match(/iphone/gi) || ua.match(/android/gi)){
    if(ua.match(/360che/gi)){
        if(ua.match(/iphone/gi)){
            n = device['iphone']
        }else if(ua.match(/android/gi)){
            n = device['android']
        }
    }else{
        if(/MicroMessenger/i.test(ua)){
            n = device['wechat']
        }else if(/qq\/\d+/i.test(ua)){
            n = device['qq']
        }else{
            n = device['m'];
        }
    }
    _truckhomeGa(n);
}else{
    n = device['pc'];
    filterAnalyisis.init(_truckhomeGa,n);
};
