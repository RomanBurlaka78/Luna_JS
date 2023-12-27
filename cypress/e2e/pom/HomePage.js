class HomePage {
    getHomePage = () => cy.get('img[src="https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg"]');


    gotoHomePage() {
        this.getHomePage()
            .click();

            return this;
    }

}
export default HomePage;