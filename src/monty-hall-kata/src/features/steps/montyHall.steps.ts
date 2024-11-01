import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'expect';

let doors: string[] = [];
let playerChoice: number;
let hostReveals: number;
let remainingDoor: number;
let originalDoor: number;

Given('there are 3 doors', function () {
  doors = ['goat', 'car', 'goat'];
});

Given('a car is behind one door, goats behind the others', function () {
  // No further setup required for this step.
});

When('the player chooses a door', function () {
  playerChoice = 0;
  originalDoor = playerChoice;
});

When('the host reveals a goat behind a different door', function () {
  hostReveals = 2;
});

When('the player switches to the remaining door', function () {
  remainingDoor = [0, 1, 2].find(d => d !== playerChoice && d !== hostReveals) as number;
  playerChoice = remainingDoor;
});

When('the player stays with the original door', function () {
  playerChoice = originalDoor;
});

Then('the player wins the car', function () {
  expect(doors[playerChoice]).toBe('car');
});

Then('the player wins a goat', function () {
  expect(doors[playerChoice]).toBe('goat');
});
