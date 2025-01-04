module.exports = {
  path: '/image/bodyhealth',
    code: `
$send[200;canvas;$default]
$drawImage[legs;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[legs;$ternary[$getQuery[legs]==100;path;url];$ternary[$getQuery[legs]!=100;$ternary[$getQuery[legs]>50;https://cdn.discordapp.com/attachments/682774380605997136/996391395424206890/image.png;https://cdn.discordapp.com/attachments/682774380605997136/996393536813531136/image.png];./assets/chess/blank.png]]
$drawImage[arms;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[arms;$ternary[$getQuery[arms]==100;path;url];$ternary[$getQuery[arms]!=100;$ternary[$getQuery[arms]>50;https://cdn.discordapp.com/attachments/682774380605997136/996391885587349565/image.png;https://cdn.discordapp.com/attachments/682774380605997136/996394063563608164/image.png];./assets/chess/blank.png]]
$drawImage[abs;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[abs;$ternary[$getQuery[abs]==100;path;url];$ternary[$getQuery[abs]!=100;$ternary[$getQuery[abs]>50;https://media.discordapp.net/attachments/682774380605997136/996390026319515800/image.png;https://media.discordapp.net/attachments/682774380605997136/996393799372787792/image.png];./assets/chess/blank.png]]
$drawImage[head;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[head;$ternary[$getQuery[head]==100;path;url];$ternary[$getQuery[head]!=100;$ternary[$getQuery[head]>50;https://media.discordapp.net/attachments/682774380605997136/996392270762868737/image.png;https://media.discordapp.net/attachments/682774380605997136/996394299740672010/image.png];./assets/chess/blank.png]]
$drawImage[base;0;0;$ternary[$getQuery[size]==master;500;$ternary[$getQuery[size]==heavy;400;$ternary[$getQuery[size]==cruiser;300;$ternary[$getQuery[size]==light;200;]]]];620]
$loadImage[base;url;https://media.discordapp.net/attachments/682774380605997136/996388896973787166/image.png]
$createCanvas[600;620]
`
}