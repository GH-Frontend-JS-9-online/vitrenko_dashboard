export function correctWidth() {
    let circles = document.getElementsByTagName('circle');

    for (let i = 0; i < circles.length; i++) {
        document.getElementsByTagName('svg')[i].style.width = circles[i].cx.animVal.value * 2;
        document.getElementsByTagName('svg')[i].style.height = circles[i].cy.animVal.value * 2;
    }
}

correctWidth()