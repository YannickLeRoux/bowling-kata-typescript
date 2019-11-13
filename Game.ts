export class Game {
  throws: number[] = [];

  public addThrow(pins: number) {
    this.throws.push(pins);
  }

  get score() {
    let score = 0;
    let throwIndex = 0;
    let frameIndex = 0;

    while (frameIndex < 10) {
      if (this.isSpare(throwIndex)) {
        score += 10 + this.throws[throwIndex + 2];
        throwIndex += 2;
        frameIndex += 1;
      } else if (this.isStrike(throwIndex)) {
        score += 10 + this.throws[throwIndex + 1] + this.throws[throwIndex + 2];
        throwIndex += 1;
        frameIndex += 1;
      } else {
        score += this.throws[throwIndex] + this.throws[throwIndex + 1];
        throwIndex += 2;
        frameIndex += 1;
      }
    }
    return score;
  }

  isSpare(throwIndex: number): boolean {
    return this.throws[throwIndex] + this.throws[throwIndex + 1] === 10;
  }

  isStrike(throwIndex: number): boolean {
    return this.throws[throwIndex] == 10;
  }
}
