const greet = require('../app')

test('should return "Hello, Bob."', () => {
  expect(greet('Bob')).toBe('Hello, Bob.')
})

test('should return "Hello, my friend." when name is undefined', () => {
  expect(greet()).toBe('Hello, my friend.')
})

test('should return "Hello, my friend." when name is null', () => {
  expect(greet(null)).toBe('Hello, my friend.')
})

test('should return "Hello, my friend." when name is an empty string', () => {
  expect(greet('')).toBe('Hello, my friend.')
})

test('should return "HELLO, BOB" when name is equal to BOB', () => {
  expect(greet('BOB')).toBe('HELLO, BOB!')
})

test('should return "HELLO, TOTO" when name is equal to TOTO', () => {
  expect(greet('TOTO')).toBe('HELLO, TOTO!')
})

test('should return "Hello, Jill and Jane."', () => {
  expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})

test('should return "Hello, Amy, Brian and Charlotte"', () => {
  expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe(
    'Hello, Amy, Brian and Charlotte.'
  )
})

test('should return "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO BRIAN!'
  )
})

test('should return "Bonjour, Jill et Jane."', () => {
  expect(greet(['Jill', 'Jane', 'fr'])).toBe('Bonjour, Jill et Jane.')
})

test('should return "Hallo, Jill en Jane."', () => {
  expect(greet(['Jill', 'Jane', 'nl'])).toBe('Hallo, Jill en Jane.')
})

test('should return "Hello, Jill and Jane."', () => {
  expect(greet(['Jill', 'Jane', 'en'])).toBe('Hello, Jill and Jane.')
})

test('should return "Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!"', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte', 'fr'])).toBe(
    'Bonjour, Amy et Charlotte. ET BONJOUR BRIAN!'
  )
})

test('should return "Hello, Amy and Charlotte. AND HELLO BRIAN !"', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte', 'en'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO BRIAN!'
  )
})

test('should return "Hallo, Amy en Charlotte. EN HALLO BRIAN !"', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte', 'nl'])).toBe(
    'Hallo, Amy en Charlotte. EN HALLO BRIAN!'
  )
})

test('should return "Bonjour, Bob."', () => {
  expect(greet(['Bob', 'fr'])).toBe('Bonjour, Bob.')
})

test('should return "Hallo, Bob."', () => {
  expect(greet(['Bob', 'nl'])).toBe('Hallo, Bob.')
})

test('should return "Hello, Bob."', () => {
  expect(greet(['Bob', 'en'])).toBe('Hello, Bob.')
})

test('should return "Hallo, mijn vriend."', () => {
  expect(greet('nl')).toBe('Hallo, mijn vriend.')
})

test('should return "Bonjour, mon ami."', () => {
  expect(greet('fr')).toBe('Bonjour, mon ami.')
})

test('should return "Hello, my friend."', () => {
  expect(greet('en')).toBe('Hello, my friend.')
})

test('should return "HALLO, JOSEF."', () => {
  expect(greet(['JOSEF', 'nl'])).toBe('HALLO, JOSEF!')
})

test('should return "BONJOUR, JOSEF."', () => {
  expect(greet(['JOSEF', 'fr'])).toBe('BONJOUR, JOSEF!')
})
