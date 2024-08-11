# 6 kyu Bash Basics - Find Number of files in a Directory
# 
# Your task is to write a script that finds the number of type 'f' files in a given directory (argument 1) to stdout. 
# If there is no arguments, print "Nothing to find".
# 
# Examples:
# 
# run_shell        --> prints: "Nothing to find"
# run_shell dir1         --> prints: "There are 5 files in /home/codewarrior/shell/dir1"
# run_shell doesNotExist --> prints: "Directory not found"
# 
# Answer:

#!/bin/bash
if [ -z "$1" ]
  then
    echo "Nothing to find"
elif [ ! -d "$1" ]
  then
    echo "Directory not found"
else
  num=`find "$1" -maxdepth 1 -type f |wc -l`
  fulldir=`realpath "$1"`
  echo "There are $num files in $fulldir"
fi

