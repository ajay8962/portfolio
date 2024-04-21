import React from "react";
export default function Backend() {
    return(
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Node.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Express.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">MongoDb</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">Material-UI</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}