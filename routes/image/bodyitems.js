module.exports = {
  path: '/image/bodyitems',
    code: `
$send[200;canvas;$default]
$drawImage[legs;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[legs;$ternary[$getQuery[legs]==undefined;path;url];$ternary[$getQuery[legs]!=undefined;$ternary[$getQuery[legs]==master;https://cdn.discordapp.com/attachments/682774380605997136/996750365213065266/image.png;$ternary[$getQuery[legs]==super;https://cdn.discordapp.com/attachments/682774380605997136/996765630596395048/image.png;]];./assets/chess/blank.png]]
$drawImage[arms;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[arms;$ternary[$getQuery[arms]==undefined;path;url];$ternary[$getQuery[arms]!=undefined;$ternary[$getQuery[arms]==master;https://cdn.discordapp.com/attachments/682774380605997136/996750419369922660/image.png;$ternary[$getQuery[arms]==super;https://cdn.discordapp.com/attachments/682774380605997136/996765562778681436/image.png;]];./assets/chess/blank.png]]
$drawImage[abs;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;];];];];620]
$loadImage[abs;$ternary[$getQuery[abs]==undefined;path;url];$ternary[$getQuery[abs]!=undefined;$ternary[$getQuery[abs]==master;https://cdn.discordapp.com/attachments/682774380605997136/996750303959449701/image.png;$ternary[$getQuery[abs]==super;https://cdn.discordapp.com/attachments/682774380605997136/996765682261823488/image.png;]];./assets/chess/blank.png]]
$drawImage[head;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[head;$ternary[$getQuery[head]==undefined;path;url];$ternary[$getQuery[head]!=undefined;$ternary[$getQuery[head]==master;https://media.discordapp.net/attachments/682774380605997136/996750252675694592/image.png;$ternary[$getQuery[head]==super;https://cdn.discordapp.com/attachments/682774380605997136/996765503332814969/image.png;]];./assets/chess/blank.png]]
$drawImage[base;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[base;url;https://media.discordapp.net/attachments/682774380605997136/996388896973787166/image.png]
$createCanvas[600;620]
`
}