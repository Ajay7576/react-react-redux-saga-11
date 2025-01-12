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
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";

const Navbar = () => {
  const onSearch = (event) => {
    debugger;
  };
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
          Welcome to Effort less Service
        </CNavbarBrand>

        <COffcanvas
          id="offcanvasNavbar"
          placement="start"
          portal={false}
          visible={visible}
          onHide={() => setVisible(false)}
        >
          <COffcanvasHeader>
            <COffcanvasTitle>Menu</COffcanvasTitle>
            <CCloseButton
              className="text-reset"
              onClick={() => setVisible(false)}
            />
          </COffcanvasHeader>
          <COffcanvasBody>
            <CNavbarNav>
              <CForm className="d-flex">
                <CFormInput
                  type="search"
                  className="me-2"
                  placeholder="Search"
                />
                <CButton
                  type="submit"
                  onClick={onSearch}
                  color="success"
                  variant="outline"
                >
                  Search
                </CButton>
              </CForm>
              <CNavItem>
                <CNavLink href="/home" active>
                  Home
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/Student" active>
                  User
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/Student" active>
                  Client
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/About" active>
                  Plan
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/Contact" active>
                  Subscription
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink href="/Contact" active>
                  Invoice
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
    </CNavbar>
  );
};
export default Navbar;
