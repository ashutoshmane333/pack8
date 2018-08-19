console.log('this is the script.js');



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
    path: 'public/process.json'
};


lottie.loadAnimation(animData);








