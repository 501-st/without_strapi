import React from 'react';
import Location from "../../../assets/svg/location.svg";
import Call from "../../../assets/svg/call.svg";
import Email from "../../../assets/svg/email.svg";
import Clock from "../../../assets/svg/clock.svg";
import Link from "gatsby-link";
import VK from "../../../assets/svg/vk.svg";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {RowContainer, Text} from "../../../styles/constants";

const FirstTab = () => {
    return (
        <>
            <div style={{display: "flex", rowGap: "25px", flexDirection: "column"}}>
                <RowContainer style={{columnGap: "25px"}}>
                    <img src={Location} alt={"location"}/>
                    <Text>
                        г. Томск, ул. Высоцкого, 25 стр.3
                    </Text>
                </RowContainer>
                <RowContainer style={{columnGap: "17px"}}>
                    <img src={Call} alt={"location"}/>
                    <Text>
                        8 (3822) 634-234
                    </Text>
                </RowContainer>
                <RowContainer style={{columnGap: "17px"}}>
                    <img src={Call} alt={"location"}/>
                    <Text>
                        8 (3822) 633-333
                    </Text>
                </RowContainer>
                <RowContainer style={{columnGap: "20px"}}>
                    <img src={Email} alt={"location"}/>
                    <Text>
                        kolmaks_tomsk@rambler.ru
                    </Text>
                </RowContainer>
                <RowContainer style={{columnGap: "20px"}}>
                    <img src={Clock} alt={"location"}/>
                    <Text>
                        пн-пт, с 09:00 до 18:00
                    </Text>
                </RowContainer>
                <Text style={{fontSize: "24px"}}>
                    Мы в соц.сетях:
                </Text>
                <Link style={{display: "inline-block", width: "fit-content"}} to={"https://vk.com"}>
                    <img src={VK} alt={"vk"}/>
                </Link>
            </div>
            <div style={{height: "410px"}}>
                <YMaps defaultState={{center: [56.5176545, 85.0951913], zoom: 17}}>
                    <Map width={765} height={410} state={{center: [56.5176545, 85.0951913], zoom: 17}}>
                        <Placemark geometry={[56.5176545, 85.0951913]}
                                   properties={{iconCaption: "Колмакс",}}
                                   options={{hasBalloon: true, hasHint: true, iconColor: "red"}}/>
                    </Map>
                </YMaps>
            </div>
        </>
    );
};

export default FirstTab;