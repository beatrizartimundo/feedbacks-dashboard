/// <reference types="cypress"/>

describe('Home', () => {
  it('should render create account modal when click on cta create accoun button', () => {
    cy.visit('/')

    cy.get('#cta-create-account-btn').click()

    cy.get('#modal-create-account').should('be.visible')
  })

  it('should render create account modal when click on header create accoun button', () => {
    cy.visit('/')

    cy.get('#header-create-account-button').click()

    cy.get('#modal-create-account').should('be.visible')
  })
  it('should render login modal when click on header create accoun button', () => {
    cy.visit('/')

    cy.get('#header-login-button').click()

    cy.get('#modal-login-account').should('be.visible')
  })
})