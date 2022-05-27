// 7 kyu Reducing Problems - Bug Fixing #8
//
// Reducing Problems - Bug Fixing #8
// 
// Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return 
// the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! 
// Help timmy fix his program!
// 
// Return true if team 1 wins or false if team 2 wins!
//
// Answer:
const calculateTotal = (t1, t2) => t1.reduce((t, c) => t += c,0) > t2.reduce((t, c) => t += c,0);