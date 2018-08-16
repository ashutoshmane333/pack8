console.log('this is the script.js');

var lottie=require('lottie-web')

var elem=document.getElementById('bodymovin');



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








