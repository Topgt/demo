/**
 * @license RequireJS html 0.0.2 Copyright (c) 2012-2012, Gabriel Reitz Giannattasio All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/gartz/html for details
 */

define(["text"],function(e){var t={load:function(e,t,n,r){if(r.isBuild){n();return}t(["text!"+e],function(t){var r=document.createDocumentFragment(),i=/<html( |>)((.|[\r\n])*)<\/html(.*)>|<head( |>)((.|[\r\n])*)<\/head(.*)>/i,s=i.test(t),o=document.createElement(s?"html":"body");o.innerHTML=t;if(o.children)for(var u=0,a=o.children.length;u<a;u++)r.appendChild(o.children[0]);var f=r.cloneNode(!0);r.stash=function(){if(this.childNodes){var e=this.childNodes;for(var t=0,n=e.length;t<n;t++)this.removeChild(e[0])}this.appendChild(f.cloneNode(!0))},r.path=e,r.source=t,n(r)})}};return t});