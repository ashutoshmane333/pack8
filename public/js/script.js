console.log('this is the script.js');

var elem=document.getElementById('bodymovin');

var triggerStop=document.querySelector("#click_stop")
var triggerPlay=document.querySelector("#click_play")
var triggerNext=document.querySelector("#click_next")
var triggerPrev=document.querySelector("#click_prev")

var animData = {
    container: elem,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    autoloadSegments: true,
    rendererSettings: {
    progressiveLoad:false
    },
    path: 'process.json'
};


lottie.loadAnimation(animData);








