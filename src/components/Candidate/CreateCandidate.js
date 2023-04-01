import React, { useState } from "react";
import { Form } from "react-bootstrap";
import BackgroundDesign from "../Shared/BackgroundDesign";
import Header from "../Shared/Header";
import blank from "../../assets/images/icons/blank.png";

import 'react-bootstrap-tagsinput/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  create,
  updateUser,
  updateUserDocument,
  updateUserImage,
} from "../../requests/Auth";
import {

  Spinner,
} from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
function CreateCandidate() {
  const [avatar, setAvatar] = useState("");
  const [image, setImage] = useState();
  const [resume, setResume] = useState();
  const [video, setVideo] = useState();
  const [cover, setCover] = useState();
      const [loading, setLoading] = React.useState(false);

  const createCandidate = async (e) => {
 setLoading(true);
    const loadData = async () => {
      setLoading(false);
    };
     if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    try {
      e.preventDefault();
      const body = {
        email: e.target.email.value,
        name: e.target.name.value,
        country: e.target.country.value,
        date_of_birth: e.target.date_of_birth.value,
      };
      console.log(body);
      const user = await create(body);
      const res = await updateUserDocument(user.data.data.id, "resume", resume);
      if (res.error) {
        toast.error("Failed to upload Resume");
      }
const vid = await updateUserDocument(user.data.data.id, "video_resume", video);
      if (vid.error) {
        toast.error("Failed to upload Video Resume");
      }
      const cov = await updateUserDocument(
        user.data.data.id,
        "cover_letter",
        cover
      );
      if (cov.error) {
        toast.error("Failed to upload Cover letter");
      }
      const avatar = await updateUserImage(user.data.data.id, image);
      if (avatar.error) {
        toast.error("Failed to upload User Image");
      }
      toast.success("User Created");
user&&res&&vid&&cov && loadData();
      setAvatar("");
      setCover("");
      setResume("");
      setVideo("");
      e.target.email.value = "";
      e.target.name.value = "";
      e.target.country.value = "";
      e.target.dob.value = "";
    } catch (e) {
      toast.error(
        e.response.data.message
          ? e.response.data.message
          : "All fields are required"
      );
    }
  };
  const setprofile = (event) => {
    if (event.target.files && event.target.files[0]) {
      setAvatar(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  const setResumeData = (event) => {
    if (event.target.files && event.target.files[0]) {
      setResume(event.target.files[0]);
    }
  };

const setVideoResumeData = (event) => {
    if (event.target.files && event.target.files[0]) {
      setVideo(event.target.files[0]);
    }
  };

  const setCoverData = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCover(event.target.files[0]);
    }
  };

  const reset = () => {};
  return (
    <>
{loading && (
        <div className="dash-load">
          {" "}
          <Spinner
            animation="border"
            color="primary"
            type="grow"
            className="spinner"
          />
        </div>
      )}
      <ToastContainer />
<BackgroundDesign/>
      <div className="dashboard-main-cont" style={{width:"100%"}}>
        <div className="dashboard-section-cont container">
          <h4 className="dashboard-header">Create New</h4>
          <form onSubmit={createCandidate} className="form-bg"
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "10px",
            }}>
            <div className="profile-pic-wrapper form-group">
              <div className="pic-holder ">
                <img
                  id="profilePic"
                  className="pic"
                  src={avatar ? avatar : blank}
                />

                <input
                  required
                  className="uploadProfileInput"
                  type="file"
                  name="profile_pic"
                  id="newProfilePhoto"
                  accept="image/*"
                  onChange={setprofile}
                  hidden
                />
                <label for="newProfilePhoto" className="upload-file-block">
                  <div className="text-center">
                    <div className="mb-2">
                      <i className="fa fa-camera fa-2x"></i>
                    </div>
                    <div className="text-uppercase">
                      Update <br /> Profile Photo
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="form-group">
              <label for="name">Full Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                aria-describedby="name"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                required
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label for="country">Location</label>
              <input
                type="country"
                className="form-control"
                id="country"
                name="country"
                aria-describedby="country"
                placeholder="Enter country"
                required
              />
            </div>
            <div className="form-group">
              <label for="date_of_birth">Date of birth</label>
              <input
                type="date_of_birth"
                className="form-control"
                id="date_of_birth"
                name="date_of_birth"
                aria-describedby="date_of_birth"
                placeholder="Enter Date of Birth"
                required
              />
            </div>
            <div className="form-group">
              <label for="resume" className="form-label">
                Resume
              </label>
              <input
                className="form-control"
                type="file"
                id="resume"
                onChange={setResumeData}
                required
              />
            </div>

<div className="form-group">
              <label for="resume" className="form-label">
                Video Resume
              </label>
              <input
                className="form-control"
                accept="video/*"
                type={"file"}
                id="video_resume"
                onChange={setVideoResumeData}
                required
              />
            </div>


            <div className="form-group">
              <label for="cover" className="form-label">
                Cover
              </label>
              <input
                className="form-control"
                type="file"
                id="cover"
                onChange={setCoverData}
                required
              />
            </div>

            <button className="btn btn-dark form-group" onClick={reset}>
              cancel
            </button>

            <button
              type="submit"
              style={{ marginLeft: "10px" }}
              className="btn btn-primary form-group"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </>
  );
}

export default CreateCandidate;
