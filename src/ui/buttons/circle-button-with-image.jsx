import React from "react"
import styled from "styled-components"

const CircleButtonWithImage = ({
                                 imageLink = "",
                                 alt = "",
                                 backColor = "#ECAF1F",
                                 onClick = () => {
                                 },
                                 diameter = "62px",
                                 borderRadius = "50%",
                                 style = {},
                                 isDisabled = false,
                               }) => {
  return (
    <CircleButton
      height={diameter}
      width={diameter}
      backColor={backColor}
      borderRadius={borderRadius}
      onClick={onClick}
      style={style}
      isDisabled={isDisabled}
    >
      <img src={imageLink} alt={alt} />
    </CircleButton>
  )
}

const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.backColor};
  border-radius: ${props => props.borderRadius};
  box-shadow: 0px 2px 12px -3px rgba(0, 0, 0, 0.5);
`

export default CircleButtonWithImage