// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

describe('Test Contact Form Section in All pages', () => {
	it('Test Home Page', () => {
		cy.visit('/')
		
		const img = cy.get('[data-cy="contact-section-img"]')
		img.scrollIntoView().should('be.visible')
		img.should("have.attr", "src").then(src => {
			expect(src).contain('contact')
		})

		const form = cy.get('[data-cy="contact-form"]')

		form.should('be.visible')

		form
			.should('contain', 'Company').should('be.visible')
			.and('contain', 'Your Name').should('be.visible')
			.and('contain', 'Phone Number').should('be.visible')
			.and('contain', 'Email').should('be.visible')
			.and('contain', 'Project Detail').should('be.visible')
			.and('contain', 'Privacy Policy').should('be.visible')
	})
	it('Test Careers Page', () => {
		cy.visit('/careers')
		
		const img = cy.get('[data-cy="contact-section-img"]')
		img.scrollIntoView().should('be.visible')
		img.should("have.attr", "src").then(src => {
			expect(src).contain('contact')
		})


		const form = cy.get('[data-cy="contact-form"]')

		form.should('be.visible')

		form
			.should('contain', 'Company').should('be.visible')
			.and('contain', 'Your Name').should('be.visible')
			.and('contain', 'Phone Number').should('be.visible')
			.and('contain', 'Email').should('be.visible')
			.and('contain', 'Project Detail').should('be.visible')
			.and('contain', 'Privacy Policy').should('be.visible')
	})
	it('Test Contact Us Page', () => {
		cy.visit('/contact-us')
		
		const img = cy.get('[data-cy="contact-section-img"]')
		img.scrollIntoView().should('be.visible')
		img.should("have.attr", "src").then(src => {
			expect(src).contain('map')
		})


		const form = cy.get('[data-cy="contact-form"]')

		form.should('be.visible')

		form
			.should('contain', 'Company').should('be.visible')
			.and('contain', 'Your Name').should('be.visible')
			.and('contain', 'Phone Number').should('be.visible')
			.and('contain', 'Email').should('be.visible')
			.and('contain', 'Project Detail').should('be.visible')
			.and('contain', 'Privacy Policy').should('be.visible')
	})
	it('Test Get Started Page', () => {
		cy.visit('/get-started')
		
		const img = cy.get('[data-cy="contact-section-img"]')
		img.scrollIntoView().should('be.visible')
		img.should("have.attr", "src").then(src => {
			expect(src).contain('contact')
		})


		const form = cy.get('[data-cy="contact-form"]')

		form.should('be.visible')

		form
			.should('contain', 'Company').should('be.visible')
			.and('contain', 'Your Name').should('be.visible')
			.and('contain', 'Phone Number').should('be.visible')
			.and('contain', 'Email').should('be.visible')
			.and('contain', 'Project Detail').should('be.visible')
			.and('contain', 'Privacy Policy').should('be.visible')
	})
	it('Test Services Page', () => {
		cy.visit('/services')
		
		const img = cy.get('[data-cy="contact-section-img"]')
		img.scrollIntoView().should('be.visible')
		img.should("have.attr", "src").then(src => {
			expect(src).contain('contact')
		})


		const form = cy.get('[data-cy="contact-form"]')

		form.should('be.visible')

		form
			.should('contain', 'Company').should('be.visible')
			.and('contain', 'Your Name').should('be.visible')
			.and('contain', 'Phone Number').should('be.visible')
			.and('contain', 'Email').should('be.visible')
			.and('contain', 'Project Detail').should('be.visible')
			.and('contain', 'Privacy Policy').should('be.visible')
	})
	it('Test Technologies Page', () => {
		cy.visit('/technologies')
		
		const img = cy.get('[data-cy="contact-section-img"]')
		img.scrollIntoView().should('be.visible')
		img.should("have.attr", "src").then(src => {
			expect(src).contain('contact')
		})


		const form = cy.get('[data-cy="contact-form"]')

		form.should('be.visible')

		form
			.should('contain', 'Company').should('be.visible')
			.and('contain', 'Your Name').should('be.visible')
			.and('contain', 'Phone Number').should('be.visible')
			.and('contain', 'Email').should('be.visible')
			.and('contain', 'Project Detail').should('be.visible')
			.and('contain', 'Privacy Policy').should('be.visible')
	})
})