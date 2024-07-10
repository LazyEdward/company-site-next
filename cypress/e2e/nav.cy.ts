// Copyright (c) 2024 LazyEdward
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

describe('Test TopBar Navigation', () => {
	beforeEach(() => {
		cy.visit('/')
	})
	
	describe('Desktop', () => {
		beforeEach(() => {
			cy.viewport(1920, 1080)
			// cy.viewport(350, 700)
		})

		it('Test TopBar Link exist', () => {
			cy.get('[data-cy="header-nav-image"]', { timeout: 10000 }).should('be.visible')
			cy.get('[data-cy="footer-nav-image"]', { timeout: 10000 }).scrollIntoView().should('be.visible')
			const desktopLinks = cy.get('[data-cy="desktop-links"]', { timeout: 10000 })

			desktopLinks.should('be.visible')
			desktopLinks.children().should('have.length', 4)

			desktopLinks
				.children()
				.should('contain', 'How to start').should('be.visible')
				.and('contain', 'Services').should('be.visible')
				.and('contain', 'Technologies').should('be.visible')
				.and('contain', 'Careers').should('be.visible')

			cy.contains('span', 'Contact Us').should('be.visible')
		})

		it('Test TopBar Link nav', () => {
			const desktopLinks = cy.get('[data-cy="desktop-links"]', { timeout: 10000 }).children()

			desktopLinks.then(() => {
				desktopLinks.contains('How to start', { timeout: 10000 }).should('be.visible').click().then(() => {
					cy.url().should('include', '/get-started')
				})
	
				cy.wait(500)

				desktopLinks.contains('Services', { timeout: 10000 }).should('be.visible').click().then(() => {
					cy.url().should('include', '/services')
				})

				cy.wait(500)

				desktopLinks.contains('Technologies', { timeout: 10000 }).should('be.visible').click().then(() => {
					cy.url().should('include', '/technologies')
				})

				cy.wait(500)

				desktopLinks.contains('Careers', { timeout: 10000 }).should('be.visible').click().then(() => {
					cy.url().should('include', '/careers')
				})

				cy.wait(500)

				cy.get('[data-cy="header-nav-image"]', { timeout: 10000 }).should('be.visible').click().then(() => {
					cy.url().should('include', '/')
				})

				cy.contains('span', 'Contact Us', { timeout: 10000 }).should('be.visible').click().then(() => {
					cy.url().should('include', '/contact-us')
				})

				cy.get('[data-cy="footer-nav-image"]', { timeout: 10000 }).scrollIntoView().should('be.visible').click().then(() => {
					cy.url().should('include', '/')
				})
			})


		})

	})
	
	describe('Mobile', () => {
		beforeEach(() => {
			cy.viewport(350, 700)
		})

		it('Test TopBar Link exist', () => {
			cy.get('[data-cy="header-nav-image"]', { timeout: 10000 }).should('be.visible')
			cy.get('[data-cy="footer-nav-image"]', { timeout: 10000 }).scrollIntoView().should('be.visible')

			cy.contains('span', 'Contact Us', { timeout: 10000 }).should('not.be.visible')
			
			const menu = cy.get('[role="menu"]', { timeout: 10000 })
			menu.should('be.visible')

			menu.click().then(() => {
				const mobileLinks = cy.get('[data-cy="mobile-links"]', { timeout: 10000 })
				mobileLinks.should('be.visible')
	
				mobileLinks
					.children()
					.should('contain', 'How to start').should('be.visible')
					.and('contain', 'Services').should('be.visible')
					.and('contain', 'Technologies').should('be.visible')
					.and('contain', 'Careers').should('be.visible')
					.and('contain', 'Contact Us').should('be.visible')

			})
		})

		it('Test TopBar Link nav', () => {
			cy.get('[role="menu"]', { timeout: 10000 }).should('be.visible').click().then(() => {
				cy.get('[data-cy="mobile-links"]', { timeout: 10000 }).children().contains('How to start').should('be.visible').click().then(() => {
					cy.url().should('include', '/get-started')
				})
			})

			cy.get('[role="menu"]', { timeout: 10000 }).should('be.visible').click().then(() => {
				cy.get('[data-cy="mobile-links"]', { timeout: 10000 }).children().contains('Services').should('be.visible').click().then(() => {
					cy.url().should('include', '/services')
				})
			})

			cy.get('[role="menu"]', { timeout: 10000 }).should('be.visible').click().then(() => {
				cy.get('[data-cy="mobile-links"]', { timeout: 10000 }).children().contains('Technologies').should('be.visible').click().then(() => {
					cy.url().should('include', '/technologies')
				})
			})

			cy.get('[role="menu"]', { timeout: 10000 }).should('be.visible').click().then(() => {
				cy.get('[data-cy="mobile-links"]', { timeout: 10000 }).children().contains('Careers').should('be.visible').click().then(() => {
					cy.url().should('include', '/careers')
				})
			})

			cy.get('[data-cy="header-nav-image"]', { timeout: 10000 }).should('be.visible').should('be.visible').click().then(() => {
				cy.url().should('include', '/')
			})

			cy.get('[role="menu"]', { timeout: 10000 }).should('be.visible').click().then(() => {
				cy.get('[data-cy="mobile-links"]', { timeout: 10000 }).children().contains('Contact Us').should('be.visible').click().then(() => {
					cy.url().should('include', '/contact-us')
				})
			})

			cy.get('[data-cy="footer-nav-image"]', { timeout: 10000 }).scrollIntoView().should('be.visible').click().then(() => {
				cy.url().should('include', '/')
			})

		})

	})
})