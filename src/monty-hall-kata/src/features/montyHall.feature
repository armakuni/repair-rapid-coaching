# Feature: Monty Hall Game
# Scenario: Player switches doors
#     Given there are 3 doors
#     And a car is behind one door, goats behind the others
#     When the player chooses a door
#     And the host reveals a goat behind a different door
#     And the player switches to the remaining door
#     Then the player wins the car

# Scenario: Player does not switch doors
#     Given there are 3 doors
#     And a car is behind one door, goats behind the others
#     When the player chooses a door
#     And the host reveals a goat behind a different door
#     And the player stays with the original door
#     Then the player wins a goat
