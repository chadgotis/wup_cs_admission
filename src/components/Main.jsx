import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

const Main = ({ history }) => {
  const [info, setInfo] = useState({
    email: "",
    phone: "",
    firstname: "",
    middlename: "",
    lastname: "",
    sex: "Male",
    status: "",
    lastschool: "",
    course: "",
    sy1: "",
    sy2: "",
    semester: "",
  });

  const [validated, setValidated] = useState(false);
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      const a = () => {
        event.stopPropagation();
        setValidated(true);
      };
      return a();
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "info", ...info }),
    })
      .then((res) => {
        setInfo({
          ...info,
          email: "",
          phone: "",
          firstname: "",
          middlename: "",
          lastname: "",
          status: "",
          lastschool: "",
          course: "",
          sy1: "",
          sy2: "",
          semester: "",
        });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Submitted form successfuly",
          confirmButtonText: "OK!!",
        }).then((res) => {
          if (res.value) {
            history.push("/thank");
          }
        });
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something Went Wrong!",
        })
      );
  };

  const date = new Date();

  const getYearList = () => {
    const min = 2015;
    const max = date.getFullYear() + 2;
    const list = [];

    for (let i = min; i < max; i++) {
      list.unshift(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return list;
  };
  return (
    <div>
      <Container fluid>
        <Row lg={2} className="justify-content-center mt-5 mb-4">
          <Form
            name="info"
            className="mt-3 ml-1 mr-1"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            data-netlify="true"
            method="POST"
          >
            <input type="hidden" name="form-name" value="info" />
            <h2 className="text-center">Admission Registration Page</h2>
            <h3>Personal Info</h3>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                type="email"
                placeholder="Enter email"
                required
                min="2"
                name="email"
                value={info.email}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                type="number"
                placeholder="0912-345-6789"
                required
                min="10"
                name="email"
                value={info.phone}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInfo({ ...info, firstname: e.target.value })
                }
                type="text"
                placeholder="Enter First name"
                required
                min="2"
                name="firstname"
                value={info.firstname}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInfo({ ...info, middlename: e.target.value })
                }
                type="text"
                placeholder="Enter Middle name"
                required
                name="middlename"
                value={info.middlename}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setInfo({ ...info, lastname: e.target.value })}
                name="lastname"
                type="text"
                placeholder="Enter Last name"
                required
                value={info.lastname}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Sex</Form.Label>
              <Row
                lg={4}
                onChange={(e) => setInfo({ ...info, sex: e.target.value })}
              >
                <Col>
                  <Form.Check
                    lg={1}
                    type="radio"
                    label="Male"
                    name="sex"
                    value="Male"
                    defaultChecked
                  />
                </Col>
                <Col>
                  <Form.Check
                    lg={1}
                    type="radio"
                    label="Female"
                    value="Female"
                    name="sex"
                  />
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <h3>School Info</h3>
            <Form.Group>
              <Form.Label>Student Status</Form.Label>
              <Form.Control
                name="status"
                as="select"
                required
                onChange={(e) => setInfo({ ...info, status: e.target.value })}
                value={info.status}
              >
                <option value="">--Please Select --</option>
                <option value="New">New</option>
                <option value="Old">Old</option>
                <option value="Transferee">Transferee</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Previous School/School Last Attended</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInfo({ ...info, lastschool: e.target.value })
                }
                value={info.lastschool}
                type="text"
                placeholder="Full School Name"
                required
                name="lastschool"
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Course</Form.Label>
              <Form.Control
                name="course"
                as="select"
                required
                onChange={(e) => setInfo({ ...info, course: e.target.value })}
                value={info.course}
              >
                <option value="">-- Please Select a Course --</option>
                <option value="Bachelor of Science in Computer Science">
                  Bachelor of Science in Computer Science
                </option>
                <option value="Associate in Computer Technology">
                  Associate in Computer Technology
                </option>
              </Form.Control>
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>School Year</Form.Label>
              <Row lg={4}>
                <Col>
                  <Form.Control
                    name="sy1"
                    required
                    type="number"
                    as="select"
                    onChange={(e) => setInfo({ ...info, sy1: e.target.value })}
                    value={info.sy1}
                  >
                    <option value="">--Select Year--</option>
                    {getYearList()}
                  </Form.Control>
                </Col>
                -
                <Col>
                  <Form.Control
                    name="sy2"
                    required
                    as="select"
                    onChange={(e) => setInfo({ ...info, sy2: e.target.value })}
                    value={info.sy2}
                  >
                    <option value="">--Select Year--</option>
                    {getYearList()}
                  </Form.Control>
                </Col>
              </Row>
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Semester</Form.Label>
              <Form.Control
                name="semester"
                as="select"
                required
                onChange={(e) => setInfo({ ...info, semester: e.target.value })}
                value={info.semester}
              >
                <option value="">--Please Select --</option>
                <option value="1st Semester">1st Semester</option>
                <option value="2nd Semester">2nd Semester</option>
                <option value="Summer">Summer</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <div data-netlify-recaptcha="true"></div>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
