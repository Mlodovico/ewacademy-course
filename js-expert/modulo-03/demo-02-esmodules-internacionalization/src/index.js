import Draftlog from 'draftlog';
import chalk from 'chalk';
import chalkTable from 'chalk-table';
import readline from 'readline';

import database from './../database.json' assert { type: "json" };
import Person from './person.js';

Draftlog(console).addLineListener(process.stdin);

const options = {
    leftPad: 2,
    columns: [
        { field: 'id', name: chalk.cyan('ID') },
        { field: 'vehicle', name: chalk.magenta('Vehicles') },
        { field: 'hmTraveled', name: chalk.cyan('KM Traveled') },
        { field: 'from', name: chalk.cyan('From') },
        { field: 'to', name: chalk.cyan('To') },
    ]
};

const table = chalkTable(options, database.map(item =>  new Person(item).formatted('pt-BR')));
const print = console.draft(table);

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question(chalk.yellow('Type the ID of the vehicle to remove: '), (id) => {
    console.log(id)
})
