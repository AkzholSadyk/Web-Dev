let n,a=0;
n=prompt("Enter your number...")
if(n>1){
    for (let i=2;i<n;i++){
        if(n%i==0){
            a++;
        }
    }
    if(a==1){
        alert('prime');
    } else{
        alert('not prime');
    }
} else if(n==2){
    alert('prime');
} else {
    alert('number must be greather than 1');
}