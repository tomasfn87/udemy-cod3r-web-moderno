import remove_quote_near_double_curly_brackets, { check_file_extension } from './remove_quote_near_double_curly_brackets.js'

let inputs = process.argv
if (inputs.length > 2 && inputs.length < 4) {
  console.error('ERRO: são necessários 2 parâmetros:\n   1. Caminho do arquivo de origem           \(a ser limpo\)\n   2. Caminho para salvar o arquivo limpo    \(o resultado\) \n\nSerá checado se o arquivo de destino é diferente do arquivo de origem:\n   - Se for salvar na mesma pasta, deverá usar um nome diferente')
} else {
  const in_file = inputs[2]
  const out_file = inputs[3]

  if (in_file == out_file) {
    console.error('ERRO: o arquivo de saída tem que ser diferente do arquivo de entrada, ou ser salvo em outra pasta.')
  } else if (!check_file_extension(in_file, 'js')) {
    console.error('ERRO: o arquivo de entrada deve ter extensão .js.')
  } else if (!check_file_extension(out_file, 'js')) {
    console.error('ERRO: o arquivo de saída deve ter extensão .js.')
  } else {
    remove_quote_near_double_curly_brackets(in_file, out_file)
  }
}
