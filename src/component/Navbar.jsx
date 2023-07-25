import React, { useState } from "react";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  COffcanvas,
  COffcanvasHeader,
  COffcanvasTitle,
  CCloseButton,
  COffcanvasBody,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar colorScheme="light" className="bg-primary">
      <CContainer fluid>
        <CNavbarToggler
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          className="bg-light"
          onClick={() => setVisible(!visible)}
        />
        <CNavbarBrand className="text-light">
          Welcome to my space .......
        </CNavbarBrand>

        <COffcanvas
          id="offcanvasNavbar"
          placement="start"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Main Layout</COffcanvasTitle>
            <CCloseButton
              className="text-reset"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="/home" active>
                  Home
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/Student" active>
                  Student
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/About" active>
                  About
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/Contact" active>
                  Contact
                </CNavLink>
              </CNavItem>

              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">
                  Dropdown button
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Search" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
  );
};
export default Navbar;
