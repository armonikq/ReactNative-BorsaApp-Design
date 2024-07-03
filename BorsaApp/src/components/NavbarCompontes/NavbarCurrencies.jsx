import "./AllNavbarCss/NavbarCurrencies.css"
import Gold from "../../assets/gold-bars.png"
import Dollar from "../../assets/dollar-symbol.png"
import Euro from "../../assets/euro.png"
import Pound from "../../assets/pound-sterling.png"
import Bitcoin from "../../assets/bitcoin.png"
import Silver from "../../assets/rock.png"



export default function NavbarCurrencies() {
    return (
        <>
            <div className={"AllContainer"}>
                <div className={"background"}>
                    <div className={"Container"}>
                        <div className={"gold"}>
                            <div className={"yazilar1"}>
                                <div className={"yazi1"}>
                                    <img src={Gold} />
                                    <h4>GRAM ALTIN</h4>
                                    <h2>2.400 TL</h2>
                                </div>
                            </div>
                            <div className={"yazilar1"}>
                                <div className={"yazi2"}>
                                    <img src={Dollar} />
                                    <h4>DOLAR</h4>
                                    <h2>39.09$</h2>
                                </div>
                            </div>
                            <div className={"yazilar1"}>
                                <div className={"yazi3"}>
                                    <img src={Euro} />
                                    <h4>Euro</h4>
                                    <h2>35.00</h2>

                                </div>
                            </div>
                            <div className={"yazilar1"}>
                                <div className={"yazi4"}>
                                    <img src={Pound} />
                                    <h4>STERLİN</h4>
                                    <h2>35.00</h2>

                                </div>
                            </div>
                            <div className={"yazilar1"}>
                                <div className={"yazi5"}>
                                    <img src={Bitcoin} />
                                    <h4>BITCOIN</h4>
                                     <h2>36.00$</h2>

                                </div>
                            </div>
                            <div className={"yazilar1"}>
                                <div className={"yazi6"}>
                                    <img src={Silver} />
                                    <h4>GRAM GÜMÜŞ</h4>
                                    <h2>31.05</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
