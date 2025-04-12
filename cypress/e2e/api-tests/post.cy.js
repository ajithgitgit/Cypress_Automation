describe('POST Create User - Reqres', () => {
  it('should create a new user', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name: 'morpheus',
        job: 'leader'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'morpheus');
      expect(response.body).to.have.property('job', 'leader');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
