import { collectStrings } from "../collect_strings";

it('returns all strings in an object as array',()=>{
    // empty
    expect(collectStrings({})).toEqual([]);
    // one
    expect(collectStrings({a:'abc'})).toEqual(['abc']);
    // duplciated
    expect(collectStrings({a:'abc',b:'abc',c:'abc'})).toEqual(['abc','abc','abc']);
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }
    expect(collectStrings(obj)).toEqual(["foo", "bar", "baz"]);
})