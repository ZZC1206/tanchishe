export default class Food {
    private foodEle: HTMLElement

    constructor() {
        this.foodEle = document.getElementById('food')!
    }
    // 获取食物X轴坐标
    get foodX() {
        return this.foodEle.offsetLeft
    }

    // 获取食物Y轴坐标
    get foodY() {
        return this.foodEle.offsetTop
    }

    // 随机更改食物的位置
    setFoodLocation() {
        const left = Math.round(Math.random() * 29) * 10
        const top = Math.round(Math.random() * 29) * 10

        this.foodEle.style.left = left + 'px'
        this.foodEle.style.top = top + 'px'
    }
}