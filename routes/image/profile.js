module.exports = {
  path: '/image/profile',
    code: `
$send[200;canvas;$default]
$drawText[$getQuery[about];10;420;600;200;left]
$font[16;Arial]
$drawText[$getQuery[real];420;332;130;200]
$drawText[$getQuery[species];420;260;130;200]
$drawText[$getQuery[time];450;187;130;200]
$drawText[$getQuery[stats];420;120;130;200]
$drawText[$getQuery[age];390;40;110;200]
$font[25;Arial]
$drawText[$getQuery[name];360;-25;200;200]
$color[#ffffff]
$font[22;Arial]
$drawImage[avatar;15;130;286;316]
$loadImage[avatar;url;$getQuery[image]]

$drawImage[base;0;0;600;600]
$loadImage[base;url;https://cdn.discordapp.com/attachments/706268792883380324/989300134699479070/image.png]
$createCanvas[600;600]
$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image.'
}]
$if[$getQuery[name]==undefined;400;{
error: 'Missing query parameter called name.'
}]
$if[$getQuery[age]==undefined;400;{
error: 'Missing query parameter called age.'
}]
$if[$getQuery[stats]==undefined;400;{
error: 'Missing query parameter called stats.'
}]
$if[$getQuery[time]==undefined;400;{
error: 'Missing query parameter called time.'
}]
$if[$getQuery[species]==undefined;400;{
error: 'Missing query parameter called species.'
}]
$if[$getQuery[real]==undefined;400;{
error: 'Missing query parameter called real.'
}]
$if[$getQuery[about]==undefined;400;{
error: 'Missing query parameter called about.'
}]
`
}