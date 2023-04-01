import React from "react";
import JobModal from "../JobModal/Jobmodal";
import JobCard from "./JobCard";

function NewJobs() {

  return (
    <>
      <div className="new-jobs-main-cont">
        <h3 className="new-jobs-head">New Jobs</h3>
        <div className="new-jobs-cards-cont">
          <JobCard />
          <JobCard />
          <JobCard />
          <div className='mobile-more-button'>More</div>
        </div>
      </div>
    </>
  );
}

export default NewJobs;
