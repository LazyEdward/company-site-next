// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

describe('Test TopBar Navigation', () => {
	before(() => {
		cy.visit('/')
	})
	
	describe('Desktop', () => {
		before(() => {
			cy.viewport(1920, 1080)
		})

		it('Test TopBar Link exist', { defaultCommandTimeout: 10000 }, () => {
			cy.get('img[alt="Company Logo Top"]').should('be.exist')
			cy.get('img[alt="Company Logo Footer"]').should('be.exist')
			cy.contains('a', 'How to start').should('be.visible')
			cy.contains('a', 'Services').should('be.visible')
			cy.contains('a', 'Technologies').should('be.visible')
			cy.contains('a', 'Careers').should('be.visible')
			cy.contains('a', 'Contact Us').should('be.visible')
		})

	})
})