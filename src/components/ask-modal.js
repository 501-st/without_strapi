import React, {useEffect, useState} from 'react';
import Modal from "../ui/modal/modal";
import {createPortal} from "react-dom";
import Close from "../assets/svg/close.svg"
import styled from "styled-components";
import Form from "./page-components/contacts/form";
import {ContainerModal, TitleModal} from "../styles/constants";

const AskModal = ({show, setShow}) => {

    const [isBrowser, setBrowser] = useState(false)

    useEffect(() => {
        setBrowser(true);
    }, []);

    useEffect(() => {
        if(show) document.body.classList.add('overflow-none')
        else document.body.classList.remove('overflow-none')
    }, [show]);

    const CancelPropagation = (event) => {
        event.stopPropagation()
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
                    задать вопрос
                </TitleModal>
                <div style={{boxSizing: "border-box", padding: "0 20px"}}>
                    <Form type={"modal"} setShow={setShow}/>
                </div>
            </ContainerModal>
        </Modal>
    ) : null

    return isBrowser ? createPortal(content,  document.getElementById('modal-root')) : null
};

export default AskModal;