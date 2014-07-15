{% target: filter(master=base) %}

{% content: style %}
<link rel="stylesheet" href="../src/css/City.less">
<style>
  .line input {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    padding: 4px 5px;
    height: 16px;
    line-height: 16px;
    margin: 0;
    outline: none;
  }
  
  .line button {
    margin: 0 10px;
  }

  .line {
    margin: 10px 0;
  }
</style>
{% content: content %}

{% filter: markdown %}
# Calender

### DEMO
-----------------------

{% /filter%}
<div class="line">
    <input type="text" class="city-trigger" />
    <button type="button" class="city-trigger">click</button>
    <input type="text" class="city-trigger" />
    <button type="button" class="city-trigger">click</button>
</div>
<div class="line">
    <input type="text" class="city-trigger1" />
    <button type="button" class="city-trigger1">click</button>
    <input type="text" class="city-trigger1" />
    <button type="button" class="city-trigger1">click</button>
    <div class="embed-city-holder"></div>
</div>
{% filter: markdown %}

### 源码
-----------------------

```html
<div class="line">
    <input type="text" class="city-trigger" />
    <button type="button" class="city-trigger">click</button>
    <input type="text" class="city-trigger" />
    <button type="button" class="city-trigger">click</button>
</div>
<div class="line">
    <input type="text" class="city-trigger1" />
    <button type="button" class="city-trigger1">click</button>
    <input type="text" class="city-trigger1" />
    <button type="button" class="city-trigger1">click</button>
    <div class="embed-city-holder"></div>
</div>
```

