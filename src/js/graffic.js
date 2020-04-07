export function correctWidth() {
    const maxWidth = 70;
    const minWidth = 60;
    let htmlWidth = document.getElementsByTagName('html')[0].offsetWidth;
    const presvg = htmlWidth * 5 / 100;
    
    if (presvg < maxWidth && presvg > minWidth) {
        document.getElementsByTagName('svg')[0].style.clientWidth = presvg
        console.log(document.getElementsByClassName('progress')[0].offsetHeight)
    }
    else {
        document.getElementsByTagName('svg')[0].style.clientWidth = minWidth
        console.log(document.getElementsByClassName('progress')[0].clientHeight)
    }
} 