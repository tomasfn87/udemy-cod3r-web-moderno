const remove_quote_outside_double_curly_brackets = (string, loud=false) => {
  const regex = /('|")(\{{2})|(\}{2})('|")/g
  const matches = string.match(regex)
  loud && console.log('\n - Removendo aspas simples ou duplas fora de {{ ou }} \(' + matches.length + ' ocorrências\):\n' + matches)
  return string.replaceAll(regex, "$2$3")
}

export default remove_quote_outside_double_curly_brackets