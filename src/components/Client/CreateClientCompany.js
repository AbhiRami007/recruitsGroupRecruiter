import React, { useState } from "react";
import { Form } from "react-bootstrap";
import BackgroundDesign from "../Shared/BackgroundDesign";
import Header from "../Shared/Header";
import blank from "../../assets/images/icons/blank.png";
import Select from "react-select";

import "react-bootstrap-tagsinput/dist/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createJob,
} from "../../requests/Auth";
import {

  Spinner,
} from "reactstrap";

import { toast, ToastContainer } from "react-toastify";
function CreateClient() {
  const [image, setImage] = useState();
  const [logo, setLogo] = useState();
  const [file, setFiles] = useState([]);
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


  const createClient = async (e) => {
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
        company: data.company.value,
        company_url: data.company_url.value,
        location: data.location.value,
        employee_count: data.employee_count.value,
        company_type: data.company_type.value,
        sector: data.keywords.value.split("," ? "," : ""),
      };
      const formdata = new FormData();
      formdata.append("files", file[0]);
      formdata.append("company", body.company);
      formdata.append("company_url", body.company_url);
      formdata.append("location", body.location);
      formdata.append("employee_count", body.employee_count);
      formdata.append("company_type", body.company_type);
      formdata.append("sector", body.sector);
      const job = await createJob(formdata, "jobs");
      job && loadData();
      toast.success("Company Created");

      setImage("");
      setLogo("");
      setFiles([]);

      data.company.value = "";
      data.company_url.value = "";
      data.location.value = "";
      data.employee_count.value = "";
      data.company_type.value = "";
      data.sector.value=""
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
          <h4 className="dashboard-header">Create Client Company</h4>
          <form
            onSubmit={createClient}
            className="form-bg"
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "10px",
            }}
          >

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
                      Update <br /> Logo
                    </div>
                  </div>
                </label>
              </div>
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
              <label for="keywords">Sector</label>
              <textarea
                rows="10"
                cols="50"
                type="keywords"
                className="form-control"
                id="keywords"
                name="keywords"
                aria-describedby="keywords"
                required
                placeholder="Specify industry as comma separated list"
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

export default CreateClient;