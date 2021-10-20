import React, { useEffect, useState } from 'react';
import Branch from '../Branch/Branch';
import './Branches.css'

const Branches = () => {
    const [branches, setBranches] = useState([])
    useEffect(() => {
        fetch('/branches.json')
            .then(res => res.json())
            .then(data => setBranches(data))
    }, [])
    return (
        <div>
            <div className="heading mb-5 p-4">
                <h3 className="text-center">Our Branches</h3>
            </div>
            <div className="container">
                {
                    branches.map(branch => <Branch
                        key={branch.id}
                        branch={branch}
                    ></Branch>)
                }

            </div>
        </div >
    );
};

export default Branches;