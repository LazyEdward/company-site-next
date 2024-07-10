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
		})

		it('Test TopBar Link exist', () => {
			cy.get('[data-cy="header-nav-image"]').should('be.visible')
			cy.get('[data-cy="footer-nav-image"]').scrollIntoView().should('be.visible')
			const desktopLinks = cy.get('[data-cy="desktop-links"]')

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
			const desktopLinks = cy.get('[data-cy="desktop-links"]').children()

			desktopLinks.then(() => {
				desktopLinks.contains('How to start').should('be.visible').click().then(() => {
					cy.url().should('include', '/get-started')
				})
	
				cy.wait(500)

				desktopLinks.contains('Services').should('be.visible').click().then(() => {
					cy.url().should('include', '/services')
				})

				cy.wait(500)

				desktopLinks.contains('Technologies').should('be.visible').click().then(() => {
					cy.url().should('include', '/technologies')
				})

				cy.wait(500)

				desktopLinks.contains('Careers').should('be.visible').click().then(() => {
					cy.url().should('include', '/careers')
				})

				cy.wait(500)

				cy.get('[data-cy="header-nav-image"]').should('be.visible').click().then(() => {
					cy.url().should('include', '/')
				})

				cy.contains('span', 'Contact Us').should('be.visible').click().then(() => {
					cy.url().should('include', '/contact-us')
				})

				cy.get('[data-cy="footer-nav-image"]').scrollIntoView().should('be.visible').click().then(() => {
					cy.url().should('include', '/')
				})
			})


		})

	})
	
	describe('Mobile', () => {
		beforeEach(() => {
			cy.viewport(412, 893)
		})

		it('Test TopBar Link exist', () => {
			cy.get('[data-cy="header-nav-image"]').should('be.visible')
			cy.get('[data-cy="footer-nav-image"]').scrollIntoView().should('be.visible')

			cy.contains('span', 'Contact Us').should('not.be.visible')
			
			const menu = cy.get('[role="menu"]')
			menu.should('be.visible')

			menu.click().then(() => {
				cy.wait(500)
				const mobileLinks = cy.get('[data-cy="mobile-links"]')
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
			cy.get('[role="menu"]').should('be.visible').click().then(() => {
				cy.wait(500)
				cy.get('[data-cy="mobile-links"]').children().contains('How to start').should('be.visible').click().then(() => {
					cy.url().should('include', '/get-started')
				})
			})

			cy.wait(500)

			cy.get('[role="menu"]').should('be.visible').click().then(() => {
				cy.wait(500)
				cy.get('[data-cy="mobile-links"]').children().contains('Services').should('be.visible').click().then(() => {
					cy.url().should('include', '/services')
				})
			})

			cy.wait(500)

			cy.get('[role="menu"]').should('be.visible').click().then(() => {
				cy.wait(500)
				cy.get('[data-cy="mobile-links"]').children().contains('Technologies').should('be.visible').click().then(() => {
					cy.url().should('include', '/technologies')
				})
			})

			cy.wait(500)

			cy.get('[role="menu"]').should('be.visible').click().then(() => {
				cy.wait(500)
				cy.get('[data-cy="mobile-links"]').children().contains('Careers').should('be.visible').click().then(() => {
					cy.url().should('include', '/careers')
				})
			})

			cy.get('[data-cy="header-nav-image"]').should('be.visible').should('be.visible').click().then(() => {
				cy.url().should('include', '/')
			})

			cy.wait(500)

			cy.get('[role="menu"]').should('be.visible').click().then(() => {
				cy.wait(500)
				cy.get('[data-cy="mobile-links"]').children().contains('Contact Us').should('be.visible').click().then(() => {
					cy.url().should('include', '/contact-us')
				})
			})

			cy.get('[data-cy="footer-nav-image"]').scrollIntoView().should('be.visible').click().then(() => {
				cy.url().should('include', '/')
			})

		})

	})
})