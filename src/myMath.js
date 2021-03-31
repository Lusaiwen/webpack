import { chunk } from 'lodash-es';

export function add(a, b) {
    console.log('add');
    return a + b;
}

export function random() {
    console.log('random');
    return Math.random();
}

export function sub(a, b) {
    console.log('sub');
    return a - b;
}

export function myChunk(arr, num) {
    console.log('chunk');
    chunk(arr, num);
}
