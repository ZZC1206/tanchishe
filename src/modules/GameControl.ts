import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'

export default class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction: string = 'ArrowRight';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;


    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel(10, 2)
        this.init()
    }

    // 初始化游戏
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run();

    }

    keydownHandler(event: KeyboardEvent): void {
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        console.log(event.key);
        this.direction = event.key;
    }

    run() {
        let X = this.snake.snakeHeadX
        let Y = this.snake.snakeHeadY
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        // 检查蛇是否吃到了食物
        this.checkEat(X, Y)

        try {
            this.snake.snakeHeadX = X
            this.snake.snakeHeadY = Y
        }
        catch (e: any) {
            alert(e.message + '游戏结束')
            this.isLive = false;
        }
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.foodX && Y === this.food.foodY) {
            // 食物的位置要进行重置
            this.food.setFoodLocation();
            // 分数增加
            this.scorePanel.scoreAdd();
            // 蛇要增加一节
            this.snake.addSankeBody();
        }
    }
}