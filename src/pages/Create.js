import React, { useEffect, useState } from "react";
import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CRow,
  CCol,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { usePostCallback } from "../utils/Https";
import { notification } from "antd";

const Create = () => {
  const initialState = {
    name: false,
    street: false,
    city: false,
    state: false,
    zip: false,
    phone: false,
    email: false,
    website: false,
    description: false,
  };

  const initData = {
    name: "",
    street: "",
    city: "",
    state: "AL",
    zip: "",
    phone: "",
    email: "",
    website: "",
    description: "",
  };

  const [formStatus, setFormStatus] = useState(initialState);
  const [formData, setFormData] = useState(initData);
  const { loading, error, createContact } = usePostCallback();

  useEffect(() => {
    // Retrieve data from local storage on component mount
    const storedFormStatus = JSON.parse(localStorage.getItem("formData"));
    console.log(storedFormStatus);
    if (storedFormStatus) {
      setFormStatus(storedFormStatus);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createContact(`${process.env.REACT_APP_SERVER_URL}/api/contact`, formData)
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => notification.error(err));
  };

  return (
    <CRow className="d-flex justify-content-center align-items-center">
      <CCol style={{ maxWidth: 500, padding: "48px 24px" }}>
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="title-h1-style font-bold">Create new Organization</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <p className="title-label-style">
            Fill out the form to register your organization.
          </p>
        </div>

        <CForm
          method="post"
          onSubmit={handleSubmit}
          className="row g-3"
          encType="multipart/form-data"
        >
          <CCol xs={12}>
            <CFormLabel htmlFor="name" className="subtitle-label-style">
              Name of Organization
            </CFormLabel>
            <CFormInput
              required
              id="name"
              placeholder="Enter name"
              disabled={!formStatus.name}
              value={formData.name}
              onChange={handleChange}
            />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="street" className="subtitle-label-style">
              Street Address
            </CFormLabel>
            <CFormInput
              required
              id="street"
              value={formData.street}
              disabled={!formStatus.address}
              onChange={handleChange}
              placeholder="Enter street address"
            />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="city" className="subtitle-label-style">
              City
            </CFormLabel>
            <CFormInput
              id="city"
              value={formData.city}
              disabled={!formStatus.address}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="state" className="subtitle-label-style">
              State
            </CFormLabel>
            <CFormSelect
              id="state"
              aria-label="Select state"
              value={formData.state}
              disabled={!formStatus.state}
              onChange={handleChange}
            >
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.label}
                </option>
              ))}
            </CFormSelect>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="zip" className="subtitle-label-style">
              Zip Code
            </CFormLabel>
            <CFormInput
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              disabled={!formStatus.state}
              placeholder="Enter zip code"
              required
            />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="phone" className="subtitle-label-style">
              Phone Number
            </CFormLabel>
            <CFormInput
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!formStatus.phone}
              placeholder="Enter phone number"
              required
            />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="email" className="subtitle-label-style">
              Email
            </CFormLabel>
            <CFormInput
              id="email"
              type="email"
              value={formData.email}
              disabled={!formStatus.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="website" className="subtitle-label-style">
              Website
            </CFormLabel>
            <CFormInput
              id="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter website"
              required
            />
          </CCol>

          <CCol xs={12}>
            <CFormLabel htmlFor="description" className="subtitle-label-style">
              Brief Description
            </CFormLabel>
            <CFormTextarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a brief description"
              className="min-h-[100px]"
            />
          </CCol>
          <CCol xs={12} style={{ justifyContent: "end", display: "flex" }}>
            <CButton disabled={loading} color="primary" type="submit">
              {loading ? "Loading..." : "Register"}
            </CButton>
            {error && <div>Error: {error}</div>}
          </CCol>
        </CForm>
      </CCol>
    </CRow>
  );
};

// Options for State Select
const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  // Add more states as needed
];

export default Create;
