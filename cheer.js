const [,, ...names] = process.argv

const aOrAn = (char) => 'AEFHILMNORSX'.includes(char) ? 'an' : 'a'

const namesAllCaps = names.map(name => name.toUpperCase())

;[...namesAllCaps.join('')].forEach(char => (
  console.log(`Give me ${aOrAn(char)} ${char}!`)
))

console.log('What does that spell?')
console.log(`${namesAllCaps.join(' ')}!`)
