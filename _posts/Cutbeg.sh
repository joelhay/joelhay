#!/bin/bash
for f in  *.md
do
  echo "Processing $f "
  sed -i -e 1,32d $f
  done
