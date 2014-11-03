function isTriangle(n1,n2.n3){
  var list=[n1,n2,n3];
  list.sort();
  if(list[0]<list[1]+list[2]){
    return true;
  }else{
    return false;
  }
