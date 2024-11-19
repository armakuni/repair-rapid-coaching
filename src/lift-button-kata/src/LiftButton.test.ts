import LiftButton from "./LiftButton";
import {describe, expect, test, beforeEach} from "vitest";

describe('LiftButton', () => {
    let button: LiftButton;

    beforeEach(() => {
        button = new LiftButton();
    });

    test('1. When you press the button, the light comes on.', () => {
        // Initially, light should be off
        expect(button.light).toBe(false);

        // Press the button, light should come on
        button.pressButton();
        expect(button.light).toBe(true);
    });

    test('2. When the lift arrives and the doors open, the light goes out.', () => {
        // Turn on the light by pressing the button
        button.pressButton();
        expect(button.light).toBe(true);  // Light should now be on
    
        // Simulate doors opening, which should turn the light off
        button.openDoors();
        expect(button.light).toBe(false);  // Light should be off when doors open
    });

    test('3. Pressing the button again while the light is on but the lift doors are closed has no effect.', () => {
        // Turn on the light by pressing the button
        button.pressButton();
        expect(button.light).toBe(true);

        // Door is still closed, pressing the button again should have no effect
        button.pressButton();
        expect(button.light).toBe(true);
    });

    test('4. While the doors are open, pressing the button does not switch the light on.', () => {
        // Simulate doors being open
        button.doorStatus = 'OPEN';

        // Pressing the button should not turn the light on when doors are open
        button.pressButton();
        expect(button.light).toBe(false);
    });
});