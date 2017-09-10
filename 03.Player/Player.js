class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scores = [];
    }

    addScore(score) {
        if (!isNaN(score) && score != null && score != undefined) {
            this.scores.push(Number(score));
        }

        return this;
    }

    get scoreCount() {
        return this.scores.length;
    }

    get highestScore() {
        if (this.scores.length === 0) {
            return undefined;
        }

        return Math.max(...this.scores);
    }

    get topFiveScore() {
        return this.scores.sort((a, b) => b - a).slice(0, 5);
    }

    toString() {
        return `${this.nickName}: [${this.scores.sort((a, b) => b - a).join(',')}]`;
    }
}