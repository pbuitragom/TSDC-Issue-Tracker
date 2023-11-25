Feature: 1 Funcionalidad de creación de Posts

@user1 @web
Scenario: Como usuario Quiero crear un post para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 2 seconds
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
  And I set the post content "<POST_CONTENT>"
  And I wait for 1 seconds
  And I click on publish post "escenario1"
  And I wait for 1 seconds
  And I click on Continue, final review "escenario1"
  And I wait for 1 seconds
  And I click on Push Now "escenario1"
  And I wait for 1 seconds
  Then I should see text "<POST_TITLE>" "escenario1"
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 1 seconds
  And I click on recently created post "escenario1"
  And I wait for 1 seconds
  And I click on post settings "escenario1_step_4.png"
  And I wait for 1 seconds
  And I click on delete "escenario1"
  And I wait for 1 seconds
  And I confirm delete "escenario1"

  Examples:
  | USERNAME   | PASSWORD   | POST_TITLE    | POST_CONTENT    |
  | pmbtgun@gmail.com      | QAZwsx01@2023      | This is a title| This is a content |
  | pmbtgun@gmail.com      | QAZwsx01@2023      | 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345| This is a content |