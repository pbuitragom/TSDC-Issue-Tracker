Feature: Titulo de tamano 256

@user1 @web
Scenario: Como usuario Quiero crear un post para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait 
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
  | USERNAME   | PASSWORD   | POST_TITLE    | POST_CONTENT    |
  | pmbtgun@gmail.com      | QAZwsx01@2023      | 1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456| This is a content |