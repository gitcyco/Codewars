function rotate(str, num = 0){
  const n = (str.length - num) % str.length;
  return str.slice(n) + str.slice(0, n); 
}