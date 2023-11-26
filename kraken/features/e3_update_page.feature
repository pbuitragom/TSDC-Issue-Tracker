Feature: Funcionalidad de creación de Pages titulo Escenario de borde 255 caracteres

@user1 @web
Scenario: Como usuario Quiero actualizar una page para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds  
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario5"
  And I wait for 1 seconds
  And I click on feature pages "escenario5"
  And I wait for 1 seconds
  And I click on recently created page "escenario5"
  And I wait for 1 seconds
  And I click on post settings "escenario5_step_4.png"
  And I wait for 1 seconds
  And I set the page title "<PAGE_TITLE_UPDATED>" "escenario5" 
  And I wait for 1 seconds
  Then I can NOT save or update pages
  

  Examples:
  | USERNAME | PASSWORD | PAGE_TITLE_UPDATED |
  | pmbtgun@gmail.com | QAZwsx01@2023  | 1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456 |

