Feature: Funcionalidad actualizacion de Post Faker Caracteres Especiales

@user1 @web
Scenario: Como usuario Quiero Actualizar el Post Anterior
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds  
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario2"
  And I wait for 1 seconds
  And I click on feature post "escenario2"
  And I wait for 1 seconds
  And I click on recently created post "escenario2"
  And I wait for 1 seconds
  And I click on post settings "escenario2_step_3.png"
  And I wait for 1 seconds
  And I set the post title "$string_title_updated" "escenario2"
  And I wait for 1 seconds
  And I click on update "escenario2_step_4.png"
  And I wait for 1 seconds
  Then I should see post updated "escenario2"

Examples:
  | USERNAME | PASSWORD | 
  | pmbtgun@gmail.com | QAZwsx01@2023  |
  
