export default function two_crystal_balls(breaks: boolean[]): number {
    // the problem is we have to find which ball breaks first when 2 balls are thrown down
    // for example, consider 100 floors. So 2 arrays, 100 floors each. Where does the ball break?
    // to make the algorithm more efficient, its better to traverse sqrt amount of times
    // sqrt will be O(sqrt N) which is more optimized than O(n) or O(log N)
    // rather than traversing every element, we traverse the sqrt so i should be sqrt
    // if a specific sqrt matches then we walk back to the array sqrt number of times (j)
    // cbrt is worse than sqrt because the higher the root, the higher the chances of the value being closer to 1 hence it gets closer and closer to linear
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    // in this loop, we are traversing the length by sqrt number of times
    // if ball breaks, that is if (breaks[i]) then we're breaking and jumping to second for
    let i = jumpAmount;
    for (i; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }
    // here we're traversing back the sqrt of the part of array where the ball broke
    //  j < jumpamount because we don't want to traverse more than required
    // so j is the sqrt part of array where it broke, so we traverse until we find where i broke
    i -= jumpAmount;
    for (let j = 0; j < jumpAmount && i <= breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
