// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

describe('Test Landing Pages', () => {
	it('Test Home Page', () => {
		cy.visit('/')
	})
	it('Test Careers Page', () => {
		cy.visit('/careers')
	})
	it('Test Contact Us Page', () => {
		cy.visit('/contact-us')
	})
	it('Test Get Started Page', () => {
		cy.visit('/get-started')
	})
	it('Test Services Page', () => {
		cy.visit('/services')
	})
	it('Test Technologies Page', () => {
		cy.visit('/technologies')
	})
	it('Not exist page', () => {
		cy.request({url: '/somethings', failOnStatusCode: false}).its('status').should('equal', 404)
		cy.visit('/somethings', {failOnStatusCode: false})
	})
})