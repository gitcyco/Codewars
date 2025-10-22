<?php

// 5 kyu Land perimeter
// 
// Given an array arr of strings, complete the function by calculating the total perimeter of all the islands. 
// Each piece of land will be marked with 'X' while the water fields are represented as 'O'. 
// Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:
// 
// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO'] 
// 
// which represents:
// 
// should return: "Total land perimeter: 24".
// 
// Following input:
// 
// ['XOOO',
//  'XOXO',
//  'XOXO',
//  'OOXX',
//  'OOOO']
// 
// which represents:
// 
// should return: "Total land perimeter: 18"
// 
// Answer:

function land_perimeter($arr)
{
  $ylen = sizeof($arr);
  $xlen = strlen($arr[0]);
  $shore = 0;
  $dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for ($y = 0; $y < $ylen; $y++) {
    for ($x = 0; $x < $xlen; $x++) {
      if ($arr[$y][$x] === 'X') {
        foreach ($dirs as $dir) {
          $newy = $y + $dir[0];
          $newx = $x + $dir[1];
          if ($newx < 0 || $newy < 0 || $newx >= $xlen || $newy >= $ylen || $arr[$newy][$newx] === 'O') {
            $shore++;
          }
        }
      }
    }
  }
  return "Total land perimeter: {$shore}";
}
