import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { Home, MessageSquare, Clock, Contact2Icon, Send, Settings, Folder, Puzzle } from "lucide-react";
import aisensy from "../common/aisensy.png";

// Styled Components
const SidebarContainer = styled.div`
  height: 100vh; /* Full height of the screen */
  width: 80px; /* Fixed width for the sidebar */
  background-color: rgb(8, 91, 14); /* Background color of the sidebar */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fix the sidebar to the left */
  top: 0;
  left: 0;
  z-index: 1000; /* Ensure it's above other content */
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MenuItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  cursor: pointer;
  font-size: 14px;
  color: white;
  transition: all 0.3s ease;
  position: relative;

  &:hover::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: white;
    border-radius: 2px;
    display: ${(props) => (props.$isAisensy ? "none" : "block")};
  }

  &:hover {
    background-color: ${(props) =>
      props.$isAisensy
        ? "transparent"
        : props.$isDarkMode
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.05)"};
  }

  & .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  &:hover .icon-container {
    background-color: white;
  }

  &:hover .icon-container svg {
    color: rgb(8, 91, 14);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NavItemWrapper = styled.div`
  color: white;
  text-align: center;
  margin-top: 8px;
`;

function Sidebar() {
  const { isDarkMode } = useTheme();

  return (
    <SidebarContainer $isDarkMode={isDarkMode}>
      <Menu>
        {/* Aisensy MenuItem (no hover effect) */}
        <MenuItem $isDarkMode={isDarkMode} $isAisensy={true}>
          <StyledLink to="/">
            <img
              src={aisensy}
              alt="Dashboard"
              style={{ width: 40, height: 25, color: "white" }}
            />
          </StyledLink>
        </MenuItem>

        {/* Other MenuItems (with hover effect) */}
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/">
            <div className="icon-container">
              <Home size={20} color="white" />
            </div>
            <NavItemWrapper>Dashboard</NavItemWrapper>
          </StyledLink>
        </MenuItem>
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/manageuser">
            <div className="icon-container">
              <MessageSquare size={20} color="white" />
            </div>
            <NavItemWrapper>Live Chat</NavItemWrapper>
          </StyledLink>
        </MenuItem>
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/managerole">
            <div className="icon-container">
              <Clock size={20} color="white" />
            </div>
            <NavItemWrapper>History</NavItemWrapper>
          </StyledLink>
        </MenuItem>
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/manageuser">
            <div className="icon-container">
              <Contact2Icon size={20} color="white" />
            </div>
            <NavItemWrapper>Contacts</NavItemWrapper>
          </StyledLink>
        </MenuItem>
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/managepermission">
            <div className="icon-container">
              <Send size={20} color="white" />
            </div>
            <NavItemWrapper>Campaigns</NavItemWrapper>
          </StyledLink>
        </MenuItem>
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/managepermission">
            <div className="icon-container">
              <Settings size={20} color="white" />
            </div>
            <NavItemWrapper>Manage</NavItemWrapper>
          </StyledLink>
        </MenuItem>
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/managepermission">
            <div className="icon-container">
              <Puzzle size={20} color="white" />
            </div>
            <NavItemWrapper>Integration</NavItemWrapper>
          </StyledLink>
        </MenuItem>
        <MenuItem $isDarkMode={isDarkMode}>
          <StyledLink to="/managepermission">
            <div className="icon-container">
              <Folder size={20} color="white" />
            </div>
            <NavItemWrapper>All Projects</NavItemWrapper>
          </StyledLink>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
}

export default Sidebar;