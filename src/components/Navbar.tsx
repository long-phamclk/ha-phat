import Logo from "../../public/assets/Logo.svg";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  return (
    <Wrapper>
      <LogoContainer>
        <Link to="/">
          <img src={Logo} alt="Hà Phát" />
        </Link>
      </LogoContainer>
      <NavButtonContainer>
        <NavButton to="/gioithieu">GIỚI THIỆU</NavButton>
        <NavButton to="/sanpham">SẢN PHẨM</NavButton>
        <NavButton to="/duan">DỰ ÁN</NavButton>
        <NavButton to="/nhansu">NHÂN SỰ</NavButton>
        <NavButton to="/lienhe">LIÊN HỆ</NavButton>
      </NavButtonContainer>
      <MobileNavButton onClick={toggleDropdown}>
        {/* Button to toggle the dropdown */}
        {isDropdownOpen ? "▲" : "▼"} {/* Arrow indicator */}
      </MobileNavButton>
      {isDropdownOpen && (
        <DropdownMenu>
          <DropdownItem to="/gioithieu">GIỚI THIỆU</DropdownItem>
          <DropdownItem to="/sanpham">SẢN PHẨM</DropdownItem>
          <DropdownItem to="/duan">DỰ ÁN</DropdownItem>
          <DropdownItem to="/nhansu">NHÂN SỰ</DropdownItem>
          <DropdownItem to="/lienhe">LIÊN HỆ</DropdownItem>
        </DropdownMenu>
      )}
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: hsl(0, 0%, 98%);
  position: relative; /* Needed for absolute positioning of dropdown */
`;

const LogoContainer = styled.div``;

const NavButtonContainer = styled.div`
  display: flex;
  margin-right: 2rem;
  gap: 2rem;

  @media (max-width: 900px) {
    gap: 0.5rem; /* Hide normal nav buttons on mobile */
  }

  @media (max-width: 768px) {
    display: none; /* Hide normal nav buttons on mobile */
  }
`;

const NavButton = styled(NavLink)`
  font-size: 1.375rem;
  text-decoration: none;
  color: black;

  &.active {
    font-weight: bold;
    color: #007bff; /* Change the color for the active link */
  }
`;

const MobileNavButton = styled.button`
  display: none; /* Initially hide on larger screens */
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Show button on mobile */
  }
`;

const DropdownMenu = styled.div`
  position: absolute; /* Position dropdown relative to wrapper */
  top: 60px; /* Adjust based on your navbar height */
  right: 20px; /* Adjust for alignment */
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000; /* Ensure dropdown is above other elements */
`;

const DropdownItem = styled(NavLink)`
  display: block; /* Each item takes full width */
  padding: 10px 20px; /* Add some padding */
  text-decoration: none;
  color: black;

  &:hover {
    background-color: hsl(0, 0%, 90%); /* Change background on hover */
  }

  &.active {
    font-weight: bold;
    color: #007bff; /* Change the color for the active link */
  }
`;
