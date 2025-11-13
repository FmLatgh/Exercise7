/////////////////////////////////////////////////////////
//  TODO: Rewrite this given function declaration rotateFD
/////////////////////////////////////////////////////////

/**
 * Rotates an HTMLElement-object: rotateFD
 * @param el HTMLElement-object (info: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 * @param deg number degrees to rotate el
 * @returns el HTMLElement-object
 */
// function rotateFD(el, deg) {
//     el.style.transform = `rotate(${deg}deg)`;
//     return el;
// }
function rotateFD(el, deg) {
    el.style.transform = `rotate(${deg}deg)`;
    return el;
}

//////////////////////////////////////////////
//  TODO: as a 'function expression': rotateFE
//////////////////////////////////////////////

/**
 * Rotates an HTMLElement-object: rotateFE
 * @param el HTMLElement-object (info: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 * @param deg number degrees to rotate el
 * @returns el HTMLElement-object
 */
const rotateFE = function (el, deg) {
    el.style.transform = `rotate(${deg}deg)`;
    return el;
}


//////////////////////////////////////////////
//  TODO: as an 'arrow function': rotateAF
//////////////////////////////////////////////

/**
 * Rotates an HTMLElement-object: rotateAF
 * @param el HTMLElement-object (info: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
 * @param deg number degrees to rotate el
 * @returns el HTMLElement-object
 */
let rotateAF = (el, deg) => {
    el.style.transform = `rotate(${deg}deg)`;
    return el;
}







///////////////////////////
// Unit test. DO NOT CHANGE
///////////////////////////
const els = document.getElementsByClassName('rotate');
let d = 0;

function draw() {
    if (d > 360) d = 0;
    d++;
    if (typeof rotateFD === 'function') rotateFD(els[0], d);
    if (typeof rotateFE === 'function') rotateFE(els[1], d);
    if (typeof rotateAF === 'function') rotateAF(els[2], d);

    requestAnimationFrame(draw);
}

draw();
