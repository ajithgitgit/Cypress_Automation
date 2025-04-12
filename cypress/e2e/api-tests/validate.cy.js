describe('GET Non-existent User - Reqres', () => {
  it('should return 404 for invalid user', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users/23',
      failOnStatusCode: false // prevent Cypress from failing test on non-2xx status
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
