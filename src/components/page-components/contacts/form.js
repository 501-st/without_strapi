import React from 'react';
import Button from "../../../ui/buttons/button";
import styled from "styled-components";
import {Input, RowContainer, Textarea} from "../../../styles/constants";

const Form = ({type = "", setShow = () => {}}) => {
    return (
        <div>
            <RowContainer style={{marginBottom: "20px", width: "100%"}}>
                <Input style={{marginRight: "20px"}} placeholder={"Ваше имя"}/>
                <Input placeholder={"Ваш город"}/>
            </RowContainer>
            <RowContainer style={{marginBottom: "20px", width: "100%"}}>
                <Input style={{marginRight: "20px"}} type={"number"} placeholder={"Ваш телефон"}/>
                <Input name={"email"} type={"email"} placeholder={"Ваш email"}/>
            </RowContainer>
            <Textarea rows={4} placeholder={"Ваш вопрос"}/>
            {type !== "modal"
                ? <>
                    <Warning>
                        Нажимая на кнопку «Отправить», вы подтверждаете согласие на <span style={{fontWeight: 500}}>обработку<br/>персональных данных</span>
                    </Warning>
                    <Button fontWeight={500} borderRadius={"15px"} width={"145px"} height={"44px"} fontSize={"18px"}
                            backColor={"#ECAF1F"}>
                        ОТПРАВИТЬ
                    </Button>
                </>
            : <>
                    <RowContainer style={{justifyContent: "space-between"}}>
                        <Warning style={{marginBottom: 0, maxWidth: "320px"}}>
                            Нажимая на кнопку «Отправить», вы подтверждаете согласие на <span style={{fontWeight: 500}}>обработку персональных данных</span>
                        </Warning>
                        <Button onClick={() => setShow(false)} fontWeight={500} borderRadius={"15px"} width={"145px"} height={"44px"} fontSize={"18px"}
                                backColor={"#ECAF1F"}>
                            ОТПРАВИТЬ
                        </Button>
                    </RowContainer>
                </>}
        </div>
    );
};

const Warning = styled.div`
  font-family: Jost, sans-serif;
  font-size: 13px;
  margin-bottom: 30px;
  color: #616567;
`;

export default Form;