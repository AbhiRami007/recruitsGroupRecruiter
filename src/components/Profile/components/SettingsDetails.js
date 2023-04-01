import React, { Fragment } from "react";
import download from "../../../assets/images/icons/download.png";
import profilImage from "../../../assets/images/icons/blank.png";
import { useForm } from "react-hook-form";
import {
  deleteDocument,
  deleteUserImage,
  updateUser,
  updateUserDocument,
  updateUserImage,
} from "../../../requests/Auth";
import {
  getDocuments,
  getUser,
  setDocuments,
  setUser,
} from "../../../core/AuthHelpers";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { ImSpinner6 } from "react-icons/im";
import ConfirmModal from "./ConfirmModal";
import { HiOutlinePencil } from "react-icons/hi";
import PhoneVerifyModal from "./PhoneVerifyModal";
import ChangeEmailModal from "./ChangeEmailModal";
import ChangePasswoardModal from "./ChangePasswoardModal";
import { NavHashLink } from 'react-router-hash-link';

function SettingsDetails({
  updateUserData,
  userData,
  documents,
  setIsUserUpdated,
  userUpdated,
}) {
  const [docs, setDocs] = useState(documents);
  const [user, setUserData] = useState(userData);
  const [sideTab, setSideTab] = React.useState(1);
  const [avatar, setAvatar] = useState(userData.avatar);

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const resetObj = {
    name: user.name ? user.name : "",
    email: user.email ? user.email : "",
    phone: user.phone ? user.phone : "",
    position: user.position ? user.position : "",
    address: user.address ? user.address : "",
    company: user.company ? user.company : "",
    language: user.language ? user.language : "",
  };
  const onSubmit = async (values) => {
    console.log(values);
    try {
      const userUpdate = await updateUser(user.id, values);
      setUser(userUpdate.data.data);
      setIsUserUpdated(true);
      toast.success("Details updated");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      resetForm();
    }
  }, [formState, reset]);

  const resetForm = () => {
    reset(resetObj);
  };
  useEffect(() => {
    setDocs(getDocuments());
    setUser(getUser());
    setUserData(getUser());
  }, [userUpdated]);

  const setVideoResume = async (e) => {
    const updateDocsData = await updateUserDocument(
      user.id,
      "video_resume",
      e.target.files[0]
    );
    setDocuments(updateDocsData.data.data);
    setIsUserUpdated(true);
  };

  const uploadProfile = async (event) => {
    try {
      if (event.target.files && event.target.files[0]) {
        setAvatar(URL.createObjectURL(event.target.files[0]));
      }
      const avatar = await updateUserImage(user.id, event.target.files[0]);
      setUser(avatar.data.data);
      setIsUserUpdated(true);
      toast.success(avatar.data.message);
    } catch (e) {
      toast.success(e.response.message);
    }
  };

  const removeImage = async () => {
    try {
      if (user.avatar) {
        const avatar = await deleteUserImage(user.id);
        setAvatar("");
        setUser(avatar.data.data);
        setIsUserUpdated(true);
        toast.success(avatar.data.message);
      } else {
        toast.error("Profile picture not updated");
      }
    } catch (e) {
      toast.success(e.response.message);
    }
  };

  const [confirmModal, setConfirmModal] = useState({ status: false, id: "" });
  const handleModalOpen = (id) => {
    setConfirmModal({ status: true, id: id });
  };

  const handleFileChange = (e) => {
    setVideoResume(e);
    setConfirmModal({ status: false, id: "" });
  };

  const [verifyModal, setVerifyModal] = useState({
    status: false,
    data: {},
  });
  const [changeEmailModal, setChangeEmailModal] = useState({
    status: false,
    data: {},
  });
  const [changePasswordModal, setChangePasswordModal] = useState({
    status: false,
    data: {},
  });

  const deleteVideo = async (e) => {
    try {
      const documents = await deleteDocument(user.id, e.target.name);
      setDocuments(documents.data.data);
      setIsUserUpdated(true);
      toast.success(documents.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Fragment>
      <ConfirmModal
        labelId={confirmModal?.id}
        isOpen={confirmModal?.status}
        closeModal={() => setConfirmModal({ status: false, id: "" })}
      />

      {confirmModal.status == false && <ToastContainer draggablePercent={60} />}

      <div className="profile-section-personal-detail-left document-details-left">
        <div className="personal-detail-title">
          <h4>Settings</h4>
        </div>
        <ul>
          <li
            className={sideTab === 8 && "document-details-head"}
            onClick={() => setSideTab(8)}
          >
            <NavHashLink smooth to="/profile#account-sn" >
              Account
            </NavHashLink>
            <button className="cursor-pointer">UPDATE</button>
          </li>
          {/* <li
            className={sideTab === 1 && "document-details-head"}
            onClick={() => setSideTab(1)}
          >
            Profile picture <button className="cursor-pointer">UPDATE</button>
          </li> */}
          <li
            className={sideTab === 2 && "document-details-head"}
            onClick={() => setSideTab(2)}
          >
            <NavHashLink smooth to="/profile#username-sn" >
              User Name
            </NavHashLink>
            <button className="cursor-pointer">UPDATE</button>
          </li>
          {/* <li
            className={sideTab === 3 && "document-details-head"}
            onClick={() => setSideTab(3)}
          >
            Location <button className="cursor-pointer">ADD</button>
          </li> */}
          <li
            className={sideTab === 4 && "document-details-head"}
            onClick={() => setSideTab(4)}
          >
            <NavHashLink smooth to="/profile#position-sn" >
              Position
            </NavHashLink>
            <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 5 && "document-details-head"}
            onClick={() => setSideTab(5)}
          >
            <NavHashLink smooth to="/profile#email-sn" >
              Email
            </NavHashLink>
            <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 6 && "document-details-head"}
            onClick={() => setSideTab(6)}
          >
            <NavHashLink smooth to="/profile#phone-sn" >
              Phone Number
            </NavHashLink>
            <button className="cursor-pointer">ADD</button>
          </li>
          <li
            className={sideTab === 7 && "document-details-head"}
            onClick={() => setSideTab(7)}
          >
            <NavHashLink smooth to="/profile#video-sn" >
              Video
            </NavHashLink>
            <button className="cursor-pointer">UPDATE</button>
          </li>
        </ul>
      </div>


      <div className="profile-section-personal-detail-right">

        <div className="profile-section-personal-table">
          <div className="settings-profile-details">
            <>
              <PhoneVerifyModal
                isOpen={verifyModal?.status}
                closeModal={() => setVerifyModal({ status: false, data: {} })}
                currentData={verifyModal?.data}
              />
              <ChangeEmailModal
                isOpen={changeEmailModal?.status}
                closeModal={() => setChangeEmailModal({ status: false, data: '' })}
                currentData={changeEmailModal?.data}
              />
              <ChangePasswoardModal
                isOpen={changePasswordModal?.status}
                closeModal={() => setChangePasswordModal({ status: false, data: '' })}
                currentData={changePasswordModal?.data}
              />
              <div className="settings-profile-details settings-account" id="account-sn">
                <h4>Account Settings</h4>

                <p style={{ marginBottom: 25 }} className="text-muted">
                  Change your primary email, mobile number or password.
                </p>

                <h5>Email Address</h5>

                <div>
                  <p>Primary Email</p>
                  <h6>mohammedsalihak350@gmail.com</h6>
                </div>
                <button onClick={() => setChangeEmailModal({ status: true, data: 'mohammedsalihak350@gmail.com ' })}>Change Email</button>

                <div>
                  <h5>Mobile number</h5>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 30,
                    }}
                  >
                    <p className="mb-0">9947453142</p>
                    <HiOutlinePencil color="#509dff" className="mx-2" />
                    <button
                      className="mb-0"
                      onClick={() => setVerifyModal({ status: true })}
                    >
                      Verify
                    </button>
                  </div>
                </div>

                <div>
                  <h5>Password</h5>
                  <button onClick={() => setChangePasswordModal({ status: true, data: '123456' })}>Change Password</button>
                </div>

              </div></>
            {/* <h4>Your Profile Picture</h4> */}
            {/* <div className="settings-profile-image-wrap"> */}
            {/* <div className="settings-profile-image"> */}
            {/* <img
                  src={
                    avatar ? avatar : user.avatar ? user.avatar : profilImage
                  }
                  width={"100%"}
                  height={"100%"}
                  alt="profile-images"
                />
              </div>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="cursor-pointer upload-new"
                onClick={uploadProfile}
                text="Upload New"
              /> */}
            {/* <div className="pic-holder">
                  <img
                    id="profilePic"
                    className="pic"
                    src={avatar ? avatar : profilImage}
                  />

                  <input
                    required
                    className="uploadProfileInput"
                    type="file"
                    name="profile_pic"
                    id="newProfilePhoto"
                    accept="image/*"
                    onChange={uploadProfile}
                    hidden
                  />
                  <label for="newProfilePhoto" className="upload-file-block">
                    <div className="text-center">
                      <div className="mb-2">
                        <i
                          className="fa fa-camera fa-2x"
                          style={{ marginRight: "10px" }}
                        ></i>
                      </div>
                      <div className="text-uppercase">
                        Update <br /> Profile Photo
                      </div>
                    </div>
                  </label>
                </div>

                <button
                  className="cursor-pointer remove-profile"
                  onClick={removeImage}
                >
                  Remove Profile Picture
                </button> */}
            {/* </div> */}
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="settings-input" style={{ marginBottom: "30px" }}>
            <label htmlFor="name" className="input-label" >
              Full Name
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Full Name"
              label="Full Name"
              type="text"
              defaultValue={user.name ? user.name : ""}
              {...register("name", { required: true })}
              name="name"
              id="username-sn"
            />
            <div>
              {errors.name && (
                <span className="validation">{`Name is ${errors.name.type}`}</span>
              )}
            </div>

            <label htmlFor="email" className="input-label">
              Email
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Email"
              type="email"
              defaultValue={user.email ? user.email : ""}
              {...register("email", { required: true })}
              name="email"
              id="email-sn"

            />
            <div>
              {errors.email && (
                <span className="validation">{`Email is ${errors.email.type}`}</span>
              )}
            </div>

            <label htmlFor="phone" className="input-label">
              Contact Number
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Contact Number"
              type="number"
              defaultValue={user.phone ? user.phone : ""}
              {...register("phone", { required: true })}
              name="phone"
              id="phone-sn"

            />
            <div>
              {errors.phone && (
                <span className="validation">{`Contact is ${errors.phone.type}`}</span>
              )}
            </div>

            <label htmlFor="position" className="input-label">
              Position
            </label>
            <input
              className="profile-input"
              placeholder="Enter your Position"
              type="text"
              defaultValue={user.position ? user.position : ""}
              {...register("position")}
              name="position"
              id="position-sn"

            />

          </form>
          {/* <form onSubmit={""} className="settings-input">
            <ProfileInput
              placeholder="Enter your User Name"
              label="User Name"
              type="text"
            />

            <ProfileInput
              label={"Location"}
              placeholder="Enter your email "
              type="text"
            />
            <ProfileInput
              label={"Position"}
              placeholder="Enter your Position"
              type="text"
            />
            
            <ProfileInput
              label={"Phone Number"}
              placeholder="Enter your Phone Number"
              type="number"
            />
          </form> */}
          <div className="profile-section-personal-resume settings" id="video-sn">
            <div className="personal-detail-title">
              <h4>Upload Video</h4>
            </div>

            {docs && docs.video_resume ? (
              <div className="profile-section-personal-resume-update">
                <div>
                  {docs.video_resume.split("/").pop()}
                  {/* <span>
                    Updated on{" "}
                    {files &&
                      moment(files[0]?.lastModified).format("DD-MM-YYYY")}
                  </span> */}
                </div>
                <div className="resume-delete">
                  <img
                    className="cursor-pointer"
                    src={download}
                    height={25}
                    alt="download-icon"
                  />
                  <button
                    className="cursor-pointer"
                    name="video_resume"
                    onClick={(e) => deleteVideo(e)}
                  >
                    DELETE VIDEO
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="resume-update">
              <input
                accept="video/*"
                type={"file"}
                id="resume-update"
                onChange={handleFileChange}
                placeholder=""
                style={{ opacity: 0, visibility: "hidden" }}
              />
              <label
                className="button"
                htmlFor="resume-updat"
                onClick={() => handleModalOpen("resume-update")}
              >
                UPDATE <ImSpinner6 className="spinner" style={{ margin: "0 5px" }} />
              </label>
              <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default SettingsDetails;
