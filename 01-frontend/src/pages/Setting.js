import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormLabel,
  CFormSwitch,
  CRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import "../style.css";
import { useGetCallback, usePutCallback } from "../utils/Https";
const Setting = () => {
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [pwd, setPwd] = useState(true);
  const [phone, setPhone] = useState(true);
  const [address, setAddress] = useState(true);
  const [gender, setGender] = useState(true);
  const [birth, setBirth] = useState(true);
  const [state, setState] = useState(true);
  const [sports, setSports] = useState(true);
  const [parent, setParent] = useState(true);
  const { isLoading, error, sendPutRequest } = usePutCallback();
  const { sendGetRequest, getSettingloading, getSettingError } =
    useGetCallback();
  useEffect(() => {
    sendGetRequest(`${process.env.REACT_APP_SERVER_URL}/api/setting`)
      .then((res) => {
        console.log(res.jsonData);
        // setFormData();
        setName(res.jsonData.name);
        setEmail(res.jsonData.email);
        setPwd(res.jsonData.pwd);
        setPhone(res.jsonData.phone);
        setAddress(res.jsonData.address);
        setGender(res.jsonData.gender);
        setBirth(res.jsonData.birth);
        setState(res.jsonData.state);
        setSports(res.jsonData.sports);
        setParent(res.jsonData.parent);
      })
      .catch((err) => {
        console.error("Error fetching settings:", err);
      });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      pwd,
      phone,
      address,
      gender,
      birth,
      state,
      parent,
    };
    sendPutRequest(`${process.env.REACT_APP_SERVER_URL}/api/setting`, formData)
      .then(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const renderCol = (title, id, desc, checked, onChange) => {
    return (
      <CCol
        xs={12}
        className="d-flex justify-content-between align-items-center col-register-margin"
      >
        <CFormLabel htmlFor={id}>
          <h3 className="title-h3-style font-bold">{title}</h3>
          <p className="second-p-style">{desc}</p>
        </CFormLabel>
        <CFormSwitch
          id={id}
          style={{ width: 44 }}
          size="xl"
          aria-label="Name field visibility"
          checked={checked}
          onChange={onChange}
        />
      </CCol>
    );
  };
  return (
    <CRow className="d-flex justify-content-center align-items-center">
      <CForm
        style={{ maxWidth: 500, padding: "48px 24px" }}
        onSubmit={onSubmit}
      >
        <div>
          <h1 className="title-h1-style font-bold">Registration Form Fields</h1>
          <p className="title-label-style">
            Manage the fields visible in your registration form.
          </p>
        </div>
        {renderCol("Name", "name", "Full name of the user", name, (e) =>
          setName(e.target.checked)
        )}
        {renderCol("Email", "email", "Email address of the user", email, (e) =>
          setEmail(e.target.checked)
        )}
        {renderCol(
          "Password",
          "pwd",
          "Secure password for the user",
          pwd,
          (e) => setPwd(e.target.checked)
        )}
        {renderCol("Phone", "phone", "Phone number of the user", phone, (e) =>
          setPhone(e.target.checked)
        )}
        {renderCol(
          "Address",
          "address",
          "Physical address of the user",
          address,
          (e) => setAddress(e.target.checked)
        )}
        {renderCol("Gender", "gender", "Gender of the user", gender, (e) =>
          setGender(e.target.checked)
        )}
        {renderCol(
          "Date of Birth",
          "birth",
          "Date of birth of the user",
          birth,
          (e) => setBirth(e.target.checked)
        )}
        {renderCol("State", "state", "State of the user", state, (e) =>
          setState(e.target.checked)
        )}
        {renderCol(
          "Sports Interested In",
          "sports",
          "Sports the user is interested in",
          sports,
          (e) => setSports(e.target.checked)
        )}
        {renderCol(
          "Parent/Guardian Information",
          "parent",
          "Information about the user's parent or guardian",
          parent,
          (e) => setParent(e.target.checked)
        )}
        <CCol xs={12} style={{ justifyContent: "end", display: "flex" }}>
          <CButton color="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </CButton>
          {error && <div>Error: {error}</div>}
        </CCol>
      </CForm>
    </CRow>
  );
};
export default Setting;
