import React from 'react';
import './MiddleItem.css'
import middleimg from '../../../images/middleimage/mid.jpg'
import { Link } from 'react-router-dom';


const MiddleItem = () => {
    return (
        <div>
            <div className="m-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <img className="img-fluid" src={middleimg} alt="" />
                    </div>
                    <div className="col-lg-6 col-sm-12 p-2">
                        <h1>Introducing The High Quality Optometrist Clinic</h1>
                        <p>There are many different eye conditions; some are minor and easily treated but others can cause serious problems or lead to permanent loss of vision. We offer varying specialties, covering all aspects of the medical and surgical eye care, including cataract surgery.</p>
                        <ul>
                            <li>Drawing up an individual treatment program for patient.</li>
                            <li>Performing all operations and proceds highest professional level.</li>
                            <li>Compliance of materials equipment international standards.</li>
                        </ul>
                        <Link to='/services'><button className="btn btn-success">Visit services</button></Link>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default MiddleItem;