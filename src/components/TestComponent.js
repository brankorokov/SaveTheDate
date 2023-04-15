import React, { Component } from 'react';
import weddingPic from '../Assets/images/Overhead-Dubrovnik.jpg'
import paraglidePic from '../Assets/images/Paraglide.jpg'
import { Link, Element, scroller } from 'react-scroll';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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
                <Element name="firstSection">
                    <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden', height: 'calc(100vh)', bottom: "15%" }}>
                        <img src={weddingPic} style={{ width: '100%', height: 'calc(100vh)', objectFit: "cover", bottom: "15% !important" }} />
                        <div id="LandingMainDiv">
                            <h1 id='NameDiv'>Roko & Nicole</h1>
                            <p id='Date'>06<span className='DatePole'>|</span>02<span className='DatePole'>|</span>2023</p>
                            <p id='Location'>Dubrovnik, Croatia</p>
                        </div>
                        <div id="DownArrow" style={{}}>
                            <Link className="NavArrow" to="overflow" spy={true} duration={900} smooth={true}>
                                <FaChevronDown size={'3em'} style={{ color: 'Black', fontWight: 'lighter' }} />
                            </Link>
                        </div>
                    </div>
                </Element>

                <Element name="nextSection">
                    <div className={"hidden col-12"} style={{ width: '100%', height: 'calc(100vh)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <div id="UpArrow" style={{  }}>
                            <Link className="NavArrow" to="firstSection" spy={true} duration={600} smooth={true}>
                                <FaChevronUp size={'3em'} style={{ color: 'black', fontWight: 'lighter' }} />
                            </Link>
                        </div>
                        <img src={paraglidePic} style={{ width: '100%', height: 'calc(100vh)', objectFit: "cover" }} />
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', width: '80%' }}>

                            <div className="cardContainer" style={{}}>
                                <div style={{}} className={"card"}>
                                    <h2 className={"card-title"}>Itinerary</h2>
                                    <p className={"card-text"}>Find out what's in store for the big day</p>
                                    <button className="card-button">
                                        <p className="cardButtonText">Take me there!</p>
                                    </button>
                                </div>
                                <div style={{}} className={"card"}>
                                    <h2 className={"card-title"}>Registry</h2>
                                    <p className={"card-text"}>Find our hand picked registry items here</p>
                                    <button className="card-button">
                                        <p className="cardButtonText">Take me there!</p>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Element>
                <Element name="overflow">
                </Element>
            </div>
        );
    }
}