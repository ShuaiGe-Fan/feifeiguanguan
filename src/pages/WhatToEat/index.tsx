import { useState } from 'react'
import catImage from '../../assets/猫咪.png'
import './WhatToEat.less'

/**
 * 食物选项预设
 */
const FOOD_OPTIONS = [
  '火锅', '烧烤', '日料', '韩式烤肉', 
  '意大利面', '披萨', '汉堡', '炸鸡', '麻辣烫', '米线', 
  '饺子', '包子', '煎饼果子', '烤冷面', '臭豆腐', '三文鱼',
  '牛肉拉面', '石锅拌饭', '冷面',
  '小龙虾', '烤鱼', '酸菜鱼',
  '自助餐', '素食', '三明治', '双皮奶', '银耳莲子汤',
  '煲仔饭', '盖浇饭', '炒饭', '炒面', '炒河粉', '肠粉',
  '北京烤鸭', '黄焖鸡',
]

/**
 * 吃什么抽奖页面组件
 */
export default function WhatToEat() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [angle, setAngle] = useState(0)

  /**
   * 开始抽奖
   */
  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setResult(null)

    // 随机选择一个食物
    const randomIndex = Math.floor(Math.random() * FOOD_OPTIONS.length)
    const selectedFood = FOOD_OPTIONS[randomIndex]

    // 计算转盘旋转角度
    // 指针在顶部（0度），要让选中的选项正对指针
    const sliceAngle = 360 / FOOD_OPTIONS.length // 每个扇形的角度
    const sliceCenterAngle = randomIndex * sliceAngle + sliceAngle / 2 // 选中扇形的中心角度

    // 要让这个中心转到顶部（0度），需要旋转的角度
    // 加上多转几圈增加视觉效果
    const spins = 5 // 转5圈
    const currentAngle = angle % 360
    const targetAngle = 360 - sliceCenterAngle // 让选中项转到顶部
    const finalAngle = currentAngle + 360 * spins + targetAngle

    setAngle(finalAngle)

    // 动画结束后显示结果（确保结果总是显示）
    setTimeout(() => {
      setResult(selectedFood)
      setIsSpinning(false)
    }, 3000)
  }

  return (
    <div className="what-to-eat-page">
      <main className="page-content">
        <div className="lottery-container">
          {/* 转盘 */}
          <div className="wheel-wrapper">
            <div
              className={`wheel ${isSpinning ? 'spinning' : ''}`}
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div className={`wheel-inner ${result ? 'has-result' : ''}`}>
                {!result ? (
                  <img src={catImage} alt="猫咪" className="wheel-icon" />
                ) : (
                  <div
                    className="wheel-center-rotator"
                    style={{ transform: `rotate(${-angle}deg)` }}
                  >
                    <div className="wheel-center has-result">
                      <div className="result-icon">🎉</div>
                      <div className="result-food">{result}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* 指针 */}
            <div className="wheel-pointer"></div>
          </div>

          {/* 抽奖按钮 */}
          {!result ? (
            <button
              className={`spin-btn ${isSpinning ? 'disabled' : ''}`}
              onClick={handleSpin}
              disabled={isSpinning}
            >
              {isSpinning ? '抽奖中...' : '开始抽奖'}
            </button>
          ) : (
            <button
              className="again-btn"
              onClick={() => {
                setResult(null)
                setAngle(0)
              }}
            >
              再抽一次
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

