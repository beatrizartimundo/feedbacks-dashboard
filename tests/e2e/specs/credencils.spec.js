/// <reference types="cypress"/>
// const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credencials', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should generate an api_key', () => {
    cy.get('#header-login-button').click()

    cy.get('#modal-login-account').should('be.visible')
    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submitBtn').click()
    cy.url().should('include', '/feedbacks')
    cy.get('#credencialsBtn').click()
    cy.get('#apikey').should('not.be.empty')
    const oldApikey = cy.get('#apikey').invoke('text')
    cy.get('#generate-apikey').click()
    const newApikey = cy.get('#apikey').invoke('text')
    expect(oldApikey).to.not.equal(newApikey)
  })
})