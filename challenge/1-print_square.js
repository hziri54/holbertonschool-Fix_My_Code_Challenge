#!/usr/bin/node
/*
    Print a square with the character #
    
    The size of the square must be the first argument 
    of the program.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./1-print_square.js <size>\n");
    process.stderr.write("Example: ./1-print_square.js 8\n");
    process.exit(1);
}

const size = parseInt(process.argv[2], 10); // Parse the size as a base-10 integer

if (isNaN(size) || size <= 0) {
    process.stderr.write("Invalid size: please provide a positive integer\n");
    process.exit(1);
}

for (let i = 0; i < size; i++) {
    console.log("#".repeat(size)); // Use repeat to generate the row
}
