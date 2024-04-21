import React, { useState } from "react";
import './qualification.css'
export default function Qualification(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index)=>{
        setToggleState(index);
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() =>toggleTab(1)} className={ toggleState ===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div onClick={() =>toggleTab(2)} className={ toggleState ===2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" }>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={ toggleState ===1 ? "qualification__content qualification__content-active" : "qualification__content" }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">B.Tech</h3>
                                <span className="qualification__subtitle">Samrat Ashok Technological Institute Vidisha. <br /> <b>Brach- Computer Science</b> <br /> <b>CGPA- 8.2</b> </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">12th </h3>
                                <span className="qualification__subtitle">Biaora Public School. <b>Percentage- 91%</b></span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                                </div>
                            </div>
                            
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th</h3>
                                <span className="qualification__subtitle">Biaora Public School. <b>Percentage- 90%</b> </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2019-2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        {/* <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Span-Institute</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>
                            
                        </div> */}
                    </div>

                    <div className={ toggleState ===2 ? "qualification__content qualification__content-active" : "qualification__content" }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Figma</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Visual Designer</h3>
                                <span className="qualification__subtitle">Figma</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2022- Present
                                </div>
                            </div>
                            
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI / UX Designer</h3>
                                <span className="qualification__subtitle">Canva</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i>2021 - Present  
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}