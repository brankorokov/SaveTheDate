import React, { Component } from 'react';
import Favicon from "react-favicon";
import weddingPic from '../Assets/images/wedding-cover-1.jpg'
import dubrovnikPic from '../Assets/images/dubrovnik.jpg'
import { Link, Element } from 'react-scroll';
import { FaChevronDown,  FaChevronUp} from 'react-icons/fa';

export class TestComponent extends Component {
    static displayName = TestComponent.name;

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    this.setState({ isVisible: true });
                }
            })
        }, { threshold: 0.5 });
    }

    componentDidMount() {
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => this.observer.observe(el));
    }

    render() {
        const { isVisible } = this.state;

        return (
            <div className="col-12">
                {/*test*/}
                <Element name="firstSection">
                    <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden', height: 'calc(100vh)' }}>
                        <img src={weddingPic} style={{ width: '100%', height: 'calc(100vh)', objectFit: "cover" }} />
                        <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: "#828061", opacity: 0.9, padding: '20px', borderRadius: '8px', margin: 'auto', maxWidth: '80%' }}>
                            <h1 style={{ fontFamily: 'Great Vibes', margin: 0, fontSize: "60px", fontStyle: "bold", textAlign: "center" }}>Roko & Fiancee</h1>
                            <p style={{ fontFamily: 'Proxima Nova Rg', margin: 0, fontSize: "35px", fontWeight: "bold", textAlign: "center" }}>06|20|2023</p>
                            <p style={{ fontFamily: 'Great Vibes', margin: 0, fontSize: "20px", textAlign: "center" }}>Dubrovnik, Croatia</p>
                        </div>
                        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer' }}>
                            <Link to="nextSection" spy={true} duration={600} smooth={true}>
                                <FaChevronDown size={'3em'} style={{color: 'Black', fontWight: 'lighter'}}/>
                            </Link>
                        </div>
                    </div>
                </Element>

                <Element name="nextSection">
                    <div className={"hidden col-12"} style={{ width: '100%', height: 'calc(100vh)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)', cursor: 'pointer', zIndex: 100}}>
                            <Link to="firstSection" spy={true} duration={600} smooth={true}>
                                <FaChevronUp size={'3em'} style={{color: 'black', fontWight: 'lighter'}}/>
                            </Link>
                        </div>
                        <img src={dubrovnikPic} style={{ width: '100%', height: 'calc(100vh)', objectFit: "cover" }} />
                        <div style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div style={{ marginRight: '10px' }} className={"card"}>
                                    <h2 className={"card-title"}>Card 1</h2>
                                    <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis est turpis. Suspendisse porttitor finibus justo quis vehicula.</p>
                                </div>
                                <div style={{ marginLeft: '10px' }} className={"card"}>
                                    <h2 className={"card-title"}>Card 2</h2>
                                    <p className={"card-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis est turpis. Suspendisse porttitor finibus justo quis vehicula.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Element>
            </div>
        );
    }
}