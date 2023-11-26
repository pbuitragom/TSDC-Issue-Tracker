Feature: Funcionalidad de creación de Pages Faker Name para Content

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
  And I set the page content "$name_page_title" "escenario5" 
  And I wait for 1 seconds
  And I click on update page "escenario5"
  And I wait for 3 seconds

  Examples:
  | USERNAME | PASSWORD | 
  | pmbtgun@gmail.com | QAZwsx01@2023  |

