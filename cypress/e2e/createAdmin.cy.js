describe('createTestAccount', () => {

    const USER_LOGIN2 = 'test_qt_superadmin';
    const AMOUNT = '3.5';

    it('createAdmin', () => {

        cy.visit('https://platform.betskilla.com')
        cy.viewport(1920, 1080)

        cy.get("input[type=\'text\']").type(USER_LOGIN2)

        cy.get("input[type=\'password\']").type(USER_LOGIN2)

        cy.get('#button_sign_in').click()

        cy.get('#button_settings').click()

        cy.get('.sc-cqYYBx > :nth-child(2)').click()

        cy.get('[tabindex="0"][style="width: 196px;"]').click()

        cy.get('#mui-5 > .sc-evZas').click()

        cy.get('#button_menu_New_user_new_user').click()

        cy.get('#button_menu_Admin_add_credentials\\/admin').click()

        cy.get('#input-Admin').type('TestAccount987654321').should('have.value', 'TestAccount987654321')

        cy.get('.sc-dsQDmV > .sc-evZas').click()

        cy.visit('https://platform.betskilla.com')

        cy.get('#button_menu_User_balance_user_balance').click()

        cy.get(':nth-child(1) > :nth-child(2) > .sc-caiQmJ').click()

        cy.get('#input-Amount').type(AMOUNT+6).should('have.value', AMOUNT+6)

        cy.get('#button_user_profile_deposit').click()

        cy.get('#button-Confirm').click()
    });
})
