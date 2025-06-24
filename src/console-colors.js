
// Import chalk using ES Modules
import chalk from 'chalk';

// Use chalk to style your logs
console.log(chalk.blue('This text is blue!'));
console.log(chalk.red.bold('Bold red alert!'));

// Combine styles
console.log(chalk.yellow.underline('Underlined yellow text'));

// Use variables with colors
const error = chalk.red.bold;
console.log(error('Error: Something went wrong!'));
