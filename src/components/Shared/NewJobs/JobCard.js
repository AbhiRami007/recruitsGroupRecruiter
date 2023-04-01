import React from "react";
import google from "../../../assets/images/social/google.png";
import JobModal from "../JobModal/Jobmodal";

function JobCard() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <JobModal closeModal={() => setIsOpen(false)} isOpen={modalIsOpen} />

      <div className="job-card-cont">
        <img className="newjob-company-logo" src={google} alt="company-logo" />
        <div className="new-job-company-description">
          <span className="new-job-company-heading">Google</span>
          <div className="new-job-company-desc-div">
            <span className="new-job-company-post">Full Stack Developer</span>
            <div className="new-job-time-of-upload">
              <span>3 days ago</span>
              <span className="dot-job"></span>
              <span>13 Applied</span>
            </div>
          </div>
        </div>
        <div className="new-job-company-extra-detail">
          <span>Singapore</span>
          <span
            className="new-job-view-deatil-tag"
            onClick={() => setIsOpen(true)}
          >
            VIEW DETAILS
          </span>
        </div>
      </div></>
  );
}

export default JobCard;
