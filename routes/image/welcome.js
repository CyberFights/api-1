module.exports = {
  path: '/image/welcome',
    code: `
$send[200;canvas;$default]
$drawText[$getQuery[count];170;375;100;200]
$font[30;Arial]
$color[#ffffff]
$drawText[$getQuery[bottommessage];0;280;600;200]
$color[#$getQuery[bottomcolor]]
$drawText[$getQuery[topmessage];0;-30;600;200]
$color[#$getQuery[topcolor]]
$font[35;Arial]

$drawImage[user;210;120;186;216]
$loadImage[user;url;$getQuery[image]]
$drawImage[background;0;0;600;450]
$loadImage[background;url;$getQuery[background]]
$drawImage[base;0;0;600;500]
$loadImage[base;url;https://cdn.discordapp.com/attachments/751712788753154119/989359470855467059/image.png]
$createCanvas[600;500]
$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image. This is the members avatar image'
}]
$if[$getQuery[topcolor]==undefined;400;{
error: 'Missing query parameter called topcolor. This is a HEX color without #'
}]
$if[$getQuery[bottomcolor]==undefined;400;{
error: 'Missing query parameter called bottomcolor. This is a HEX color without #'
}]
$if[$getQuery[bottommessage]==undefined;400;{
error: 'Missing query parameter called message. This is the welcome message at the bottom of the avatar.'
}]
$if[$getQuery[topmessage]==undefined;400;{
error: 'Missing query parameter called message. This is the welcome message at the top of the avatar.'
}]
$if[$getQuery[count]==undefined;400;{
error: 'Missing query parameter called count. This is the server member total.'
}]
$log[$getQuery[image]]
$log[$getQuery[background]]
`
}