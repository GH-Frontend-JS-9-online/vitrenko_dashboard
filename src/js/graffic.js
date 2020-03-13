export function correctWidth() {
    let progressBar = document.getElementsByClassName('progress');
    let impressions = document.getElementsByClassName('text')[2].offsetWidth;
    let svg = document.getElementsByTagName('svg')[0].style.width;
    let views = document.getElementsByClassName('text')[0].offsetWidth;
    let visitors = document.getElementsByClassName('text')[1].offsetWidth;
    let container1 = svg + views;
    let container2 = svg + visitors;
    let container3 = svg + impressions;

    
        progressBar[0].style.gridTemplateColumns = container1/container3 + 'fr ' + container2/container3 + 'fr ' + container3/container3 + 'fr';
        
} 