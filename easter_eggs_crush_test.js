function height(n,m) {
    let result = new BigNumber(0);
    let binom = new BigNumber(1);

    for (let j = 0; j < n; j++) {
        binom = binom.mul(m-j).div(j+1);
        result = result.add(binom);
    }

    return result;
}
