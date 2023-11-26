Feature: Funcionalidad de Members

@user1 @web
Scenario: Como usuario Quiero crear un member y que acceda a contenido exclusivo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario8"
  And I wait for 1 seconds
  And I click on feature members
  And I wait for 1 seconds
  And I click on the member recently created
  And I wait for 1 seconds
  And I update the member name "<MEMBER_NAME_UPDATED>"
  And I click on save member
  And I wait for 1 seconds
  
  Examples:
  | USERNAME | PASSWORD | MEMBER_NAME_UPDATED | MEMBER_EMAIL |
  | pmbtgun@gmail.com | QAZwsx01@2023 | 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901 | primermiembro@gmail.com |