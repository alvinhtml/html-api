!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["simple-chart"]=e():t["simple-chart"]=e()}(self,(function(){return(()=>{"use strict";var t={126:function(t,e,i){var n=this&&this.__read||function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a},o=this&&this.__spreadArray||function(t,e){for(var i=0,n=e.length,o=t.length;i<n;i++,o++)t[o]=e[i];return t},r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(i(581)),s=i(675),u=i(494),h=function(){function t(){this.recoverShapes=[],this.legends=[],this.style={colors:["#f2711c","#2185d0","#21ba45","#b5cc18","#00b5ad","#fbbd08","#6435c9","#a333c8","#e03997","#a5673f"],font:"12px sans-serif",legend:{orient:"horizontal",position:["left","top"]},nameStyle:"{a}%",valueStyle:"{c}%"},this.padding=[40,20,40,60]}return t.prototype.initStyle=function(){this.option.style&&(this.style=Object.assign(this.style,this.option.style),this.option.style.legend&&(this.style.legend=Object.assign(this.style.legend,this.option.style.legend)))},t.prototype.precentToFloat=function(t){return parseInt(t.slice(0,-1))/100},t.prototype.initTip=function(){var t=this;!1!==this.option.tip&&(a.default.createStyle(),this.tip=a.default.init(this.stage2d.container),this.stage2d.addEventListener("mousemove",(function(e){t.moveTip(e)})),this.stage2d.addEventListener("mouseout",(function(e){t.tip.hide()})))},t.prototype.moveTip=function(t){var e=t.target;this.tip.show(),this.tip.move(t.mouseX,t.mouseY,e)},t.prototype.clearTip=function(){this.tip.hide()},t.prototype.initLegend=function(){var t=this,e=this.option;if(!e.legend||!e.style.legend)return!1;this.legends=this.option.legend.map((function(i,n){var o=new s.Legend;switch(o.stage2d=t.stage2d,o.chart2d=t,o.name=i,o.pattern=e.style.colors[n],o.mouseOverPattern=u.lighten(e.style.colors[n]),t.type){case"pie":o.binders=[t.shapes[n]];break;case"bar":o.binders=t.shapes.map((function(t){return t[n]}));break;case"line":o.binders=t.shapes[n]}return o}))},t.prototype.setLegend=function(t){var e,i;if(!(null===(i=null===(e=this.option)||void 0===e?void 0:e.style)||void 0===i?void 0:i.legend))return!1;var o=this.option.style.legend,r=o.orient,a=o.position,s=0,u=0;this.legends.forEach((function(e){var i=t.measureText(e.name);e.width=i.width+24,e.x=s,e.y=u,"vertical"===r?u+=i.actualBoundingBoxRight:s+=e.width}));var h=n(a||["left","top"],2),l=h[0],c=h[1];switch(l){case"left":l=0;break;case"center":l=this.stage2d.width/2-s/2;break;case"right":l=this.stage2d.width-s;break;default:l=0}switch(c){case"top":c=20;break;case"center":c=this.stage2d.height/2-u/2;break;case"bottom":c=this.stage2d.height-u-10;break;default:c=20}this.legends.forEach((function(t){t.x=t.x+l,t.y=t.y+c}))},t.prototype.paint=function(){var t=this,e=this.stage2d.getScene();e.initContext(this.option.style),this.setLegend(e.context),e.paint((function(){t.shapes.flat().forEach((function(t){t.paint(e.context)})),t.legends.forEach((function(t){t.paint(e.context)}))}))},t.prototype.paintAxis=function(t){var e=this,i=this.option,r=new s.Axis;r.width=this.stage2d.width-this.padding[1]-this.padding[3],r.height=this.stage2d.height-this.padding[0]-this.padding[2],r.x=this.padding[3],r.y=this.padding[0],r.xLabel=i.xAxis.data;var a=t.flat().flat(),u=Math.max.apply(null,a),h=Math.min.apply(Math,o([],n(a)));if(r.yLabel=this.getScaleMark(u,h),!this.axisScene){var l=this.stage2d.getScene();this.axisScene=l,l.initContext(this.option.style)}return this.axisScene.paintOnce((function(){r.paint(e.axisScene.context)})),[r.yLabel[0],r.yLabel[r.yLabel.length-1]]},t.prototype.getScaleMark=function(t,e){for(var i=-6,n=Math.max(Math.abs(t-e),t);n>Math.pow(10,i);)i+=1;var o=Math.pow(10,i-1);t<3*Math.pow(10,i-1)&&(o/=2),t>6*Math.pow(10,i-1)&&(o*=2);var r=0;if(e<0)for(;r>e;)r-=o;for(var a=[r];r<t;)r+=o,a.push(Math.round(1e5*r)/1e5);return a},t.prototype.addRecoverShapes=function(t,e){this.recoverShapes.push({shape:t,props:e})},t.prototype.recover=function(){this.recoverShapes.forEach((function(t){t.shape.animate(t.props)})),this.recoverShapes=[]},t.prototype.reset=function(){switch(this.type){case"pie":this.setPie();break;case"bar":this.setBar();break;case"line":this.setLine()}},t}();e.default=h},874:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__read||function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=a(i(126)),u=i(675),h=i(494),l=function(t){function e(e,i){var n=t.call(this)||this;return n.option=e,n.stage2d=i,n.type=e.type,n.initOptions(),n.setBar(),n}return o(e,t),e.prototype.initOptions=function(){var t=this;this.initStyle();var e=this,i=e.option,n=(e.stage2d,e.style);i.padding&&(this.padding=i.padding);var o=r(this.paintAxis(i.data),2);if(o[0],o[1],this.shapes=[],i.data&&i.data.length){var a=i.data.reduce((function(t,e){return Math.max(t,e.length)}),0);console.log("len",a);for(var s=function(e){var o=[];i.data.forEach((function(t){o.push(t[e]||0)})),l.shapes.push(o.map((function(e,o){return r=e,a=o,(s=new u.Bar).stage2d=t.stage2d,s.chart2d=t,s.pattern=n.colors[a],s.mouseOverPattern=h.lighten(n.colors[a]),s.name=i.legend[a],s.value=r,s;var r,a,s})))},l=this,c=0;c<a;c++)s(c);console.log("this.shapes",this.shapes)}this.initLegend(),this.initTip()},e.prototype.setBar=function(){var t=this,e=this.option,i=this.stage2d,n=i.width-this.padding[1]-this.padding[3],o=i.height-this.padding[0]-this.padding[2],a=this.shapes.map((function(t){return t.filter((function(t){return!t.disabled})).map((function(t){return t.value}))})),s=r(this.paintAxis(a),2),u=s[0],h=s[1],l=n/e.data.reduce((function(t,e){return Math.max(t,e.length)}),0);this.shapes.forEach((function(e,i){var n=e.reduce((function(t,e){return t+(e.disabled?0:1)}),0);e.filter((function(t){return t.disabled&&t.animate({width:0}),!t.disabled})).forEach((function(e,r){var a=.8*l/n,s=(e.value-u)/(h-u)*o,c=.8*a,p=a*r+.1*a+l*i+t.padding[3]+.1*l,f=o+t.padding[0]-1;e.y=o+t.padding[0]-1,e.animate({width:c,height:s,x:p,y:f})}))}))},e}(s.default);e.default=l},3:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__read||function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a},a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=a(i(126)),u=i(675),h=i(494),l=function(t){function e(e,i){var n=t.call(this)||this;return n.option=e,n.stage2d=i,n.type=e.type,n.initOptions(),n.setLine(),n}return o(e,t),e.prototype.initOptions=function(){var t=this;this.initStyle();var e=this,i=e.option,n=(e.stage2d,e.style);i.padding&&(this.padding=i.padding);var o=r(this.paintAxis(i.data),2);o[0],o[1],this.shapes=[],i.data.forEach((function(e,o){var r,a,s;t.shapes.push([(r=e,a=o,s=new u.Line,s.stage2d=t.stage2d,s.chart2d=t,s.width=t.stage2d.width-t.padding[1]-t.padding[3],s.height=t.stage2d.height-t.padding[0]-t.padding[2],s.x=t.padding[3],s.y=t.padding[0],s.pattern=n.colors[a],s.mouseOverPattern=h.lighten(n.colors[a]),s.areaPattern=h.alpha(n.colors[a],.1),s.name=i.legend[a],s.values=r,s.points=s.values.map((function(e){var o=new u.Point;return o.stage2d=t.stage2d,o.chart2d=t,o.x=t.padding[3],o.y=t.padding[0]+s.height,s.pattern=n.colors[a],o.value=e,o.name=i.legend[a],o})),s)])})),this.initLegend(),this.initTip()},e.prototype.setLine=function(){this.option,this.stage2d;var t=this.shapes.map((function(t){return t.filter((function(t){return!t.disabled})).map((function(t){return t.values}))})),e=r(this.paintAxis(t),2),i=e[0],n=e[1];this.shapes.forEach((function(t,e){t.forEach((function(t,e){var o=t.width/(t.points.length-1);t.points.forEach((function(e,r){var a=t.x+r*o,s=t.y+t.height-(e.value-i)/(n-i)*t.height;e.animate({x:a,y:s})}))}))}))},e}(s.default);e.default=l},312:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(i(126)),s=i(675),u=i(494),h=function(t){function e(e,i){var n=t.call(this)||this;return n.option=e,n.stage2d=i,n.type=e.type,n.initOptions(),n.setPie(),n}return o(e,t),e.prototype.initOptions=function(){var t=this;this.initStyle();var e=this,i=e.option,n=e.stage2d,o=e.style;void 0===i.radius?i.radius=Math.round(Math.min(n.width,n.height)/2*.8):i.radius=Math.round(Math.min(n.width,n.height)/2*this.precentToFloat(i.radius)),void 0===i.center?i.center=[Math.round(n.width/2),Math.round(n.height/2)]:(i.center[0]=Math.round(n.width*this.precentToFloat(i.center[0])),i.center[1]=Math.round(n.height*this.precentToFloat(i.center[1]))),void 0===i.legend&&(i.legend=i.data),this.shapes=[],i.data&&i.data.length&&i.data.forEach((function(e,n){var r=new s.Pie;r.stage2d=t.stage2d,r.chart2d=t,r.x=i.center[0],r.y=i.center[1],r.originalX=i.center[0],r.originalY=i.center[1],r.pattern=o.colors[n],r.mouseOverPattern=u.lighten(o.colors[n]),r.name=i.legend[n],r.value=e,r.radius=i.radius,r.sAngle=-Math.PI/2,r.eAngle=-Math.PI/2,t.shapes.push(r)})),this.initLegend(),this.initTip()},e.prototype.setPie=function(){var t=this,e=this.shapes.reduce((function(t,e){return e.disabled||(t+=e.value),t}),0),i=-Math.PI/2,n=-Math.PI/2;this.shapes.forEach((function(o){o.disabled?o.precent=0:o.precent=o.value/e*100,n+=o.precent/50*Math.PI,o.animate({eAngle:n,sAngle:i}),i=n;var r=t.style;"function"==typeof r.nameStyle&&(o.nameText=r.nameStyle(o.name,o.value,o.precent)),"string"==typeof r.nameStyle&&(o.nameText=r.nameStyle.replace("{a}",o.name).replace("{b}",o.value.toString()).replace("{c}",Math.round(o.precent).toString())),"function"==typeof r.valueStyle&&(o.valueText=r.valueStyle(o.name,o.value,o.precent)),"string"==typeof r.valueStyle&&(o.valueText=r.valueStyle.replace("{a}",o.name).replace("{b}",o.value.toString()).replace("{c}",Math.round(o.precent).toString()))}))},e}(a.default);e.default=h},123:function(t,e,i){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Charts=void 0;var o=n(i(472)),r=n(i(312)),a=n(i(874)),s=n(i(3)),u=function(){function t(t){this.legendList=[],this.charts=[],this.recoverAnimateList=[],this.legendOffsetTop=20,this.tip=null,t&&(this.stage2d=new o.default(t))}return t.prototype.setOption=function(t){var e;switch(this.charts=[],t.type){case"pie":e=new r.default(t,this.stage2d);break;case"bar":e=new a.default(t,this.stage2d);break;case"line":e=new s.default(t,this.stage2d)}this.charts.push(e),this.render()},t.prototype.render=function(){this.charts.forEach((function(t){t.paint()}))},t.prototype.addEventListener=function(t,e){this.stage2d.addEventListener(t,e)},t}();e.Charts=u},710:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){this.eventType=t,this.callback=e}},120:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){this.x=t,this.y=e}},336:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.items=[]}return t.prototype.enqueue=function(t){this.items.push(t)},t.prototype.dequeue=function(){return this.items.shift()},t.prototype.front=function(){return this.items[0]},t.prototype.isEmpty=function(){return 0==this.items.length},t.prototype.size=function(){return this.items.length},t.prototype.clear=function(){this.items=[]},t}();e.default=i},659:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.stage2d=t;var e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.style.position="absolute",this.stage2d.container.appendChild(e);var i=e.getContext("2d");i&&(this.context=i)}return t.prototype.initContext=function(t){this.context.strokeStyle="#ffffff",this.context.lineJoin="bevel",this.context.miterLimit=1,this.context.textAlign="center",this.context.textBaseline="middle",this.context.font=t.font,this.context.fillStyle="#ffffff"},t.prototype.paint=function(t){var e=this,i=function(){if(e.stage2d.isVisibility){var n=e.stage2d,o=n.width,r=n.height,a=n.translateX,s=n.translateY,u=n.scale;e.context.clearRect(0,0,o,r),e.context.globalAlpha=1,e.context.save(),e.context.translate(a,s),e.context.scale(u,u),t(e.context),e.context.restore(),e.stage2d.clearEventPoint()}requestAnimationFrame(i)};requestAnimationFrame(i)},t.prototype.paintOnce=function(t){var e=this;requestAnimationFrame((function(){if(e.stage2d.isVisibility){var i=e.stage2d,n=i.width,o=i.height,r=i.translateX,a=i.translateY,s=i.scale;e.context.clearRect(0,0,n,o),e.context.globalAlpha=1,e.context.save(),e.context.translate(r,a),e.context.scale(s,s),t(e.context),e.context.restore()}}))},t}();e.default=i},997:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.type="axis",e.pattern="#ffffff",e.mouseOverPattern="#ffffff",e.name="axis",e.width=0,e.height=0,e.x=0,e.y=0,e.xLabel=[],e.yLabel=[],e.type="legend",e}return o(e,t),e.prototype.clickAnimate=function(){},e.prototype.paint=function(t){var e=this;t.save(),t.strokeStyle="#000",t.fillStyle="#000",t.beginPath();var i=this.width/this.xLabel.length;t.moveTo(this.x,this.y+this.height),t.lineTo(this.x+this.width,this.y+this.height),this.xLabel.forEach((function(n,o){t.moveTo(e.x+i*o,e.y+e.height),t.lineTo(e.x+i*o,e.y+e.height+5),t.fillText(n,e.x+i*o+i/2,e.y+e.height+10)})),t.moveTo(this.x+i*this.xLabel.length,this.y+this.height),t.lineTo(this.x+i*this.xLabel.length,this.y+this.height+5),t.closePath(),t.stroke(),t.textAlign="right",t.beginPath();var n=this.height/(this.yLabel.length-1);this.yLabel.reverse().forEach((function(i,o){o<e.yLabel.length-1&&(t.moveTo(e.x,e.y+n*o),t.lineTo(e.x+e.width,e.y+n*o)),t.fillText(i.toString(),e.x-5,e.y+n*o)})),t.closePath(),t.strokeStyle="#ddd",t.stroke(),t.restore()},e}(r(i(521)).default);e.default=a},612:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.type="axis",e.width=0,e.height=0,e.x=0,e.y=0,e.pattern="#ffffff",e.mouseOverPattern="#ffffff",e.name="",e.value=0,e.index=0,e.groupIndex=0,e.groupLength=0,e.type="bar",e}return o(e,t),e.prototype.clickAnimate=function(){},e.prototype.paint=function(t){if(0===this.width)return!1;t.save(),t.beginPath(),t.moveTo(this.x,this.y),t.rect(this.x,this.y-this.height,this.width,this.height),t.closePath(),t.isPointInPath(this.stage2d.mouseX,this.stage2d.mouseY)?(t.fillStyle=this.mouseOverPattern,this.triggerEvent()):t.fillStyle=this.pattern,t.strokeStyle=this.pattern,t.fillText(this.value.toString(),this.x+this.width/2,this.y-this.height-8),t.stroke(),t.fill(),t.restore()},e}(r(i(521)).default);e.default=a},675:function(t,e,i){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Point=e.Line=e.Bar=e.Axis=e.Legend=e.Pie=void 0;var o=n(i(197));e.Pie=o.default;var r=n(i(644));e.Legend=r.default;var a=n(i(997));e.Axis=a.default;var s=n(i(612));e.Bar=s.default;var u=n(i(536));e.Line=u.default;var h=n(i(14));e.Point=h.default},644:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.type="legend",e.width=0,e.pattern="#ffffff",e.mouseOverPattern="#ffffff",e.name="",e.value=0,e.type="legend",e}return o(e,t),e.prototype.clickAnimate=function(){var t=this;this.disabled=!this.disabled,this.binders.forEach((function(e){e.disabled=t.disabled})),this.chart2d.reset()},e.prototype.paint=function(t){t.save(),t.strokeStyle=this.pattern,t.beginPath(),t.arc(this.x+5,this.y,5,0,2*Math.PI),t.isPointInPath(this.stage2d.mouseX,this.stage2d.mouseY)&&(t.arc(this.x+5,this.y,6,0,2*Math.PI),this.triggerEvent()),t.closePath(),this.disabled?(t.fillStyle="#c9c9c9",t.strokeStyle="#c9c9c9"):t.fillStyle="#000",t.fillText(this.name,this.x+4+this.width/2,this.y),t.stroke(),t.restore()},e}(r(i(521)).default);e.default=a},536:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.type="line",e.points=[],e.pattern="#ffffff",e.mouseOverPattern="#ffffff",e.areaPattern="#ffffff",e.name="",e.width=0,e.height=0,e.x=0,e.y=0,e.values=[],e.smooth=!0,e.type="bar",e}return o(e,t),e.prototype.clickAnimate=function(){},e.prototype.pointLine=function(t,e,i){if(this.smooth){var n=(i.x-e.x)/2,o=(i.y-e.y)/6,r=e.x+n,a=e.y+o,s=i.x-n,u=i.y-o;t.bezierCurveTo(r,a,s,u,i.x,i.y)}else t.lineTo(i.x,i.y)},e.prototype.paint=function(t){var e=this;if(this.disabled)return!1;t.save(),t.beginPath(),t.moveTo(this.x,this.y+this.height),this.points.forEach((function(i,n){0===n?t.lineTo(i.x,i.y):e.pointLine(t,e.points[n-1],i)})),t.lineTo(this.points[this.points.length-1].x,this.y+this.height),t.fillStyle=this.areaPattern,t.closePath(),t.fill(),t.beginPath(),t.strokeStyle=this.pattern,t.moveTo(this.points[0].x,this.points[0].y),this.points.forEach((function(i,n){0===n?t.lineTo(i.x,i.y):e.pointLine(t,e.points[n-1],i)})),t.moveTo(this.points[this.points.length-1].x,this.points[this.points.length-1].y),t.lineWidth=2,t.closePath(),t.stroke(),this.points.forEach((function(e){e.paint(t)})),t.restore()},e}(r(i(521)).default);e.default=a},197:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.originalX=0,e.originalY=0,e.pattern="#ffffff",e.mouseOverPattern="#ffffff",e.name="",e.value=0,e.radius=0,e.precent=0,e.sAngle=0,e.eAngle=0,e.nameText="",e.nameStyle="",e.valueText="",e.valueStyle="",e.type="pie",e}return o(e,t),e.prototype.clickAnimate=function(){var t=(this.eAngle-this.sAngle)/2+this.sAngle+.5*Math.PI,e=this.x+10*Math.sin(t),i=this.y-10*Math.cos(t);this.chart2d.addRecoverShapes(this,{x:this.x,y:this.y}),this.animate({x:e,y:i}),this.recoverAnimateIng=!0},e.prototype.paintPie=function(t){t.beginPath(),t.moveTo(this.x,this.y),t.arc(this.x,this.y,this.radius,this.sAngle,this.eAngle),t.closePath(),t.isPointInPath(this.stage2d.mouseX,this.stage2d.mouseY)?(t.fillStyle=this.mouseOverPattern,this.triggerEvent()):t.fillStyle=this.pattern,t.stroke(),t.fill()},e.prototype.paint=function(t){t.save(),this.paintPie(t),t.restore();var e=(this.eAngle-this.sAngle)/2+this.sAngle+.5*Math.PI;if(!this.disabled){var i=this.x+Math.sin(e)*(.7*this.radius),n=this.y-Math.cos(e)*(.7*this.radius);t.fillText(this.valueText,i,n)}if(!this.disabled){var o=this.originalX+Math.sin(e)*(this.radius+4),r=this.originalY-Math.cos(e)*(this.radius+4),a=this.originalX+Math.sin(e)*(this.radius+20),s=this.originalY-Math.cos(e)*(this.radius+20);t.save(),t.strokeStyle=this.pattern,t.beginPath(),t.moveTo(o,r),t.lineTo(a,s),t.stroke(),t.fillStyle=this.pattern,e<Math.PI?(t.textAlign="left",t.fillText(this.nameText,a+3,s)):(t.textAlign="right",t.fillText(this.nameText,a-3,s)),t.restore()}},e}(r(i(521)).default);e.default=a},14:function(t,e,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.type="point",e.x=0,e.y=0,e.name="",e.value=0,e}return o(e,t),e.prototype.clickAnimate=function(){},e.prototype.paint=function(t){t.save(),t.beginPath(),t.arc(this.x,this.y,2,0,2*Math.PI),t.isPointInPath(this.stage2d.mouseX,this.stage2d.mouseY)&&(t.arc(this.x,this.y,3,0,2*Math.PI),this.triggerEvent()),t.closePath(),t.fillStyle="#fff",t.stroke(),t.fill(),t.restore()},e}(r(i(521)).default);e.default=a},521:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=i(658),o=function(){function t(){this.x=0,this.y=0,this.width=0,this.height=0,this.disabled=!1,this.recoverAnimateIng=!1}return t.prototype.clickAnimate=function(){},t.prototype.easeOut=function(t,e,i,n){return-i*(t/=n)*(t-2)+e},t.prototype.animate=function(t,e){var i=this;void 0===e&&(e=400);var n={},o={};for(var r in t)"eAngle"===r?(n[r]=100*this[r],o[r]=100*t[r]-n[r]):(n[r]=this[r],o[r]=t[r]-this[r]);var a=0,s=e/1e3,u=function(){for(var t in(a+=i.stage2d.interval)>e&&(a=e),o)i[t]="eAngle"===t?i.easeOut(a/1e3,n[t],o[t],s)/100:i.easeOut(a/1e3,n[t],o[t],s);a<e&&requestAnimationFrame(u)};requestAnimationFrame(u)},t.prototype.triggerEvent=function(){var t=this,e=this.stage2d.events;e.length>0&&e.forEach((function(e,i){switch(e.eventType){case n.CLICK:var o=t.stage2d.clickPointQueue;o.isEmpty()||(o.dequeue(),e.callback(t.getStageEvent()),t.chart2d.recover(),t.recoverAnimateIng?t.recoverAnimateIng=!1:t.clickAnimate());break;case n.MOUSEMOVE:var r=t.stage2d.mousemovePointQueue;r.isEmpty()||(r.clear(),e.callback(t.getStageEvent()))}}))},t.prototype.getStageEvent=function(){return{mouseX:Math.round(this.stage2d.mouseX/this.stage2d.pixelRatio),mouseY:Math.round(this.stage2d.mouseY/this.stage2d.pixelRatio),pageX:this.stage2d.pageX,pageY:this.stage2d.pageY,target:this}},t}();e.default=o},472:function(t,e,i){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(i(336)),r=n(i(659)),a=n(i(120)),s=n(i(710)),u=i(658),h=i(494),l=0,c=function(){function t(t){var e=this;this.scenes=[],this.scale=1,this.translateX=0,this.translateY=0,this.pixelRatio=1,this.mouseX=0,this.mouseY=0,this.pageX=0,this.pageY=0,this.interval=0,this.isVisibility=!0,this.clickPointQueue=new o.default,this.mouseupPointQueue=new o.default,this.mousedownPointQueue=new o.default,this.mousemovePointQueue=new o.default,this.container=t,this.width=t.clientWidth,this.height=t.clientHeight,this.container.style.position="relative";var i=t.getBoundingClientRect();this.offsetX=i.x,this.offsetY=i.y;var n=document.createElement("canvas").getContext("2d");n&&this.setPixelRatio(n),this.events=[],this.initEventListener(),document.addEventListener("visibilitychange",(function(){e.isVisibility="visible"===document.visibilityState})),this.requestAnimationFrame()}return t.prototype.initEventListener=function(){var t=this;document.addEventListener("mouseup",(function(t){}),!1),this.container.addEventListener("mousedown",(function(t){}),!1),this.container.addEventListener("click",(function(e){t.clickPointQueue.enqueue(new a.default(t.mouseX,t.mouseY))}),!1),this.container.addEventListener("mousemove",(function(e){t.pageX=e.pageX,t.pageY=e.pageY,t.mouseX=(e.pageX-t.offsetX)*t.pixelRatio,t.mouseY=(e.pageY-t.offsetY)*t.pixelRatio,t.mousemovePointQueue.enqueue(new a.default(t.mouseX,t.mouseY))}),!1),this.container.addEventListener("DOMMouseScroll",(function(t){}),!1)},t.prototype.getScene=function(){var t=new r.default(this);return this.scenes.push(t),t},t.prototype.setPixelRatio=function(t){this.pixelRatio=h.getPixelRatio(t)},t.prototype.addEventListener=function(t,e){var i;switch(t){case"click":i=u.CLICK;break;case"mouseup":i=u.MOUSEUP;break;case"mousedown":i=u.MOUSEDOWN;break;case"mousemove":i=u.MOUSEMOVE;break;case"mouseout":i=u.MOUSEOUT;break;case"DOMMouseScroll":i=u.MOUSESCROLL;break;default:i=u.CLICK}this.events.push(new s.default(i,e))},t.prototype.clearEventPoint=function(){var t=this;this.clickPointQueue.clear(),this.mouseupPointQueue.clear(),this.mousedownPointQueue.clear(),this.mousemovePointQueue.isEmpty()||(this.events.forEach((function(e){e.eventType===u.MOUSEOUT&&e.callback({mouseX:Math.round(t.mouseX/t.pixelRatio),mouseY:Math.round(t.mouseY/t.pixelRatio),pageX:t.pageX,pageY:t.pageY,target:null})})),this.mousemovePointQueue.clear())},t.prototype.requestAnimationFrame=function(){var t=this,e=function(i){t.interval=i-l,l=i,requestAnimationFrame(e)};requestAnimationFrame(e)},t}();e.default=c},581:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.element=t}return t.prototype.move=function(t,e,i){this.element.style.left=t+20+"px",this.element.style.top=e+20+"px",this.element.innerHTML='<span><i style="background-color:'+i.pattern+'"></i>'+i.name+" "+i.value+"</span>"},t.prototype.hide=function(){var t=this;this.timeout||(this.timeout=window.setTimeout((function(){t.element.style.display="none"}),400))},t.prototype.show=function(){this.timeout&&(window.clearTimeout(this.timeout),this.timeout=0),this.element.style.display="block"},t.init=function(e){var i=document.createElement("div");return i.style.display="none",i.classList.add("minichart-tip"),e.appendChild(i),new t(i)},t.createStyle=function(){var t=document.createElement("style");t.type="text/css",t.innerHTML="\n      .minichart-tip {\n        position: absolute;\n        min-width: 60px;\n        min-height: 24px;\n        padding: 6px 10px;\n        border-radius: 4px;\n        background-color: rgba(255,255,255,.8);\n        box-shadow: 0 0 30px rgba(0,0,0,.5);\n        transition: left 0.2s ease, width 0.2s ease, top 0.2s ease, height 0.2s ease;\n        z-index: 999;\n      }\n      .minichart-tip span {\n        display: block;\n        vertical-align: middle;\n        line-height: 24px;\n        color: #333;\n        font-size: 12px;\n      }\n      .minichart-tip i {\n        display: inline-block;\n        vertical-align: middle;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        background-color: #ccc;\n        margin-right: 6px;\n      }\n    ";var e=document.querySelector("head");e&&e.appendChild(t)},t}();e.default=i},658:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.MOUSESCROLL=e.MOUSEUP=e.MOUSEOUT=e.MOUSEMOVE=e.MOUSEDOWN=e.CLICK=void 0,e.CLICK=Symbol("click"),e.MOUSEDOWN=Symbol("mousedown"),e.MOUSEMOVE=Symbol("mousemove"),e.MOUSEOUT=Symbol("mouseout"),e.MOUSEUP=Symbol("mouseup"),e.MOUSESCROLL=Symbol("mousescroll")},845:function(t,e,i){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(i(844)),r=document.createElement("div");r.className="chart",document.body.appendChild(r);var a=new o.default(r);a.setOption({type:"bar",style:{colors:["#f2711c","#2185d0","#21ba45","#b5cc18","#00b5ad","#fbbd08","#6435c9","#a333c8","#e03997","#a5673f"],font:"12px sans-serif",valueStyle:"{c}%",nameStyle:"{a} {c}%",legend:{orient:"horizontal",position:["center","top"]}},radius:"60%",center:["50%","50%"],legend:["React","Vue","Angular"],padding:[60,20,40,80],xAxis:{type:"category",data:["January","February","March","April","May","June","July"]},yAxis:{type:"value"},data:[[334,211,186,412,218,162,128],[513,423,274,317,500,272,457],[126,78,160,200,164,53,121]]}),a.addEventListener("click",(function(t){console.log("click e: ",t.target.name,t.target.value)}))},844:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=i(123);e.default=n.Charts},494:(t,e)=>{function i(t,e,i){var n=(t<<16|e<<8|i).toString(16);return"#"+new Array(Math.abs(n.length-7)).join("0")+n}function n(t){for(var e=[],i=1;i<7;i+=2)e.push(parseInt("0x"+t.slice(i,i+2),16));return e}Object.defineProperty(e,"__esModule",{value:!0}),e.getPixelRatio=e.alpha=e.darken=e.lighten=void 0,e.lighten=function(t){var e=n(t).map((function(t){return Math.min(t+10,255)}));return i(e[0],e[1],e[2])},e.darken=function(t){var e=n(t).map((function(t){return Math.max(t-10,0)}));return i(e[0],e[1],e[2])},e.alpha=function(t,e){var i=n(t);return"rgba("+i[0]+", "+i[1]+", "+i[2]+", "+e+")"},e.getPixelRatio=function(t){return(window.devicePixelRatio||1)/1}}},e={};return function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}(845)})()}));