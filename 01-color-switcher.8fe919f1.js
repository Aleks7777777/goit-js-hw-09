!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var n={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};n.stopBtn.disabled=!0;var e=null;n.startBtn.addEventListener("click",(function(){n.startBtn.disabled=!0,n.stopBtn.disabled=!1,n.stopBtn.classList.add("pause"),setTimeout((function(){n.body.style.backgroundColor=t()}),1),e=setInterval((function(){n.body.style.backgroundColor=t()}),1e3)})),n.stopBtn.addEventListener("click",(function(){clearInterval(e),n.startBtn.disabled=!1,n.stopBtn.disabled=!0,n.stopBtn.classList.remove("pause")}))}();
//# sourceMappingURL=01-color-switcher.8fe919f1.js.map