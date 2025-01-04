module.exports = {
  path: '/image/farm',
    code: `
$send[200;canvas;$default]
$drawImage[1d;330;60;100;110]
$drawImage[1c;250;140;40;50]
$drawImage[1b;270;60;60;70]
$drawImage[1a;180;90;60;70]

$loadImage[1d;path;$ternary[$getQuery[p4]!=empty;$ternary[$getQuery[p4]==tomato1;./assets/farm/tomatoes1.png;$ternary[$getQuery[p4]==tomato2;./assets/farm/tomatoes2.png;$ternary[$getQuery[p4]==tomato3;./assets/farm/tomatoes3.png;$ternary[$getQuery[p4]==carrot1;./assets/farm/carrots1.png;$ternary[$getQuery[p4]==carrot2;./assets/farm/carrots2.png;]]]]];./assets/chess/blank.png]]
$loadImage[1c;path;$ternary[$getQuery[p3]!=empty;$ternary[$getQuery[p3]==tomato1;./assets/farm/tomatoes1.png;$ternary[$getQuery[p3]==tomato2;./assets/farm/tomatoes2.png;$ternary[$getQuery[p3]==tomato3;./assets/farm/tomatoes3.png;$ternary[$getQuery[p3]==carrot1;./assets/farm/carrots1.png;$ternary[$getQuery[p3]==carrot2;./assets/farm/carrots2.png;]]]]];./assets/chess/blank.png]]
$loadImage[1b;path;$ternary[$getQuery[p2]!=empty;$ternary[$getQuery[p2]==tomato1;./assets/farm/tomatoes1.png;$ternary[$getQuery[p2]==tomato2;./assets/farm/tomatoes2.png;$ternary[$getQuery[p2]==tomato3;./assets/farm/tomatoes3.png;$ternary[$getQuery[p2]==carrot1;./assets/farm/carrots1.png;$ternary[$getQuery[p2]==carrot2;./assets/farm/carrots2.png;]]]]];./assets/chess/blank.png]]
$loadImage[1a;path;$ternary[$getQuery[p1]!=empty;$ternary[$getQuery[p1]==tomato1;./assets/farm/tomatoes1.png;$ternary[$getQuery[p1]==tomato2;./assets/farm/tomatoes2.png;$ternary[$getQuery[p1]==tomato3;./assets/farm/tomatoes3.png;$ternary[$getQuery[p1]==carrot1;./assets/farm/carrots1.png;$ternary[$getQuery[p1]==carrot2;./assets/farm/carrots2.png;]]]]];./assets/chess/blank.png]]
 

$drawImage[base;0;0;600;400]
$loadImage[base;path;./assets/farm/smallfarm.png]
$createCanvas[600;400]
`
}