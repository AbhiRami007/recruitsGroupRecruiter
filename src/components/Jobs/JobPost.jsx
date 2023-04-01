import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import save from "../../assets/images/icons/save.png";
import send from "../../assets/images/icons/send.png";
import { useAuth } from "../../core/Auth";
import { getAuth, getJobsInfo, getUser } from "../../core/AuthHelpers";
import { getUserByToken } from "../../requests/Auth";
import Comments from "../Shared/Comments";
import JobModal from "../Shared/JobModal/Jobmodal";
import jobsImage from "../../assets/images/icons/jobs.svg";

const JobPost = ({ jobs }) => {
  const [job, setJob] = useState();
  const [open, setOpen] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();

  const [isCommentOpen, setIsCommentOpen] = React.useState(false);
  const openModal = (e, item) => {
    setOpen(true);
    setJob(item);
  };

  useEffect(() => {
    setIsCommentOpen(false);
  }, [window.location.pathname]);

  const getDayPosted = (item) => {
    const today = new Date();
    console.log(today, item);
    // const Difference_In_Time = today.getTime() - item.getTime();
    // const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // return Difference_In_Days;
  };

  return (
    <>
      <ToastContainer draggablePercent={60} />
      <JobModal
        closeModal={() => setOpen(false)}
        applied={false}
        isOpen={open}
        job={job}
      />
      <div
        style={{
          width: "95%",
          borderRadius: "10px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "35px",
          backgroundColor: "#E5E5E5",
        }}
      >
        {jobs && jobs.length ? (
          jobs.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "20px",
                }}
              >
                <div className="job-card-cont" style={{ padding: "3% 5%" }}>
                  <img
                    className="newjob-company-logo"
                    src={item.logo}
                    alt="company-logo"
                  />
                  <div className="new-job-company-description">
                    <span className="new-job-company-heading">
                      {item.company}
                    </span>
                    <div className="new-job-company-desc-div">
                      <span className="new-job-company-post">{item.title}</span>
                      <div className="new-job-time-of-upload">
                        <span>3 days ago</span>
                        <span className="dot-job-post"></span>
                        <span>
                          {item.applied_candidates?.length > 0
                            ? item.applied_candidates.length + " Applicants"
                            : "No applicants yet"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="new-job-company-extra-detail">
                    <span>{item.location}</span>
                    <span
                      onClick={(e) => openModal(e, item)}
                      className="new-job-view-deatil-tag sm:font-size-10"
                    >
                      VIEW DETAILS
                    </span>
                  </div>
                </div>
                <img
                  src={item.description_image}
                  style={{
                    width: "100%",
                    height: "50vh",
                    objectFit: "cover",
                  }}
                  alt="Job description"
                  onClick={(e) => openModal(e, item)}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "3% 5%",
                  }}
                >
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div style={{ height: "30px", width: "30px" }}>
                      {/* <i
                        style={{ fontSize: "25px", cursor: "pointer" }}
                        class="fa fa-bookmark"
                        aria-hidden="true"
                        onClick={(e) => saveJob(e, item)}
                      ></i> */}
                    </div>
                    <div style={{ height: "30px", width: "30px" }}>
                      <i
                        style={{ fontSize: "25px", cursor: "pointer" }}
                        class="fa fa-paper-plane"
                        aria-hidden="true"
                      ></i>
                    </div>
                    {window.location.pathname == "/applied-jobs" && (
                      <div
                        onClick={() => setIsCommentOpen(!isCommentOpen)}
                        style={{ height: "30px", width: "30px" }}
                      >
                        <i
                          style={{ fontSize: "25px", cursor: "pointer" }}
                          class={
                            isCommentOpen
                              ? "fa fa-comments"
                              : "fa fa-comments-o"
                          }
                          aria-hidden="true"
                        ></i>
                      </div>
                    )}
                  </div>
                </div>
                {window.location.pathname == "/applied-jobs" && (
                  <Comments isOpen={isCommentOpen} />
                )}
              </div>
            );
          })
        ) : (
          <div
            style={{
              height: "50vh",
              width: "100%",
              backgroundColor: "white",
              gap: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={jobsImage} width="60%" alt="jobs" />
            No job posts are available
          </div>
        )}
      </div>
    </>
  );
};

export default JobPost;
