
function isTriangle(n1,n2.n3){
  var list=[n1,n2,n3];
  list.sort();
  if(list[2]<list[1]+list[0]){
    return true;
  }else{
    return false;
  }
}

function getTriangleType(n1,n2,n3){
  var ret;
  if(n1===n2){
    if(n1===n3){
      if(n2===n3){
        ret="Equilatero";
      }
    }else{
      if(n2===n3){
        ret="Isoscele";
      }
    }
  }else{
    if(n2===n3 && n3===n1){
      ret="Isoscele";
    }
  }
}
if(ret!=null){
  ret="Isoscele";
}
return ret;
}

function sumAll(array){
  var sum=0;
  for (i = 0; i < array.length; i++) {
    sum=sum+array[i];
  }
  return sum;
}

function aggregateAll(array, aggrFunc){
  
}

