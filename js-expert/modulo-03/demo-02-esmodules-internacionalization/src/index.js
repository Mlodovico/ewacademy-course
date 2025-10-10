
import TerminalController from './terminalController.js';
import fs from 'fs';

import Person from './person.js';

const database = JSON.parse(fs.readFileSync(new URL('./../database.json', import.meta.url)));

const terminalController = new TerminalController();

const DEFAULT_LANGUAGE = 'pt-BR';
const STOP_TERMINAL = ':q';

terminalController.initializeTerminal(database, DEFAULT_LANGUAGE);

async function mainLoop() {
    try {
        const answer = await terminalController.question('What?')
        console.log('Answer', answer);
        if(answer === STOP_TERMINAL) {
            terminalController.closeTerminal();
            console.log('Bye bye!');
            return;
        }
        const person = Person.generateInstanceFromString(answer);

        console.log('Person', person);

        return mainLoop();
    } catch(error) {
        console.log('Deu ruim: ', error);
        return mainLoop();
    }
}

await mainLoop();