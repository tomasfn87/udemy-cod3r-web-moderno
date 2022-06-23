import fs from 'fs'

const remove_quote_near_double_curly_brackets = (input_file, output_file) => {
  fs.readFile(input_file, 'utf-8', (err, data) => {
    err && console.error(err)
    if (!data) {
      return
    }
    console.log(' - Antes da limpeza:\n' + data)

    const regex = /('|")(\{\{)|(\}\})('|")/g
    const matches = data.match(regex)
    console.log('\n - Matchs \(' + matches.length + '\):\n' + matches)

    const filtered_data = data.replaceAll(regex, "$2$3")
    console.log('\n - Depois da limpeza:\n' + filtered_data)

    fs.writeFile(output_file, filtered_data, (err) => {
      err && console.err(err)
      return
    })
  })
}

export const check_file_extension = (file, ext) => {
  ext = ext.replace(/\./, '')
  const fSplit = file.split('.')
  const fileExt = fSplit[fSplit.length-1]
  if (fileExt == ext) {
    return true
  }
  return false
}

export default remove_quote_near_double_curly_brackets