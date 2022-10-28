export default class ScorePanel {

    private score = 0 // 分数
    public level = 1 // 等级

    private maxLevel: number // 最大等级
    private upScore: number // 每多少分升一级

    private scoreEle: HTMLElement // 分数元素
    private levelEle: HTMLElement // 等级元素

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.maxLevel = maxLevel
        this.upScore = upScore
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
    }

    // 分数增加
    scoreAdd() {
        this.scoreEle.innerText = ++this.score + ''

        if (this.score % this.upScore === 0)
            this.levelUp()
    }

    // 等级增加
    levelUp() {
        if (this.level < this.maxLevel)
            this.levelEle.innerText = ++this.level + ''
    }

}