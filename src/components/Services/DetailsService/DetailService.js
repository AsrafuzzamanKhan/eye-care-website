import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './DetailService.css';

const DetailService = () => {
  const { id } = useParams();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('/service.json')
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);
  const singleItem = details.filter((detail) => detail.id == id);

  return (
    <div className="container serviceDetail-container shadow-lg">
      <div className="row g-3 my-5 mx-2 p-2 ">
        <div className="col-lg-6 col-sm-12">
          <img className="img-fluid" src={singleItem[0]?.img} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1>{singleItem[0]?.name}</h1>
          <p>
            <span style={{ color: 'blue', fontWeight: 600 }}>Details: </span>
            {singleItem[0]?.description}
          </p>
          <p>
            <span style={{ color: 'blue', fontWeight: 600 }}>Overview: </span>
            {singleItem[0]?.overview}
          </p>
          <Link to="/booking">
            <button className="btn btn-success">Book Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailService;
