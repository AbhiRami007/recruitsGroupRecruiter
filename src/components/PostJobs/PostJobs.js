import React, { useState } from "react";
import { Form } from "react-bootstrap";
import BackgroundDesign from "../Shared/BackgroundDesign";
import Header from "../Shared/Header";
import blank from "../../assets/images/icons/blank.png";
import Select from "react-select";

import "react-bootstrap-tagsinput/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  create,
  createJob,
  updateUser,
  updateUserDocument,
  updateUserImage,
} from "../../requests/Auth";
import {

  Spinner,
} from "reactstrap";

import { InputTags } from "react-bootstrap-tagsinput";
import { toast, ToastContainer } from "react-toastify";
function PostJobs({ isJobUpdated }) {
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();
  const [state, setState] = useState([]);
  const [file, setFiles] = useState([]);
  const [description, setDescription] = useState([]);
  const [responsibility, setResponsibility] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [preference, setPreference] = useState([]);
  const options = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
  ];

  const levelOption = [
    { value: "Entry level", label: "Entry Level" },
    { value: "Experienced", label: "Experienced" },
  ];
  const countOption = [
    { value: "0 - 50", label: "0 - 50" },
    { value: "5 - 100", label: "5 - 100" },
    { value: "100 - 500", label: "100 - 500" },
    { value: "500 - 1000", label: "500 - 1000" },
    { value: "1000 - 5000", label: "1000 - 5000" },
    { value: "5000+", label: "5000+" },
  ];
      const [loading, setLoading] = React.useState(false);


  const createJobPost = async (e) => {
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
      const data = e.target;
      const body = {
        title: data.title.value,
        company: data.company.value,
        company_url: data.company_url.value,
        location: data.location.value,
        job_type: data.job_type.value,
        level: data.level.value,
        salary_offered: data.salary_offered.value,
        employee_count: data.employee_count.value,
        company_type: data.company_type.value,
        requirements: data.requirements.value.split("," ? "," : ""),
        job_description: data.job_description.value.split("," ? "," : ""),
        job_responsibilities: data.job_responsibilities.value.split(
          "," ? "," : ""
        ),
        qualifications: data.qualifications.value.split("," ? "," : ""),
        preference: data.preference.value.split("," ? "," : ""),
        working_at: data.working_at.value.split("," ? "," : ""),
        about_company: data.about_company.value.split("," ? "," : ""),
      };
      const formdata = new FormData();
      formdata.append("files", file[0]);
      formdata.append("files", file[1]);
      formdata.append("title", body.title);
      formdata.append("company", body.company);
      formdata.append("company_url", body.company_url);
      formdata.append("location", body.location);
      formdata.append("job_type", body.job_type);
      formdata.append("level", body.level);
      formdata.append("salary_offered", body.salary_offered);
      formdata.append("employee_count", body.employee_count);
      formdata.append("company_type", body.company_type);
      formdata.append("requirements", body.requirements);
      formdata.append("job_description", body.job_description);
      formdata.append("job_responsibilities", body.job_responsibilities);
      formdata.append("qualifications", body.qualifications);
      formdata.append("preference", body.preference);
      formdata.append("working_at", body.working_at);
      formdata.append("about_company", body.about_company);
      const job = await createJob(formdata, "jobs");
      job && loadData();
      toast.success("Job Post Created");
      isJobUpdated(true);

      setImage("");
      setLogo("");
      setFiles([]);

      data.title.value = "";
      data.company.value = "";
      data.company_url.value = "";
      data.location.value = "";
      data.job_type.value = "";
      data.level.value = "";
      data.salary_offered.value = "";
      data.employee_count.value = "";
      data.company_type.value = "";
      data.requirements.value = "";
      data.job_description.value = "";
      data.job_responsibilities.value = "";
      data.qualifications.value = "";
      data.preference.value = "";
      data.working_at.value = "";
      data.about_company.value = "";
    } catch (e) {
      toast.error(
        e.response.data.message
          ? e.response.data.message
          : "All fields are required"
      );
    }
  };

  const setLogoImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(URL.createObjectURL(event.target.files[0]));
      setFiles((prev) => [...prev, event.target.files[0]]);
    }
  };

  const setJobImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setFiles((prev) => [...prev, event.target.files[0]]);
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
      <BackgroundDesign />

      <div className="dashboard-main-cont">
        <div className="dashboard-section-cont container">
          <h4 className="dashboard-header">Create New Job</h4>
          <form
            onSubmit={createJobPost}
            className="form-bg"
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "10px",
            }}
          >
            <div class="pic-holder-jobs form-group">
              <img id="profilePic" class="pic" src={image} />

              <input
                required
                class="uploadProfileInput"
                type="file"
                name="profile_pic"
                id="newJobs"
                accept="image/*"
                onChange={setJobImage}
                hidden
              />
              <label for="newJobs" class="upload-file-block">
                <div class="text-center">
                  <div class="mb-2">
                    <i class="fa fa-camera fa-2x"></i>
                  </div>
                  <div class="text-uppercase">
                    Update <br /> Job Post Image
                  </div>
                </div>
              </label>
            </div>

            <div className="profile-pic-wrapper form-group">
              <div className="pic-holder ">
                <img
                  id="profilePic"
                  className="pic"
                  src={logo ? logo : blank}
                />

                <input
                  required
                  className="uploadProfileInput"
                  type="file"
                  name="profile_pic"
                  id="newProfilePhoto"
                  accept="image/*"
                  onChange={setLogoImage}
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
              <label for="title">Job Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="title"
                placeholder="Enter Job Title"
                required
              />
            </div>
            <div className="form-group">
              <label for="company">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                aria-describedby="company"
                placeholder="Enter Company Name"
                required
              />
            </div>

            <div className="form-group">
              <label for="company_url">Company URL</label>
              <input
                type="text"
                className="form-control"
                id="company_url"
                name="company_url"
                aria-describedby="company_url"
                placeholder="Enter Company URL"
                required
              />
            </div>

            <div className="form-group">
              <label for="location">Company Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                aria-describedby="location"
                placeholder="Company Location"
                required
              />
            </div>

            <div className="form-group">
              <label for="job_type">Job Type</label>
              <Select options={options} name="job_type" />
            </div>

            <div className="form-group">
              <label for="level">Job level</label>
              <Select name="level" options={levelOption} />
            </div>

            <div className="form-group">
              <label for="salary_offered">Salary Offered</label>
              <input
                type="text"
                className="form-control"
                id="salary_offered"
                name="salary_offered"
                aria-describedby="salary_offered"
                placeholder="Enter Salary Offered"
                required
              />
            </div>
            <div className="form-group">
              <label for="employee_count">Employee count</label>
              <Select name="employee_count" options={countOption} />
            </div>

            <div className="form-group">
              <label for="company_type">Enter company type</label>
              <input
                type="company_type"
                className="form-control"
                id="company_type"
                name="company_type"
                aria-describedby="company_type"
                required
                placeholder="Eg: Software Development"
              />
            </div>

            <div className="form-group">
              <label for="requirements">Requirements</label>
              <textarea
                rows="10"
                cols="50"
                type="requirements"
                className="form-control"
                id="requirements"
                name="requirements"
                aria-describedby="requirements"
                required
                placeholder="Comma seperated list of requirements"
              />
            </div>

            <div className="form-group">
              <label for="job_description">Job Description</label>
              <textarea
                rows="10"
                cols="50"
                type="job_description"
                className="form-control"
                id="job_description"
                name="job_description"
                aria-describedby="job_description"
                required
                placeholder="Enter job description"
              />
            </div>

            <div className="form-group">
              <label for="job_responsibilities">Job Responsibilities</label>
              <textarea
                rows="10"
                cols="50"
                type="job_responsibilities"
                className="form-control"
                id="job_responsibilities"
                name="job_responsibilities"
                aria-describedby="job_responsibilities"
                required
                placeholder="Comma seperated list of responsibilities"
              />
            </div>

            <div className="form-group">
              <label for="qualifications">Qualifications</label>
              <textarea
                rows="10"
                cols="50"
                type="qualifications"
                className="form-control"
                id="qualifications"
                name="qualifications"
                aria-describedby="qualifications"
                required
                placeholder="Comma seperated list of qualifications"
              />
            </div>
            <div className="form-group">
              <label for="preference">Preference List</label>
              <textarea
                rows="10"
                cols="50"
                type="preference"
                className="form-control"
                id="preference"
                name="preference"
                aria-describedby="preference"
                required
                placeholder="Comma seperated list of preference"
              />
            </div>

            <div className="form-group">
              <label for="working_at">Work Culture</label>
              <textarea
                rows="10"
                cols="100"
                type="working_at"
                className="form-control"
                id="working_at"
                name="working_at"
                aria-describedby="working_at"
                placeholder="Describe working at company"
              />
            </div>
            <div className="form-group">
              <label for="about_company" className="form-label">
                Company Details
              </label>
              <textarea
                rows="10"
                cols="100"
                type="about_company"
                className="form-control"
                id="about_company"
                name="about_company"
                aria-describedby="about_company"
                placeholder="Give details about the company"
              />
            </div>

            <button className="btn btn-dark form-group" onClick={reset}>
              cancel
            </button>

            <button
              type="submit"
              style={{ marginLeft: "5px" }}
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

export default PostJobs;
