import readline from 'readline';
import process from 'node:process';
import chalk from 'chalk';
import chalkTable from 'chalk-table';
import Draftlog from 'draftlog';

import Person from './person.js';

export default class TerminalController {

    constructor() {
        this.print = {};
        this.data = {};
    }

    initializeTable(database, language) {
        const data = database.map(item => new Person(item).formatted(language));
        const table = chalkTable(this.getTableOptions(), data);
        
        this.print = console.draft(table);
        this.data = data;
    }

    initializeTerminal(database, language) {
        Draftlog(console).addLineListener(process.stdin);
        
        this.terminal = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.initializeTable(database, language);
    }

    question(msg = '') {
        return new Promise(resolve => this.terminal.question(msg, resolve));
    }

    closeTerminal() {
        this.terminal.close();
    }

    updateTable(item) {
        this.data.push(item);
        this.print(chalkTable(this.getTableOptions(), this.data));
    }

    getTableOptions() {
        return {
    leftPad: 2,
    columns: [
        { field: 'id', name: chalk.cyan('ID') },
        { field: 'vehicles', name: chalk.magenta('Vehicles') },
        { field: 'hmTraveled', name: chalk.cyan('KM Traveled') },
        { field: 'from', name: chalk.cyan('From') },
        { field: 'to', name: chalk.cyan('To') },
    ]   };
    }
}