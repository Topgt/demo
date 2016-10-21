define([
		"text!../components/header/header.html!script",
		"Events"
	],
	function(html, Events) {
		require(["css!./bootstrap-3.3.5-dist/css/bootstrap.min.css"]);
		function Header() {
			var Imgurl = window.location.pathname;
			console.log(Imgurl);
			Imgurl = Imgurl.slice(0, Imgurl.indexOf('/views'));
			this.html = html.replace(/img src="/g, "img src=\"" + Imgurl);
		}
		Header.prototype.constructor = "Header";
		
		Header.prototype.init = function(){
			return this.html;
		};
		
		function Exprots(){
			var model = new Header(arguments);
			this.init = function(){return model.init()};
		};
		
		return Exprots;
});