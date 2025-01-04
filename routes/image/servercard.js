module.exports = {
  path: '/image/servercard',
    details: {
        description: 'This server card is of my own creation and design, and has no relation to the unique code and server card created by Cyberghxst#2683. However, full credit is deserved towards Cyberghxst#2683 for being one of the first people to create an api server card endpoint!'
    },
    code: `
$send[200;canvas;$default]

$drawText[$getQuery[description];10;140;300;150;left]
$font[10;Times New Roman]
$drawText[$getQuery[name];0;155;300;50]
$font[15;EBCinzel]
$registerFont[./assets/Cinzel-ExtraBold.ttf;EBCinzel]
$drawText[$getQuery[total] Members;100;266;80;25]
$drawText[$getQuery[online] Online;25;266;50;25]
$drawImage[base;0;0;300;300]

$font[10;Arial]

$color[#ffffff]
$font[10;Arial]
$drawImage[icon;15;115;40;45]
$loadImage[icon;url;$trim[$getQuery[icon]]]
$drawImage[banner;0;0;300;150]
$loadImage[banner;url;$trim[$getQuery[banner]]]


$loadImage[base;url;https://media.discordapp.net/attachments/661258334816567315/993686676415197224/image.png]
$createCanvas[300;300]
`
}