import CreateAccountPage from "./CreateAccountPage";

class HomePage {
    getHomePage = () => cy.get('img[src="https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg"]');
    getCreateAccountButton = () => cy.get('div.panel.wrapper > div ul > li:nth-child(3) > a');




    gotoHomePage() {
        this.getHomePage()
            .click();

            return this;
    }

    clickCreateAccount() {
        this.getCreateAccountButton()
            .click();
      

            return new CreateAccountPage();
    }

}
export default HomePage;