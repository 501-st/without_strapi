import React, {useState} from 'react';
import Layout from "../components/layout";
import styled from "styled-components";
import Button from "../ui/buttons/button";
import FirstTab from "../components/page-components/contacts/first-tab";
import SecondTab from "../components/page-components/contacts/second-tab";
import ThirdTab from "../components/page-components/contacts/third-tab";
import AskModal from "../components/ask-modal";
import Form from "../components/page-components/contacts/form";
import CalculateModal from "../components/calculate-modal";
import {RowContainer, Text, Title} from "../styles/constants";

const Contacts = () => {

    const tabs = [{
        text: "Офис компании"
    }, {
        text: "Склад"
    }, {
        text: "Отдел продаж"
    },]

    const [activeTab, setActiveTab] = useState(0)
    const [askQuestModal, setAskQuestModal] = useState(false)
    const [calculateModal, setCalculateModal] = useState(false)

    return (
        <Layout>
            <Container>
                <Title style={{marginBottom: "40px"}}>
                    Контакты
                </Title>
                <RowContainer style={{boxShadow: "0 2px 12px -3px rgba(0, 0, 0, 0.5)"}}>
                    {tabs.map((item, index) => (
                        <Tab
                            style={{
                                borderRadius: index === 0 ? "5px 0 0 3px" : index === 1 ? "3px" : "0 5px 3px 0",
                                borderRight: index === 0 && activeTab === 2 ? "1px solid #CACACA" : "",
                                borderLeft: index === 2 && activeTab === 0 ? "1px solid #CACACA" : ""
                            }}
                            onClick={() => setActiveTab(index)} isActive={index === activeTab}>
                            <Text style={{color: index === activeTab ? "white" : "inherit", fontWeight: 500}}>
                                {item.text}
                            </Text>
                        </Tab>
                    ))}
                </RowContainer>
                <RowContainer style={{
                    boxShadow: "0 2px 12px -3px rgba(0, 0, 0, 0.25)",
                    borderRadius: "0 0 5px 5px",
                    padding: "40px",
                    justifyContent: "space-between",
                    marginBottom: "100px"
                }}>
                    {activeTab === 0
                        ? <FirstTab/>
                        : activeTab === 1
                            ? <SecondTab/>
                            : <ThirdTab/>}
                </RowContainer>
                <RowContainer style={{columnGap: "150px"}}>
                    <div style={{
                        background: "linear-gradient(258.32deg, rgba(60, 104, 128, 0.8) 26.05%, rgba(187, 105, 110, 0.8) 80.49%)",
                        width: 515,
                        height: 250,
                        display: "flex",
                        borderRadius: "30% 50% 50% 50%"
                    }}>
                        <div style={{margin: "50px auto"}}>
                            <Title style={{fontWeight: 700, color: "white", fontSize: "28px", marginBottom: "10px"}}>
                                У вас остались вопросы?
                            </Title>
                            <Text style={{fontWeight: "18px", color: "white"}}>
                                Свяжитесь с нами через контактную форму и мы<br/>будем рады помочь вам!
                            </Text>
                        </div>
                    </div>
                    <Form/>
                </RowContainer>
                <Button style={{marginRight: "30px"}} onClick={() => setAskQuestModal(true)} fontWeight={500} borderRadius={"15px"} width={"145px"}
                        height={"44px"} fontSize={"18px"}
                        backColor={"#ECAF1F"}>
                    Задать вопрос
                </Button>
                <Button onClick={() => setCalculateModal(true)} fontWeight={500} borderRadius={"15px"} width={"200px"}
                        height={"44px"} fontSize={"18px"}
                        backColor={"#ECAF1F"}>
                    Расчитать количество
                </Button>
                {askQuestModal && <AskModal setShow={setAskQuestModal} show={askQuestModal}/>}
                {calculateModal && <CalculateModal setShow={setCalculateModal} show={calculateModal}/>}
            </Container>
        </Layout>
    );
};

const Container = styled.div`
  max-width: 1360px;
  margin-right: auto;
  margin-left: auto;
`;

const Tab = styled.div`
  flex: 1;
  cursor: pointer;
  background-color: ${props => props.isActive ? "#286382" : "white"};
  text-align: center;
  padding: 15px 0;
`;

export default Contacts;