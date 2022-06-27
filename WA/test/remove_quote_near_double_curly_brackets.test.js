import remove_quote_near_double_curly_brackets from '../remove_quote_near_double_curly_brackets.js'
import { expect } from "chai"


describe('Remove Quote Near Double Curly Brackets', () => {
  it("remove_quote_near_double_curly_brackets('\"{{Test}}\"')   --> '{{Test}}'", () => {
    let result = remove_quote_near_double_curly_brackets('"{{Test}}"')
    expect(result).to.equal('{{Test}}')
  })

  it("remove_quote_near_double_curly_brackets(\"'{{Test}}'\")   --> \"{{Test}}\"", () => {
    let result = remove_quote_near_double_curly_brackets("'{{Test}}'")
    expect(result).to.equal("{{Test}}")
  })

  it("remove_quote_near_double_curly_brackets(\"{{'Test'}}'\")  --> \"{{'Test'}}\"", () => {
    let result = remove_quote_near_double_curly_brackets("{{'Test'}}")
    expect(result).to.equal("{{'Test'}}")
  })

  it("remove_quote_near_double_curly_brackets('{{\"Test\"}}')   --> '{{\"Test\"}}'", () => {
    let result = remove_quote_near_double_curly_brackets('{{"Test"}}')
    expect(result).to.equal('{{"Test"}}')
  })
})