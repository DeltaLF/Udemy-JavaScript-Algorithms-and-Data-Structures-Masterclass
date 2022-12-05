
class HashTable{
    // nested keyMap incase duplicated
    /*
    keyMap: [
        [ [key1, value1], [key2, value2]... ],
        [],
        [],
        ...
    ]
    */
    public keyMap:string[][][]
    constructor(size=53){
        this.keyMap = new Array(size)
    }

    _hash(key:string){
        let total = 0;
        let WIRED_PRMIE = 31;
        for(let i=0;i < Math.min(key.length, 100);i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WIRED_PRMIE + value) % this.keyMap.length; 
        }
        return total;
    }

    set(key:string,value:string){
        const hashedKey = this._hash(key);
    if(!this.keyMap[hashedKey]) this.keyMap[hashedKey] = [];    
        this.keyMap[hashedKey].push([key,value]);        
    }

    get(key:string):undefined | string[]{
        const hashedKey = this._hash(key);
        const keyValueArray = this.keyMap[hashedKey];
        for(let keyValuePair of keyValueArray){
            if(keyValuePair[0] === key){
                return keyValuePair
            } 
        }
        return undefined;
    }

    keys():string[]{
        const keys:string[] = []
        this.keyMap.forEach(indexArray=>{
            indexArray.forEach(keyValuePair=>{
                if(!!keyValuePair){
                    if(!keys.includes(keyValuePair[0])){
                        keys.push(keyValuePair[0])
                    }
                } 
            })
        })
        return keys
    }

    values():string[]{
        const values:string[] = []
        this.keyMap.forEach(indexArray=>{
            indexArray.forEach(keyValuePair=>{
                if(!!keyValuePair){
                    if(!values.includes(keyValuePair[1])){
                        values.push(keyValuePair[1])
                    }
                }
            })
        })
        return values
    }

}


export {HashTable}