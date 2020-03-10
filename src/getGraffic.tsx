import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

let persent: number = 66

export const Graffic: React.FC = () => {
    return(
        <section className="graffic">
            <div className="statistic">
                <div className="progress">

                    <div className="container">
                        <CircularProgressbar value = {persent} maxValue = {100} text = {`${persent}`} 
                        styles = {{

                            path: {
                                stroke: 'rgb(28, 128, 208)',
                            },

                            text: {
                                fill: 'rgb(28, 128, 208)',
                                fontSize: '150%',
                                fontWeight: 'bold',
                            },                           

                        }}
                        />

                        <div className="text">
                            <span className="description" id="views_amount"></span>
                            <span className="category">Views</span>
                        </div>
                    </div>

                    <div className="container">
                    <CircularProgressbar value = {persent} maxValue = {100} text = {`${persent}`}
                    styles = {{

                        path: {
                            stroke: 'rgb(28, 128, 208)',
                        },

                        text: {
                            fill: 'rgb(28, 128, 208)',
                            fontSize: '150%',
                            fontWeight: 'bold',
                        },                           

                    }}
                    />


                        <div className="text">
                            <span className="description" id="visitors_amount"></span>
                            <span className="category">visitors</span>
                        </div>
                    </div>

                    <div className="container">
                    <CircularProgressbar value = {persent} maxValue = {100} text = {`${persent}`} 
                    styles = {{

                        path: {
                            stroke: 'rgb(28, 128, 208)',                            
                        },

                        text: {
                            fill: 'rgb(28, 128, 208)',
                            fontSize: '150%',
                            fontWeight: 'bold',
                        },                           

                    }}
                    />


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