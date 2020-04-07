import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export const Graffic: React.FC = () => {
    return(
        <section className="graffic">
            <div className="statistic">
                <div className="progress"   >

                    
                        <CircularProgressbar value = {75} maxValue = {100} text = {`75%`}  
                        styles = {{

                            path: {
                                stroke: '#2195f2',
                            },

                            text: {
                                fill: '#2195f2',
                                fontSize: '150%',
                                fontWeight: 'bold',
                                fontFamily: 'Montserrat',
                            },                           

                        }}
                        />

                        <div className="text">
                            <span className="description" id="views_amount"></span>
                            <span className="category">Views</span>
                        </div>
                    

                    
                    <CircularProgressbar value = {35} maxValue = {100} text = {`35%`}
                    styles = {{

                        path: {
                            stroke: '#2195f2',
                        },

                        text: {
                            fill: '#2195f2',
                            fontSize: '150%',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                        },                           

                    }}
                    />


                        <div className="text">
                            <span className="description" id="visitors_amount"></span>
                            <span className="category">visitors</span>
                        </div>
                    

                    
                    <CircularProgressbar value = {62} maxValue = {100} text = {`62%`} 
                    styles = {{

                        path: {
                            stroke: '#2195f2',                            
                        },

                        text: {
                            fill: '#2195f2',
                            fontSize: '150%',
                            fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                        },                           

                    }}
                    />


                        <div className="text">
                            <span className="description" id="impressions_amount"></span>
                            <span className="category">impressions</span>
                        </div>
                     
                </div>

                    <span className="filter_label">Show:</span>

                    <select name="filter" id="">
                        <option defaultChecked>Week</option>
                        <option>Month</option>
                    </select>
            </div>

            <div className="diagrams"></div>
        </section>
    )
}