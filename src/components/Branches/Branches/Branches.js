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
            <h2 className="heading p-4 mb-4 text-center">Our Branches</h2>
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