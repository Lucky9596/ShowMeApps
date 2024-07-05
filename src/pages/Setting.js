import React, { useEffect, useState } from "react";
import {
  CButton,
  CCol,
  CForm,
  CFormLabel,
  CFormSwitch,
  CRow,
} from "@coreui/react";
import { useGetCallback, usePutCallback } from "../utils/Https";

const Setting = () => {
  const [formData, setFormData] = useState({
    name: false,
    email: false,
    pwd: false,
    phone: false,
    address: false,
    gender: false,
    birth: false,
    State: false,
    sports: false,
    parent: false,
  });

  const { loading, error, sendPutRequest } = usePutCallback();
  const { sendGetRequest, getSettingLoading, getSettingError } =
    useGetCallback();

  useEffect(() => {
    sendGetRequest(`${process.env.REACT_APP_SERVER_URL}/api/setting`)
      .then((res) => {
        setFormData(res.jsonData);
      })
      .catch((err) => {
        console.error("Error fetching settings:", err);
      });
  }, []);

  const handleChange = (key) => (e) => {
    const value = e.target.checked;
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPutRequest(`${process.env.REACT_APP_SERVER_URL}/api/setting`, formData)
      .then(() => {
        // Save data
        localStorage.setItem("formData", JSON.stringify(formData));

        window.location.href = "/"; // Redirect to homepage or desired route
      })
      .catch((err) => {
        console.error("Error saving settings:", err);
      });
  };

  const renderCol = (title, id, desc, checked) => (
    <CCol
      xs={12}
      key={id} // Ensure each rendered component has a unique key
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
        aria-label={`${title} field visibility`}
        checked={checked}
        onChange={handleChange(id)}
      />
    </CCol>
  );

  return (
    <CRow className="d-flex justify-content-center align-items-center">
      <CForm
        style={{ maxWidth: 500, padding: "48px 24px" }}
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="title-h1-style font-bold">Registration Form Fields</h1>
          <p className="title-label-style">
            Manage the fields visible in your registration form.
          </p>
        </div>
        {Object.entries(formData).map(([key, value]) =>
          renderCol(
            key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter of the key
            key,
            `${key.replace(/([A-Z])/g, " $1").toLowerCase()} of the user`, // Format description
            value
          )
        )}
        <CCol xs={12} style={{ justifyContent: "end", display: "flex" }}>
          <CButton color="primary" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </CButton>
          {error && <div>Error: {error}</div>}
        </CCol>
      </CForm>
    </CRow>
  );
};

export default Setting;
