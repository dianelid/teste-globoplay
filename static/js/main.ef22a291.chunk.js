(this["webpackJsonpteste-globoplay"]=this["webpackJsonpteste-globoplay"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(6),i=n.n(a),c=(n(12),n(1)),d=n(2),l=n(4),u=n(3),m=(n(13),n(14),n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"menuItem"},o.a.createElement("div",{className:"titleMenu"},this.props.title))}}]),n}(s.Component)),r=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={focusedItemIndex:1},e.handleKeyPress=function(t){"menu"!==e.props.scene||37!==t.keyCode&&38!==t.keyCode&&39!==t.keyCode&&40!==t.keyCode||(t.preventDefault(),e.navigationMenu(t.keyCode))},e.updateIndexItem=function(t,n){var s=e.state.focusedItemIndex;40===n?s=e.state.focusedItemIndex+1===t?0:e.state.focusedItemIndex+1:38===n&&(s=e.state.focusedItemIndex-1===-1?t-1:e.state.focusedItemIndex-1),e.state.focusedItemIndex!==s&&e.setState({focusedItemIndex:s})},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"menu",className:"menu"},o.a.createElement("div",{className:"line"}),o.a.createElement("div",{className:"areaMenu"},o.a.createElement(m,{title:"Busca"}),o.a.createElement(m,{title:"In\xedcio"}),o.a.createElement(m,{title:"Agora na Globo"}),o.a.createElement(m,{title:"Categorias"}),o.a.createElement(m,{title:"Minha Conta"})))}},{key:"navigationMenu",value:function(e){var t=document.getElementsByClassName("menuItem");t[this.state.focusedItemIndex].classList.remove("focusedItem"),40===e||38===e||37===e?(this.updateIndexItem(t.length,e),t[this.state.focusedItemIndex].classList.add("focusedItem")):39===e&&this.exitMenu()}},{key:"exitMenu",value:function(){document.getElementById("menu").style.width="10%",document.removeEventListener("keydown",this.handleKeyPress,!0),this.setState({focusedItemIndex:1}),"none"!==document.getElementsByClassName("destaque")[0].style.display?(document.getElementById("button1").classList.add("focusedItem"),this.props.callback("destaque")):(document.getElementsByClassName("focusVideoItem")[0].style.display="block",this.props.callback("trilho"))}},{key:"componentDidUpdate",value:function(){document.addEventListener("keydown",this.handleKeyPress,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress,!0)}}]),n}(s.Component),h=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleKeyPress=function(t){"destaque"!==e.props.scene||37!==t.keyCode&&38!==t.keyCode&&39!==t.keyCode&&40!==t.keyCode||(t.preventDefault(),e.navigationDestaque(t.keyCode))},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"destaque"},o.a.createElement("img",{className:"logoProg",src:this.props.logo,alt:""}),o.a.createElement("div",{className:"descriptionProg"},this.props.description),o.a.createElement("div",{id:"button1",className:"buttonProg focusedItem"},"Assista"),o.a.createElement("div",{id:"button2",className:"buttonProg"},"Veja mais"))}},{key:"navigationDestaque",value:function(e){39===e?this.onFocus("button1","button2"):37===e?document.getElementById("button1").classList.contains("focusedItem")?this.goToMenu():this.onFocus("button2","button1"):40===e&&this.goToTrilho()}},{key:"onFocus",value:function(e,t){document.getElementById(e).classList.remove("focusedItem"),document.getElementById(t).classList.add("focusedItem")}},{key:"goToMenu",value:function(){this.focusOnMenu(),this.props.callback("menu"),document.removeEventListener("keydown",this.handleKeyPress,!0)}},{key:"focusOnMenu",value:function(){document.getElementById("button1").classList.remove("focusedItem"),document.getElementById("menu").style.width="25%",document.getElementsByClassName("menuItem")[1].classList.add("focusedItem")}},{key:"goToTrilho",value:function(){this.expandTrilho(),document.getElementById("button2").classList.remove("focusedItem"),this.props.callback("trilho"),document.removeEventListener("keydown",this.handleKeyPress,!0)}},{key:"expandTrilho",value:function(){document.getElementsByClassName("destaque")[0].style.display="none",document.getElementsByClassName("videoDescription")[0].style.display="block",document.getElementsByClassName("focusVideoItem")[0].style.display="block",document.getElementsByClassName("trilho")[0].style.height="100%",document.getElementsByClassName("containerListVideos")[0].style.height="50%"}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress,!0)}},{key:"componentDidUpdate",value:function(){document.addEventListener("keydown",this.handleKeyPress,!0)}}]),n}(s.Component)),p=(n(17),n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"videoItem",className:"videoItem",style:{backgroundImage:"url("+this.props.video.bg+")"}},o.a.createElement("div",{className:"videoCategory"},this.props.video.category))}}]),n}(s.Component)),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={focusedItemIndex:0},e.handleKeyPress=function(t){"trilho"!==e.props.scene||37!==t.keyCode&&38!==t.keyCode&&39!==t.keyCode&&40!==t.keyCode||(t.preventDefault(),e.navigationTrilho(t.keyCode))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.videos.map((function(e,t){return o.a.createElement(p,{key:t,video:e})}));return o.a.createElement("div",{className:"trilho"},o.a.createElement("div",{className:"videoDescription"},o.a.createElement("div",null,"Big Brother Brasil"),o.a.createElement("div",{id:"category",className:"category"})),o.a.createElement("div",{className:"containerListVideos"},o.a.createElement("div",{className:"titleListVideos"},"Agora no BBB"),o.a.createElement("div",{id:"listVideos",className:"listVideos"},e),o.a.createElement("div",{id:"focusVideoItem",className:"focusVideoItem"})))}},{key:"navigationTrilho",value:function(e){38===e?this.goToDestaque():39===e?this.rightNavigation():37===e&&this.leftNavigation()}},{key:"goToDestaque",value:function(){this.hideTrilho(),document.getElementById("button1").classList.add("focusedItem"),this.props.callback("destaque"),document.getElementById("app").style.backgroundImage="url("+this.props.bgApp+")",document.removeEventListener("keydown",this.handleKeyPress,!0)}},{key:"hideTrilho",value:function(){document.getElementsByClassName("destaque")[0].style.display="block",document.getElementsByClassName("videoDescription")[0].style.display="none",document.getElementsByClassName("focusVideoItem")[0].style.display="none",document.getElementsByClassName("trilho")[0].style.height="30%",document.getElementsByClassName("containerListVideos")[0].style.height="100%"}},{key:"rightNavigation",value:function(){var e=this.getWidthVideoItem(),t=document.getElementById("listVideos"),n=this.state.focusedItemIndex,s=t.offsetLeft;this.state.focusedItemIndex<this.props.videos.length-1?(n++,s=s-e+"px"):(n=0,s=0),this.setState({focusedItemIndex:n}),t.style.left=s}},{key:"leftNavigation",value:function(){if(this.state.focusedItemIndex>0){var e=this.getWidthVideoItem(),t=document.getElementById("listVideos"),n=this.state.focusedItemIndex,s=t.offsetLeft;n--,s=s+e+"px",t.style.left=s,this.setState({focusedItemIndex:n})}else this.goToMenu()}},{key:"goToMenu",value:function(){document.getElementsByClassName("focusVideoItem")[0].style.display="none",document.getElementById("menu").style.width="25%",document.getElementsByClassName("menuItem")[1].classList.add("focusedItem"),this.props.callback("menu"),document.removeEventListener("keydown",this.handleKeyPress,!0)}},{key:"componentDidMount",value:function(){var e=this.getWidthVideoItem();document.getElementById("listVideos").style.width=this.props.videos.length*e+"px"}},{key:"getWidthVideoItem",value:function(){var e=document.getElementById("videoItem"),t=parseFloat(window.getComputedStyle(e).marginLeft);return e.offsetWidth+t}},{key:"componentDidUpdate",value:function(){document.getElementById("app").style.backgroundImage="url("+this.props.videos[this.state.focusedItemIndex].bg+")",document.getElementById("category").textContent=this.props.videos[this.state.focusedItemIndex].category,document.addEventListener("keydown",this.handleKeyPress,!0)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress,!0)}}]),n}(s.Component),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={focusedScene:"destaque",bgApp:"https://s2.glbimg.com/1liph2qog-AGmgGI0hXMckn_Yb4=/0x720/https://s2.glbimg.com/T7K_c4W_to0gJiNRgJIBpJVBf2I=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/u/a/WCTZoCS3ulpaPbztyTlw/2020-748-realities-big-brother-brasil-20-tv-globo-background.jpg",logo:"https://logodownload.org/wp-content/uploads/2018/04/bbb-logo-big-brother-brasil-logo-16.png",textDescription:"Acompanhe 24h ao vivo a casa mais vigiada do Brasil",videos:[{category:"sala de estar",bg:"http://ohoje.com/public/imagens/fotos/amp/6f9b95048fe1e9db9b37cf5c9abf5815.jpg"},{category:"academia",bg:"http://ohoje.com/public/imagens/fotos/amp/821b16ac92dafe68c9c49c536a99664d.jpg"},{category:"chuveiro",bg:"http://ohoje.com/public/imagens/fotos/amp/8c0436f3dd10fc86b966c456069a649b.jpg"},{category:"varanda",bg:"http://www.ohoje.com/public/imagens/fotos/amp/e2d6b5f3dedf827825531f160eb1428d.jpg"},{category:"piscina",bg:"http://rotanews176.com.br/wp-content/uploads/2019/01/1-123.jpg"}]},e}return Object(d.a)(n,[{key:"updateScene",value:function(e){this.state.focusedScene!==e&&this.setState({focusedScene:e})}},{key:"render",value:function(){return o.a.createElement("div",{id:"app",className:"app",style:{backgroundImage:"url("+this.state.bgApp+")"}},o.a.createElement("div",{className:"titleApp"},"globoplay"),o.a.createElement(h,{logo:this.state.logo,description:this.state.textDescription,scene:this.state.focusedScene,callback:this.updateScene.bind(this)}),o.a.createElement(y,{videos:this.state.videos,bgApp:this.state.bgApp,scene:this.state.focusedScene,callback:this.updateScene.bind(this)}),o.a.createElement(r,{scene:this.state.focusedScene,callback:this.updateScene.bind(this)}))}}]),n}(s.Component);i.a.render(o.a.createElement(g,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ef22a291.chunk.js.map