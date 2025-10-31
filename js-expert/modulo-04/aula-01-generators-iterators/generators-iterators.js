const assert = require('assert');

function* calculation(arg1, arg2) {
    yield arg1 * arg2;
}

function *main() {
    yield 'hello';
    yield* calculation(10, 20);
}

const generator = main();
// console.log(generator.next());
// console.log(generator.next());
assert.deepStrictEqual(Array.from(main()), ['hello', 200]);

// ------- ASYNC ITERATORS -------

const { readFile, stat, readdir } = require('fs/promises');

function* promisified() {
    yield readFile(__filename);
    yield Promise.resolve('Hey Dude');
}

async function* systemInfo() {
    const file = await readFile(__filename);
    const { size } = await stat(__filename);
    const dir = await readdir(__dirname);

    yield { file: file.toString(), size, dir};
}

// ;(async () => {
//     for await (const item of promisified()) {
//         console.log(item.toString());
//     }
// })();

;(async () => {
    for await (const item of systemInfo()) {
        console.log(item);
    }
})()
