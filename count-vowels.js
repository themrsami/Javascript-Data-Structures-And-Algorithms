function CountVowels(str){
    let count = 0;
    let formattedstring = str.toLowerCase()
    for(let i=0; i<formattedstring.length; i++){
        if(
            formattedstring[i]==='a' ||
            formattedstring[i]==='e' ||
            formattedstring[i]==='i' ||
            formattedstring[i]==='o' ||
            formattedstring[i]==='u'
         ){
            count++;
         }
    }
    console.log(`Total vowels are : ${count}`);
}

CountVowels('Hello My nAmE is UsaMA');