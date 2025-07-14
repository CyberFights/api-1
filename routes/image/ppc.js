
module.exports = {
  path: '/image/ppc',
    code: `
$send[200;canvas;$default]

$drawText[$getQuery[name];-30;310;350;330;center]
$color[#d2ae00]
$font[26;MCinzel]
$drawText[$getQuery[name];12;230;270;490;center]
$color[#ffffff]
$font[27;EBCinzel]
$drawImage[avatar;40;115;215;355]
$loadImage[avatar;url;$getQuery[image]]

$drawImage[base;0;0;283;498]
$loadImage[base;path;./assets/Untitled design.png.jpeg]
$createCanvas[283;498]
$registerFont[./assets/Cinzel-Medium.ttf;MCinzel]
$registerFont[./assets/Cinzel-ExtraBold.ttf;EBCinzel]
$if[$getQuery[name]==undefined;400;{
error: 'Missing query parameter called name.'
}]

$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image.'
}]
$log[START'$getQuery[name]'END]
$log[START'$getQuery[image]'END]
`
}
