(this["webpackJsonpclicky-game-react"]=this["webpackJsonpclicky-game-react"]||[]).push([[0],{30:function(e){e.exports=JSON.parse('[{"id":1,"name":"Varys","image":"../imgs/varys.jpg"},{"id":2,"name":"Bran","image":"../imgs/bran.png"},{"id":3,"name":"Littlefinger","image":"../imgs/littlefinger.gif"},{"id":4,"name":"Jon Snow","image":"../imgs/jon.jpg"},{"id":5,"name":"Cersei","image":"../imgs/cersei.png"},{"id":6,"name":"Brienne","image":"../imgs/brienne.jpg"},{"id":7,"name":"Jaime","image":"../imgs/jaime.jpg"},{"id":8,"name":"Daenerys","image":"../imgs/daenarys.jpg"},{"id":9,"name":"Lady Melisandre","image":"../imgs/melisandre.jpg"},{"id":10,"name":"Jorah","image":"../imgs/jorah.jpg"},{"id":11,"name":"Sansa","image":"../imgs/sansa.jpg"},{"id":12,"name":"Sam","image":"../imgs/sam.jpg"}]')},31:function(e,t,a){e.exports=a(46)},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),i=a.n(c),s=(a(36),a(25)),o=a(11),l=a(12),m=a(14),h=a(13),u=a(15),g=a(4),p=a(16),d=(a(42),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement(g.h,{color:"black",dark:!0,expand:"md"},n.a.createElement(g.i,null,n.a.createElement("strong",{className:"white-text"},"Clicky Game\xa0\xa0",n.a.createElement("i",{className:"fas fa-mouse-pointer"}))),n.a.createElement(g.j,{right:!0},n.a.createElement(g.f,null,n.a.createElement(g.g,{to:"#!",active:!0},"Current Score: ",this.props.currentScore)),n.a.createElement(g.f,null,n.a.createElement(g.g,{to:"#!",active:!0},n.a.createElement("i",{className:"fas fa-trophy"})," ",this.props.highScore)))))}}]),t}(r.Component)),f=(a(43),function(e){var t=e.characters,a=e.handleSelection;return n.a.createElement(g.d,{className:"mt-5",id:"myContainer"},n.a.createElement(g.m,{className:"mt-4"},t.map((function(e){return n.a.createElement(g.c,{md:"3",key:e.id},n.a.createElement(g.o,{hover:!0,zoom:!0},n.a.createElement("img",{src:e.image,className:"img-fluid img-thumbnail","data-name":e.name,"data-id":e.id,alt:"",onClick:a})))}))))}),S=(a(44),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).getStyle=function(e){return{0:{fontWeight:"bold"},true:{color:"green",fontWeight:"bold"},false:{color:"red",fontWeight:"bold"}}[e]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.message,a=e.correct;return n.a.createElement(g.e,{fluid:!0,className:"rounded"},n.a.createElement(g.d,{className:"h-75"},n.a.createElement("h1",{className:"text-center",style:this.getStyle(a)},""===t?"Will you be the true Ruler of the Seven Kingdoms?":t),n.a.createElement("br",null),n.a.createElement("hr",{className:"my-2"}),n.a.createElement("p",{className:"lead"},"Rules"),n.a.createElement("p",null,"1) Click on a character that has not been selected"),n.a.createElement("p",null,"2) Try to select all character exactly once (12 in total) ")))}}]),t}(n.a.Component)),b=(a(45),a(30));function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={characters:b,pickedChars:[],currentScore:0,highScore:0,message:"",correct:0},a.shuffleCharacters=function(){a.setState({characters:a.shuffle(a.state.characters)})},a.shuffle=function(e){var t,a,r;for(r=e.length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),a=e[r],e[r]=e[t],e[t]=a;return e},a.handleSelection=function(e){var t=e.target.getAttribute("data-name");a.checkClickGuess(t),a.shuffleCharacters()},a.checkClickGuess=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a.state);t.pickedChars.includes(e)?(t.message="WRONG! YOU ALREADY PICKED ".concat(e.toUpperCase(),"!"),t.pickedChars=[],t.currentScore=0,t.correct=!1,a.setState({message:t.message,pickedChars:t.pickedChars,currentScore:t.currentScore,correct:t.correct})):(t.pickedChars.push(e),t.message="CORRECT!",t.correct=!0,a.setState({pickedChars:t.pickedChars,message:t.message,correct:t.correct})),a.updateTopScore(t)},a.updateTopScore=function(e){e.pickedChars.length>e.currentScore&&(e.currentScore++,e.currentScore>e.highScore&&e.highScore++,a.setState({currentScore:e.currentScore,highScore:e.highScore})),a.checkWin(e)},a.checkWin=function(e){12===e.pickedChars.length&&(e.message="ALL HAIL THE TRUE RULER OF THE SEVEN KINGDOMS",e.pickedChars=[],a.setState({message:e.message,pickedChars:e.pickedChars}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d,{highScore:this.state.highScore,currentScore:this.state.currentScore}),n.a.createElement(S,{message:this.state.message,correct:this.state.correct}),n.a.createElement(f,{characters:this.state.characters,handleSelection:this.handleSelection}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8d6772f5.chunk.js.map