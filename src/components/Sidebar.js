import React from "react";
import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react-pro";
import {
  cilCloudDownload,
  cilSpeedometer,
  cilPuzzle,
  cilLayers,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Sidebar = () => {
  return (
    <CSidebar className="border-end" style={{ height: "100%" }}>
      <CSidebarHeader
        className="border-bottom"
        style={{ alignItems: "center", justifyContent: "space-around" }}
      >
        <CSidebarBrand href="/">ShowMeApps</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Admin Menu</CNavTitle>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Contact
            </>
          }
        >
          <CNavItem href="/create">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Create
          </CNavItem>
          <CNavItem href="/setting">
            <span className="nav-icon">
              <span className="nav-icon-bullet"></span>
            </span>{" "}
            Setting <CBadge color="success ms-auto">PRO</CBadge>
          </CNavItem>
        </CNavGroup>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> 2nd Menu
        </CNavItem>
        <CNavItem href="#">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> 3rd Menu
        </CNavItem>
        <CNavItem href="https://coreui.io">
          <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> 4th Menu
        </CNavItem>
        <CNavItem href="https://coreui.io/pro/">
          <CIcon customClassName="nav-icon" icon={cilLayers} /> 5th Menu
        </CNavItem>
      </CSidebarNav>
      <CSidebarHeader className="border-top">
        <CSidebarToggler />
      </CSidebarHeader>
    </CSidebar>
  );
};

export default Sidebar;
