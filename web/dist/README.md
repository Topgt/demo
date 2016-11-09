### demo ###
> gulp + rquirejs + r.js

#### 目录结构 ####
* src
	* component_modules/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //外部组件
	* componints/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //内部组件
	* static/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //静态资源 该目录由于存放公共的静态资源尽量不要修改里面的内容
		* jq/
		* lib/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // requirejs插件包
		* utils
			* Events.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // 供模块之间解耦合使用(重要)
		* require.mini.js
		* service.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //模块接口统一配置
	* views/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //页面模块
		* model/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //模块名
			* css/            
			* img/
			* js/
			* model.html &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//木块html代码
			* modelMain.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//模块入口代码
	* build.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; //压缩代码钱的配置
	* r.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // 压缩代码工具
	
#### 注意事项 ####
> 模块化的的目的是“分治” 不是“代码重复使用”，	
> 一个页面的模块写在src/views/modelName 文件夹中，涉及到src路径写正常项目路径。	
> src/components/modelName 文件夹中，涉及到src路径要写全项目路径，例如src=/components/messagetip/img/imgName.png	
> 因为页面js分为不同的模块写在不同的js文件中。所以模块之间需要传值 可是有提供的 Events.js 提供的事件-回调的方式进行。	
> 再service.js中提供了模块远端接口的统一配置，建议通过该模块配置。 

#### 压缩发布 ####
1. 安装nodejs
	* [nodejs安装与配置](http://note.youdao.com/noteshare?id=ee1dedc7bfc0445feb419964a91a4f8c)
2. 安装工具requirejs压缩工具
	* npm install -g requirejs
3. 下载r.js 
4. 配置build.js
5. 启动压缩命令
	* node r.js -o build.js
	
#### node + gulp + jshint 前端代码规范检查 ####
1. 安装nodejs
	* [nodejs安装与配置](http://note.youdao.com/noteshare?id=ee1dedc7bfc0445feb419964a91a4f8c)
2. 安装gulp
	* [gulp的使用](http://note.youdao.com/noteshare?id=6bfdb2e8fa15879452e0b76ad42eac39)
	