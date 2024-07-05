import React from "react";
import { CContainer } from "@coreui/react-pro";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Col, Row } from "antd";

const MainLayout = () => {
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
              maxWidth: "calc(100vw - 256px)",
              padding: "48px 24px",
            }}
          >
            <Outlet />
          </CContainer>
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default MainLayout;
