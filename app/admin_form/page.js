/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WIokj1xvftA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { CFormLabel  } from "@/components/ui/CFormLabel "
// import { Input } from "@/components/ui/input"
// import { Select, SelectTrigger, SelectValue, SelectContent, option } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"

"use client";

import {
  CButton,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CContainer,
  CFormCheck,
  CFormTextarea,
  CRow,
  CCol,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Component() {
  return (
    <CRow className="d-flex justify-content-center align-items-center">
      <CCol style={{ maxWidth: 450 }}>
        <CCol
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <div>
            <h1
              style={{
                fontWeight: 700,
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
              }}
            >
              Create new Organization
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form to register your organization.
            </p>
          </div>
        </CCol>
        <CForm className="row g-3">
          <CCol xs={12}>
            <CFormLabel htmlFor="name">Name of Organization</CFormLabel>
            <CFormInput id="name" placeholder="Enter name" />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="street">Street Address</CFormLabel>
            <CFormInput id="street" placeholder="Enter street address" />
          </CCol>
          <CCol md={6}>
            <CFormLabel htmlFor="city">City</CFormLabel>
            <CFormInput id="city" placeholder="Enter city" />
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="state">State</CFormLabel>
            <CFormSelect id="state" aria-label="Select state">
              {/* <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger> */}
              <option value="Select state">Select state</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </CFormSelect>
          </CCol>
          <CCol md={4}>
            <CFormLabel htmlFor="zip">Zip Code</CFormLabel>
            <CFormInput id="zip" placeholder="Enter zip code" />
          </CCol>

          <CCol xs={12}>
            <CFormLabel htmlFor="phone">Phone Number</CFormLabel>
            <CFormInput id="phone" placeholder="Enter phone number" />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="email">Email</CFormLabel>
            <CFormInput id="email" type="email" placeholder="Enter email" />
          </CCol>
          <CCol xs={12}>
            <CFormLabel htmlFor="website">Website</CFormLabel>
            <CFormInput id="website" placeholder="Enter website" />
          </CCol>

          <CCol xs={12}>
            <CFormLabel htmlFor="description">Brief Description</CFormLabel>
            <CFormTextarea
              id="description"
              placeholder="Enter a brief description"
              className="min-h-[100px]"
            />
          </CCol>
          <CCol xs={12} style={{ justifyContent: "end", display: "flex" }}>
            <CButton color="primary" type="submit">
              Register
            </CButton>
          </CCol>
        </CForm>
      </CCol>
    </CRow>
  );
}
