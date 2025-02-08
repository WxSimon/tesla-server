const BigNumber = require('bignumber.js');

module.exports = {
    "+"(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.plus(b);
    },
    "-"(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.minus(b);
    },
    "*"(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.times(b);
    },
    "/"(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.dividedBy(b);
    },
    ">"(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.comparedTo(b) > 0;
    },
    ">="(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.comparedTo(b) >= 0;
    },
    "<"(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.comparedTo(b) < 0;
    },
    "<="(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        b = typeof b === 'object' ? b : new BigNumber(b);
        return a.comparedTo(b) <= 0;
    },
    toFixed(a, b) {
        a = typeof a === 'object' ? a : new BigNumber(a);
        return a.toFixed(b);
    }
};