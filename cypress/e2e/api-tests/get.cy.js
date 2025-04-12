describe('GET Users API - Reqres', () => {
  it('should return a list of users for page 2', () => {
    cy.request('https://reqres.in/api/users?page=2')
      .should((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('page', 2);
        expect(response.body.data).to.have.length(6); // 6 users
        expect(response.body.data[0]).to.have.property('email');
      });
  });
});
