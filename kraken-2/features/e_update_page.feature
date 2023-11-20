Feature: Funcionalidad de creación de Pages

@user1 @web
Scenario: Como usuario Quiero actualizar una page para compartirlo
  Given I navigate to page "http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin"
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
  And I set the page title "<POST_TITLE_UPDATED>" "escenario5_step_5.png"
  And I wait for 1 seconds
  And I click on update page "escenario5"
  And I wait for 3 seconds

  
