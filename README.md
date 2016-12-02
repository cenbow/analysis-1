# 卡车之家数据统计分析说明文档

## 概述

卡车之家新版数据统计分析JS是大数据中心针对各业务线的统计需求，所提供的统计文件。

通过使用新版统计JS，可以让开发人员直接添加配置项就达到统计输出的功能，节省沟通和开发的成本。

此文档面向所有现有业务线和新业务线的开发人员介绍新版统计JS如何使用及相关注意事项

## 统计JS使用步骤

### 步骤一：引入JS文件

在需要添加统计的页面引入如下JS文件，（支持https）：http://s.kcimg.cn/main/t.analysis-1.1.js

==请注意，如果你的页面启用了https，务必引入https://s.kcimg.cn/main/t.analysis-1.1.js ，否则将无法成功使用新版统计JS==

### 步骤二：调用统计函数

==所有需要使用新版统计JS的页面必须调用所属业务线对应方法，否则将无法统计到任何数据==


### 分类
我将统计标签进行了汇总合并，一共分为了4个大类，分别为PV/UV的统计，停留时长的统计，Event(click,submit,change)统计、分享的统计

---


## PV/UV


```
//方法调用
Truckhome_pv(options);

// 实际请求
https://stats.360che.com/tj.gif

```

### 实例说明
- 产品库子类综述页

```

//方法调用
Truckhome_pv({
    "dl":1221,  // 大类id
    "ct":333,   // 子类id
    "sr":34,    // 车系id
    "br":543,   // 品牌id
    "p":23      // 产品id
});

// 实际详细
https://stats.360che.com/tj.gif?sw=1024&sc=768&referrer=wulaiyuan&page=http://product.360che.com/s0/64_66_index.html&site=2&ts=1480641411456&dl=1221&ct=333&sr=34&br=543&p=23

```


## 停留时长

```
//方法调用
Truckhome_duration();

// 实际请求
https://stats.360che.com/tlsc.gif

```
### 实例说明

- 产品库子类综述页

```
//方法调用
Truckhome_duration();

// 请求详细
https://stats.360che.com/tlsc.gif?r=uuid&s=1480641411456&e=1480641522567&referer=https://www.baidu.com/s?wd=%E5%8D%A1%E8%BD%A6%E4%B9%8B%E5%AE%B6&rsv_spt=1&rsv_iqid=0x9d89730e00012cfd&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=10&rsv_sug1=7&rsv_sug7=101&sug=%E5%8D%A1%E8%BD%A6%E4%B9%8B%E5%AE%B6&rsv_n=1

```

## Event(各类事件)统计

```
//方法调用
Truckhome_events(options);

// 实际请求
https://stats.360che.com/events.gif

```

### 实例说明

- 询底价入口按钮点击

```
//方法调用
Truckhome_events({
    "place":"bottom" // 询底价按钮位置

});

// 请求详细
https://stats.360che.com/events.gif?place=bottom&ts=1480641411456&page=http://product.360che.com/s0/64_66_index.html

```

- 完成询底价次数

```
//方法调用
Truckhome_events({
    "result":"error" // 询底价完成结果状态

});

// 请求详细
https://stats.360che.com/events.gif?result=error&ts=1480641411456&page=http://product.360che.com/ibp/index_p1825.html

```

## 微信分享统计

```
//方法调用
Truckhome_shares(options);

// 实际请求
https://stats.360che.com/shares.gif

```

### 实例说明

- 论坛微信版帖子页面分享
```
//方法调用
Truckhome_events({
    "type":"poster",    // 分享内容类型
    "id":2,             // 分享类型id
    "obj":"朋友圈",     // 分享对象类型（朋友圈，微信好友）

});

// 请求详细
https://stats.360che.com/shares.gif?type=poster&id=2&obj=%E6%9C%8B%E5%8F%8B%E5%9C%88&ts=1480641411456

```
