import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

const Main = () => {
  const [info, setInfo] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    sex: "Male",
    status: "",
    prevSchool: "",
    course: "",
    schoolYear1: "",
    schoolYear2: "",
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
      body: encode({ "form-name": "admission", ...info }),
    })
      .then((res) =>
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Submitted form successfuly",
        })
      )
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something Went Wrong!",
        })
      );
  };

  const date = new Date();
  return (
    <div>
      <Container fluid>
        <Row lg={2} className="justify-content-center mt-5 mb-4">
          <Form
            className="mt-3"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            data-netlify="true"
          >
            <h2 className="text-center">Admission Registration Page</h2>
            <h3>Personal Info</h3>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInfo({ ...info, firstName: e.target.value })
                }
                type="text"
                placeholder="Enter First name"
                required
                min="2"
                name="firstname"
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setInfo({ ...info, middleName: e.target.value })
                }
                type="text"
                placeholder="Enter Middle name"
                required
                name="middlename"
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
                name="lastname"
                type="text"
                placeholder="Enter Last name"
                required
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
                    id="default-radio"
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
                    id="default-radio"
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
                name="semester"
                as="select"
                required
                onChange={(e) => setInfo({ ...info, status: e.target.value })}
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
                  setInfo({ ...info, prevSchool: e.target.value })
                }
                type="text"
                placeholder="Full School Name"
                required
                name="prev-school"
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
                    type="number"
                    placeholder={date.getFullYear()}
                    required
                    onChange={(e) =>
                      setInfo({ ...info, schoolYear1: e.target.value })
                    }
                  />
                </Col>
                -
                <Col>
                  <Form.Control
                    type="number"
                    placeholder={date.getFullYear() + 1}
                    required
                    name="sy2"
                    onChange={(e) =>
                      setInfo({ ...info, schoolYear2: e.target.value })
                    }
                  />
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
