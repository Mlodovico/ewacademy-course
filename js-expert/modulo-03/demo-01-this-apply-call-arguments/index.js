'use strict'

const { watch, promises: {readFile} } = require('fs');

class File {
    watch(event, filename) {
        this.showContent(filename);
    }

    async showContent(filename) {
        console.log((await readFile(filename)).toString());
    }
}

const file = new File();
//dessa forma, ele ignora o 'this' da classe File
// e herda o this do watch
// watch(__filename, file.watch);

// podemos deixar explicito qual é o contexto que a função deve seguir
// o bind retorna uma funcão com o 'this' amarrado ao contexto de file, ignorando o watch
// watch(__filename, file.watch.bind(file));

file.watch.call({ showContent: () => console.log('call: hey sinon!')}, null, __filename)
file.watch.apply({ showContent: () => console.log('apply: hey sinon!')}, [null, __filename])