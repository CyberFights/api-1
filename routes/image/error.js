module.exports = {
    path: '/image/error',
    code: `
$send[200;canvas;$default]
$drawText[$getQuery[message];5;5;$replaceText[$replaceText[$condition[$getQuery[style]==1];true;560];false;560];$replaceText[$replaceText[$condition[$getQuery[style]==1];true;370];false;280]]]
$font[16;Arial]
$color[$replaceText[$replaceText[$condition[$getQuery[style]==1];true;#000000];false;#ffffff]]
$drawImage[error;0;0;$replaceText[$replaceText[$condition[$getQuery[style]==1];true;600];false;600];$replaceText[$replaceText[$condition[$getQuery[style]==1];true;400];false;300]]
$loadImage[error;path;$replaceText[$replaceText[$condition[$getQuery[style]==1];true;./assets/error/error1.png];false;./assets/error/error2.png]]
$createCanvas[$replaceText[$replaceText[$condition[$getQuery[style]==1];true;600];false;600];$replaceText[$replaceText[$condition[$getQuery[style]==1];true;400];false;300]]
`
}