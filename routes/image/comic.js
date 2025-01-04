module.exports = {
    path: '/image/comic',
    code: `
$send[200;canvas;$default]

$ternary[$getQuery[mess4]!=none;$drawText[$getQuery[mess4];$ternary[$getQuery[locx4]!=undefined;$getQuery[locx4];0];$ternary[$getQuery[locy4]!=undefined;$getQuery[locy4];0];$ternary[$getQuery[leng4]!=undefined;$getQuery[leng4];10];$ternary[$getQuery[width4]!=undefined;$getQuery[width4];10];left];]

$drawImage[text4;$ternary[$getQuery[locx4]!=undefined;$getQuery[locx4];0];$ternary[$getQuery[locy4]!=undefined;$getQuery[locy4];0];$ternary[$getQuery[leng4]!=undefined;$getQuery[leng4];10];$ternary[$getQuery[width4]!=undefined;$getQuery[width4];10]];]

$loadImage[text4;path;$ternary[$getQuery[opt4]==cb1;./assets/comic/comicbox1.png;$ternary[$getQuery[opt4]==cb2;./assets/comic/comicbox2.png;$ternary[$getQuery[opt4]==cb3;./assets/comic/comicthought1.png;$ternary[$getQuery[opt4]==cb4;./assets/comic/comicthoughtreverse1.png;$ternary[$getQuery[opt4]==cb5;./assets/comic/comictext1.png;$ternary[$getQuery[opt4]==cb6;./assets/comic/comictextreverse2.png;$ternary[$getQuery[opt4]==cb7;./assets/comic/comictext2.png;$ternary[$getQuery[opt4]==cb8;./assets/comic/comictextreverse2.png;$ternary[$getQuery[opt4]==cb0;./assets/chess/blank.png;]]]]]]]]]]


$ternary[$getQuery[mess3]!=none;$drawText[$getQuery[mess3];$ternary[$getQuery[locx3]!=undefined;$getQuery[locx3];0];$ternary[$getQuery[locy3]!=undefined;$getQuery[locy3];0];$ternary[$getQuery[leng3]!=undefined;$getQuery[leng3];10];$ternary[$getQuery[width3]!=undefined;$getQuery[width3];10];left];]

$drawImage[text3;$ternary[$getQuery[locx3]!=undefined;$getQuery[locx3];0];$ternary[$getQuery[locy3]!=undefined;$getQuery[locy3];0];$ternary[$getQuery[leng3]!=undefined;$getQuery[leng3];10];$ternary[$getQuery[width3]!=undefined;$getQuery[width3];10]]

$loadImage[text3;path;$ternary[$getQuery[opt3]==cb1;./assets/comic/comicbox1.png;$ternary[$getQuery[opt3]==cb2;./assets/comic/comicbox2.png;$ternary[$getQuery[opt3]==cb3;./assets/comic/comicthought1.png;$ternary[$getQuery[opt3]==cb4;./assets/comic/comicthoughtreverse1.png;$ternary[$getQuery[opt3]==cb5;./assets/comic/comictext1.png;$ternary[$getQuery[opt3]==cb6;./assets/comic/comictextreverse2.png;$ternary[$getQuery[opt3]==cb7;./assets/comic/comictext2.png;$ternary[$getQuery[opt3]==cb8;./assets/comic/comictextreverse2.png;$ternary[$getQuery[opt3]==cb0;./assets/chess/blank.png;]]]]]]]]]]


$ternary[$getQuery[mess2]!=none;$drawText[$getQuery[mess2];$ternary[$getQuery[locx2]!=undefined;$getQuery[locx2];0];$ternary[$getQuery[locy2]!=undefined;$getQuery[locy2];0];$ternary[$getQuery[leng2]!=undefined;$getQuery[leng2];10];$ternary[$getQuery[width2]!=undefined;$getQuery[width2];10];left];]

$drawImage[text2;$ternary[$getQuery[locx2]!=undefined;$getQuery[locx2];0];$ternary[$getQuery[locy2]!=undefined;$getQuery[locy2];0];$ternary[$getQuery[leng2]!=undefined;$getQuery[leng2];10];$ternary[$getQuery[width2]!=undefined;$getQuery[width2];10]]

$loadImage[text2;path;$ternary[$getQuery[opt2]==cb1;./assets/comic/comicbox1.png;$ternary[$getQuery[opt2]==cb2;./assets/comic/comicbox2.png;$ternary[$getQuery[opt2]==cb3;./assets/comic/comicthought1.png;$ternary[$getQuery[opt2]==cb4;./assets/comic/comicthoughtreverse1.png;$ternary[$getQuery[opt2]==cb5;./assets/comic/comictext1.png;$ternary[$getQuery[opt2]==cb6;./assets/comic/comictextreverse2.png;$ternary[$getQuery[opt2]==cb7;./assets/comic/comictext2.png;$ternary[$getQuery[opt2]==cb8;./assets/comic/comictextreverse2.png;$ternary[$getQuery[opt2]==cb0;./assets/chess/blank.png;]]]]]]]]]]

$ternary[$getQuery[mess1]!=none;$drawText[$getQuery[mess1];$ternary[$getQuery[locx1]!=undefined;$getQuery[locx1];0];$ternary[$getQuery[locy1]!=undefined;$getQuery[locy1];0];$ternary[$getQuery[leng1]!=undefined;$getQuery[leng1];10];$ternary[$getQuery[width1]!=undefined;$getQuery[width1];10];left];]

$drawImage[text1;$ternary[$getQuery[locx1]!=undefined;$getQuery[locx1];0];$ternary[$getQuery[locy1]!=undefined;$getQuery[locy1];0];$ternary[$getQuery[leng1]!=undefined;$getQuery[leng1];10];$ternary[$getQuery[width1]!=undefined;$getQuery[width1];10]]

$loadImage[text1;path;$ternary[$getQuery[opt1]==cb1;./assets/comic/comicbox1.png;$ternary[$getQuery[opt1]==cb2;./assets/comic/comicbox2.png;$ternary[$getQuery[opt1]==cb3;./assets/comic/comicthought1.png;$ternary[$getQuery[opt1]==cb4;./assets/comic/comicthoughtreverse1.png;$ternary[$getQuery[opt1]==cb5;./assets/comic/comictext1.png;$ternary[$getQuery[opt1]==cb6;./assets/comic/comictextreverse2.png;$ternary[$getQuery[opt1]==cb7;./assets/comic/comictext2.png;$ternary[$getQuery[opt1]==cb8;./assets/comic/comictexttreverse2.png;$ternary[$getQuery[opt1]==cb0;./assets/chess/blank.png;]]]]]]]]]]

$font[16;Times New Roman]
$color[#000000]
$drawImage[base;0;0;468;700]
$loadImage[base;url;$getQuery[base]]
$createCanvas[468;700]
`
}