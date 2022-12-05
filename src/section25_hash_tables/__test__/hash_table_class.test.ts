import { HashTable } from "../hash_table_class";


it('tests hash method in HashTable class',()=>{
    const hashTable = new HashTable(3);
    const hash1 = hashTable._hash('abc');
    const hash2 = hashTable._hash('asfasfafasfasgfsf');
    expect(hash1).not.toBeNaN()
    expect(hash1).toBeGreaterThanOrEqual(0)
    expect(hash1).toBeLessThanOrEqual(3)
    
    expect(hashTable._hash('asfasfafasfasgfsf')).toEqual(hashTable._hash('asfasfafasfasgfsf'))
    expect(hash2).toBeGreaterThanOrEqual(0)
    expect(hash2).toBeLessThanOrEqual(3)
})


it('tests set method in HashTable class',()=>{
    const hashTableOne = new HashTable(1);
    expect(hashTableOne.keyMap).toEqual([])
    hashTableOne.set('a','aValue')
    expect(hashTableOne.keyMap).toEqual([[['a','aValue']]])
    hashTableOne.set('a','aValue')
    expect(hashTableOne.keyMap).toEqual([[['a','aValue'],['a','aValue']]])

    const hashTable = new HashTable(5);
    expect(hashTable.keyMap).toEqual([])
    hashTable.set('a','aValue')
    expect(hashTable.keyMap).toEqual([,[['a','aValue']],,,])    
    hashTable.set('b','bValue')
    expect(hashTable.keyMap).toEqual([,[['a','aValue']],[['b','bValue']],,])
    hashTable.set('a','aValue')
    expect(hashTable.keyMap).toEqual([,[['a','aValue'],['a','aValue']],[['b','bValue']],,])
})


it('tests get method in HashTable class',()=>{
    const hashTable = new HashTable(5);
    hashTable.set('a','aValue')
    hashTable.set('b','bValue')
    expect(hashTable.get('a')).toEqual(['a','aValue'])
    expect(hashTable.get('b')).toEqual(['b','bValue'])

})

it('tests keys, values method in HashTable class',()=>{
    const hashTable = new HashTable(5);
    hashTable.set('a','aValue')
    hashTable.set('b','bValue')
    hashTable.set('a','aValue')
    hashTable.set('c','cValue')
    expect(hashTable.keys()).toEqual(['a','b','c'])
    expect(hashTable.values()).toEqual(['aValue','bValue','cValue'])
})