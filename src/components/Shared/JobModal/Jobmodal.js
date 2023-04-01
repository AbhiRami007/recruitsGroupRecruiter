import React, { useState } from "react";
import Modal from "react-modal";
import dot from "../../../assets/images/icons/dot.png";
import marker from "../../../assets/images/icons/placemarker.png";
import closebtn from "../../../assets/images/icons/close.png";
import { useEffect } from "react";
import { getUserByToken } from "../../../requests/Auth";
import { getAuth, getUser } from "../../../core/AuthHelpers";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../../../core/Auth";
let media = window.screen.width < 600;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: window.screen.width < 768 ? "100%" : "40%",
    // height: window.screen.width < 768 ? "95%" : "95%",
    padding: "0",
    zIndex: 999,
  },
};

function JobModal({ isOpen, closeModal, applied, job }) {
  const [isApplyConfirm, setIsApplyConfirm] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
 
  return (
    <>
      <ToastContainer draggablePercent={60} />

      {/* <ApplyConfirmModal
        isOpen={isApplyConfirm}
        closeModal={() => setIsApplyConfirm(false)}
        applyToJob={applyToJob}
      /> */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src={closebtn}
          height={25}
          alt="close-modal"
          style={window.screen.width < 768 ? { top: "10px", right: "0px" } : {}}
          className="modal-close-btn"
          onClick={closeModal}
        />

        <div className="job-modal-wrapper">
          <div className="modal-header p-30">
            <img src={job && job.logo} height={50} alt="header-logo" />
            <div className="content">
              <h3>{job && job.company}</h3>
              <p>
                {job && job.title} <br /> 3 Days ago{" "}
                <img src={dot} height={5} alt="header-logo" />
                {job && job.applied_candidates?.length
                  ? job.applied_candidates.length + "Applicants"
                  : "Be the first to apply"}
              </p>
            </div>
            <div>
              <img src={marker} height={15} alt="header-logo" />
              {job && job.location}
            </div>
          </div>
          <div className="modal-image-section">
            <img
              src={job && job.description_image}
              height={"100%"}
              width={"100%"}
              alt={job && job.company}
            />
          </div>
          <div className="modal-job-details p-30">
            <p>
              {job && <span>{job.title} -</span>} {job && job.type}
              <br />
              {job && (
                <a href={`https://` + job.company_url} target="_blank">
                  {job.company}
                </a>
              )}
              <br />
              <hr />
              {job && job.location}
              <br />
              {job && job.salary_offered
                ? job.salary_offered + "a year"
                : "Not disclosed"}
            </p>
          </div>
          <div className="modal-job-full-details p-30">
            <h2>Full job description</h2>
            <div className="details">
              <p>{job && job.job_description ? job.job_description : "-"}</p>
              <h3>Requirements :</h3>
              <ul className="detail-ul">
                {job &&
                  job.requirements.length > 0 &&
                  job.requirements.map((item) => {
                    return <li>{item}</li>;
                  })}
              </ul>
              <h3>Qualifications:</h3>
              <ul className="detail-ul">
                {job &&
                  job.qualifications.length > 0 &&
                  job.qualifications.map((item) => {
                    return <li>{item}</li>;
                  })}
              </ul>
              <div className="about-card">
                <h3>About the company</h3>
                <div className="about">
                  <img
                    src={job && job.logo}
                    height={50}
                    alt={job && job.company}
                  />
                  <p>
                    <span>{job && job.company}</span>
                    <br /> {(job && job.employee_count) || 0} Employees .{" "}
                    {job && job.company_type ? job.company_type : ""}
                  </p>
                </div>
                <p>{job && job.about_company}</p>
              </div>
            </div>
          </div>
          {/* <div className="modal-footer">
            <div>
              <img src={send} height={30} alt="" />
              <img src={bookmark} height={30} alt="" />
            </div>
            {applied || window.location.pathname == "/applied-jobs" ? (
              <p>Applied</p>
            ) : (
              <button onClick={() => [setIsApplyConfirm(true), closeModal()]}>
                Apply Now
              </button>
            )}
          </div> */}
        </div>
      </Modal>
    </>
  );
}

export default JobModal;
