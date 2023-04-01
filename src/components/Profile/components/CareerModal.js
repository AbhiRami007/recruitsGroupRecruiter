import React from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io"
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: window.screen.width < 768 ? "90%" : "50%",
    padding: "0",
    zIndex: 999
  },
};

function CareerModal({ isOpen, closeModal, confirmClick, currentData }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values);
    closeModal()
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal carrer-modal">
          <div className="modal-header p-30 "
            style={{
              display: "flex"
              , flexDirection: "column"
            }}
          >
            <div className="modal-close-btn" onClick={closeModal}>
              <IoIosClose />
            </div>
            <form className="education-form" onSubmit={handleSubmit(onSubmit)}>
              <div className=""
                style={{
                  textAlign: "start",
                  marginBottom: 20,

                }}
              >
                <h3 style={{
                  textAlign: "start",
                  fontSize: 18,
                }} className="text-muted">Career Profile</h3>
                <p>
                  This information will help the
                  The most crucial document required to confirm your identification
                  during the hiring procedure
                </p>
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Current Industry <span className="text-danger">*</span>
                </label>
                <select
                  name="education"
                  className="profile-input"
                  defaultValue={currentData?.education}
                >
                  <option>IT Services & Consulting</option>
                  <option value={'b.tech'}>b.tech</option>
                  <option value={'sslc'}>sslc</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Department <span className="text-danger">*</span>
                </label>
                <select
                  name="university"
                  className="profile-input">
                  <option >Data Science and Analytics</option>
                  <option value={'CALICUT'}>CALICUT</option>
                  <option value={'KTU'}>KTU</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Role Category <span className="text-danger">*</span>
                </label>
                <select
                  name="course"

                  className="profile-input">
                  <option>Data Science and Analytics</option>
                  <option value={'MECHANICAL'}>MECHANICAL</option>
                  <option value={'CS'}>CS</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Job Role <span className="text-danger">*</span>
                </label>
                <select
                  name="specialization"

                  className="profile-input">
                  <option>Data Science and Analytics</option>
                  <option value={'m.tech'}>M.TECH</option>
                  <option value={'phd'}>PHD</option>
                </select>
              </div>

              <div style={{ marginTop: 10, marginBottom: 30 }}>
                <label htmlFor="name" className="input-label">
                  Desired Job Type  <span className="text-danger">*</span>
                </label>

                <div className="input-radio-group" style={{ maxWidth: 250 }}>
                  <div >
                    <input type={"checkbox"} id="full_time" value="full_time" name="course-type" />
                    <label htmlFor="full_time">Permanent</label>
                  </div>
                  <div>
                    <input type={"checkbox"} id="part_time" value="part_time" name="course-type" />
                    <label htmlFor="part_time">Contractual</label>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 10, marginBottom: 30 }}>
                <label htmlFor="name" className="input-label">
                  Desired Employment Type  <span className="text-danger">*</span>
                </label>

                <div className="input-radio-group" style={{ maxWidth: 250 }}>
                  <div >
                    <input type={"checkbox"} id="full_time" value="full_time" name="course-type" />
                    <label htmlFor="full_time">Full Time</label>
                  </div>
                  <div>
                    <input type={"checkbox"} id="part_time" value="part_time" name="course-type" />
                    <label htmlFor="part_time">Part Time</label>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 10, marginBottom: 20 }}>
                <label htmlFor="name" className="input-label">
                  Preferred Shift  <span className="text-danger">*</span>
                </label>

                <div className="input-radio-group" style={{ maxWidth: 250 }}>
                  <div >
                    <input type={"checkbox"} id="full_time" value="full_time" name="course-type" />
                    <label htmlFor="full_time">Day</label>
                  </div>
                  <div>
                    <input type={"checkbox"} id="part_time" value="part_time" name="course-type" />
                    <label htmlFor="part_time">Night</label>
                  </div>
                  <div>
                    <input type={"checkbox"} id="part_time" value="part_time" name="course-type" />
                    <label htmlFor="part_time">Flexible</label>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Preferred Work Location <span className="text-danger">*</span>
                </label>
                <select
                  name="specialization"

                  className="profile-input">
                  <option>Calicut</option>
                  <option value={'m.tech'}>M.TECH</option>
                  <option value={'phd'}>PHD</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="input-label">
                  Expected Salary <span className="text-danger">*</span>
                </label>
                <div className="course-duration" style={{ maxWidth: 250 }}>
                  <select id="years" name="course-start" className="profile-input" style={{ width: "80px", marginTop: 10 }}>
                    <option value="2022">₹ </option>
                    <option value="2022"> $ </option>
                  </select>
                  <div>
                    <input type={"number"} id="salary" className="profile-input" placeholder="Eg. 450000" value="salary" name="salary" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="name" className="input-label">
                  Grading System <span className="text-danger">*</span>
                </label>
                <select
                  className="profile-input">
                  <option>select grading system</option>
                  <option value={1}>1</option>
                </select>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <button
                  style={{
                    height: 38,
                    marginRight: 10,
                    padding: "10px 20px",
                    border: "none",
                    color: "#4892f0"
                    , backgroundColor: "transparent"
                  }}
                  className="" onClick={closeModal}>
                  Cancel
                </button>
                <button
                  style={{
                    height: 38,
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "#4892f0"
                    , color: "#fff",
                    cursor: "pointer"
                  }}
                  type={'submit'}
                  className="button"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default CareerModal;
