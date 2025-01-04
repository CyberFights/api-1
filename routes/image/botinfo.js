module.exports = {
  path: '/image/botinfo',
    code: `
$send[200;canvas;$default]

$drawText[$getQuery[name];10;10;150;150]
$font[16;Arial]
$drawText[$getQuery[owner];100;350;200;130]
$drawText[$getQuery[id];320;345;300;130]

$font[20;Arial]

$drawText[$getQuery[shard];515;240;100;130]
$drawText[$getQuery[node];500;175;100;130]
$drawText[$getQuery[prefix];500;110;100;130]

$drawText[$getQuery[slash];210;285;130;130]
$drawText[$getQuery[commands];210;232;130;130]
$drawText[$getQuery[members];210;185;130;130]
$drawText[$getQuery[servers];180;130;130;130]
$drawText[$getQuery[uptime];120;70;130;130]
$drawText[$getQuery[ping]ms;320;10;150;150]
$drawText[$getQuery[status];170;10;150;150]
$font[25;Arial]

$color[#d2ae00]
$font[22;Arial]
$drawImage[avatar;485;0;115;130]
$loadImage[avatar;url;$getQuery[image]]

$drawImage[base;0;0;600;450]
$loadImage[base;path;./assets/botinfo.png]
$createCanvas[600;450]
$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image.'
}]
$if[$getQuery[name]==undefined;400;{
error: 'Missing query parameter called name.'
}]
$if[$getQuery[status]==undefined;400;{
error: 'Missing query parameter called status.'
}]
$if[$getQuery[ping]==undefined;400;{
error: 'Missing query parameter called ping.'
}]
$if[$getQuery[uptime]==undefined;400;{
error: 'Missing query parameter called uptime.'
}]
$if[$getQuery[servers]==undefined;400;{
error: 'Missing query parameter called servers.'
}]
$if[$getQuery[members]==undefined;400;{
error: 'Missing query parameter called members.'
}]
$if[$getQuery[commands]==undefined;400;{
error: 'Missing query parameter called commands.'
}]
$if[$getQuery[slash]==undefined;400;{
error: 'Missing query parameter called slash.'
}]
$if[$getQuery[owner]==undefined;400;{
error: 'Missing query parameter called owner.'
}]
$if[$getQuery[prefix]==undefined;400;{
error: 'Missing query parameter called prefix.'
}]
$if[$getQuery[node]==undefined;400;{
error: 'Missing query parameter called node.'
}]
$if[$getQuery[shard]==undefined;400;{
error: 'Missing query parameter called shard.'
}]
$if[$getQuery[id]==undefined;400;{
error: 'Missing query parameter called id.'
}]
`
}