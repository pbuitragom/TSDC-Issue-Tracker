Feature: Funcionalidad de creación de Posts

@user1 @web
Scenario: Como usuario Quiero Eliminar el Post Anterior
  Given I navigate to page "http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds  
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario3"
  And I wait for 1 seconds
  And I click on feature post "escenario3"
  And I wait for 1 seconds
  And I click on recently created post "escenario3"
  And I wait for 1 seconds
  And I click on post settings "escenario3_step_4.png"
  And I wait for 1 seconds
  And I click on delete "escenario3"
  And I wait for 1 seconds
  And I confirm delete "escenario3"

  


