import React, {useEffect, useState} from 'react';
import Modal from "../ui/modal/modal";
import {createPortal} from "react-dom";
import Close from "../assets/svg/close.svg"
import styled from "styled-components";
import {ContainerModal, Input, RowContainer, Text, TitleModal} from "../styles/constants";
import Button from "../ui/buttons/button";

const CalculateModal = ({show, setShow}) => {

    const [isBrowser, setBrowser] = useState(false)
    const [showCalc, setShowCalc] = useState(false)

    useEffect(() => {
        setBrowser(true);
    }, []);

    useEffect(() => {
        if (show) document.body.classList.add('overflow-none')
        else document.body.classList.remove('overflow-none')
    }, [show]);

    const CancelPropagation = (event) => {
        event.stopPropagation()
    }

    const [data, setData] = useState({
        type: "",
        size: "",
        length: "",
        width: ""
    })

    const handleClear = () => {
        setData({
            type: "",
            size: "",
            length: "",
            width: ""
        })
        setShowCalc(false)
    }

    const content = show ? (
        <Modal setShow={setShow}>
            <ContainerModal onClick={CancelPropagation}>
                <div style={{display: "flex", justifyContent: "end"}}>
                    <div style={{cursor: "pointer"}} onClick={() => setShow(false)}>
                        <img src={Close} alt="close"/>
                    </div>
                </div>
                <TitleModal>
                    расчитать количество
                </TitleModal>
                <div style={{boxSizing: "border-box", padding: "0 20px"}}>
                    <Text style={{marginBottom: "20px"}}>
                        Гипсостружечная плита (ГСП Пешелань)
                    </Text>
                    <RowContainer style={{justifyContent: "space-between", marginBottom: "20px"}}>
                        <Text style={{fontSize: "18px"}}>
                            Длина поверхности, м:
                        </Text>
                        <Input style={{padding: "10px 15px"}} type={"number"} value={data.length}
                               onChange={(e) => setData({...data, length: e.target.value})}
                               placeholder={"введите длину"}/>
                    </RowContainer>
                    <RowContainer style={{justifyContent: "space-between"}}>
                        <Text style={{fontSize: "18px"}}>
                            Ширина поверхности, м:
                        </Text>
                        <Input style={{padding: "10px 15px"}} type={"number"} value={data.width}
                               onChange={(e) => setData({...data, width: e.target.value})}
                               placeholder={"введите ширину"}/>
                    </RowContainer>
                    <RowContainer style={{justifyContent: "center", marginTop: "30px"}}>
                        <Button onClick={() => setShowCalc(true)} style={{marginRight: "30px"}} fontWeight={500}
                                width={"150px"}
                                height={"45px"} fontSize={"18px"}
                                backColor={"#ECAF1F"} isDisabled={data.length === "" && data.width === ""}>
                            РАССЧИТАТЬ
                        </Button>
                        <Button onClick={handleClear} isDisabled={data.length === "" && data.width === ""}
                                fontWeight={500} width={"135px"}
                                height={"45px"} fontSize={"18px"}
                                backColor={"#ECAF1F"}>
                            ОЧИСТИТЬ
                        </Button>
                    </RowContainer>
                    {showCalc &&
                    <Text style={{fontSize: "20px", fontWeight: 500, marginTop: "30px"}}>
                        Необходиомое количество материала: &nbsp;&nbsp;&nbsp;12шт
                    </Text>}
                </div>
            </ContainerModal>
        </Modal>
    ) : null

    return isBrowser ? createPortal(content, document.getElementById('modal-root')) : null
};

export default CalculateModal;