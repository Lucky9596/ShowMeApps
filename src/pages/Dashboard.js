import React from "react";
import { CContainer, CCol, CRow } from "@coreui/react-pro";
import { Outlet } from "react-router-dom";
import ContactList from "./ContactList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Col, Row } from "antd";

const DashBoard = () => {
  return (
    <>
      <Row style={{ minHeight: "100vh" }}>
        <Col flex="256px">
          <Sidebar />
        </Col>
        <Col flex="auto">
          <Header />
          <CContainer
            style={{
              overflow: "auto",
              height: "calc(100vh - 102px)",
              // maxWidth: "calc(100vw - 256px)",
            }}
          >
            <ContactList />
          </CContainer>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
