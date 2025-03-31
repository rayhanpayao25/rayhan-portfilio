"use client"

import { useState } from "react"
import "./App.css"
import { evaluate } from "mathjs"

function App() {
  const [display, setDisplay] = useState("0")
  const [expression, setExpression] = useState("")
  const [isRadians, setIsRadians] = useState(true)
  const [memory, setMemory] = useState(null)

  const handleNumberClick = (num) => {
    if (display === "0" || display === "Error") {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
    setExpression(expression + num)
  }

  const handleOperatorClick = (operator) => {
    try {
      setExpression(expression + operator)
      setDisplay("0")
    } catch (error) {
      setDisplay("Error")
    }
  }

  const handleClear = () => {
    setDisplay("0")
    setExpression("")
  }

  const handleEquals = () => {
    try {
      const result = evaluate(expression)
      setDisplay(result.toString())
      setExpression(result.toString())
    } catch (error) {
      setDisplay("Error")
    }
  }

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".")
      setExpression(expression + ".")
    }
  }

  const handleScientificFunction = (func) => {
    try {
      let result
      const value = Number.parseFloat(display)

      switch (func) {
        case "sin":
          result = isRadians ? Math.sin(value) : Math.sin((value * Math.PI) / 180)
          break
        case "cos":
          result = isRadians ? Math.cos(value) : Math.cos((value * Math.PI) / 180)
          break
        case "tan":
          result = isRadians ? Math.tan(value) : Math.tan((value * Math.PI) / 180)
          break
        case "sinh":
          result = Math.sinh(value)
          break
        case "cosh":
          result = Math.cosh(value)
          break
        case "tanh":
          result = Math.tanh(value)
          break
        case "log":
          result = Math.log10(value)
          break
        case "ln":
          result = Math.log(value)
          break
        case "sqrt":
          result = Math.sqrt(value)
          break
        case "cbrt":
          result = Math.cbrt(value)
          break
        case "square":
          result = value * value
          break
        case "cube":
          result = value * value * value
          break
        case "pow":
          setExpression(expression + "^")
          return
        case "abs":
          result = Math.abs(value)
          break
        case "exp":
          result = Math.exp(value)
          break
        case "pi":
          result = Math.PI
          break
        case "e":
          result = Math.E
          break
        case "rand":
          result = Math.random()
          break
        case "factorial":
          result = factorial(value)
          break
        default:
          result = value
      }

      setDisplay(result.toString())
      setExpression(result.toString())
    } catch (error) {
      setDisplay("Error")
    }
  }

  const factorial = (n) => {
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  const toggleAngleMode = () => {
    setIsRadians(!isRadians)
  }

  const handleMemoryOperation = (operation) => {
    switch (operation) {
      case "MC":
        setMemory(null)
        break
      case "MR":
        if (memory !== null) {
          setDisplay(memory.toString())
          setExpression(memory.toString())
        }
        break
      case "MS":
        setMemory(Number.parseFloat(display))
        break
      case "M+":
        if (memory !== null) {
          const newMemory = memory + Number.parseFloat(display)
          setMemory(newMemory)
        } else {
          setMemory(Number.parseFloat(display))
        }
        break
      default:
        break
    }
  }

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="calculator-header">
          <h1 className="calculator-title">Scientific Calculator</h1>
        </div>
        <div className="display">
          <div className="mode-indicator">{isRadians ? "RAD" : "DEG"}</div>
          <div className="value">{display}</div>
        </div>

        <div className="buttons-grid">
          {/* Row 1 */}
          <button onClick={() => handleMemoryOperation("MC")} className="memory-btn">
            MC
          </button>
          <button onClick={() => handleMemoryOperation("MR")} className="memory-btn">
            MR
          </button>
          <button onClick={() => handleMemoryOperation("MS")} className="memory-btn">
            MS
          </button>
          <button onClick={() => handleMemoryOperation("M+")} className="memory-btn">
            M+
          </button>
          <button onClick={() => handleNumberClick("7")} className="number-btn">
            7
          </button>
          <button onClick={() => handleNumberClick("8")} className="number-btn">
            8
          </button>
          <button onClick={() => handleNumberClick("9")} className="number-btn">
            9
          </button>
          <button onClick={() => handleOperatorClick("/")} className="operator-btn">
            ÷
          </button>

          {/* Row 2 */}
          <button onClick={handleClear} className="clear-btn">
            AC
          </button>
          <button onClick={toggleAngleMode} className="mode-btn">
            {isRadians ? "DEG" : "RAD"}
          </button>
          <button onClick={() => handleScientificFunction("pi")} className="function-btn">
            π
          </button>
          <button onClick={() => handleScientificFunction("e")} className="function-btn">
            e
          </button>
          <button onClick={() => handleNumberClick("4")} className="number-btn">
            4
          </button>
          <button onClick={() => handleNumberClick("5")} className="number-btn">
            5
          </button>
          <button onClick={() => handleNumberClick("6")} className="number-btn">
            6
          </button>
          <button onClick={() => handleOperatorClick("*")} className="operator-btn">
            ×
          </button>

          {/* Row 3 */}
          <button onClick={() => handleScientificFunction("sin")} className="function-btn">
            sin
          </button>
          <button onClick={() => handleScientificFunction("cos")} className="function-btn">
            cos
          </button>
          <button onClick={() => handleScientificFunction("tan")} className="function-btn">
            tan
          </button>
          <button onClick={() => handleScientificFunction("factorial")} className="function-btn">
            x!
          </button>
          <button onClick={() => handleNumberClick("1")} className="number-btn">
            1
          </button>
          <button onClick={() => handleNumberClick("2")} className="number-btn">
            2
          </button>
          <button onClick={() => handleNumberClick("3")} className="number-btn">
            3
          </button>
          <button onClick={() => handleOperatorClick("-")} className="operator-btn">
            −
          </button>

          {/* Row 4 */}
          <button onClick={() => handleScientificFunction("sinh")} className="function-btn">
            sinh
          </button>
          <button onClick={() => handleScientificFunction("cosh")} className="function-btn">
            cosh
          </button>
          <button onClick={() => handleScientificFunction("tanh")} className="function-btn">
            tanh
          </button>
          <button onClick={() => handleScientificFunction("abs")} className="function-btn">
            |x|
          </button>
          <button onClick={() => handleNumberClick("0")} className="number-btn zero-btn">
            0
          </button>
          <button onClick={handleDecimal} className="number-btn">
            .
          </button>
          <button onClick={() => handleOperatorClick("+")} className="operator-btn">
            +
          </button>

          {/* Row 5 */}
          <button onClick={() => handleScientificFunction("ln")} className="function-btn">
            ln
          </button>
          <button onClick={() => handleScientificFunction("log")} className="function-btn">
            log
          </button>
          <button onClick={() => handleScientificFunction("sqrt")} className="function-btn">
            √x
          </button>
          <button onClick={() => handleScientificFunction("cbrt")} className="function-btn">
            ∛x
          </button>
          <button onClick={handleEquals} className="equals-btn">
            =
          </button>
          <button onClick={() => handleOperatorClick("%")} className="operator-btn">
            %
          </button>
          <button onClick={() => handleScientificFunction("exp")} className="function-btn">
            eˣ
          </button>

          {/* Row 6 */}
          <button onClick={() => handleScientificFunction("square")} className="function-btn">
            x²
          </button>
          <button onClick={() => handleScientificFunction("cube")} className="function-btn">
            x³
          </button>
          <button onClick={() => handleScientificFunction("pow")} className="function-btn">
            xʸ
          </button>
          <button onClick={() => handleScientificFunction("rand")} className="function-btn">
            rand
          </button>
          <button onClick={() => handleOperatorClick("(")} className="function-btn">
            (
          </button>
          <button onClick={() => handleOperatorClick(")")} className="function-btn">
            )
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

