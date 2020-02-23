import React from 'react'

export const graffic = () => {
    return(
        <section className="graffic">
            <div className="statistic">
                <div className="progress">

                    <div className="container">
                        <svg>
                            <circle className="progress" id="views" r="30" cx="35" cy="40" fill="transparent"></circle>
                        </svg>

                        <div className="text">
                            <span className="description" id="views_amount"></span>
                            <span className="category">Views</span>
                        </div>
                    </div>

                    <div className="container">
                        <svg>
                            <circle className="progress" id="visitors" r="30" cx="35" cy="40" fill="transparent"></circle>
                        </svg>

                        <div className="text">
                            <span className="description" id="visitors_amount"></span>
                            <span className="category">visitors</span>
                        </div>
                    </div>

                    <div className="container">
                        <svg>
                            <circle className="progress" id="impressions" r="30" cx="35" cy="40" fill="transparent"></circle>
                        </svg>

                        <div className="text">
                            <span className="description" id="impressions_amount"></span>
                            <span className="category">impressions</span>
                        </div>
                    </div> 
                </div>

                <div className="filter_graffic">
                    <span>Show:</span>

                    <select name="filter" id="">
                        <option>Week</option>
                        <option>Month</option>
                    </select>
                </div>
            </div>

            <div className="diagrams"></div>
        </section>
    )
}