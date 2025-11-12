import { useState, useRef, useEffect } from 'react'
import './WhatToEat.less'

/**
 * 食物选项预设
 */
const FOOD_OPTIONS = [
  '火锅', '烧烤', '日料', '韩式烤肉',
  '意大利面', '披萨', '汉堡', '炸鸡', '麻辣烫', '米线',
  '饺子', '包子', '煎饼果子', '烤冷面', '三文鱼', "火鸡面",
  '牛肉拉面', '石锅拌饭', '干噎酸奶',
  '小龙虾', '烤鱼', '酸菜鱼',
  '自助餐', '素食', '三明治', '双皮奶',
  '煲仔饭',
  '烤鸭', '黄焖鸡', '糖水', '陇上秦轩', '和府捞面', '麻辣拌',
  '麻辣香锅', '鸡爪煲', '米村拌饭', '大米先生', '酸辣粉', '过桥米线',

]

/**
 * 吃什么抽奖页面组件
 */
export default function WhatToEat() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [currentFood, setCurrentFood] = useState<string>('')
  const [finalFood, setFinalFood] = useState<string | null>(null)
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /**
   * 开始抽奖
   */
  const handleSpin = () => {
    if (isSpinning) return

    // 清理之前的定时器
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
      intervalRef.current = null
    }

    setIsSpinning(true)
    setFinalFood(null)

    // 随机选择最终结果（从列表中随机选）
    const randomIndex = Math.floor(Math.random() * FOOD_OPTIONS.length)
    const finalResult = FOOD_OPTIONS[randomIndex]

    // 开始快速切换文字
    const totalTime = 2000 // 3秒
    const initialSpeed = 10 // 初始速度50ms
    const finalSpeed = 100 // 最终速度200ms
    const startTime = Date.now()

    const changeText = () => {
      const elapsed = Date.now() - startTime

      if (elapsed >= totalTime) {
        // 时间到了，显示最终结果
        setCurrentFood(finalResult)
        setFinalFood(finalResult)
        setIsSpinning(false)
        if (intervalRef.current) {
          clearTimeout(intervalRef.current)
          intervalRef.current = null
        }
        return
      }

      // 计算当前速度（从快到慢）
      const progress = elapsed / totalTime
      const easeOut = 1 - Math.pow(1 - progress, 3) // ease-out曲线
      const currentSpeed = initialSpeed + (finalSpeed - initialSpeed) * easeOut

      // 随机显示一个选项
      const randomFoodIndex = Math.floor(Math.random() * FOOD_OPTIONS.length)
      setCurrentFood(FOOD_OPTIONS[randomFoodIndex])

      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
      intervalRef.current = setTimeout(changeText, Math.max(currentSpeed, 30))
    }

    // 开始第一次切换
    changeText()
  }

  /**
   * 清理定时器
   */
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  // 显示的文字（抽奖中显示当前切换的文字，结束后显示最终结果）
  const displayText = finalFood || currentFood || '点击开始抽奖'

  return (
    <div className="what-to-eat-page">
      <main className="page-content">
        <div className="lottery-container">
          {/* 文字显示窗口 */}
          <div className="slot-machine-wrapper">
            <div className={`slot-machine-window ${finalFood !== null ? 'has-result' : ''}`}>
              <div className="slot-item-text">
                {displayText}
              </div>
            </div>
          </div>

          {/* 抽奖按钮 */}
          <button
            className={`spin-btn ${isSpinning ? 'disabled' : ''}`}
            onClick={handleSpin}
            disabled={isSpinning}
          >
            {isSpinning ? '抽奖中...' : finalFood !== null ? '再抽一次' : '开始抽奖'}
          </button>
        </div>
      </main>
    </div>
  )
}


