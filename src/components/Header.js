import CIcon from "@coreui/icons-react";
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CCard,
  CCardHeader,
  CCol,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
} from "@coreui/react-pro";
import { cilHamburgerMenu } from "@coreui/icons";
import React, { useState } from "react";

const Header = () => {
  return (
    <>
      <CHeader style={{ height: 53.5 }}>
        <CContainer fluid>
          <CHeaderToggler>
            <CIcon
              size="xxl" // customClassName="nav-icon"
              className="text-secondary"
              icon={cilHamburgerMenu}
            />
          </CHeaderToggler>
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="#">Button</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Button</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle color="secondary">Login</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CHeaderNav>
        </CContainer>
      </CHeader>
    </>
  );
};

export default Header;
