export function mergeObjects(firstObj, secondObj, isFirstPref)
{
    // TODO
    // returns result object as merging of firstObj and secondObj
    // if there is conflict of keys the parameter isFirstPref defines how to resolve the conflict
    // if isFirstPref is true than result object should contain value of the conflicted key from the first object
    // otherwise from the second one.
    return isFirstPref ? {...secondObj, ...firstObj} : {...firstObj, ...secondObj}
}
// const obj x = {x:2 , x:3} /// x=3 one object