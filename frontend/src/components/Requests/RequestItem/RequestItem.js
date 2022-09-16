import React, { useContext, useEffect, useState } from "react";
import Card from "../../CustomUIElements/Card/Card";
import Button from "../../CustomUIElements/FormElements/Button/Button";
import ErrorModal from "../../CustomUIElements/Modals/ErrorModal";
import LoadingSpinner from "../../CustomUIElements/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../../context/auth-context";
import { useHttpClient } from "../../../hooks/http-hook";
import "./RequestItem.css";

const RequestItem = (props) => {
  // Stateful variables
  const { isLoading, error, clearError } = useHttpClient();
  const auth = useContext(AuthContext);

  // Actual UI
  return (
    <React.Fragment>
      <div className={"request-item-class"}>
        <ErrorModal error={error} onClear={clearError} />
        {/* Request Card Information */}
        <li className='request-item'>
          <Card className='request-item__content'>
            {isLoading && <LoadingSpinner asOverlay />}
            <div className='request-item__info'>
              {/* <h2>{props.name}</h2>
              <h3>{props.address}</h3> */}
            </div>
            <div className='request-item__actions'>
              {/* <Button inverse onClick={openMapHandler}>
                ΔΕΙΤΕ ΤΟ ΣΤΟΝ ΧΑΡΤΗ <i className="bi bi-eye"></i>
              </Button> */}
            </div>
          </Card>
        </li>
      </div>
      {/* Displays Toast According to Events */}
    </React.Fragment>
  );
};

export default RequestItem;
