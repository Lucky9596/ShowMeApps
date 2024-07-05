import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import { useGetCallback } from "../utils/Https";
import { CCardTitle, CSmartTable } from "@coreui/react-pro";

const ContactList = () => {
  const [tblData, setTblData] = useState([]);
  const { isLoading, error, sendGetRequest } = useGetCallback();

  useEffect(() => {
    sendGetRequest(`${process.env.REACT_APP_SERVER_URL}/api/contact`)
      .then((res) => {
        // Assuming 'id' is a unique identifier in your data
        const dataWithKeys = res.map((item, index) => ({
          ...item,
          key: index,
        }));
        setTblData(dataWithKeys);
      })
      .catch((err) => console.error(err));
  }, []);

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "street",
      label: "Street",
    },
    {
      key: "city",
      label: "City",
    },
    {
      key: "zip",
      label: "Zip",
    },
    {
      key: "state",
      label: "State",
    },
    {
      key: "phone",
      label: "PhoneNumber",
    },
    {
      key: "website",
      label: "Website",
    },
  ];

  return (
    <>
      <CCard style={{ padding: "24px 12px", border: "none" }}>
        {/* <CCardHeader>
          <CNav variant="pills" className="card-header-pills">
            <CNavItem>
              <CNavLink href="create" active>
                Create
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="setting">Setting</CNavLink>
            </CNavItem>
          </CNav>
        </CCardHeader> */}
        <CCardBody>
          <CCardTitle>Contact List</CCardTitle>
          <CSmartTable
            loading={isLoading}
            columns={columns}
            items={tblData}
            itemsPerPageSelect
            itemsPerPage={10}
            pagination
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default ContactList;
