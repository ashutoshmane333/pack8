console.log('this is the script.js');



var elem=document.getElementById('bodymovin');
var ct=document.getElementById('wowow')
ct.onclick=handleClick;

function handleClick()
{
    
    ct.innerHTML = "";
    // (ct.innerHTML == '' ? 'See  more' : '')
}



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








