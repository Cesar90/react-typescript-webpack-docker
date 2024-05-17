#!/bin/sh

echo "*** Start graphicsMagick installation ***"
apk --no-cache add libgomp libltdl libpng libjpeg tiff libwebp-tools
apk add --no-cache gettext librsvg ghostscript graphicsmagick