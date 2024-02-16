//   1,4,3,16,5,...,n
let n=1;
let m = 10;
let ans="";

function loop() {
    do{
        if(n%2==0){
            ans += n*n + " "; 
            n++;
        }
        else{
            ans += n + " ";
            n++;
        }
    }while(n<=m);
    
    console.log(ans);
}

loop();
