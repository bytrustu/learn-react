import React from 'react';

const counter = {
    value: 0,
    increase: function() {
        this.value++
    }
}

counter.increase();
console.log(counter.value);
const incFunc1 = counter.increase;
incFunc1();
console.log(counter.value);
const incFunc2 = counter.increase.bind(counter);
incFunc2();
console.log(counter.value);
