#!/bin/sh

appDir='../printable-phone-book';
distPath='dist';
destpath='./public/js/printable-phone-book.js'

ogDir=$(pwd);
echo "\$ogDir = $ogDir";

cd "$appDir/";
npm run build;

appFile=$(ls $distPath | grep 'index-.*\.js');
appCSS=$(ls $distPath | grep 'index-.*\.css');

cd "$ogDir";

cp "$appDir/$distPath/$appFile" "$destPath";