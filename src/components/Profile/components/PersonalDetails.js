import React, { Fragment } from "react";
import edit from "../../../assets/images/icons/edit.png";
import { useEffect } from "react";
import {
  getDocuments,
  getUser,
  setDocuments,
} from "../../../core/AuthHelpers";
import { toast, ToastContainer } from "react-toastify";
import { deleteDocument, updateUserDocument } from "../../../requests/Auth";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { HiOutlinePencil } from "react-icons/hi";
import EducationModal from "./EducationModal";
import SkillsModal from "./SkillsModal";
import CareerModal from "./CareerModal";
import { AiFillEye } from "react-icons/ai"
import { FaTrash } from "react-icons/fa"
import { NavHashLink } from 'react-router-hash-link';

function PersonalDetails({
  setIsOpen,
  userData,
  docs,
  userUpdated,
  setIsUserUpdated,
}) {
debugger;
  const [sideTab, setSideTab] = React.useState(1);
  const [resume, setResume] = React.useState("");
  const [documents, setDocumentsData] = useState(docs ? docs : "");

  const [cover, setCover] = React.useState("");
  const [user, setUserData] = useState(userData);

  useEffect(() => {
    setResume(
      documents && documents.resume
        ? unescape(documents.resume.split("/").pop())
        : ""
    );
    setCover(
      documents && documents.cover_letter
        ? unescape(documents.cover_letter.split("/").pop())
        : ""
    );
  }, [documents]);
 

  const deleteResume = async () => {
    try {
      const documents = await deleteDocument(user.id, "resume");
      setDocuments(documents.data.data);
      setIsUserUpdated(true);
      toast.success(documents.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setResumeData = async (files) => {
    try {
      const documents = await updateUserDocument(user.id, "resume", files[0]);
      setDocuments(documents.data.data);
      setIsUserUpdated(true);
      toast.success(documents.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const [confirmModal, setConfirmModal] = useState({ status: false, id: "" });
  const handleModalOpen = (id) => {
    setConfirmModal({ status: true, id: id });
  };

  const handleFileChange = (e, setState) => {
    setState();
    setConfirmModal({ status: false, id: "" });
  };

  const [educationModal, setEducationModal] = useState({
    status: false,
    data: {}, //for update education modal, pass current data to the modal
  });

  const [skillsModal, setSkillsModal] = useState({
    status: false,
    data: [],
  });

  const skills = [
    "Sql Ui",
    "Project Management",
    "Microsoft",
    "Crm",
    "Sales",
    "Excel",
    "Data Visualization",
    "Project Management",
    "Microsoft",
    "Crm",
    "Sales",
    "Excel",
    "Data Visualization",
  ];

  const [careerModal, setCareerModal] = useState({
    status: false,
    data: {},
  });

  return (
    <Fragment>
      {confirmModal.status == false && <ToastContainer draggablePercent={60} />}

      <ConfirmModal
        labelId={confirmModal?.id}
        isOpen={confirmModal?.status}
        closeModal={() => setConfirmModal({ status: false, id: "" })}
      />
      {confirmModal.status == false && <ToastContainer draggablePercent={60} />}
      <div className="profile-section-personal-detail-left document-details-left">
        <div className="personal-detail-title">
          <h4>
            Personal Details
          </h4>
        </div>
        <ul>
          <li
            className={sideTab === 1 && "document-details-head"}
            onClick={() => setSideTab(1)}
          >
            <NavHashLink smooth to="/profile#personal-sn" >
              Personal Details
            </NavHashLink>
          </li>
          <li
            className={sideTab === 2 && "document-details-head"}
            onClick={() => setSideTab(2)}
          >
            <NavHashLink smooth to="/profile#resume-sn" >
              Resume / Cover Letter
            </NavHashLink>
            <button className="cursor-pointer">UPDATE</button>
          </li>
          <li
            className={sideTab === 3 && "document-details-head"}
            onClick={() => setSideTab(3)}
          >
            <NavHashLink smooth to="/profile#skill-sn" >
              Key skill
            </NavHashLink>
            {" "}
          </li>
          <li
            className={sideTab === 4 && "document-details-head"}
            onClick={() => setSideTab(4)}
          >
            <NavHashLink smooth to="/profile#education-sn" >
              Education
            </NavHashLink>

            <button className="cursor-pointer">ADD</button>
          </li>
          {/* <li
            className={sideTab === 5 && "document-details-head"}
            onClick={() => setSideTab(5)}
          >
            Projects <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 6 && "document-details-head"}
            onClick={() => setSideTab(6)}
          >
            Accomplishments{" "}
          </li> */}
          <li
            className={sideTab === 7 && "document-details-head"}
            onClick={() => setSideTab(7)}
          >
            <NavHashLink smooth to="/profile#career-sn" >
              Career profile
            </NavHashLink>
            {" "}
          </li>
        </ul>
      </div>

      <div className="profile-section-personal-detail-right">
        {/* {sideTab === 1 && ( */}
        <div className="profile-section-personal-table">
          <div className="personal-detail-title" id="personal-sn">
            <h4>Personal Details</h4>
            <img
              className="cursor-pointer"
              src={edit}
              height={23}
              alt="edit-icon"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <div className="personal-detail-table">
            <table>
              <tbody>
                <tr>
                  <td>Full Name </td>
                  <td>{user.name ? user.name : "Not Updated"}</td>
                </tr>
                <tr>
                  <td>Position</td>
                  <td>{user.position ? user.position : "Not Updated"}</td>
                </tr>

                <tr>
                  <td>Contact</td>
                  <td>{user.phone ? user.phone : "Not Updated"}</td>
                </tr>
                <tr>
                  <td>Current Company </td>
                  <td>{user.company ? user.company : "Not Updated"}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <tbody>
                <tr>
                  <td>Date of birth</td>
                  <td>Not Updated</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{user.country ? user.country : "Not Updated"}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{user.language ? user.language : "Not Updated"}</td>
                </tr>
                {/* <tr>
                  <td>Time Zone</td>
                  <td>{user.time_zone ? user.time_zone : "Not Updated"}</td>
                </tr> */}
                {/* <tr>
                    <td>Currency</td>
                    <td>{user.currency ? user.currency : "Not Updated"}</td>
                  </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        {/* )} */}
        {/* {sideTab === 2 && ( */}
        <div className="profile-section-personal-resume mt-0">
          <div className="personal-detail-title" id="resume-sn">
            <h4>Resume</h4>
          </div>
          <p>
            The most key document that employers review is a resume. In
            general, recruiters do not review profiles without resumes.
          </p>
          <div className="profile-section-personal-resume-update">
            <div>
              {resume ? resume : "Not Updated"}
              {/* <span>
                    Updated on{" "}
                    {files &&
                      moment(files[0]?.lastModified).format("DD-MM-YYYY")}
                  </span> */}
            </div>
            {documents && documents.resume ? (
              <div className="resume-delete" style={{ alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                <a href={documents.resume} style={{ lineHeight: 0 }} target="_blank" className="text-muted">
                  {/* <img
                    className="cursor-pointer"
                    src={download}
                    height={25}
                    alt="download-icon"
                  /> */}
                  <AiFillEye size={'1.4rem'} />
                </a>
                <FaTrash
                  className="cursor-pointer"
                  onClick={() => {
                    deleteResume();
                  }} size={'1rem'}
                  style={{
                    color: "lightcoral",
                    margin: "0 10px"
                  }}
                />
                {/* <button
                  className="cursor-pointer"
                  onClick={() => {
                    deleteResume();
                  }}
                >
                  DELETE RESUME
                </button> */}
              </div>
            ) : (
              ""
            )}
          </div>
          {/* {documents && documents.cover_letter ? (
              <>
                <div>
                  {cover
                    ? cover
                    : unescape(documents.cover_letter.split("/").pop())}
                  
                </div>
                <div className="resume-delete">
                  <a href={documents.cover_letter} target="_blank">
                    <img
                      className="cursor-pointer"
                      src={download}
                      height={25}
                      alt="download-icon"
                    />
                  </a>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setCover("");
                      deleteCover();
                    }}
                  >
                    DELETE COVER LETTER
                  </button>
                </div>
              </>
            ) : (
              "Not Updated"
            )} */}
          <div className="file-uploader-wrap">
            <div className="resume-update">
              <input
                type={"file"}
                id="resume-update"
                onChange={(e) =>
                  handleFileChange(e, () => setResumeData(e.target.files))
                }
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
              />
              <label
                className="button"
                htmlFor="resume-updat"
                onClick={() => handleModalOpen("resume-update")}
              >
                UPDATE RESUME
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
            <div className="resume-update">
              <input
                type={"file"}
                id="resume-update"
                onChange={(e) =>
                  handleFileChange(e, () => setResumeData(e.target.files))
                }
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
              />
              <label
                className="button"
                htmlFor="resume-updat"
                onClick={() => handleModalOpen("resume-update")}
              >
                UPDATE COVER LETTER
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>

        </div>
        {/* )} */}
        {/* {sideTab === 3 && ( */}
        <>
          <SkillsModal
            isOpen={skillsModal?.status}
            closeModal={() => setSkillsModal({ status: false, data: [] })}
            currentData={skillsModal?.data}
          />
          <div >
            <div className="profile-section-personal-resume profile-skills mt-0">
              <div id="skill-sn" className="personal-detail-title skills-heading">
                <h4 >Key Skills</h4>
                <HiOutlinePencil
                  onClick={() => setSkillsModal({ status: true, data: skills })}
                />
              </div>
              <div className="px-3 skills-list ">
                {skills?.map((item, key) => (
                  <button key={key}>{item}</button>
                ))}
              </div>
            </div>
          </div>
        </>
        {/* )} */}
        {/* {sideTab === 4 && ( */}
        <>
          <EducationModal
            isOpen={educationModal?.status}
            closeModal={() => setEducationModal({ status: false, data: {} })}
            currentData={educationModal?.data}
          />
          <div >
            <div className="profile-section-personal-resume profile-education mt-0">
              <div id="education-sn" className="personal-detail-title education-heading">
                <h4>Education</h4>
                <button
                  to={"#"}
                  onClick={() => setEducationModal({ status: true })}
                >
                  ADD EDUCATION
                </button>
              </div>

              <div className="px-3 profile-education-details">
                <div>
                  <h4>B. Tech/B.E. Computers</h4>
                  <p className="text-muted">MEA ENGINEERING COLLEGE</p>
                  <p className="text-muted">2018-2022 • Full Time</p>
                </div>
                <HiOutlinePencil
                  onClick={() =>
                    setEducationModal({
                      status: true,
                      data: {
                        education: "b.tech",
                      },
                    })
                  }
                />
              </div>
              <div className="px-3 profile-education-details">
                <div>
                  <h4>B. Tech/B.E. Computers</h4>
                  <p className="text-muted">MEA ENGINEERING COLLEGE</p>
                  <p className="text-muted">2018-2022 • Full Time</p>
                </div>
                <HiOutlinePencil />
              </div>
              <div className="px-3 profile-education-details">
                <div>
                  <h4>B. Tech/B.E. Computers</h4>
                  <p className="text-muted">MEA ENGINEERING COLLEGE</p>
                  <p className="text-muted">2018-2022 • Full Time</p>
                </div>
                <HiOutlinePencil />
              </div>
              {/* <div className="px-3">
                <button className="mb-2">Add Doctorate/PhD</button> <br />
                <button className="mb-2">Add Masters/Post-Graduation</button>
              </div> */}
            </div>
          </div>
        </>
        {/* )} */}

        {/* {sideTab === 7 && ( */}
        <>
          <CareerModal
            isOpen={careerModal?.status}
            closeModal={() => setCareerModal({ status: false, data: {} })}
            currentData={careerModal?.data}
          />
          <div >
            <div className="profile-section-personal-resume profile-career mt-0">
              <div id="career-sn" className="personal-detail-title career-heading">
                <h4>Career Profile</h4>
                <HiOutlinePencil
                  style={{ cursor: "pointer" }}
                  onClick={() => setCareerModal({ status: true, data: skills })}
                />
              </div>
              <div>
                <p className="text-muted career-info">
                  This information will help the recruiters and Naukri know
                  about your current job profile and also your desired job
                  criteria. This will also help us personalize your job
                  recommendations.
                </p>
              </div>
              <div className="career-list">
                <div>
                  <p className="title">Current Industry</p>
                  <p className="value">IT Services & Consulting</p>
                </div>
                <div>
                  <p className="title">Department</p>
                  <p className="value">Data Science & Analytics</p>
                </div>
                <div>
                  <p className="title">Role Category</p>
                  <p className="value">Data Science & Analytics - Other</p>
                </div>
                <div>
                  <p className="title">Job Role</p>
                  <p className="value">Data Science & Analytics - Other</p>
                </div>
                <div>
                  <p className="title">Desired Job Type</p>
                  <p>
                    <button>Add Desired Job Type</button>
                  </p>
                </div>
                <div>
                  <p className="title">Desired Employment Type</p>
                  <p>
                    <button>Add Desired Employment Type</button>
                  </p>
                </div>
                <div>
                  <p className="title">Preferred Shift</p>
                  <p>
                    <button>Add Preferred Shift</button>
                  </p>
                </div>
                <div>
                  <p className="title">Preferred Work Location</p>
                  <p>
                    <button>Add Preferred Work Location</button>
                  </p>
                </div>
                <div>
                  <p className="title">Expected Salary</p>
                  <p>
                    <button>Add Expected Salary</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>

      {/* )} */}
    </Fragment>
  );
}

export default PersonalDetails;
