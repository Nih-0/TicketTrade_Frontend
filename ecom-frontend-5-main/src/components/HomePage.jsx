import React from "react";
// import Busimage from '../assets/Bus-image-TT.jpg';
// import Trainimage from '../assets/Train-TT.jpg';
// import Movieimage from '../assets/Movie-TT.jpg';
// import Eventimage from '../assets/Event-TT.jpg';

const HomePage = () => {
  return (
    <div className="min-vh-100 bg-warning text-white font-sans position-relative overflow-hidden">

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Section */}
          <div className="col-md-6 mt-5">
            <h1 className="display-5 fw-bold text-dark mb-3">
              The All-in-One Ticket Hub
              <div className="text-white">Buy, Sell and Trade</div>
            </h1>
            <p className="lead text-white-50 mb-4">
              A seamless all-in-one platform for trading tickets across events and transportation. With smart matching and secure exchanges, it ensures convenience and reliability. Whether finding last-minute tickets or reselling, enjoy a hassle-free experience.
            </p>

            {/* Location & Date Section */}
            <div className="bg-white text-dark rounded shadow p-3 d-flex align-items-center gap-3 w-auto">
              <div>
                <label className="form-label small fw-semibold mb-1">Location</label>
                <input type="text" className="form-control form-control-sm" placeholder="Current Location" />
              </div>
              <div>
                <label className="form-label small fw-semibold mb-1">Date</label>
                <input type="text" className="form-control form-control-sm" placeholder="Select date" />
              </div>
              <div className="mt-4">
                <button className="btn btn-warning text-white fw-semibold">
                  Explore Now
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Images */}
          <div className="col-md-6 mt-5">
            <div className="row g-3 justify-content-center">
              {/* <div className="col-6">
                <img src={Busimage} alt="Bus" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-6">
                <img src={Trainimage} alt="Train" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-6">
                <img src={Movieimage} alt="Movie" className="img-fluid rounded shadow-sm" />
              </div>
              <div className="col-6">
                <img src={Eventimage} alt="Events" className="img-fluid rounded shadow-sm" />
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
