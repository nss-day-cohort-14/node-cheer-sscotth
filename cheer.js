'use strict'

const [,, ...names] = process.argv

if (!names.length) {
  process.exit(1)
}

const queue = (() => {
  const list = []

  return {
    enqueue (msg) {
      return list.push(msg)
    },
    dequeue () {
      return list.shift()
    },
    get length () {
      return list.length
    }
  }
})()

const processQueue = ({ delay = 0 } = {}) => {
  console.log(queue.dequeue())

  if (queue.length) {
    setTimeout(() => processQueue({delay}), delay)
  } else {
    process.exit()
  }
}

const aOrAn = (char) => 'AEFHILMNORSX'.includes(char) ? 'an' : 'a'
const generateLetterCheer = (char) => `Give me ${aOrAn(char)} ${char}!`

const namesAllCaps = names.map(name => name.toUpperCase())

namesAllCaps
  .join('')
  .split('')
  .map(generateLetterCheer)
  .forEach(queue.enqueue)

queue.enqueue('What does that spell?')
queue.enqueue(`${namesAllCaps.join(' ')}!`)

const TWO_SECONDS = 2000
processQueue({delay: TWO_SECONDS})
