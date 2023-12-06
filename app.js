function greet (name) {
  let language

  if (
    isLanguage(name) ||
        name === undefined ||
        name === null ||
        name === ''
  ) {
    language = name
    return greetWithNoName(language)
  }

  if (Array.isArray(name)) {
    const lastElement = name[name.length - 1]
    if (isLanguage(lastElement)) {
      language = lastElement
      name.splice(name.length - 1)
    }
    return greetWithArray(name, language)
  }

  if (name === name.toUpperCase()) {
    return greetWithUpperCaseName(name, language)
  }
  return greetWithLowerCaseName(name, language)
}

function greetWithNoName (language) {
  if (language === 'fr') {
    return 'Bonjour, mon ami.'
  }
  if (language === 'nl') {
    return 'Hallo, mijn vriend.'
  }
  return 'Hello, my friend.'
}

function greetWithUpperCaseName (name, language) {
  let string = ''
  switch (language) {
    case 'fr':
      string = `BONJOUR, ${name}!`
      break
    case 'nl':
      string = `HALLO, ${name}!`
      break
    default:
      string = `HELLO, ${name}!`
  }
  return string
}

function greetWithLowerCaseName (name, language) {
  let string = ''
  switch (language) {
    case 'fr':
      string = `Bonjour, ${name}.`
      break
    case 'nl':
      string = `Hallo, ${name}.`
      break
    default:
      string = `Hello, ${name}.`
  }
  return string
}

function greetWithArray (name, language) {
  const tabWithUpperCase = []
  const tabWithLowerCase = []

  name.forEach((element) => {
    if (element === element.toUpperCase()) {
      tabWithUpperCase.push(element)
    } else {
      tabWithLowerCase.push(element)
    }
  })

  const l = tabWithLowerCase.length - 1
  const L = tabWithUpperCase.length - 1

  if (l < 0 && L === 0) {
    return greetWithUpperCaseName(tabWithUpperCase, language)
  }

  if (L < 0 && l === 0) {
    return greetWithLowerCaseName(tabWithLowerCase, language)
  }

  if (language === 'nl') {
    return greetWithArrayNL(tabWithLowerCase, tabWithUpperCase, l, L)
  }
  if (language === 'fr') {
    return greetWithArrayFR(tabWithLowerCase, tabWithUpperCase, l, L)
  }

  if (name.length === 1) return `Hello, ${name[0]}.`

  const string =
        'Hello, ' +
        tabWithLowerCase.slice(0, l).join(', ') +
        ' and ' +
        tabWithLowerCase[l] +
        '.'
  if (tabWithUpperCase.length === 0) {
    return string
  }
  if (tabWithUpperCase.length < 3) {
    return (
      string +
            ' AND HELLO ' +
            tabWithUpperCase.slice(0, L + 1).join(' AND ') +
            '!'
    )
  }
  return (
    string +
        ' AND HELLO ' +
        tabWithUpperCase.slice(0, L).join(', ') +
        ' AND ' +
        tabWithUpperCase[L] +
        '!'
  )
}

function greetWithArrayFR (tabWithLowerCase, tabWithUpperCase, l, L) {
  const string =
        'Bonjour, ' +
        tabWithLowerCase.slice(0, l).join(', ') +
        ' et ' +
        tabWithLowerCase[l] +
        '.'
  if (tabWithUpperCase.length === 0) {
    return string
  }
  if (tabWithUpperCase.length < 3) {
    return (
      string +
            ' ET BONJOUR ' +
            tabWithUpperCase.slice(0, L + 1).join(' ET ') +
            '!'
    )
  }
  return (
    string +
        ' ET BONJOUR ' +
        tabWithUpperCase.slice(0, L).join(', ') +
        ' ET ' +
        tabWithUpperCase[L] +
        '!'
  )
}

function greetWithArrayNL (tabWithLowerCase, tabWithUpperCase, l, L) {
  const string =
        'Hallo, ' +
        tabWithLowerCase.slice(0, l).join(', ') +
        ' en ' +
        tabWithLowerCase[l] +
        '.'
  if (L < 0) {
    return string
  }
  if (tabWithUpperCase.length < 3) {
    return (
      string +
            ' EN HALLO ' +
            tabWithUpperCase.slice(0, L + 1).join(' EN ') +
            '!'
    )
  }
  return (
    string +
        ' EN HALLO ' +
        tabWithUpperCase.slice(0, L).join(', ') +
        ' EN ' +
        tabWithUpperCase[L] +
        '!'
  )
}

function isLanguage (lastElement) {
  if (lastElement === 'fr' || lastElement === 'en' || lastElement === 'nl') {
    return true
  }
  return false
}

module.exports = greet
