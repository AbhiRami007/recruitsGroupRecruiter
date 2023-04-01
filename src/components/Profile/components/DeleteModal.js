import React from "react";
import Modal from "react-modal";
import confirmImg from "../../../assets/images/icons/confirm.svg"
import { useEffect } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: window.screen.width < 768 ? "90%" : "40%",
    padding: "0",
    zIndex: 999
  },
};

function DeleteModal({ isOpen, closeModal, onDelete }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="job-modal-wrapper">
          <div className="modal-header p-30 "
            style={{
              display: "flex"
              , flexDirection: "column"
            }}
          >
            <div className="content"
              style={{
                textAlign: "center",
              }}
            >
              <h3 style={{
                textAlign: "center",
                fontSize: 16,
                marginBottom: 20
              }}>You are sure you want to remove profile picture ?</h3>
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
                  borderRadius: 10
                }}
                className="" onClick={closeModal}>
                cancel
              </button>
              <button
                style={{
                  height: 38,
                  marginRight: 10,
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: 10,
                  backgroundColor: "#4892f0"
                  , color: "#fff"

                }}
                className="" onClick={onDelete}>
                remove
              </button>

            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DeleteModal;
