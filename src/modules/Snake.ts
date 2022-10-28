export default class Snake {
    // 蛇的容器
    snakeContainer: HTMLElement
    // 蛇的身躯
    snakeBody: HTMLCollection
    // 蛇的头头部
    snakeHead: HTMLElement

    constructor() {
        this.snakeContainer = document.getElementById('snake')!
        this.snakeBody = this.snakeContainer.getElementsByTagName('div')
        this.snakeHead = document.querySelector('#snake>div') as HTMLElement
    }
    // 获取蛇头的X轴坐标
    get snakeHeadX() {
        return this.snakeHead.offsetLeft
    }
    // 获取蛇头的Y轴坐标
    get snakeHeadY() {
        return this.snakeHead.offsetTop
    }

    // 获取蛇头的X轴坐标
    set snakeHeadX(value) {
        if (this.snakeHeadX === value) return

        // X的值的合法范围0-290之间
        if (value < 0 || value > 290)
            // 进入判断说明蛇撞墙了
            throw new Error('蛇撞墙了！')

        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.snakeHeadX) {
                // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.snakeHeadX - 10;
            } else {
                // 向左走
                value = this.snakeHeadX + 10;
            }
        }

        this.move()
        this.snakeHead.style.left = value + 'px'
        this.checkHeadBody()
    }
    // 获取蛇头的Y轴坐标
    set snakeHeadY(value) {
        if (this.snakeHeadY === value) return

        // Y的值的合法范围0-290之间
        if (value < 0 || value > 290)
            // 进入判断说明蛇撞墙了，抛出一个异常
            throw new Error('蛇撞墙了！')

        // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop === value) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.snakeHeadY) {
                // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.snakeHeadY - 10;
            } else {
                // 向左走
                value = this.snakeHeadY + 10;
            }
        }

        this.move()
        this.snakeHead.style.top = value + 'px'
        this.checkHeadBody()
    }

    // 增加蛇身长
    addSankeBody() {
        this.snakeContainer.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 蛇移动
    move() {
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
            const X = (this.snakeBody[i - 1] as HTMLElement).offsetLeft
            const Y = (this.snakeBody[i - 1] as HTMLElement).offsetTop;

            (this.snakeBody[i] as HTMLElement).style.left = X + 'px';
            (this.snakeBody[i] as HTMLElement).style.top = Y + 'px'
        }
    }

    // 检查蛇头是否撞到身体的方法
    checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.snakeBody.length; i++) {
            let bd = this.snakeBody[i] as HTMLElement;
            if (this.snakeHeadX === bd.offsetLeft && this.snakeHeadY === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！')
            }
        }
    }
}