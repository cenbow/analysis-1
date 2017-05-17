/* Google */
var UA = navigator.userAgent,
    IPHONE = /iPhone|iPad|iPod/i.test(UA),
    ANDROID = /android/i.test(UA),
    APP = /360che/i.test(UA),
    WECHAT = /MicroMessenger/i.test(UA),
    QQ = /qq\/\d+/i.test(UA),
    SPIDER = /spider|googlebot|user-agent|networkbench/i.test(UA);
var n = 3;
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
	ga(function(tracker) {
		tracker.set('dimension16', tracker.get('clientId'))
	});
	ga('set', 'dimension1', _r);
	window.GA_callback && window.GA_callback();
    ga('send', 'pageview', {
        'dimension1': _r,
        'dimension2':ua
    });
};
if(!SPIDER){
    if(IPHONE || ANDROID){
        if(APP){    // 客户端
            n = IPHONE ? device['iphone'] : device['android']
        }else{      // 微信，QQ，手机站
            n = WECHAT ? device['wechat'] : (QQ ? device['qq'] : device['m'])
        }
        _truckhomeGa(n)
    }else{
        n = device['pc'];
        filterAnalyisis.init(_truckhomeGa,n);
    };
}
