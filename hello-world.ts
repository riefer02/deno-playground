import { textStyles } from './library/styles.ts'
import { VERSION } from 'https://deno.land/std/version.ts'
import { path } from './library/dependencies.ts'
import config from './config.json' assert { type: 'json' }

const PORT = Deno.env.get('DENO_PORT')
console.log('PORT:', PORT)

// console.log(`%c${config.name} by ${config.author}`, textStyles(true, true))

const consoleMessage = () =>
  console.log(`%c${config.name} by ${config.author}`, textStyles(true, true))

// console.log(VERSION)
// console.log(path.dirname('/var/www/hello-world.ts'))

setInterval(() => consoleMessage(), 10000)

// alert('Please acknowledge the message.')
// console.log('The message has been acknowledged.')

// const shouldProceed = confirm('Do you want to proceed?')
// console.log('Should proceed?', shouldProceed)

// const name = prompt('Please enter your name:')
// console.log('Name:', name)

// const age = prompt('Please enter your age:', '18')
// console.log('Age:', age)

console.log('Current Deno version', Deno.version.deno)

console.log('Current TypeScript version', Deno.version.typescript)
console.log('Current V8 version', Deno.version.v8)

console.log(Deno.pid)

console.log(Deno.ppid) // parent process id
