console.log('this is the script.js');



var elem=document.getElementById('bodymovin');
var ct=document.getElementById('wowow')
ct.onclick=handleClick;

function handleClick()
{
    console.log(ct.value)
    ct.innerHTML = (ct.innerHTML == 'See less' ? 'See  more' : 'See less');
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








