Feature: Funcionalidad de creacion de Posts Sin contenido

@user1 @web
Scenario: Como usuario Quiero crear un post para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario1"
  And I wait for 1 seconds
  And I click on feature post "escenario1"
  And I wait for 1 seconds
  And I click on new post
  And I wait for 1 seconds
  And I set the post title "<POST_TITLE>" "escenario1"
  And I wait for 1 seconds
  Then I can NOT save or update posts

  Examples:
  | USERNAME | PASSWORD | POST_TITLE |
  | pmbtgun@gmail.com | QAZwsx01@2023| This is a title |