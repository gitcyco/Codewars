; 8 kyu Keep Hydrated!
; 
; Nathan loves cycling.
; 
; Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
; 
; You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
; 
; For example:
; 
; time = 3 ----> litres = 1
; 
; time = 6.7---> litres = 3
; 
; time = 11.8--> litres = 5
; 
; Answer:
SECTION .data
  b:   dq  2.0
SECTION .text
global litres

; int litres(double);
litres:
  divsd     xmm0, [b]
  roundsd   xmm0, xmm0, 9
  cvttsd2si eax, xmm0
  ret