#!/bin/sh

appDir='../drinking-chocolate';
distPath='dist';
destDir='./public';
destJS='drinking-chocolate.js';
# destCSS='css/scored.css';

ogDir=$(pwd);
# echo "\$ogDir = $ogDir";

cd "$appDir/";
npm run build;

# appFile=$(ls $distPath | grep 'index\..*\.js');
# appCSS=$(ls $distPath | grep 'index\..*\.css');

cd "$ogDir";

cp -p "$appDir/$distPath/$destJS" "$destDir/js/$destJS";
# cp -p "$appDir/$distPath/$appCSS" "$destDir/$destCSS";