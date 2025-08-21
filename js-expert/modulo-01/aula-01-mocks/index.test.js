const File = require("./src/file");
const { error } = require("./src/constants");
const assert = require("assert");

// IFEE

;(async () => {
    
    // variaveis criadas nesse bloco so sao validas durante sua execucao
    {
        const filePath = "./mock/empty-file-invalid.csv"
        const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected);
    }

    {
        const filePath = "./mock/invalid-header.csv"
        const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected);
    }

    {
        const filePath = "./mock/five-items-invalid.csv"
        const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
        const result = File.csvToJson(filePath);
        await assert.rejects(result, expected);
    }

    {
        const filePath = "./mock/three-items-valid.csv"
        const expected = [
            {
                id: 1,
                name: "John Doe",
                profession: "Engineer",
                age: 30
            },
            {
                id: 2,
                name: "Jane Smith",
                profession: "Doctor",
                age: 25
            },
            {
                id: 3,
                name: "Alice Johnson",
                profession: "Teacher",
                age: 28
            }
        ]
        const result = File.csvToJson(filePath);
        assert.deepEqual(result, expected);
    }
})()