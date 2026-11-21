#!/bin/sh

appDir='../how-long';
appFile='how-long.js';
destpath='./public/js/'
ogDir=$(pwd);

# -------------------------------------

cd "$appDir/";
npm run build;

cd "$ogDir";
# -------------------------------------

cp "$appDir/dist/$appFile" "$destPath";