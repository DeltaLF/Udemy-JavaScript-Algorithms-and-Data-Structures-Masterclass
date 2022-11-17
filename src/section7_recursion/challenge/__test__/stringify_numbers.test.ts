import { stringifyNumbers } from "../stringify_numbers";

it('returns an object which all of the nubmers are stringified',()=>{
    // empty
    expect(stringifyNumbers({})).toEqual({});
    // one
    expect(stringifyNumbers({a:123})).toEqual({a:'123'});


    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }
    const ans = {
        num: "1",
        test: [],
        data: {
            val: "4",
            info: {
                isRight: true,
                random: "66"
            }
        }
    }
    expect(stringifyNumbers(obj)).toEqual(ans);
})