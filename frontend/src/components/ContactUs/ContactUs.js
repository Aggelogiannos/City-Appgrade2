import React from 'react';
import './ContactUs.css';
import Paper from '@mui/material/Paper';
import {Col, Container, Row} from 'react-grid-system';

// Styles
const cardStyles = {
  padding: "10px 10px 10px 0",
  margin: "30px"
}
const phone = "tel:+30";
const email = "mailto:";
const ContactUs = () => (
    <div className={'contact-us main-text'}>
  <Container>
    {/*Information Area*/}
    <h1>Επικοινωνία με τον Δήμο Θεσσαλονίκης  <i className="bi bi-telephone-fill"></i>
    </h1>
    <p>Ο Δήμος θέλει να ενημερωθεί για το πρόβλημα που βρήκες, μόνο αν συνεργαστούμε μπορούμε
      να βελτιώσουμε την Θεσσαλονίκη μας! </p>

    <p>Παρακαλώ επικοινωνήστε μαζί μας μέσω μίας από τις παρακάτω μεθόδους:</p>
    {/* Cards */}
    <Row className='card-container'>
      <Col>
        <Paper elevation={6} style={cardStyles}>
          <ul className='list'>
            <li><i className="bi bi-phone-fill"></i> Τηλέφωνο: <a
              href={phone + process.env.PHONE}></a></li>
          </ul>
        </Paper>
      </Col>
      <Col md={12} lg={6}>
        <Paper elevation={6} style={cardStyles}>
          <ul className='list'>
            <li><i className="bi bi-at"></i> Ιστοσελίδα: <a
              href></a></li>
          </ul>
        </Paper>
      </Col>
      <Col md={12} lg={6}>
        <Paper elevation={6} style={cardStyles}>
          <ul className='list'>
            <li><i className="bi bi-envelope-fill"></i> Email: <a
              href></a></li>
          </ul>
        </Paper>
      </Col>
      <Col md={12} lg={6}>
        <Paper elevation={6} style={cardStyles}>
          <ul className='list'>
            <li><i className="bi bi-geo-alt-fill"></i> Τοποθεσία: <a
              href></a></li>
          </ul>
        </Paper>
      </Col>
    </Row>
  </Container>
</div>
)
;

ContactUs.propTypes = {};

ContactUs.defaultProps = {};

export default ContactUs;
