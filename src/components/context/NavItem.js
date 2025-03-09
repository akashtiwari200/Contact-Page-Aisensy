import React from "react";
import styled from "styled-components";

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #a0aec0;
  }
`;

const Label = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;
 function NavItem({ icon, label }) {
    return (
      <NavItemContainer>
        {icon}
        <Label>{label}</Label>
      </NavItemContainer>
    );
  }

  export default NavItem;