describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if every slide contains proper title and description"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.card-description').should('be.visible').each(($cardDescription) => {
      cy.wrap($cardDescription).find('h1').should('exist');
      cy.wrap($cardDescription).find('p').should('exist');
    });
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.card-description').should('be.visible').each(($cardDescription) => {
      cy.wrap($cardDescription).find('h1').should('exist');
      cy.wrap($cardDescription).find('p').should('exist');
    });
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.card-description').should('be.visible').each(($cardDescription) => {
      cy.wrap($cardDescription).find('h1').should('exist');
      cy.wrap($cardDescription).find('p').should('exist');
    });
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});