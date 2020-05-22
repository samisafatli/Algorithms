const compareTriplets = (alice, bob) => {
    let aliceScore = 0
    let bobScore = 0
    for (let i = 0; i < 3; i++) {
        if(alice[i] > bob[i]){
            aliceScore++
        } else if(alice[i] < bob[i] ){
            bobScore++
        }
    }
    return [aliceScore, bobScore]
}

const alice =  [44,25,27]
const bob =  [10,2,10]

console.log(compareTriplets(alice, bob))