function RemoveDuplicates(arr){
    let uniquearray = [];
    for(let i=0; i<arr.length; i++){
        if(!uniquearray.includes(arr[i])){
            uniquearray.push(arr[i]);
        }
    }
    let formattedarray = uniquearray.sort();
    console.log(formattedarray);
}


RemoveDuplicates([5,4,3,4,5,4,3,8,9,0,7,6,5,6,7,8,9,0,2,3,4,1,2,3,4,5,6,7,8,9,0])