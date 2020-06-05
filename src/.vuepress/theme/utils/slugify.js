export default function slugify (value, separator) {
  const mapLetters = {
    a: /(á|ã|â|à)/g,
    e: /(é|ê)/g,
    i: /(í)/g,
    o: /(ó|ô|õ)/g,
    u: /(ú)/g,
    c: /(ç)/g,
    n: /(ñ)/g
  }
  for (const letter in mapLetters) {
    const rexp = mapLetters[letter]
    value = value.toLowerCase() // :) Avoid include capital letters in regex
      .replace(rexp, letter)
      .replace(/(\s|\.)/g, separator) // Replace space by delimiter '-'
  }

  return value
}
