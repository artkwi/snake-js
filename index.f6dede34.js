let t=[{x:2,y:3},{x:2,y:4},{x:2,y:5}];class e{static#t=t;static getObstacles(){return this.#t}static setObstacles(t){this.#t=t}static onObstacle=t=>!!this.getObstacles().some((e=>e.x===t.x&&e.y===t.y))}class s{static points=0;static getPoints(){return this.points}static setPoints(t){this.points=t}}let n={x:7,y:8},o={x:5,y:6};const a=()=>n,l=()=>o,c=()=>{b(a())?(s.setPoints(s.getPoints()+B),f(),d(),r()&&m()):b(l())&&(s.setPoints(s.getPoints()+4*B),f(),o=null)},d=()=>{let t=null;for(;null===t||b(t)||e.onObstacle(t);){t={x:Math.floor(Math.random()*M),y:Math.floor(Math.random()*M)}}(t=>{n={...t}})(t)},r=()=>{if(l())return!1;return Math.floor(2*Math.random())%3==0},m=()=>{let t=null;for(;null===t||b(t)||e.onObstacle(t);){t={x:Math.floor(Math.random()*M),y:Math.floor(Math.random()*M)}}var s;s=t,o={...s}};let y={x:-1,y:0};document.addEventListener("keydown",(t=>{switch(t.key){case"ArrowLeft":0===i().y&&(y={x:0,y:-1});break;case"ArrowRight":0===i().y&&(y={x:0,y:1});break;case"ArrowUp":0===i().x&&(y={x:-1,y:0});break;case"ArrowDown":0===i().x&&(y={x:1,y:0})}}));const i=()=>y;let x=[{x:10,y:10},{x:11,y:10},{x:12,y:10}];const g=()=>x,u=t=>x=[...t],h=()=>{let t=[...g()];const e=i();for(let e=t.length-2;e>=0;e--)t[e+1]={...t[e]};t=t.slice(1);const s={x:t[0].x+e.x,y:t[0].y+e.y};u([s,...t])},b=(t,e)=>{if(!t)return!1;return!!(e?.withoutHead?[...g()].slice(1):g()).some((e=>e.x===t.x&&e.y===t.y))},f=()=>{const t=g();t[t.length]=t[t.length-1],u(t)},p=(t,e)=>{if(t){const{x:s,y:n}=t;document.getElementsByClassName(`board-element-${s}-${n}`)[0].classList.add(e)}},w=()=>{L?(()=>{for(let t=0;t<M;t++)for(let e=0;e<M;e++)document.getElementsByClassName(`board-element-${t}-${e}`)[0].classList.remove("body-segment","food-segment","food-segment--extra","body-segment--head")})():(()=>{const t=document.getElementById("game-board");t.innerHTML="",t.style.gridTemplateColumns=`repeat(${M}, 1fr)`,t.style.gridTemplateRows=`repeat(${M}, 1fr)`;for(let e=0;e<M;e++)for(let s=0;s<M;s++){const n=document.createElement("div");n.classList.add("board-element",`board-element-${e}-${s}`),t.appendChild(n)}})();const t=document.getElementById("x"),n=document.getElementById("y"),o=document.getElementById("points");t&&n&&(t.textContent=g()[0].x,n.textContent=g()[0].y),o.textContent=s.getPoints(),g().map((({x:t,y:e},s)=>{const n=document.getElementsByClassName(`board-element-${t}-${e}`);n.length&&(0===s&&n?.[0].classList?.add("body-segment--head"),n?.[0].classList?.add("body-segment"))})),p(a(),"food-segment"),p(l(),"food-segment--extra"),e.getObstacles().map((({x:t,y:e},s)=>{const n=document.getElementsByClassName(`board-element-${t}-${e}`);n.length&&n?.[0].classList?.add("obstacle")}))},E=()=>{const t=g();b(t[0],{withoutHead:!0}),e.onObstacle(t[0],{withoutHead:!0}),t[0].x<0||t[0].y<0||t[0].x>=M||t[0].y},$=document.getElementById("play-music-button"),C=document.getElementById("player");$.addEventListener("click",(t=>{C.paused?(C.play(),$.textContent="Pause music"):(C.pause(),$.textContent="Play music")}));const M=11,B=2;let L=!1;window.setInterval((()=>{P(),w(),L=!0}),1e3/B);const P=()=>{h(),c(),E()};
//# sourceMappingURL=index.f6dede34.js.map