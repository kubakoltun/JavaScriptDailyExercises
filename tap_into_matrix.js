function crack(login) {
    let p = [];
    let ln = 0;
    let cp = 0;
    let cs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789()`~!@#$%^&*-+=|\\{}[]:;\"'<>,.?/";
    const h = new Proxy({}, {get(t, n) {
        if (n === 'length') return p.length;
        if (p[n]) return p[n];
        if (n != ln) {
            p.push(cs[cp-1]);
            cp=0;ln++;
        }
        return cs[cp++];
    }});

    while(!login(h)) {}
    p.push(cs[cp-1]);
    return p.join('');
}
