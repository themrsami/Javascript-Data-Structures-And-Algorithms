function FizzBuzz(n){
    let arr = [];
    for(let j=1; j<=n; j++){
        arr.push(j);
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i]%3===0 && arr[i]%5!==0){
            arr[i]="Fizz";
        }
        if(arr[i]%5===0 && arr[i]%3!==0){
            arr[i]="Buzz";
        }
        if(arr[i]%3===0 && arr[i]%5===0){
            arr[i]="FizzBuzz";
        }
    }
    return arr;
}

console.log(FizzBuzz(20));