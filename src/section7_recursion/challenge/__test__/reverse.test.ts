import { reverse } from "../reverse";

it('returns reverse string', ()=>{
    // 1
    expect(reverse('a')).toEqual('a');
    expect(reverse('abc')).toEqual('cba');
    expect(reverse('aabaa')).toEqual('aabaa');
    expect(reverse('afsafgsag')).toEqual('gasgfasfa');
})