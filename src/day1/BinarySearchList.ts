export default function bs_list(haystack: number[], needle: number): boolean {
    // find midpoint
    // low and high
    // I realized why not use "for loop" in this case. It is because inside the loop I'm assigning "start" a new value but problems arise when you come across the fact that the value of "i" remains the same previously initialized "start" value. The same occurs with, i <= end. I mean "i" is not reassigned anything other than i++. I've realized the fact that under these situations it's better to go with the while loop iteration instead of for loop where you need to reinitialize index from inside the loop.
    // High is exclusive, low is inclusive - so use +1 for low

    let low = 0;
    let high = haystack.length;
    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    } while (low < high);

    return false;
}
