import React, {useState, useEffect, useContext} from "react";
import Card from "../CustomUIElements/Card/Card";
import Input from "../CustomUIElements/FormElements/Input/Input";
import Button from "../CustomUIElements/FormElements/Button/Button";
import ErrorModal from "../CustomUIElements/Modals/ErrorModal";
import LoadingSpinner from "../CustomUIElements/LoadingSpinner/LoadingSpinner";
import Modal from "../CustomUIElements/Modals/Modal";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../util/validators";
import {useForm} from "../../hooks/form-hook";
import {useHttpClient} from "../../hooks/http-hook";
import {AuthContext} from "../../context/auth-context";
import "./Auth.css";
import {useNavigate} from "react-router";
// import jwt from 'jwt-decode'
// import {Alert} from "@mui/material";
import Toast from "../CustomUIElements/Toast/Toast"
import {Col, Container, Row} from "react-grid-system";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const {isLoading, error, sendRequest, clearError} = useHttpClient();
  const [resetPasswordModal, setResetPasswordModal] = useState(false);
  const [emailForm, setEmailForm] = useState("");
  const [reportAlert, setReportAlert] = useState({isVisible: false, message: "", severity: "success"});

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const notificationRef = React.createRef()
  const [notification, setNotification] = React.useState({})

  useEffect(() => {
    if (notification) {
      notificationRef.current.toast()
    }
  }, [notification]);

  const handleEmailInputChange = (event) => {
    const target = event.target;
    const email = target.value;

    setEmailForm(email);
  };

  const resetPasswordHandler = () => {
    setResetPasswordModal(true);
  };

  const cancelResetPasswordHandler = () => {
    setResetPasswordModal(false);

  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const confirmResetPasswordHandler = async () => {
    cancelResetPasswordHandler()
    if (emailForm.length !== 0) {
      try {
        await sendRequest(
          process.env.REACT_APP_BACKEND_URL + `/users/password-reset`,
          "POST",
          JSON.stringify({
            email: emailForm
          }),

          {
            "Content-Type": "application/json",
          }
        );
        setNotification({type: "success", message: "Θα σας έρθει email για την αλλαγή κωδικού"})
      } catch (err) {

      }
    } else {
      setReportAlert({isVisible: true, message: "Το πλαίσιο είναι κενό", severity: "error"})
      setTimeout(() => {
        setReportAlert({isVisible: false, message: "", severity: "success"})
      }, 5000)
    }
    setEmailForm("");
  }


  return (
    <React.Fragment>
      <Container className="auth-page">
        <Row>
          <Col>
            <ErrorModal error={error} onClear={clearError}/>
            <Card className='authentication'>
              {isLoading && <LoadingSpinner asOverlay/>}
              <h2> {isLoginMode ? <span>Σύνδεση</span> :
                <span>Δημιουργία νέου λογαριασμού</span>}</h2>
              <hr/>
              <form>
                <Input
                  element='input'
                  id='email'
                  type='email'
                  label='E-Mail'
                  validators={[VALIDATOR_EMAIL()]}
                  errorText='Παρακαλούμε χρησιμοποιήστε έγκυρο email.'
                  onInput={inputHandler}
                />
                <Input
                  element='input'
                  id='password'
                  type='password'
                  label='Κωδικός πρόσβασης'
                  validators={[VALIDATOR_MINLENGTH(8)]}
                  errorText='Παρακαλούμε χρησιμοποιήστε έγκυρο κωδικό πρόσβασης. Τουλάχιστον οχτώ χαρακτήρων.'
                  onInput={inputHandler}
                />

                {isLoginMode &&
                  <div style={{textAlign: "right", marginBottom: "20px"}}>
                    <a
                      onClick={resetPasswordHandler}
                      className="resetP">
                      Ξεχάσατε τον κωδικό σας?
                    </a>
                  </div>
                }

                {!isLoginMode &&
                  <div><input id='agreement' type="checkbox" required/> Συμφωνώ με τους<a href="/terms"> όρους χρήσης</a> της
                    ιστο-εφαρμογής.</div>
                }
                <Button type='submit' disabled={!formState.isValid}>
                  {isLoginMode ? <span>Σύνδεση <i className="bi bi-box-arrow-in-right"></i></span> :
                    <span>Δημιουργία νέου λογαριασμού <i
                      className="bi bi-hammer"></i></span>}
                </Button>
              </form>
              <Button inverse onClick={switchModeHandler}>
                Μεταφερθείτε στην {isLoginMode ? "δημιουργία νέου λογαριασμού" : "σύνδεση"} <i
                className="bi bi-arrow-repeat"></i>
              </Button>
            </Card>
            {!isLoginMode &&
              <Card className="data-card"><p className="data-usage-info">Το email σας το χρησιμοποιούμε μόνο για
                δημιουργία λογαριασμού στην
                εφαρμογή και για την ενημέρωση σας σχετικά με τις υπηρεσίες που προσφέρουμε.<br/><br/>
                Οι χρήστες της ιστο-εφαρμογής μας προστατεύονται από τους <a
                  href="https://support.google.com/googleplay/android-developer/topic/9858052?hl=en">κανονισμούς της
                  Google</a>. Περαιτέρω, οι χρήστες της Ευρωπαϊκής Ένωσης και Ηνωμένων Εθνών της Αμερικής προστατεύονται
                επιπλέον <a href="https://www.privacyshield.gov/EU-US-Framework">από αυτούς τους νόμους</a>.</p>
              </Card>
            }
          </Col>
        </Row>
      </Container>
      <Toast ref={notificationRef} type={notification.type} message={notification.message}></Toast>
    </React.Fragment>
  );
};

export default Auth;
