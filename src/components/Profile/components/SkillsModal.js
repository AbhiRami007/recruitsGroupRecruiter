import React, { useState } from "react";
import Modal from "react-modal";
import { useEffect } from "react";
import { IoIosClose } from "react-icons/io"
import { useForm } from "react-hook-form";
import { WithContext as ReactTags } from 'react-tag-input';

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

const KeyCodes = {
  comma: 188,
  enter: 13,
}
const delimiters = [KeyCodes.comma, KeyCodes.enter]

function SkillsModal({ isOpen, closeModal, confirmClick, currentData }) {
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


  const [skills, setSkills] = useState([])

  useEffect(() => {
    if (currentData?.length >= 1) {
      const currentSkills = currentData?.map(item => ({
        id: item,
        text: item
      }))
      setSkills(currentSkills)
    }
  }, [currentData])

  const suggestions = [].map(country => {
    return {
      id: country,
      text: country
    };
  });

  const handleAddition = tag => {
    setSkills([...skills, tag])
  }
  const handleDragSkills = (tag, currPos, newPos) => {
    const newSkill = skills.slice()
    newSkill.splice(currPos, 1)
    newSkill.splice(newPos, 0, tag)
    setSkills(newSkill)
  }
  const handleDeleteSkills = i => {
    setSkills(skills.filter((_, index) => index !== i))
  }
  const handleTagClick = index => {
    console.log("at index " + index + " was clicked")
  }


  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper ed-modal skills-modal">
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
                }}
              >
                <h3 style={{
                  textAlign: "start",
                  fontSize: 18,
                }} className="text-muted">Key Skills</h3>
                <p
                  style={{
                    marginBottom: 25,
                    fontSize: 13,
                    lineHeight: '18px'
                  }}
                >Tell recruiters what you know or what you are known for e.g. Direct Marketing, Oracle, Java etc. We will send you job recommendations based on these skills. Each skill is separated by
                  a comma.</p>
              </div>

              <div className="skill-input-react-tag">
                <label htmlFor="name" className="input-label" >
                  Skills
                </label>
                <ReactTags
                  tags={skills}
                  placeholder="Enter your area of Expertise/Specialization"
                  // suggestions={suggestions}
                  delimiters={delimiters}
                  handleDelete={handleDeleteSkills}
                  handleAddition={handleAddition}
                  handleDrag={handleDragSkills}
                  handleTagClick={handleTagClick}
                  autocomplete
                  allowUnique
                  inline
                />
              </div>

              <div className="skills-select">
                <label htmlFor="name" className="input-label" >
                  Or you can select from the suggested set of skills
                </label>
                <div className="skills-list">
                  {currentData?.length >= 1 && currentData?.map((i, key) => (
                    <button key={key}>
                      {i} <IoIosClose />
                    </button>
                  ))}
                </div>
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

export default SkillsModal;
