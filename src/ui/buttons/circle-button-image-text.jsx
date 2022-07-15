import React from "react"
import CircleButtonWithImage from "./circle-button-with-image"
import styled from "styled-components"

const CircleButtonImageText = ({
                                 children,
                                 width = "100%",
                                 imageLink = "",
                                 alt = "",
                               }) => {
  return (
    <CircleButtonDiv width={width}>
      <CircleButtonWithImage imageLink={imageLink} alt={alt} />
      {
        children
      }
    </CircleButtonDiv>
  )
}

const CircleButtonDiv = styled.div`
  width: ${props => props.width};
`

export default CircleButtonImageText