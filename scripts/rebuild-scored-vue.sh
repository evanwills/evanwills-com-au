#!/bin/sh

appDir='../scored-vue';
distPath='dist/assets';
destDir='./public'
destJS='js/scored.js'
destCSS='css/scored.css'

ogDir=$(pwd);
# echo "\$ogDir = $ogDir";

cd "$appDir/";
npm run build;

appFile=$(ls $distPath | grep 'index\..*\.js');
appCSS=$(ls $distPath | grep 'index\..*\.css');

cd "$ogDir";

cp -p "$appDir/$distPath/$appFile" "$destDir/$destJS";
cp -p "$appDir/$distPath/$appCSS" "$destDir/$destCSS";