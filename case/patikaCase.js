const patikaCase = (n)=>{
    let a,b,i;
    a=n.toString();
    b=0;
    for( i=0; i<a.length;i++){
        b+=parseInt(a[i]);
    }
    if(b%2==1){
        return "Odd";
    }else 
        return "Even";    
}

document.write(patikaCase(43)," - ",patikaCase(373)," - ",patikaCase(4433))
