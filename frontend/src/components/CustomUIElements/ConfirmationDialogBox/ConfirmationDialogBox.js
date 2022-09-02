import React from 'react';
import PropTypes from 'prop-types';
import './ConfirmationDialogBox.css';
import {Box, Dialog, DialogActions, DialogContent} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "../FormElements/Button/Button";

/*
  Title= String title of dialog
  Description = String description
  setVisibility = Set Function created from useState hook
  onAgree = Function to execute on user agree
  onDisagree = Function to execute on user disagree
 */
const ConfirmationDialogBox = ({title, description, setVisibility, onAgree, onDecline}) => {
  //Hooks
  const handleClickOpen = () => {
    setVisibility(true);
  };

  const handleClose = () => {
    setVisibility(false);
  };

  const handleCloseDisagree = () => {
    handleClose();
    onDecline();
  };

  const handleCloseAgree = () => {
    handleClose();
    onAgree();
  };

  return (
    <div className="ConfirmationDialogBox">
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            flexWrap="wrap"
          >
            <Button onClick={handleCloseDisagree}>Δεν Συμφωνώ</Button>
            <Button onClick={handleCloseAgree} autoFocus>Συμφωνώ</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ConfirmationDialogBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onAgree: PropTypes.func,
  onDecline: PropTypes.func,
};

ConfirmationDialogBox.defaultProps = {
  title: "Confirmation Box",
  description: "",
  onAgree: function () {
  },
  onDecline: function () {
  }
};

export default ConfirmationDialogBox;
