import React from "react"
import Layout from "../components/layout"
import Button from "../ui/buttons/button"
import styled from "styled-components"
import CircleButtonWithImage from "../ui/buttons/circle-button-with-image"
import ArrowIcon from "../assets/svg/button_arow_icon.svg"
import CircleButtonImageText from "../ui/buttons/circle-button-image-text"
import ProductionIcon from "../assets/svg/button_production_icon.svg"

const Ui = () => {
  return (
    <Layout>
      Here UI kit elements
      <UIElements>
        <Button
          width={"300px"}
          height={"60px"}
          fontWeight={400}
          fontSize={"30px"}
          lineHeight={"43.35px"}
          onClick={() => {
            console.log("I press usual button")
          }}>
          Обычная кнопка
        </Button>
        <CircleButtonWithImage
          onClick={() => {
            console.log("I press circle button")
          }}
          imageLink={ArrowIcon}
          height={"62px"}
        />
        <CircleButtonImageText width={'80px'} imageLink={ProductionIcon}>
          Lorem ipsum dolor sit amet
        </CircleButtonImageText>
      </UIElements>
    </Layout>
  )
}

const UIElements = styled.div`
  margin-top: 20px;
  gap: 20px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
`

export default Ui
