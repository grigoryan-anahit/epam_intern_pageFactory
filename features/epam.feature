
Feature: Epam page

  Background:  open Epam page
    Given  I open epam.com


  Scenario:open Epam page check title
    When  Page title should be 'EPAM | Enterprise Software Development, Design & Consulting'
    Then  I wait 1 seconds

  Scenario Outline:Navigation menu hover
    Given  I move mouse to navigation menu "<item>" items
    Then   Each menu item "<item>" should change color to "<color>"

    Examples:
      | item | color               |
      | 0    | rgba(118,205,216,1) |
      | 1    |rgba(123,187,198,1)  |
      | 2    | rgba(118,205,216,1) |
      | 3    |rgba(123,187,198,1)  |
      | 4    | rgba(118,205,216,1) |
      | 5    | rgba(118,205,216,1) |

  Scenario: Search
    Given I click on the Search icon
    Then  Should open search field
    When  I set the searching word and click search icon
    And   Should see search results

  Scenario:'Our Work' page
    Given I go to 'Our Work' page
    Then  Page title should be 'Explore our Work | EPAM Customer Stories, Brochures & Accelerators'
    When  I fill 'Filter By' fields
    Then  Should see filters
