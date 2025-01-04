module.exports = {
  path: '/image/vs',
    code: `
$send[200;canvas;$default]
$drawText[$replaceText[$replaceText[$condition[$getQuery[style]==one];true;];false;$getQuery[name1]    vs  
 $getQuery[name2]];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;0];false;235];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;0];false;120];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;0];false;130];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;0];false;250]]
$color[#ffffff]
$font[26;Arial]
$drawImage[base;0;0;$replaceText[$replaceText[$condition[$getQuery[style]==one];true;512];false;600];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;512];false;500]]
$loadImage[base;url;$replaceText[$replaceText[$condition[$getQuery[style]==one];true;https://cdn.discordapp.com/attachments/741006584510939216/942206944242966558/IMG_7957.jpg];false;https://cdn.discordapp.com/attachments/682774380605997136/993250817631076373/image.png]]

$drawImage[avatar2;$replaceText[$replaceText[$condition[$getQuery[style]==one];true;10];false;0];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;95];false;0];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;200];false;300];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;270];false;500]]
$loadImage[avatar2;url;$getQuery[image2]]


$drawImage[avatar;$replaceText[$replaceText[$condition[$getQuery[style]==one];true;300];false;300];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;95];false;0];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;200];false;300];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;270];false;500]]
$loadImage[avatar;url;$getQuery[image]]



$createCanvas[$replaceText[$replaceText[$condition[$getQuery[style]==one];true;512];false;600];$replaceText[$replaceText[$condition[$getQuery[style]==one];true;512];false;500]]


$if[$getQuery[image2]==undefined;400;{
error: 'Missing query parameter called image.'
}]


$if[$getQuery[image]==undefined;400;{
error: 'Missing query parameter called image.'
}]

`
}