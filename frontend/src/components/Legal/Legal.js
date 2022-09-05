import React from 'react';
import {Col, Container, Row} from 'react-grid-system';
import "./Legal.css";
import Card from "../CustomUIElements/Card/Card";

// Sharable Styles
export const legalHeadingStyles = {
  textAlign: "center",
  color: "#4deb00",
  fontWeight: "bold",
}

export const legalButtonStyles = {
  backgroundColor: "green",
  marginBottom: "15px"
}

const iconStyles = {
  fontSize: "100px"
}

const legalLink = {
  textDecoration: "none",
  color: "inherit",
}

const optionStyle = {
  display: "inline"
}

const columnStyle = {
  textAlign: "center"
}

const addSpaceStyle = {
  marginBottom: "20px"
}

export function Legal() {
  return <React.Fragment>
    <Container className="legal-page">
      <Row>
        <Col md={12}>
          {/* Information Area */}
          <h1 style={legalHeadingStyles}>Δεδομένα Νομιμότητας <i className="bi bi-bank2"></i></h1>
          <Card style={addSpaceStyle}>
            <p>Η ιστο-εφαρμογή του Δήμου Θεσσαλονίκης εγγυάται ασφάλεια στους χρήστες της συμμορφώνοντας την πλατφόρμα
              με
              παγκόσμια αναγνωρισμένους όρους και προϋποθέσεις παροχής υπηρεσιών της Ευρωπαϊκής Ένωσης, εξωτερικών
              οργανισμών και υπηρεσιών (όπως Google). Οι πολιτικές και όροι χρήσης παρέχονται μόνο στα αγγλικά προς το
              παρόν
              λόγω κανονισμών εξωτερικών υπηρεσιών της ιστο-εφαρμογής.<br/><br/>Επιλέξτε ένα από τα εικονίδια και θα
              βρείτε περισσότερες λεπτομέρειες περί τον
              ανωτέρω πληροφοριών.</p>
          </Card>
        </Col>
        {/* Extra Pages */}
        <Col md={6} style={{...columnStyle, ...addSpaceStyle}} className="icons">
          <a href="/privacy" style={legalLink}>
            <Card>
              <i className="bi bi-shield-x" style={iconStyles}></i>
              <br/>
              <p style={optionStyle}>Πολιτική Απορρήτου</p>
            </Card>
          </a>
        </Col>
        <Col md={6} style={columnStyle} className="icons">
          <a href="/terms" style={legalLink}>
            <Card>
              <i className="bi  bi-file-earmark-text" style={iconStyles}></i>
              <br/>
              <p style={optionStyle}>'Οροι και Προϋποθέσεις Παροχής Υπηρεσιών</p>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
}
