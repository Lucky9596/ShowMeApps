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
import { cilHamburgerMenu, cilBell, cilUser } from "@coreui/icons";
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
              <CNavLink href="#">
                <CIcon icon={cilBell} />
              </CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle color="secondary">
                <CIcon icon={cilUser} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">LogIn</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">SignUp</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CHeaderNav>
        </CContainer>
      </CHeader>
    </>
  );
};

export default Header;
