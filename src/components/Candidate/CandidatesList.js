import React, {  useEffect, useState } from "react";
import {
  Badge,
  Button,
} from "react-bootstrap";
import {
  getAllCandidates,
  getUserDataById,
  updateUser,
} from "../../requests/Auth";
import { Link } from "react-router-dom";
import profile from "../../assets/images/icons/blank.png";
import Modal from "../Shared/Modal";
import { Table } from "react-bootstrap";

function CandidateList() {
  const [user, setUser] = useState([]);
  const [spam, setSpam] = useState(false);
  const [reported, setReported] = useState(false);
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [isSpamMsg, setIsSpamMsg] = useState("");
  const [ids, setIds] = useState([]);
  const [showUrl, setShowUrl] = useState(false);
  const [url, setUrl] = useState("");
  const [isChecked, setIsChecked] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await getAllCandidates();
      setUser(res.data.data);
    };
    getUser();
  }, []);

  const sendProfilesToClient = (e) => {
    // const url=`https://crm.therecruitsgroup.com/view-candidates?ids=${ids}`
    setUrl(`${process.env.REACT_APP_CLIENT_URL}/dashboard?id=[${ids}]`);
    if (ids.length > 0) {
      setShowUrl(true);
    }
    
  };

  const confirmSpam = (row) => {
    if (row.status == "spam") {
      setSpam(true);
      setUserId(row.id);
      setIsSpamMsg("Are you sure you want to report the user NOT SPAM?");
    } else {
      setSpam(true);
      setUserId(row.id);
      setIsSpamMsg("Are you sure you want to report the user as SPAM?");
    }
  };

  const closeModal = async () => {
    setSpam(false);
    const res = await getUserDataById(userId);
    if (res.data.data.status == "spam") {
      await updateUser(userId, { status: "pending" });
      setMessage("Reported not spam");
      setReported(true);
    } else {
      await updateUser(userId, { status: "spam" });
      setMessage("Reported spam");
      setReported(true);
    }
  };

  const candidatesSelect = (e, id) => {
    if (e.target.checked) {
      setIds([...ids, id]);
    }
  };

  return (
    <>

      <div className="row ">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>select </th>
                      <th>Image </th>
                      <th>Name </th>
                      <th> Phone No </th>
                      <th> Email Id </th>
                      
                      <th> Status </th>
                      <th> Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((row, i) => (
                      <tr key={i}>
                        <td>
                          <input
                            type="checkbox"
                            name="select"
                            id={row.id}
                            checked={isChecked[row.id]}
                            onChange={(e) => candidatesSelect(e, row.id)}
                          />
                        </td>
                        <td>
                          <img
                            className="avatar"
                            src={row.avatar ? row.avatar : profile}
                            alt="face"
                          />
                        </td>
                        <td>
                          <span className="pl-2">{row.name}</span>
                        </td>
                        <td> {row.phone ? row.phone : "Not Updated"}</td>
                        <td> {row.email} </td>
                        <td style={{ cursor: "pointer" }}>
                          {row.status == "pending" && (
                            <Badge bg="warning">Not Verified</Badge>
                          )}
                          {row.status == "spam" && (
                            <Badge bg="danger">Spam</Badge>
                          )}
                          {row.status == "accepted" && (
                            <Badge bg="success">Verified</Badge>
                          )}
                        </td>
                        <td>
                          <Link to={`/view-candidate/${row.id}`}>
                            <i className="fa fa-edit"></i>
                          </Link>

                          <i
                            className="fa fa-bug"
                            style={{
                              cursor: "pointer",
                              fontSize: "20px",
                              color: "red",
                              marginLeft: "5px",
                            }}
                            onClick={() => confirmSpam(row)}
                          ></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showUrl && <a href={url}>{url}</a>}
<br/>
      <Button onClick={sendProfilesToClient}>Send Profiles to Client</Button>

      <Modal
        message={isSpamMsg}
        open={spam}
        title="Confirmation"
        close={closeModal}
        content={message}
      />
    </>
  );
}

export default CandidateList;
