import classNames from "classnames"
import { useRef, useState, useEffect } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)
  const [isChecked, setChecked] = useState(checked)

  useEffect(() => {
    const label = document.querySelector(`label[for="${inputId}"]`)
    if (label) {
      label.classList.toggle("RampInputCheckbox--label-checked", isChecked)
    }
  }, [isChecked, inputId])
  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        htmlFor={inputId}
        className="RampInputCheckbox--label"
        onClick={() => {
          if (!disabled) {
            const newChecked = !isChecked
            setChecked(newChecked)
            onChange(newChecked)
          }
        }}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={isChecked}
        disabled={disabled}
        onChange={() => {
          const newChecked = !isChecked
          setChecked(newChecked)
          onChange(newChecked)
        }}
      />
    </div>
  )
}
