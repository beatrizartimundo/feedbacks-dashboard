/// <reference types="cypress"/>
const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  beforeEach(() => {
    cy.visit(APP_URL)
  })

  it('should render create account modal when click on cta create accoun button', () => {
    cy.get('#cta-create-account-btn').click()

    cy.get('#modal-create-account').should('be.visible')
  })

  it('should render create account modal when click on header create account button', () => {
    cy.get('#header-create-account-button').click()

    cy.get('#modal-create-account').should('be.visible')
  })

  it('should render login modal when click on login button', () => {
    cy.get('#header-login-button').click()

    cy.get('#modal-login-account').should('be.visible')
  })

  it('should login on the application', () => {
    cy.get('#header-login-button').click()

    cy.get('#modal-login-account').should('be.visible')
    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submitBtn').click()
    cy.url().should('include', '/feedbacks')
  })

  it('shoul show an error with an invalid email', () => {
    cy.get('#header-login-button').click()

    cy.get('#modal-login-account').should('be.visible')
    cy.get('#email-field').type('email@')
    cy.get('#password-field').type('53')
    cy.get('#submitBtn').click()
    cy.get('#email-error').should('be.visible')
    cy.get('#passw-error').should('be.visible')
  })

  it('should logout on the application', () => {
    cy.get('#header-login-button').click()

    cy.get('#modal-login-account').should('be.visible')
    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submitBtn').click()
    cy.url().should('include', '/feedbacks')
    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})