#!/bin/bash
# 发布wwwroot以及phpui

ORGMANIFEST=../src/www/manifest

# manifest's built time
pushd $ORGMANIFEST
cp cache.manifest cache.manifest.tmp
echo "# build_time: `date "+%Y/%m/%d %H:%M"`" \
    | cat cache.manifest.tmp - > cache.manifest \
    && rm cache.manifest.tmp
popd


if [ -e ../release ]; then
    rm -rf ../release/*
else
    mkdir -p ../release 
fi

# release wwwroot
pushd ../src/www
# @note: 文件列表使用*，则不包含当前根目录的隐藏文件，需使用. 
# @note: 不使用 zip -r 258i.zip *
zip -r ../../release/258i_wwwroot.zip . \
    -x *.swp
popd

# release phpui
pushd ../src/app
zip -r ../../release/258i_phpui.zip . \
    -x tmp/cache/* tmp/templates_c/* log/* *.swp
popd
