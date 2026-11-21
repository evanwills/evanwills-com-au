#!/bin/sh

appDir='../talking-timer-lit';
distPath='dist/assets';
destDir='./public';
fileName='speed-throwing';
ogDir=$(pwd);

cd "$appDir/";
npm run build;

appJS=$(ls $distPath | grep 'index-.*\.js');
appCSS=$(ls $distPath | grep 'index-.*\.css');

cd "$ogDir";

cp -p "$appDir/$distPath/$appJS" "$destDir/js/$fileName.js";
cp -p "$appDir/$distPath/$appCSS" "$destDir/css/$fileName.css";