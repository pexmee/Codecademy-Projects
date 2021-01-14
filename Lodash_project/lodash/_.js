const _ = {
    clamp (num,lower,upper) {
       return Math.min(Math.max(num,lower),upper);
    },
    inRange (num,start,end){
        if(typeof end === 'undefined'){
            end = start;
            start = 0;
        }
        if(start > end){
            const tmp = start;
            start = end;
            end = tmp;
        }
        
        return (start < num && num < end) || num === start;
    },
    words (str){
        return str.split(' ');
    },

    pad (str,length){
        console.log("Lenghts: ",length,str.length);
        if(str.length >= length){
            console.log("yes");
            return str;
        }
    
        const startPaddingLen = Math.floor((length-str.length)/2);
        const endPaddingLen = length - str.length - startPaddingLen;
        console.log(startPaddingLen);
        return ' '.repeat(startPaddingLen) + str + ' '.repeat(endPaddingLen);
    },

    has (object,key){
        const hasValue = object[key] != undefined;
        return hasValue;
    },

    invert (object){
        let obj = {};

        for(const [key,value] of Object.entries(object)){
            obj[value] = key;
        }
        return obj;
    },
    
    findKey (object,predicate){
        let predicateReturnValue;
        for(const [key,value] of Object.entries(object)){
            predicateReturnValue = predicate(value);
            if(predicateReturnValue){
                return key;
            }
        }
        return undefined;
    },

    drop (array,n){
        if(typeof(n) === 'undefined'){
            n=1;
        }
        return array.slice(n);
    },

    dropWhile (array,predicate){
        let dropNumber = array.findIndex((element,index) => {
            return !predicate(element,index,array);
        });

        return this.drop(array,dropNumber);
    },

    chunk (array,size){
        if(typeof(size) === 'undefined'){
            size = 1;
        }
        let arrayChunks = [];
        let arrayChunk; 
        for(let count = 0; count != array.length; count+=size){
            arrayChunk = array.slice(count,count+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }

};




// Do not write or modify code below this line.
module.exports = _;