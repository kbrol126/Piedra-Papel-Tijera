function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=n.parcelRequire5feb;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},n.parcelRequire5feb=o),o.register("27Lyk",(function(n,t){var i,o;e(n.exports,"register",(()=>i),(e=>i=e)),e(n.exports,"resolve",(()=>o),(e=>o=e));var r={};i=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)r[n[t]]=e[n[t]]},o=function(e){var n=r[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("6Ks6V",(function(e,n){e.exports=new URL(o("27Lyk").resolve("kS12X"),import.meta.url).toString()})),o.register("cEuxj",(function(e,n){e.exports=new URL(o("27Lyk").resolve("dK1se"),import.meta.url).toString()})),o.register("kbcGj",(function(e,n){e.exports=new URL(o("27Lyk").resolve("hg4Ts"),import.meta.url).toString()})),o.register("bQfrI",(function(e,n){e.exports=new URL(o("27Lyk").resolve("74Q0h"),import.meta.url).toString()})),o.register("1LpQW",(function(e,n){e.exports=new URL(o("27Lyk").resolve("cRBYq"),import.meta.url).toString()})),o.register("5F0VW",(function(e,n){e.exports=new URL(o("27Lyk").resolve("htUit"),import.meta.url).toString()})),o.register("dZ6tB",(function(e,n){e.exports=new URL(o("27Lyk").resolve("dB759"),import.meta.url).toString()})),o.register("31yoY",(function(e,n){e.exports=new URL(o("27Lyk").resolve("3atVZ"),import.meta.url).toString()})),o.register("3Ez7n",(function(e,n){e.exports=new URL(o("27Lyk").resolve("e5zNa"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.82ac1323.js","kS12X":"manoPiedra.e25153a5.svg","dK1se":"manoPapel.be7a5497.svg","hg4Ts":"manoTijera.ed7bcfa7.svg","74Q0h":"ganador.c86b63e6.svg","cRBYq":"perdedor.d3974efe.svg","htUit":"empate.ccd409c9.svg","dB759":"piedracircular.07f815b7.svg","3atVZ":"papelcircular.3653fb8e.svg","e5zNa":"tijeracircular.d11c2684.svg"}'));let r={data:{partida:{},historial:[{usuario:0,maquina:0,vencedorUltimaMano:""}]},listener:[],iniciarEstado(){const e=localStorage.getItem("guarda-estado");e?this.setState(JSON.parse(e)):this.setState(this.data)},jugada(e){const n=this.getState();let t="piedra",i="papel",o="tijera",r=Math.floor(3*Math.random())+1;" "==e&&(n.partida={eleccionDelUsuario:e,eleccionPC:e},this.ganador(e,e)),1==r&&(n.partida={eleccionDelUsuario:e,eleccionPC:t},this.ganador(e,t)),2==r&&(n.partida={eleccionDelUsuario:e,eleccionPC:i},this.ganador(e,i)),3==r&&(n.partida={eleccionDelUsuario:e,eleccionPC:o},this.ganador(e,o)),this.setState(n)},ganador(e,n){return"tijera"==e&&"papel"==n||"piedra"==e&&"tijera"==n||"papel"==e&&"piedra"==n?this.agregarAlHistorial("gano"):"papel"==e&&"tijera"==n||"tijera"==e&&"piedra"==n||"piedra"==e&&"papel"==n?this.agregarAlHistorial("perdio"):e==n?this.agregarAlHistorial("empato"):void this.agregarAlHistorial(" ")},agregarAlHistorial(e){const n=this.getState();"gano"==e&&(n.historial[0].usuario=n.historial[0].usuario+1,n.historial[0].vencedorUltimaMano="ganador"),"perdio"==e&&(n.historial[0].maquina=n.historial[0].maquina+1,n.historial[0].vencedorUltimaMano="perdedor"),"empato"==e&&(n.historial=n.historial,n.historial[0].vencedorUltimaMano="empate")," "==e&&(n.historial=n.historial,n.historial[0].vencedorUltimaMano=" "),r.setState(n)},getState(){return this.data},setState(e){this.data=e;for(const e of this.listener)e();localStorage.setItem("guarda-estado",JSON.stringify(this.getState()))},resetearPuntajes(){const e=this.getState();console.log(e),e.historial[0].usuario=0,e.historial[0].maquina=0,e.historial[0].vencedorUltimaMano=" ",this.setState(e)}};const a="/Piedra-Papel-Tijera",s=[{ruta:/\/inicio/,componente:function(e){const n=document.createElement("div");r.getState(),n.innerHTML='\n    <section class="cuerpo">\n      <titulo-comp texto="Piedra Papel ó Tijera"></titulo-comp>\n      <boton-comp texto="Empezar"></boton-comp>\n    </section >\n    <section class="iconos">\n      <eleccion-circular src="piedra"></eleccion-circuclar>\n      <eleccion-circular src="papel"></eleccion-circular>\n      <eleccion-circular src="tijera"></eleccion-circular>\n    </section>\n\n    ';const t=document.createElement("style");return n.setAttribute("class","home"),t.innerHTML="\n  .home{\n    min-height: 100vh;\n    background: #dbcbff;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    padding:3%;\n        }\n  .cuerpo{\n    display: grid;\n    min-height: 390px;\n    min-width: 365px;\n    justify-items: center;\n    align-items: center;\n  }\n  .iconos{\n    display:flex;\n    min-width: 250px;\n    justify-content: space-evenly;\n  }",n.appendChild(t),n.querySelector("boton-comp")?.addEventListener("click",(()=>{e.irA("/jugar")})),n}},{ruta:/\/jugar/,componente:function(e){const n=document.createElement("div");n.innerHTML='\n  <section class="cuerpo">\n  <h2-comp class="font" texto="Presioná jugar\n  y elegí: piedra, papel o tijera antes de que pasen los 5 segundos"></h2-comp>\n  <boton-comp texto="Jugar"></boton-comp>\n  </section >\n    <section class="iconos">\n      <eleccion-circular src="piedra"></eleccion-circular>\n      <eleccion-circular src="papel"></eleccion-circular>\n      <eleccion-circular src="tijera"></eleccion-circular>\n    </section>\n\n    ';const t=document.createElement("style");return n.setAttribute("class","home"),t.innerHTML="\n  .home{\n    min-height: 100vh;\n    background: #dbcbff;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    padding:3%;\n   }\n   .cuerpo{\n    display: grid;\n    min-height: 390px;\n    max-width: 500px;\n    justify-items: center;\n    align-items: center;\n  }\n  .iconos{\n    display:flex;\n    min-width: 250px;\n    justify-content: space-evenly;\n  }\n  .font{    font-size: 37px;}",n.appendChild(t),n.querySelector("boton-comp")?.addEventListener("click",(()=>{e.irA("/eleccion")})),n}},{ruta:/\/eleccion/,componente:function(e){const n=document.createElement("div");n.innerHTML='\n    <section id="contenedor__Temporizador">\n    </section>\n    <section class="iconos">\n    <eleccion-comp src="piedra" ></eleccion-comp>\n    <eleccion-comp src="papel"  ></eleccion-comp>\n    <eleccion-comp src="tijera" ></eleccion-comp>\n    </section>\n\n    ';const t=document.createElement("style");n.setAttribute("class","home"),t.innerHTML="\n  .home{\n    min-height: 100vh;\n    background:#dbcbff;\n    display: grid;\n    justify-items: center;\n    align-items: end;\n\n        }\n  .iconos{\n    min-width:340px;\n    display: grid;\n    grid-template-columns: auto auto auto;\n    justify-items: center;\n    justify-content: space-around;\n  }\n  eleccion-comp {\n    width: 50%;\n    transition: all 0.3s;\n    transform-origin: bottom;\n  }\n  eleccion-comp:hover {\n    width: 100%;\n    transform: scale(1,3);\n\n}";var i=n.querySelector("#contenedor__Temporizador");i.setAttribute("class","contador"),i.innerHTML='<div class="app"></div>';const o={info:{color:"verde"},peligro:{color:"naranja",umbral:4},alerta:{color:"rojo",umbral:2}};let a=0,s=5,c=null,l=o.info.color;function d(){clearInterval(c)}function p(e){const n=Math.floor(e/60);let t=e%60;return t<3&&(t=Number(`0${t}`)),`${n}:${t}`}i.querySelector(".app").innerHTML=`\n    <div class="temporizadorBase">\n    <svg class="svgTemporizador" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n      <g class="circuloDelTemporizador">\n        <circle class="caminoTranscurrido" cx="50" cy="50" r="45"></circle>\n        <path\n          id="circulo"\n          stroke-dasharray="283"\n          class="caminoRestante ${l}"\n          d="\n            M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "\n        ></path>\n      </g>\n    </svg>\n    <span class="temporizador etiquetaDelTemporizador" id="tiempo">${p(s)}</span>\n      </div>\n      `,n.querySelector("#piedra")?.addEventListener("click",(n=>{e.irA("/animacion"),d()})),n.querySelector("#papel")?.addEventListener("click",(()=>{e.irA("/animacion"),d()})),n.querySelector("#tijera")?.addEventListener("click",(()=>{e.irA("/animacion"),d()})),c=setInterval((()=>{a=a+=1,s=5-a,i.querySelector(".temporizador").innerHTML=p(s),function(){const e=`${(283*function(){const e=s/5;return e-.2*(1-e)}()).toFixed(0)} 283`;document.getElementById("circulo").setAttribute("stroke-dasharray",e)}(),function(e){const{alerta:n,peligro:t,info:i}=o;e<=n.umbral?(document.getElementById("circulo").classList.remove(t.color),document.getElementById("circulo").classList.add(n.color)):e<=t.umbral&&(document.getElementById("circulo").classList.remove(i.color),document.getElementById("circulo").classList.add(t.color))}(s),0===s&&(r.agregarAlHistorial(" "),d(),e.irA("/resultado"))}),1e3);var u=document.createElement("style");return u.textContent="\n    .contador {\n      font-family: sans-serif;\n      display: grid;\n      place-items: center;\n    }\n    \n    .temporizadorBase {\n      position: relative;\n      width: 250px;\n      height: 250px;\n    }\n    \n    .svgTemporizador {\n      transform: scaleX(-1);\n    }\n    \n    .circuloDelTemporizador {\n      fill: none;\n      stroke: none;\n    }\n    \n    .caminoTranscurrido {\n      stroke-width: 7px;\n      stroke: grey;\n    }\n\n    .caminoRestante {\n      stroke-width: 7px;\n      stroke-linecap: round;\n      transform: rotate(90deg);\n    transform-origin: center;\n    transition: 1s linear all;\n    fill-rule: nonzero;\n    stroke: currentColor;\n  }\n  \n  .caminoRestante.verde {\n    color: rgb(65, 184, 131);\n  }\n  \n  .caminoRestante.naranja {\n    color: orange;\n  }\n  \n  .caminoRestante.rojo {\n    color: red;\n  }\n  \n  .etiquetaDelTemporizador {\n    position: absolute;\n    width: 250px;\n    height: 250px;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 48px;\n  }\n  ",i.appendChild(u),n.appendChild(t),n}},{ruta:/\/animacion/,componente:function(e){let n=r.getState().partida,t=n.eleccionDelUsuario,i=n.eleccionPC;const o=document.createElement("div");o.innerHTML=`<div class="pc"><eleccion-comp src="${i}" ></eleccion-comp></div>\n    <div class="usuario"><eleccion-comp src="${t}" ></eleccion-comp></div>`,o.setAttribute("class","animacion");const a=document.createElement("style");return a.innerText="\n\n  .animacion{\n      min-height: 100vh;\n      background:#dbcbff;\n      display: grid;\n      justify-items: center;\n      align-content: space-between;}\n      eleccion-comp {\n        display:grid;\n        transition: all 0.3s;\n        transform-origin: bottom;\n        transform: scale(1,3);\n        pointer-events: none;\n        \n      }\n      .pc{\n        transform: rotate(180deg);\n      }\n      ",o.appendChild(a),setTimeout((function(){e.irA("/resultado")}),2e3),o}},{ruta:/\/resultado/,componente:function(e){let n=r.getState().historial,t=n[0].vencedorUltimaMano,i=n[0].usuario,o=n[0].maquina;const a=document.createElement("div");a.innerHTML=`\n    <section class="resultadosPosibles">\n    <resultado-comp pcH="${o}" usuarioH="${i}" src="${t}"></resultado-comp>\n    </section> \n    <boton-comp id="volverAJugar" texto="Volver a Jugar"></boton-comp>\n    <boton-comp id="reiniciarHistorial" texto="Reiniciar Historial"></boton-comp>\n    <section class="iconos">\n    <eleccion-circular src="piedra"></eleccion-comp>\n    <eleccion-circular src="papel"></eleccion-comp>\n    <eleccion-circular src="tijera"></eleccion-comp>\n  </section>\n\n    `;const s=document.createElement("style");return a.setAttribute("class","home"),s.innerHTML="\n  .home{\n    min-height: 100vh;\n    background:#dbcbff;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n\n        }\n        .iconos{\n          display:flex;\n          min-width: 250px;\n          justify-content: space-evenly;\n        }",a.appendChild(s),a.querySelector("#volverAJugar")?.addEventListener("click",(()=>{e.irA("/inicio")})),a.querySelector("#reiniciarHistorial")?.addEventListener("click",(()=>{r.resetearPuntajes(),e.irA("/inicio")})),a}}];r.iniciarEstado(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.getAttribute("texto")||"Click Aqui",n=document.createElement("button");n.setAttribute("class","boton"),n.setAttribute("type","submit"),n.textContent=e;var t=document.createElement("style");t.textContent="\n      \n      .boton {\n        position: relative;\n        width:100%;\n        padding: 10px 20px;\n        border-radius: 7px;\n        border: 1px solid rgb(61, 106, 255);\n        font-size: 14px;\n        text-transform: uppercase;\n        font-weight: 600;\n        letter-spacing: 2px;\n        background: transparent;\n        color: #6495ff;\n        overflow: hidden;\n        box-shadow: 0 0 0 0 transparent;\n        -webkit-transition: all 0.2s ease-in;\n        -moz-transition: all 0.2s ease-in;\n        transition: all 0.2s ease-in;\n      }\n      \n      .boton:hover {\n        background: rgb(61, 106, 255);\n        box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);\n        -webkit-transition: all 0.2s ease-out;\n        -moz-transition: all 0.2s ease-out;\n        transition: all 0.2s ease-out;\n      }\n      \n      .boton:hover::before {\n        -webkit-animation: sh02 0.5s 0s linear;\n        -moz-animation: sh02 0.5s 0s linear;\n        animation: sh02 0.5s 0s linear;\n      }\n      \n      .boton::before {\n        content: '';\n        display: block;\n        width: 0px;\n        height: 86%;\n        position: absolute;\n        top: 7%;\n        left: 0%;\n        opacity: 0;\n        background: #fff;\n        box-shadow: 0 0 50px 30px #fff;\n        -webkit-transform: skewX(-20deg);\n        -moz-transform: skewX(-20deg);\n        -ms-transform: skewX(-20deg);\n        -o-transform: skewX(-20deg);\n        transform: skewX(-20deg);\n      }\n      \n      @keyframes sh02 {\n        from {\n          opacity: 0;\n          left: 0%;\n        }\n      \n        50% {\n          opacity: 1;\n        }\n      \n        to {\n          opacity: 0;\n          left: 100%;\n        }\n      }\n      \n      .boton:active {\n        box-shadow: 0 0 0 0 transparent;\n        -webkit-transition: box-shadow 0.2s ease-in;\n        -moz-transition: box-shadow 0.2s ease-in;\n        transition: box-shadow 0.2s ease-in;\n      }\n      ",this.appendChild(t),this.appendChild(n)}}customElements.define("boton-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.getAttribute("texto")||"Soy un titulo",n=document.createElement("h1");n.setAttribute("class","titulo"),n.textContent=e;var t=document.createElement("style");t.textContent="\n      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n        h1{margin:0}\n        .titulo{\n            text-align: center;\n            font-family: 'Josefin Sans', sans-serif;\n            font-style: normal;\n            font-weight: 700;\n            font-size: 80px;\n            line-height: 128%;\n            color: rgb(61, 106, 255);\n           \n        }        \n        ",this.appendChild(t),this.appendChild(n)}}customElements.define("titulo-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){var e=this.getAttribute("texto")||"Soy un titulo",n=document.createElement("h2");n.setAttribute("class","h2"),n.textContent=e;var t=document.createElement("style");t.textContent="\n      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n        h2{margin:0}\n        .h2{\n            text-align: center;\n            font-family: 'Josefin Sans', sans-serif;\n            font-style: normal;\n            font-weight: 700;\n            font-size: 40px;\n            line-height: 128%;\n            color: rgb(61, 106, 255);\n           \n        }        \n        ",this.appendChild(t),this.appendChild(n)}}customElements.define("h2-comp",e)}(),function(){const e=o("bQfrI"),n=o("1LpQW"),t=o("5F0VW");class i extends HTMLElement{constructor(){super();var i=this.getAttribute("usuarioH"),o=this.getAttribute("pcH"),r=this.getAttribute("src");const a=document.createElement("div");a.setAttribute("class","resultadoComp"),a.innerHTML=`\n      <img src="${"ganador"==r?e:"perdedor"==r?n:"empate"==r?t:""}" class="img"></img>\n      <h1 class="h1">${"ganador"==r?"Has Ganado":"perdedor"==r?"Has Perdido":"empate"==r?"Es un Empate":"Juga para divertirte, recorda elegir una de las 3 opciones antes de los 5 seg"}</h1>\n      <div class="contenedorHistorial">\n      <div class="historial">\n      <h2>Historial</h2>\n      <div class="usuario">\n      <h3>Vos: </h3><p>${i}</p>\n      </div>\n      <div class="maquina">\n      <h3>Maquina: </h3><p>${o}</p>\n      </div>\n      </div>\n      `;var s=document.createElement("style");s.textContent="\n      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n      .resultadoComp {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          padding-top:2%;\n        }\n        .h1{max-width: 60%;\n          text-align: center;\n          font-family: 'Josefin Sans', sans-serif; margin-bottom:8%; color:red;\n    }\n        h2 {margin:0 auto;\n          width:100px;\n          height:22px;\n          font-family: 'Josefin Sans', sans-serif;}\n          \n          h3,p {margin:0 auto;\n            width:50px;\n            height:22px}\n      \n      .img{\n        max-width:190px;\n        max-height:190px;\n        \n      }\n      .usuario, .maquina{\n        display:flex;\n        gap:39%;\n        min-width:150px;\n        font-family: 'Josefin Sans', sans-serif;\n      }\n      .historial{\n        width: 95%;\n        position:absolute;\n        inset:5px;\n        background:#dbcbff;\n        z-index:1;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n       \n      }\n      .contenedorHistorial{\n        position: relative;\n        min-width: 255px;\n        min-height: 219px;\n        background: rgba(0,0, 0, 0.75);\n        border-radius: 8px;\n        overflow:hidden; \n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .contenedorHistorial::after{\n        content: \"\";\n        position: absolute;\n        width: 230px;\n        height: 245px;\n        background-image: conic-gradient(transparent,transparent,transparent,#FFD5FF);\n        animation: animate 4s linear infinite;\n        animation-delay: -2s;\n      }\n      \n      .contenedorHistorial::before{\n        content: \"\";\n        position: absolute;\n        width: 230px;\n        height: 245px;\n        background-image: conic-gradient(transparent,transparent,transparent,#6495ff);\n        animation: animate 4s linear infinite;\n      }\n      @keyframes animate {\n        0%{transform: rotate(0deg);}\n        100%{transform: rotate(360deg);}\n     \n      \n      ",this.appendChild(a),a.appendChild(s)}}customElements.define("resultado-comp",i)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=o("6Ks6V"),n=o("cEuxj"),t=o("kbcGj");var i=this.getAttribute("src"),a=document.createElement("img");"piedra"==i&&(a.setAttribute("src",e),this.setAttribute("id","piedra"),this.addEventListener("click",(()=>{r.jugada("piedra")}))),"tijera"==i&&(a.setAttribute("src",t),this.setAttribute("id","tijera"),this.addEventListener("click",(()=>{r.jugada("tijera")}))),"papel"==i&&(a.setAttribute("src",n),this.setAttribute("id","papel"),this.addEventListener("click",(()=>{r.jugada("papel")}))),a.setAttribute("class","img");var s=document.createElement("style");s.textContent="\n        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n        *{box-sizing: border-box}  \n        h1{margin:0}\n          .img{\n              max-width:100px;\n              max-height:100px;\n\n             \n             \n          }        \n          ",this.appendChild(s),this.appendChild(a)}}customElements.define("eleccion-comp",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=o("dZ6tB"),n=o("31yoY"),t=o("3Ez7n");var i=this.getAttribute("src"),a=document.createElement("img");"piedra"==i&&(a.setAttribute("src",e),this.setAttribute("id","piedra"),this.addEventListener("click",(()=>{r.jugada("piedra")}))),"tijera"==i&&(a.setAttribute("src",t),this.setAttribute("id","tijera"),this.addEventListener("click",(()=>{r.jugada("tijera")}))),"papel"==i&&(a.setAttribute("src",n),this.setAttribute("id","papel"),this.addEventListener("click",(()=>{r.jugada("papel")}))),a.setAttribute("class","img");var s=document.createElement("style");s.textContent="\n        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');\n        *{box-sizing: border-box}  \n        h1{margin:0}\n          .img{\n              max-width:100px;\n              max-height:100px;\n\n             \n             \n          }        \n          ",this.appendChild(s),this.appendChild(a)}}customElements.define("eleccion-circular",e)}();!function(e){function n(){return location.host.includes("github.io")}function t(e){const t=n()?a+e:e;history.pushState({},"",t),i(t)}function i(i){const o=n()?i.replace(a,""):i;for(const n of s)if(n.ruta.test(o)){console.log("soy el newRoute");const i=n.componente({irA:t});e?.firstChild&&e.firstChild.remove(),e?.appendChild(i)}}window.onpopstate=function(){i(location.pathname)},"/Piedra-Papel-Tijera/"==location.pathname?(console.log("dentro del primer if"),t("/inicio")):i(location.pathname)}(document.querySelector(".root"));
//# sourceMappingURL=index.82ac1323.js.map
