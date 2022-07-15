import React from "react"
import styled from "styled-components"

const Button = ({
                  children,
                  backColor = "#ECAF1F",
                  onClick = () => {
                  },
                  width = "100%",
                  height = "100%",
                  textColor = "white",
                  borderRadius = "30px",
                  style = {},
                  fontWeight = "",
                  fontSize = "",
                  lineHeight = "",
                  isDisabled = false,
                }) => {
  return (
    <BaseButtonStyle
      disabled={isDisabled}
      height={height}
      width={width}
      backColor={backColor}
      textColor={textColor}
      style={style}
      onClick={onClick}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
    >
      {
        children
      }
    </BaseButtonStyle>
  )
}

const BaseButtonStyle = styled.button`
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  border-radius: ${props => props.borderRadius};
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.disabled ? "white" : props.backColor};
  color: ${props => props.disabled ? "#828282" : props.textColor};
  border: ${props => props.disabled ? "1px solid #828282" : ""}
`

export default Button
