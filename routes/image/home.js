module.exports = {
  path: '/image/home',
    code: `
$send[200;canvas;$default]

$drawImage[1b;40;275;100;100]
$drawImage[1a;190;110;90;85]

$loadImage[1b;path;$ternary[$getQuery[laptop]!=0;./assets//home/laptop.png;./assets/chess/blank.png]]
$loadImage[1a;path;$ternary[$getQuery[tv]!=0;./assets/home/tv.png;./assets/chess/blank.png]]
 

$drawImage[base;0;0;600;450]
$loadImage[base;path;./assets/home/home.jpeg]
$createCanvas[600;450]
`
}