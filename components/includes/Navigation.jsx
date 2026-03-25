"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "@/components/includes/Logo";

const navLinkClass =
  "tw-rounded-lg tw-px-3 tw-py-2 tw-text-[0.9375rem] tw-font-medium tw-text-slate-300 tw-no-underline tw-transition-colors hover:tw-bg-slate-800/60 hover:tw-text-slate-100";

const Navigation = ({ domain, logo }) => {
  return (
    <Navbar
      expand="lg"
      collapseOnSelect
      className="tw-border-0 tw-bg-transparent tw-py-3 tw-pt-5 md:tw-pt-6"
    >
      <Container className="tw-px-3 sm:tw-px-4">
        <Navbar.Brand
          as={Link}
          href="/"
          className="tw-mr-4 tw-flex tw-items-center tw-py-0"
        >
          <Logo domain={domain} logo={logo} />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          className="tw-border tw-border-slate-600 tw-text-slate-200 focus:tw-shadow-none"
        />

        <Navbar.Collapse id="main-navbar-nav" className="tw-items-stretch lg:tw-items-center">
          <Nav className="tw-mt-3 tw-flex-col tw-gap-0.5 tw-border-t tw-border-slate-800/80 tw-pt-3 lg:tw-ms-auto lg:tw-mt-0 lg:tw-flex-row lg:tw-flex-wrap lg:tw-items-center lg:tw-gap-0.5 lg:tw-border-0 lg:tw-pt-0 lg:tw-pl-2 xl:tw-gap-1">
            <Nav.Link as={Link} href="/" className={navLinkClass}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/search" className={navLinkClass}>
              Search
            </Nav.Link>
            <Nav.Link as={Link} href="/blog" className={navLinkClass}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} href="/about" className={navLinkClass}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" className={navLinkClass}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
