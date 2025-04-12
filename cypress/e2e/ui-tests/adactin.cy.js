describe('Adactin Website Login Test', () => {
    beforeEach(() => {
        cy.visit('https://www.adactin.com/HotelApp/');
    });

    it('should successfully log in with valid credentials', () => {
        cy.get('#username').type('rograven');
        cy.get('#password').type('17XS72');
        cy.get('#login').click();

    });
});
