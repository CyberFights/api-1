module.exports = {
    path: '/image/pie',
    code: `
$send[200;canvas;$default]

$drawText[$getQuery[title];10;20;150;150]
$color[#000000]
$font[20;Arial]
$drawImage[base;0;0;500;500]
$loadImage[base;url;https://chart.googleapis.com/chart?chs=440x220&cht=p3&chds=0,100&chd=t:$getQuery[data]&chco=FF0000|00FF00&chdl=$getSplit[1]|$getSplit[2]&chdlp=t&chl=$replaceText[$getQuery[data];,;|]]
$split[$getQuery[title];vs]
$createCanvas[500;500]
$if[$getQuery[data]==undefined;400;{
error: 'Missing query parameter called data. this is the data values separated by a , for each value'
}]
$if[$getQuery[title]==undefined;400;{
error: 'Missing query parameter called title. this is the title of the chart'
}]
`
}