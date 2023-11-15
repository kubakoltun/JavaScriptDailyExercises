function maxSum(arr, ranges) {
    const n = arr.length;
    const tree = Array(n).concat(arr);

    for (let i = n - 1; i > 0; --i) {
        tree[i] = tree[i << 1] + tree[i << 1 | 1];
    }

    function update(p, v) {
        p += n;
        tree[p] = v;

        for (let i = p; i > 1; i >>= 1) {
            tree[i >> 1] = tree[i] + tree[i ^ 1];
        }
    }

    function query(l, r) {
        let res = 0;
        
        for (l += n, r += n; l < r; l >>= 1, r >>= 1) {
            if ((l & 1) > 0) res += tree[l++];
            if ((r & 1) > 0) res += tree[--r];
        }
        return res;
    }
    
    return Math.max(...ranges.map(([l, r, v]) => {
        update(l, v);
        return query(l, r + 1);
    }));
}
