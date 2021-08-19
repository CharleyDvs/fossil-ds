describe('fossil-ui: CustomList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=customlist--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CustomList!');
    });
});
