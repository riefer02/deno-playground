import { textStyles } from './library/styles.ts'
import { VERSION } from 'https://deno.land/std/version.ts'
import { path } from './library/dependencies.ts'
import { parse } from 'https://deno.land/std@0.119.0/flags/mod.ts'
import config from './config.json' assert { type: 'json' }

const denoGreetingMessage = () =>
  console.log(`%c${config.name} by ${config.author}`, textStyles(true, true))

denoGreetingMessage()

// const __filename = path.fromFileUrl(import.meta.url)
// console.log('filename', __filename)

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))
// console.log('dirname', __dirname)

const PORT = Deno.env.get('DENO_PORT')
console.log('PORT:', PORT)

// const bytes = await Deno.readFile(`${__dirname}/library/book.txt`)
// console.log(bytes)
const text = await Deno.readTextFile(`${__dirname}/library/book.txt`)
console.log(text)

await Deno.writeTextFile(`${__dirname}/library/log.txt`, "Hello World");

// console.log(VERSION)

// console.log(path.dirname('/var/www/hello-world.ts'))

// setInterval(() => denoGreetingMessage(), 10000)

// const name = Deno.args[0]
// const food = Deno.args[1]
// console.log(`Hello ${name}, I like ${food}!`)
// const flags = parse(Deno.args, {
//   boolean: ['help', 'color'],
//   string: ['version'],
//   default: { color: true },
// })
// console.log('Wants help?', flags.help)
// console.log('Version:', flags.version)
// console.log('Wants color?:', flags.color)
// console.log('Other:', flags._)

// alert('Please acknowledge the message.')
// console.log('The message has been acknowledged.')
// const shouldProceed = confirm('Do you want to proceed?')
// console.log('Should proceed?', shouldProceed)
// const name = prompt('Please enter your name:')
// console.log('Name:', name)
// const age = prompt('Please enter your age:', '18')
// console.log('Age:', age)

// console.log('Current Deno version', Deno.version.deno)
// console.log('Current TypeScript version', Deno.version.typescript)
// console.log('Current V8 version', Deno.version.v8)
// console.log(Deno.pid)
// console.log(Deno.ppid) // parent process id
