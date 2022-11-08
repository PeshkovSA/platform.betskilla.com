describe('createTestAccount', () => {

    const USER_LOGIN1 = 'god';
    const AMOUNT = '3.5';

    it('createTestAccount', () => {

        cy.visit('https://platform.betskilla.com')
        cy.viewport(1920, 1080)

         cy.get('#input-Connexion').type(USER_LOGIN1)
             .should('have.value', USER_LOGIN1)

         cy.get("input[type='password']").type('god')

         cy.get('#button_sign_in').click()

         cy.get('#button_settings').click()

         cy.get('.sc-cqYYBx > :nth-child(2)').click()

         cy.get('[tabindex="0"][style="width: 196px;"]').click()

         cy.get('#mui-5 > .sc-evZas').click()

         cy.get('#button_menu_New_user_new_user').click()

         cy.get('#button_menu_Owner_add_credentials\\/owner').click()

         cy.get('#input-Owner').type('TestAccount123456789').should('have.value', 'TestAccount123456789')

         cy.get('.sc-dsQDmV > .sc-evZas').click()

         cy.get('.sc-hQikvm > .sc-evZas').click()

         cy.visit('https://platform.betskilla.com')

         cy.get('#button_menu_Users_users').click()

         cy.get('.sc-tQuYZ > :nth-child(1) > :nth-child(1)').click()

         cy.get('#input-Amount').type(AMOUNT).should('have.value', AMOUNT)

         cy.get('#button_user_profile_deposit').click()

         cy.get('#button-Confirm').click()

         cy.get('#input-Amount').type(AMOUNT).should('have.value', AMOUNT)

         cy.get('#button_user_profile_withdrawal').click()

         cy.get('#button-Confirm').click()

         cy.get('#user_profile_ban').click()

         cy.get('#user_profile_ban').click()

         cy.get('#button_logout').click()
        });
})