import React, { useContext, useEffect, useState } from "react";
import RequestList from "../RequestList/RequestList";
import ErrorModal from "../../CustomUIElements/Modals/ErrorModal";
import LoadingSpinner from "../../CustomUIElements/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../hooks/http-hook";
import { AuthContext } from "../../../context/auth-context";
import Toast from "../../CustomUIElements/Toast/Toast"
import './UserRequests.css';

const UserRequests = () => {
  const [loadedRequests, setLoadedRequests] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  //Notification (Toast)
  const notificationRef = React.createRef()
  const [notification, setNotification] = React.useState({})

  // Notifications Runner
  useEffect(() => {
    if (notification) {
      notificationRef.current.toast()
    }
  }, [notification]);

  const userId = auth.userId;

  useEffect(() => {
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      {/* Loading */}
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      {/* Renders a request List */}
      {/* {!isLoading && loadedRequests && (
        <div className={"user-requests"}>
          <h1>Τα Αιτήματα Μου <i className="bi bi-card-list"></i></h1>
          <RequestList
            items={loadedRequests}
          />
        </div>
      )} */}
      <Toast ref={notificationRef} type={notification.type} message={notification.message}></Toast>
    </React.Fragment>
  );
};

export default UserRequests;
