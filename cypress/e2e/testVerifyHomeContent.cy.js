/// <reference types="cypress"/>

import HomePage from "./pom/HomePage";

describe('Luma -> verify homepage', function()  {

    const homepage = new HomePage();

    it('TC_01.01.001 | Verify homepage content', function(){
        homepage
            .gotoHomePage();
  
    });
});