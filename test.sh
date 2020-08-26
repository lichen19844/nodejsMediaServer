#!/bin/bash

#当前目录为本脚本文件所在的目录
sourceName="ffmpeg-4.3.1"

# 当前路径目录下是否存在“ffmpeg-3.4”文件夹

if [ ! -r $sourceName ]
then
    echo "${sourceName} 不存在，需要重新下载。开始下载。。。"
    curl http://ffmpeg.org/releases/${sourceName}.tar.bz2 | tar xj || exit 1

else
    echo "存在"
fi