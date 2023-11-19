Feature: Funcionalidad de creación de Pages

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
  And I click on recently created page
  And I wait for 1 seconds
  And I click on post settings "escenario5_step_3.png"
  And I wait for 1 seconds
  And I set the post title "<POST_TITLE_UPDATED>" "escenario5" 
  And I wait for 1 seconds
  And I click on update "escenario5"
  And I wait for 3 seconds
