import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from '../../src/utils/validators'

describe('Validator utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })
  it('should give an error when the input is less then 3 character', () => {
    // dentro do expect coloca o valor digitado/exemplo
    expect(validateEmptyAndLength3('va')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })
  it('should returns true when the input pass a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })
  it('should give an errror with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })
  it('should give an error when the email format is invalid', () => {
    expect(validateEmptyAndEmail('mail.com')).toBe('*Este campo precisa ser um e-mail')
  })
  it('should returns true when the email format is correct', () => {
    expect(validateEmptyAndEmail('mail@mail.com')).toBe(true)
  })
})