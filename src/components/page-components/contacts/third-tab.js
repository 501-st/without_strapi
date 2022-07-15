import React from 'react';
import Email from "../../../assets/svg/email.svg";
import Link from "gatsby-link";
import VK from "../../../assets/svg/vk.svg";
import {RowContainer, Text} from "../../../styles/constants";

const ThirdTab = () => {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Text style={{fontWeight: 500, marginBottom: "20px"}}>
                Начальник отдела продаж
            </Text>
            <Text style={{marginBottom: "10px"}}>
                Глушкова Светлана Николаевна
            </Text>
            <RowContainer style={{columnGap: "20px", marginBottom: "20px"}}>
                <img src={Email} alt={"location"}/>
                <Text>
                    sng@kolmaks.ru
                </Text>
            </RowContainer>
            <Text style={{marginBottom: "10px"}}>
                Ольнов Эдуард Петрович
            </Text>
            <RowContainer style={{columnGap: "20px", marginBottom: "30px"}}>
                <img src={Email} alt={"location"}/>
                <Text>
                    oep@kolmaks.ru
                </Text>
            </RowContainer>
            <Text style={{fontWeight: 500, marginBottom: "20px"}}>
                Клиентский отдел
            </Text>
            <Text style={{marginBottom: "10px"}}>
                Хусаинова Наталья Валерьевна
            </Text>
            <RowContainer style={{columnGap: "20px", marginBottom: "50px"}}>
                <img src={Email} alt={"location"}/>
                <Text>
                    hnv@kolmaks.ru
                </Text>
            </RowContainer>
            <Text style={{fontSize: "24px", marginBottom: "20px"}}>
                Мы в соц.сетях:
            </Text>
            <Link style={{display: "inline-block", width: "fit-content"}} to={"https://vk.com"}>
                <img src={VK} alt={"vk"}/>
            </Link>
        </div>
    );
};

export default ThirdTab;