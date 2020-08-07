#!/bin/bash
for f in  *.md
do
  echo "Processing $f "
  head -n -12 $f  > tmp_file && mv tmp_file  $f
done
