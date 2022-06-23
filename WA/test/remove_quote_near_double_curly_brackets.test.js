import { check_file_extension } from '../remove_quote_near_double_curly_brackets.js'
import { expect } from "chai"


describe('Chech file extension', () => {
  it("check_file_extension('test.js',  'js'   --> true)", () => {
    let result = check_file_extension('test.js', 'js')
    expect(result).to.equal(true)
  })

  it("check_file_extension('test.jpg', 'png'  --> false)", () => {
    let result = check_file_extension('test.jpg', 'png')
    expect(result).to.equal(false)
  })
})