```js
require(['City'], function (City) {

    var $ = require('jquery');

    new City({
      prefix: 'ecl-ui-city',
      triggers: $('.city-trigger').toArray(),
      //target: 'city',
      
      onBeforeShow: function (arg) {
            var e = arg.event;
            var target = e.target;

            // 更新定位及赋值关联的目标 target
            this.setTarget(
                target.tagName == 'INPUT' && target.type == 'text'
                ? target
                : $(target).prev().get(0)
            );
      }

    }).render();

    // 自定义城市数据示例
    var city = new City({
      prefix: 'ecl-ui-city',
      main: $('.embed-city-holder')[0],
      triggers: $('.city-trigger1'),

      // 不自动填充默认城市数据
      autoFill: false,

      // 需要隐藏的城市列表，半角逗号分隔
      hideCities: '湛江,文山,北京',

      onBeforeShow: function (arg) {
            var e = arg.event;
            var target = e.target;

            // 更新定位及赋值关联的目标 target
            this.setTarget(
                target.tagName == 'INPUT' && target.type == 'text'
                ? target
                : $(target).prev().get(0)
            );
      }

    });
    city.fill('热门|'
            + '北京,上海,广州,深圳,武汉,杭州,天津,南京,成都,'
            + '重庆,西安,郑州,大连,青岛,长沙,济南,厦门,哈尔滨');

    city.fill('A-C|'
            + '鞍山,安阳,安庆,安顺,阿里,安康,阿勒泰,阿克苏,阿坝,阿拉善,'
            + '北京,保定,宝鸡,包头,北海,蚌埠,巴中,博尔塔拉,亳州,泊头,'
            + '滨州,毕节,本溪,保山,百色,白银,白山,白城,巴音郭楞,巴彦淖尔,'
            + '成都,重庆,长沙,常州,长春,常德,赤峰,承德,郴州,潮州,朝阳,常熟,'
            + '沧州,长治,昌吉,昌都,从化,慈溪,楚雄,滁州,崇左,赤水,池州,巢湖');

    city.fill('D-G|'
            + '大连,东莞,东营,德州,德阳,大同,大庆,大理,敦煌,大兴安岭,敦化,'
            + '都匀,东阳,定州,定西,迪庆,登封,德惠,德宏,丹阳,丹东,达州,'
            + '恩施,鄂州,峨眉山,鄂尔多斯,福州,抚顺,佛山,抚州,富阳,阜阳,阜新,'
            + '凤阳,防城港,广州,桂林,贵阳,赣州,广元,果洛,贵港,广安,固原,甘孜,甘南');

    city.fill('H-J|'
            + '杭州,合肥,哈尔滨,海口,葫芦岛,黄石,黄冈,呼和浩特,惠州,衡阳,菏泽,河源,'
            + '河池,邯郸,哈密,汉中,黄南,黄山,淮南,淮北,淮安,怀化,湖州,呼伦贝尔,红河,'
            + '衡水,黑河,鹤岗,鹤壁,贺州,和田,海西,海宁,海南州,海拉尔,海东,海城,海北,'
            + '济南,景德镇,济宁,荆州,荆门,佳木斯,九江,锦州,金华,'
            + '吉林,嘉兴,江门,酒泉,晋州,晋中,晋江,晋城,金昌,揭阳,'
            + '蛟河,焦作,江阴,建德,嘉峪关,冀州,济源,集安,吉安,鸡西');

    city.fill('K-N|'
            + '昆明,昆山,开封,克州,克拉玛依,喀什,'
            + '廊坊,乐山,聊城,丽水,洛阳,连云港,丽江,柳州,辽阳,兰州,'
            + '拉萨,临沂,临汾,漯河,吕梁,泸州,娄底,陇南,龙岩,来宾,'
            + '六盘水,六安,浏阳,临夏,临江,临沧,林芝,辽源,凉山,莱芜,'
            + '牡丹江,绵阳,茂名,梅州,梅河口,眉山,马鞍山,'
            + '南京,南昌,宁波,南宁,南通,宁德,怒江,南阳,南平,南充,那曲,内江');

    city.fill('P-S|'
            + '攀枝花,莆田,普洱,濮阳,萍乡,平凉,平顶山,蓬莱,盘锦,'
            + '青岛,衢州,齐齐哈尔,泉州,秦皇岛,曲靖,曲阜,庆阳,'
            + '清远,钦州,黔西南,黔南,黔东南,迁安,七台河,'
            + '日照,瑞丽,汝州,荣成,日喀则,仁怀,'
            + '上海,深圳,沈阳,苏州,石家庄,绍兴,上饶,十堰,汕头,顺德,'
            + '韶关,三亚,随州,遂宁,绥化,绥芬河,宿州,双鸭山,寿光,石嘴山,'
            + '盛泽,邵阳,韶山,商丘,商洛,汕尾,三河,三门峡,沙河,三明');

    city.fill('T-X|'
            + '天津,太原,台州,吐鲁番,太仓,唐山,泰安,泰州,铜仁,铜陵,'
            + '桐乡,铜川,通辽,通化,铁岭,天水,天门,滕州,塘沽,塔城,'
            + '武汉,无锡,温州,乌鲁木齐,威海,潍坊,吴江,武夷山,'
            + '武威,梧州,芜湖,吴忠,乌兰察布,乌海,文山,文登,渭南,'
            + '西安,厦门,徐州,咸宁,咸阳,仙桃,襄樊,孝感,许昌,'
            + '邢台,西双版纳,西宁,襄阳,湘西,湘潭,荥阳,宣城,兴安盟,'
            + '兴安,信阳,新郑,新余,新乡,新民,新乐,忻州,锡林郭勒');

    city.fill('Y-Z|'
            + '烟台,宜昌,岳阳,延安,义乌,扬州,银川,盐城,运城,云浮,玉溪,'
            + '玉树,玉林,玉环,榆林,余姚,永州,永济,营口,鹰潭,益阳,宜兴,宜春,'
            + '宜宾,沂州,伊宁,伊犁,伊春,洋浦,阳泉,阳江,兖州,延吉,延边,雅安,'
            + '郑州,淄博,张家口,珠海,湛江,株洲,中山,镇江,遵义,遵化,自贡,资阳,涿州,'
            + '驻马店,周口,舟山,中卫,肇庆,昭通,漳州,章丘,张掖,张家港,增城,枣庄');


    city.render();


});
```
{% /filter %}
{% content: script %}
<script>
require(['City'], function (City) {

    var $ = require('jquery');

    new City({
      prefix: 'ecl-ui-city',
      triggers: $('.city-trigger').toArray(),
      //target: 'city',
      
      onBeforeShow: function (arg) {
            var e = arg.event;
            var target = e.target;

            // 更新定位及赋值关联的目标 target
            this.setTarget(
                target.tagName == 'INPUT' && target.type == 'text'
                ? target
                : $(target).prev().get(0)
            );
      }

    }).render();

    // 自定义城市数据示例
    var city = new City({
      prefix: 'ecl-ui-city',
      main: $('.embed-city-holder')[0],
      triggers: $('.city-trigger1'),

      // 不自动填充默认城市数据
      autoFill: false,

      // 需要隐藏的城市列表，半角逗号分隔
      hideCities: '湛江,文山,北京',

      onBeforeShow: function (arg) {
            var e = arg.event;
            var target = e.target;

            // 更新定位及赋值关联的目标 target
            this.setTarget(
                target.tagName == 'INPUT' && target.type == 'text'
                ? target
                : $(target).prev().get(0)
            );
      }

    });
    city.fill('热门|'
            + '北京,上海,广州,深圳,武汉,杭州,天津,南京,成都,'
            + '重庆,西安,郑州,大连,青岛,长沙,济南,厦门,哈尔滨');

    city.fill('A-C|'
            + '鞍山,安阳,安庆,安顺,阿里,安康,阿勒泰,阿克苏,阿坝,阿拉善,'
            + '北京,保定,宝鸡,包头,北海,蚌埠,巴中,博尔塔拉,亳州,泊头,'
            + '滨州,毕节,本溪,保山,百色,白银,白山,白城,巴音郭楞,巴彦淖尔,'
            + '成都,重庆,长沙,常州,长春,常德,赤峰,承德,郴州,潮州,朝阳,常熟,'
            + '沧州,长治,昌吉,昌都,从化,慈溪,楚雄,滁州,崇左,赤水,池州,巢湖');

    city.fill('D-G|'
            + '大连,东莞,东营,德州,德阳,大同,大庆,大理,敦煌,大兴安岭,敦化,'
            + '都匀,东阳,定州,定西,迪庆,登封,德惠,德宏,丹阳,丹东,达州,'
            + '恩施,鄂州,峨眉山,鄂尔多斯,福州,抚顺,佛山,抚州,富阳,阜阳,阜新,'
            + '凤阳,防城港,广州,桂林,贵阳,赣州,广元,果洛,贵港,广安,固原,甘孜,甘南');

    city.fill('H-J|'
            + '杭州,合肥,哈尔滨,海口,葫芦岛,黄石,黄冈,呼和浩特,惠州,衡阳,菏泽,河源,'
            + '河池,邯郸,哈密,汉中,黄南,黄山,淮南,淮北,淮安,怀化,湖州,呼伦贝尔,红河,'
            + '衡水,黑河,鹤岗,鹤壁,贺州,和田,海西,海宁,海南州,海拉尔,海东,海城,海北,'
            + '济南,景德镇,济宁,荆州,荆门,佳木斯,九江,锦州,金华,'
            + '吉林,嘉兴,江门,酒泉,晋州,晋中,晋江,晋城,金昌,揭阳,'
            + '蛟河,焦作,江阴,建德,嘉峪关,冀州,济源,集安,吉安,鸡西');

    city.fill('K-N|'
            + '昆明,昆山,开封,克州,克拉玛依,喀什,'
            + '廊坊,乐山,聊城,丽水,洛阳,连云港,丽江,柳州,辽阳,兰州,'
            + '拉萨,临沂,临汾,漯河,吕梁,泸州,娄底,陇南,龙岩,来宾,'
            + '六盘水,六安,浏阳,临夏,临江,临沧,林芝,辽源,凉山,莱芜,'
            + '牡丹江,绵阳,茂名,梅州,梅河口,眉山,马鞍山,'
            + '南京,南昌,宁波,南宁,南通,宁德,怒江,南阳,南平,南充,那曲,内江');

    city.fill('P-S|'
            + '攀枝花,莆田,普洱,濮阳,萍乡,平凉,平顶山,蓬莱,盘锦,'
            + '青岛,衢州,齐齐哈尔,泉州,秦皇岛,曲靖,曲阜,庆阳,'
            + '清远,钦州,黔西南,黔南,黔东南,迁安,七台河,'
            + '日照,瑞丽,汝州,荣成,日喀则,仁怀,'
            + '上海,深圳,沈阳,苏州,石家庄,绍兴,上饶,十堰,汕头,顺德,'
            + '韶关,三亚,随州,遂宁,绥化,绥芬河,宿州,双鸭山,寿光,石嘴山,'
            + '盛泽,邵阳,韶山,商丘,商洛,汕尾,三河,三门峡,沙河,三明');

    city.fill('T-X|'
            + '天津,太原,台州,吐鲁番,太仓,唐山,泰安,泰州,铜仁,铜陵,'
            + '桐乡,铜川,通辽,通化,铁岭,天水,天门,滕州,塘沽,塔城,'
            + '武汉,无锡,温州,乌鲁木齐,威海,潍坊,吴江,武夷山,'
            + '武威,梧州,芜湖,吴忠,乌兰察布,乌海,文山,文登,渭南,'
            + '西安,厦门,徐州,咸宁,咸阳,仙桃,襄樊,孝感,许昌,'
            + '邢台,西双版纳,西宁,襄阳,湘西,湘潭,荥阳,宣城,兴安盟,'
            + '兴安,信阳,新郑,新余,新乡,新民,新乐,忻州,锡林郭勒');

    city.fill('Y-Z|'
            + '烟台,宜昌,岳阳,延安,义乌,扬州,银川,盐城,运城,云浮,玉溪,'
            + '玉树,玉林,玉环,榆林,余姚,永州,永济,营口,鹰潭,益阳,宜兴,宜春,'
            + '宜宾,沂州,伊宁,伊犁,伊春,洋浦,阳泉,阳江,兖州,延吉,延边,雅安,'
            + '郑州,淄博,张家口,珠海,湛江,株洲,中山,镇江,遵义,遵化,自贡,资阳,涿州,'
            + '驻马店,周口,舟山,中卫,肇庆,昭通,漳州,章丘,张掖,张家港,增城,枣庄');


    city.render();


});
</script>