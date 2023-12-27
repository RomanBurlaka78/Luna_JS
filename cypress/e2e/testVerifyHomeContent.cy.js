/// <reference types="cypress"/>

import HomePage from "./pom/HomePage";

describe('Luma -> verify homepage', () => {

    const homepage = new HomePage();

    it('TC_01.01.001 | Verify homepage content',()=>{
        homepage
            .gotoHomePage()
  
    });
});