const remove_quote_near_double_curly_brackets = (string, loud=false) => {
  const regex = /('|")(\{\{)|(\}\})('|")/g
  const matches = string.match(regex)
  loud && console.log('\n - Matchs \(' + matches.length + '\):\n' + matches) 
  return string.replaceAll(regex, "$2$3")
}

export default remove_quote_near_double_curly_brackets