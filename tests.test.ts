import { Game } from "./Game";

describe("Bowling", () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  function addThrows(numberOfThrows: number, pinsDown: number): void {
    for (let throwIndex = 0; throwIndex < numberOfThrows; throwIndex++) {
      game.addThrow(pinsDown);
    }
  }
  it("gutter game should score 0", () => {
    addThrows(20, 0);
    expect(game.score).toBe(0);
  });

  it("should score 6", () => {
    addThrows(2, 3);
    addThrows(18, 0);
    expect(game.score).toBe(6);
  });

  it("a spare plus 3 should equal 16", () => {
    addThrows(2, 5);
    addThrows(1, 3);
    addThrows(17, 0);
    expect(game.score).toBe(16);
  });

  it("a strike plus 3 and 3 should equal 22", () => {
    addThrows(1, 10);
    addThrows(2, 3);
    addThrows(16, 0);
    expect(game.score).toBe(22);
  });

  it("a perfect game should score 300", () => {
    addThrows(12, 10);
    expect(game.score).toBe(300);
  });
});
