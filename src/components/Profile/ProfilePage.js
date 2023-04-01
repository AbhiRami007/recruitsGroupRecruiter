import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import {
  AUTH_LOCAL_STORAGE_USER_DATA,
  getDocuments,
} from "../../core/AuthHelpers";
import {
  deleteDocument,
  getUserById,
  getUserDocuments,
  updateUserDocument,
} from "../../requests/Auth";
import DocumentDetails from "./components/DocumentDetails";
import PersonalDetails from "./components/PersonalDetails";
import ProfileInfo from "./components/ProfileInfo";
import SettingsDetails from "./components/SettingsDetails";
import ProfileUpdate from "./Update/ProfileUpdate";

function ProfilePage({ isChanged }) {
  const params = useParams();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [tab, setTab] = React.useState("overview");
  const [user, setUser] = useState();
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE_USER_DATA))?.id
  );
  const [updated, setUpdated] = useState(false);
  const [documents, setDocs] = useState();

  useEffect(() => {
    const getUserData = async () => {
      const uData = await getUserById(params.id);
      uData && setUser(uData.data.data);
      const docData = await getUserDocuments(params.id);
      docData&& setDocs(docData.data.data)

    };
    getUserData();
  }, []);

  const deleteCover = async () => {
    try {
      const data = await deleteDocument(userId, "cover_letter");
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setCoverData = async (files) => {
    try {
      const data = await updateUserDocument(userId, "cover_letter", files[0]);
      toast.success(data.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const setIsUserUpdated = () => {
    setUpdated(!updated);
    isChanged();
  };

  return (
    <>
      <ToastContainer draggablePercent={60} />
      <div className="dashboard-main-cont">
        <div className="profile-section-cont">
          <div className="profile-section-card">
            {user&&<ProfileInfo
              userUpdated={updated}
              setIsUserUpdated={setIsUserUpdated}
              setTab={setTab}
              tab={tab}
              userData={user}
              documents={documents}
            />}
          </div>
          <div className="profile-section-personal-details">
            {tab === "overview" &&user&& (
              <PersonalDetails
                setIsOpen={setIsOpen}
                userData={user}
                docs={documents}
                deleteCover={deleteCover}
                setCoverData={setCoverData}
                userUpdated={updated}
                setIsUserUpdated={setIsUserUpdated}
              />
            )}
            {tab === "documents" && user&& (
              <DocumentDetails
                docs={documents}
                user={user}
                userUpdated={updated}
                setIsUserUpdated={setIsUserUpdated}
              />
            )}
            {tab === "settings" && user&& (
              <SettingsDetails
                userData={user}
                setIsUserUpdated={setIsUserUpdated}
                userUpdated={setIsUserUpdated}
                documents={documents}
              />
            )}
          </div>

         {user&&<ProfileUpdate
            user={user}
            closeModal={() => setIsOpen(false)}
            isOpen={modalIsOpen}
            setIsUserUpdated={setIsUserUpdated}
          />}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
