import { useState, useRef } from 'react'
import './DrinkMilkTea.less'

/**
 * 喝奶茶转盘游戏页面组件
 */
export default function DrinkMilkTea() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<'pink' | 'blue' | null>(null)
  const wheelRef = useRef<HTMLDivElement>(null)

  /**
   * 计算转盘停止后指针指向的颜色
   * 指针在顶部（0度），转盘旋转了rotation度
   * 指针指向的角度 = (-rotation) mod 360
   * 粉色：0-270度，蓝色：270-360度
   */
  const calculateResult = (finalRotation: number): 'pink' | 'blue' => {
    // 计算指针指向的角度（相对于转盘）
    const pointerAngle = ((-finalRotation % 360) + 360) % 360
    // 粉色在0-270度，蓝色在270-360度
    return pointerAngle < 270 ? 'pink' : 'blue'
  }

  /**
   * 开始转盘旋转
   */
  const handleSpin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setShowResult(false)
    setResult(null)

    // 生成随机角度（至少转3圈，最多转8圈，加上随机角度）
    const minSpins = 3
    const maxSpins = 8
    const spins = minSpins + Math.random() * (maxSpins - minSpins)
    const randomAngle = Math.random() * 360 // 0-360度的随机角度
    const totalRotation = spins * 360 + randomAngle

    // 计算最终旋转角度
    setRotation(prevRotation => {
      const finalRotation = prevRotation + totalRotation
      
      // 旋转结束后计算结果显示弹框
      setTimeout(() => {
        setIsSpinning(false)
        const finalResult = calculateResult(finalRotation)
        setResult(finalResult)
        setShowResult(true)
      }, 3000) // 3秒旋转时间
      
      return finalRotation
    })
  }

  /**
   * 关闭弹框
   */
  const handleCloseModal = () => {
    setShowResult(false)
  }

  return (
    <div className="drink-milk-tea-page">
      <main className="page-content">
        <div className="wheel-container">
          {/* 转盘 */}
          <div className="wheel-wrapper">
            <div
              ref={wheelRef}
              className={`wheel ${isSpinning ? 'spinning' : ''}`}
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {/* 蓝色半圆 */}
              <div className="wheel-half wheel-blue"></div>
              {/* 粉色半圆 */}
              <div className="wheel-half wheel-pink"></div>
            </div>
            
            {/* 中心指针 */}
            <div className="pointer"></div>
          </div>

          {/* 转盘按钮 */}
          <button
            className={`spin-btn ${isSpinning ? 'disabled' : ''}`}
            onClick={handleSpin}
            disabled={isSpinning}
          >
            {isSpinning ? '转盘中...' : '开始转盘'}
          </button>
        </div>
      </main>

      {/* 结果弹框 */}
      {showResult && (
        <div className="result-modal-overlay" onClick={handleCloseModal}>
          <div className="result-modal" onClick={(e) => e.stopPropagation()}>
            <div className={`result-content ${result === 'pink' ? 'result-pink' : 'result-blue'}`}>
              <div className="result-emoji">
                {result === 'pink' ? '😊' : '😢'}
              </div>
              <div className="result-text">
                {result === 'pink' ? '喝奶茶啦' : '不喝啦'}
              </div>
              <button className="result-close-btn" onClick={handleCloseModal}>
                知道了
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

