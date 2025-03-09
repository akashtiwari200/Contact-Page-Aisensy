import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

// Importing components
import EditUserModal from "../manageusers/EditUser";
import Sidebar from "../../common/Sidebar";
import SmallscreenSidebar from "../../common/SmallscreenSidebar";

// Importing images
import img1 from "../../../media/avatars/Avatar1.png";
import img2 from "../../../media/avatars/Avatar2.png";
import img3 from "../../../media/avatars/Avatar3.png";
import img4 from "../../../media/avatars/Avatar4.png";
import defaultImg from "../../../media/avatars/default.jpg";

// Function to generate random mobile numbers
const generateRandomMobileNumber = () => {
  const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  return `91${randomNumber}`; // Assuming Indian mobile numbers starting with 91
};

// List of 50 random names
const randomNames = [
  "Aarav Sharma", "Diya Verma", "Ishaan Kumar", "Rohan Patel", "Ananya Singh",
  "Vihaan Gupta", "Aaradhya Reddy", "Advait Joshi", "Aanya Malhotra", "Arjun Kapoor",
  "Ishani Desai", "Reyansh Choudhury", "Saanvi Iyer", "Vivaan Mehta", "Myra Bhat",
  "Aryan Rao", "Anika Khanna", "Atharva Nair", "Kavya Srinivasan", "Rudra Chatterjee",
  "Sia Menon", "Aadi Bajaj", "Zara Kapoor", "Vihaan Malhotra", "Anvi Reddy",
  "Rohan Sharma", "Ishita Gupta", "Aarav Singh", "Anaya Joshi", "Vivaan Kapoor",
  "Myra Desai", "Arjun Choudhury", "Aanya Iyer", "Advait Mehta", "Diya Bhat",
  "Ishaan Rao", "Reyansh Khanna", "Saanvi Nair", "Vihaan Srinivasan", "Anika Chatterjee",
  "Atharva Menon", "Kavya Bajaj", "Rudra Kapoor", "Sia Malhotra", "Aadi Reddy",
  "Zara Sharma", "Vihaan Gupta", "Anvi Singh", "Rohan Joshi", "Ishita Kapoor",
];

// List of tags
const tags = ["new lead", "MBA", "bba", "important", "warm lead", "Closed", "CAT", "Qualified Lead"];

// List of sources
const sources = ["imported", "website", "referral", "social media", "campaign"];

// Function to generate random tags (1 to 3 tags per user)
const generateRandomTags = () => {
  const numTags = Math.floor(Math.random() * 3) + 1; // Random number of tags (1 to 3)
  const shuffledTags = tags.sort(() => 0.5 - Math.random()); // Shuffle tags
  return shuffledTags.slice(0, numTags); // Select first `numTags` tags
};

// Function to generate random source
const generateRandomSource = () => {
  return sources[Math.floor(Math.random() * sources.length)];
};

// Generate 100 additional users with random names, numbers, tags, and sources
const additionalUsers = Array.from({ length: 100 }, (_, index) => ({
  id: index + 9, // Start from 9 to avoid conflicts with existing users
  name: randomNames[index % randomNames.length], // Cycle through names
  mobileNumber: generateRandomMobileNumber(),
  imageUrl: [img1, img2, img3, img4][index % 4], // Cycle through images
  status: Math.random() > 0.5 ? "Active" : "Inactive", // Random status
  tags: generateRandomTags(), // Random tags
  source: generateRandomSource(), // Random source
}));

// Styled Components for ManageUsers
const ManageUsersContainer = styled.div`
  display: flex;
  height: 100vh;
  margin-bottom: 1rem;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
`;

const MainContent = styled.div`
  width: calc(100vw - 80px);
  height: 100vh;
  padding: 20px;
  background-color: ${(props) => (props.$isDarkMode ? "#1a1a1a" : "#f9f9f9")};
  font-family: "Arial", sans-serif;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  overflow: hidden;
`;

const Header = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-left: 10px;
  color: rgb(20, 20, 20);
  
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 80px;
`;

const FilterButton = styled.button`
  background-color: transparent;
  color: rgb(8, 91, 14);
  border: 1px solid rgb(8, 91, 14);
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  
  font-weight: bold;
  &:hover {
    background-color: rgba(8, 91, 14, 0.1);
  }
`;

const InfoBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InfoText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  background-color: rgb(8, 91, 14);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: rgba(8, 91, 14, 0.8);
  }
`;

const TableContainer = styled.div`
  margin-top: 25px;
  padding-bottom: 10px;
  background-color: ${(props) => (props.$isDarkMode ? "#333" : "#fff")};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  overflow-y: auto;
  margin-left: 80px;
  max-height: calc(100vh - 200px);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

const TableHead = styled.thead`
  background-color: white;
  color: #000;

  th {
    padding: 12px 10px;
    text-align: left;
    font-size: 16px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
  }
`;

const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: ${(props) => (props.$isDarkMode ? "#444" : "#f9f9f9")};
  }

  td {
    padding: 10px 10px;
    color: ${(props) => (props.$isDarkMode ? "#ccc" : "#333")};
  }
`;

const AvatarUsernameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

const TagsColumn = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: ${(props) => (props.$isDarkMode ? "#555" : "#f0f0f0")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`;

const SourceColumn = styled.div`
  font-size: 14px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const PageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageRange = styled.div`
  font-size: 16px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
`;

const SelectedContactsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  background-color: ${(props) => (props.$isDarkMode ? "#333" : "#fff")};
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  margin-bottom: 10px;
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: rgb(8, 91, 14);
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;

const ActionButtonStyled = styled.button`
  background-color: rgb(8, 91, 14);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: rgba(8, 91, 14, 0.8);
  }
`;

// Styled Components for FilterModal
const FilterModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 450px;
`;

const FilterHeader = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
`;

const FilterField = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;

const SelectField = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  flex: 1;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  flex: 1;
`;

const DateFieldContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const DateField = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  flex: 1;
`;

const QuickSelectContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const QuickSelectButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? "rgb(8, 91, 14)" : "white")};
  color: ${(props) => (props.$isActive ? "white" : "#333")};
  &:hover {
    background-color: ${(props) =>
      props.$isActive ? "rgb(8, 91, 14)" : "#f9f9f9"};
  }
`;

const AddIcon = styled.span`
  font-size: 20px;
  cursor: pointer;
  color: rgb(8, 91, 14);
`;

// Single ButtonContainer declaration
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const ApplyButton = styled.button`
  background-color: rgb(8, 91, 14);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
`;

const ClearAllButton = styled.button`
  background: none;
  border: none;
  color: rgb(8, 91, 14);
  cursor: pointer;
  font-size: 14px;
`;

// Styled Components for Broadcast
const BroadcastContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => (props.$isDarkMode ? "#1a1a1a" : "#f9f9f9")};
  font-family: "Arial", sans-serif;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 80%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
  height: 65px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 70px;
`;

const InfoValue = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
`;

const InfoTwo = styled.div`
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px;
  margin-left: -60px;
  margin-top: -40px;
  gap: 5px;
`

const CampaignNameSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const CampaignNameText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CampaignNameLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CampaignNameSubtext = styled.div`
  font-size: 14px;
  color: ${(props) => (props.$isDarkMode ? "#ccc" : "#555")};
`;

const CampaignNameInput = styled.input`
  width: 60%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${(props) => (props.$isDarkMode ? "#333" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
`;

const MessageTypeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const MessageTypeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const MessageTypeLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const MessageTypeSubtext = styled.div`
  font-size: 14px;
  color: ${(props) => (props.$isDarkMode ? "#ccc" : "#555")};
`;

const RadioButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioButtonLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TemplateSection = styled.div`
  margin-bottom: 20px;
`;

const TemplateLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TemplateSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${(props) => (props.$isDarkMode ? "#333" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
`;

const ParameterSection = styled.div`
  margin-bottom: 20px;
`;

const ParameterLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ParameterInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${(props) => (props.$isDarkMode ? "#333" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  margin-bottom: 10px;
`;

const MediaSection = styled.div`
  margin-bottom: 20px;
`;

const MediaLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MediaInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  background-color: ${(props) => (props.$isDarkMode ? "#333" : "#fff")};
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#000")};
  margin-bottom: 10px;
`;

const SendButton = styled.button`
  background-color: rgb(8, 91, 14);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background-color: rgba(8, 91, 14, 0.8);
  }
`;

const CancelButton = styled.button`
  background: none;
  border: none;
  color: rgb(8, 91, 14);
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    opacity: 0.8;
  }
`;

const FilterModal = ({ onClose, onApply }) => {
  const [filters, setFilters] = useState([
    {
      attribute: "Name",
      condition: "is",
      value: "",
    },
  ]);

  const [lastSeenQuickSelect, setLastSeenQuickSelect] = useState(null);
  const [lastSeenFrom, setLastSeenFrom] = useState("");
  const [lastSeenTo, setLastSeenTo] = useState("");

  const [createdAtQuickSelect, setCreatedAtQuickSelect] = useState(null);
  const [createdAtFrom, setCreatedAtFrom] = useState("");
  const [createdAtTo, setCreatedAtTo] = useState("");

  const handleAddFilter = () => {
    setFilters([  ...filters,
      {
        attribute: "Name",
        condition: "is",
        value: "",
      },
    ]);
  };

  const handleFilterChange = (index, field, value) => {
    const updatedFilters = [...filters];
    updatedFilters[index][field] = value;
    setFilters(updatedFilters);
  };

  const handleApply = () => {
    const filterData = {
      filters,
      lastSeen: {
        quickSelect: lastSeenQuickSelect,
        from: lastSeenFrom,
        to: lastSeenTo,
      },
      createdAt: {
        quickSelect: createdAtQuickSelect,
        from: createdAtFrom,
        to: createdAtTo,
      },
    };
    onApply(filterData);
    onClose();
  };

  const handleClearAll = () => {
    setFilters([
      {
        attribute: "Name",
        condition: "is",
        value: "",
      },
    ]);
    setLastSeenQuickSelect(null);
    setLastSeenFrom("");
    setLastSeenTo("");
    setCreatedAtQuickSelect(null);
    setCreatedAtFrom("");
    setCreatedAtTo("");
  };

  return (
    <FilterModalContainer>
      <FilterHeader>Filter Users</FilterHeader>

      {/* Last Seen Fields */}
      <h4>Last Seen</h4>
      <QuickSelectContainer>
        <QuickSelectButton
          $isActive={lastSeenQuickSelect === "today"}
          onClick={() => setLastSeenQuickSelect("today")}
        >
          Today
        </QuickSelectButton>
        <QuickSelectButton
          $isActive={lastSeenQuickSelect === "thisWeek"}
          onClick={() => setLastSeenQuickSelect("thisWeek")}
          >
            This Week
          </QuickSelectButton>
          <QuickSelectButton
            $isActive={lastSeenQuickSelect === "thisMonth"}
            onClick={() => setLastSeenQuickSelect("thisMonth")}
          >
            This Month
          </QuickSelectButton>
        </QuickSelectContainer>
        <DateFieldContainer>
          <DateField
            type="date"
            placeholder="From"
            value={lastSeenFrom}
            onChange={(e) => setLastSeenFrom(e.target.value)}
          />
          <DateField
            type="date"
            placeholder="To"
            value={lastSeenTo}
            onChange={(e) => setLastSeenTo(e.target.value)}
            />
            </DateFieldContainer>
      
            {/* Created At Fields */}
            <h4>Created At</h4>
            <QuickSelectContainer>
              <QuickSelectButton
                $isActive={createdAtQuickSelect === "today"}
                onClick={() => setCreatedAtQuickSelect("today")}
              >
                Today
              </QuickSelectButton>
              <QuickSelectButton
                $isActive={createdAtQuickSelect === "thisWeek"}
                onClick={() => setCreatedAtQuickSelect("thisWeek")}
              >
                This Week
              </QuickSelectButton>
              <QuickSelectButton
                $isActive={createdAtQuickSelect === "thisMonth"}
                onClick={() => setCreatedAtQuickSelect("thisMonth")}
              >
                This Month
                </QuickSelectButton>
      </QuickSelectContainer>
      <DateFieldContainer>
        <DateField
          type="date"
          placeholder="From"
          value={createdAtFrom}
          onChange={(e) => setCreatedAtFrom(e.target.value)}
        />
        <DateField
          type="date"
          placeholder="To"
          value={createdAtTo}
          onChange={(e) => setCreatedAtTo(e.target.value)}
        />
      </DateFieldContainer>

      {/* Attribute Filters */}
      {filters.map((filter, index) => (
        <FilterField key={index}>
          <SelectField
            value={filter.attribute}
            onChange={(e) =>  handleFilterChange(index, "attribute", e.target.value)
            }
          >
            <option value="Name">Name</option>
            <option value="Mobile Number">Mobile Number</option>
            <option value="Tags">Tags</option>
            <option value="First Message">First Message</option>
            <option value="Campaigns">Campaigns</option>
            <option value="Intervened">Intervened</option>
            <option value="Closed">Closed</option>
          </SelectField>
          <SelectField
            value={filter.condition}
            onChange={(e) =>
              handleFilterChange(index, "condition", e.target.value)
            }
          >
            <option value="is">is</option>
            <option value="are">are</option>
          </SelectField>
          {filter.attribute === "Tags" ? (
            <SelectField
              value={filter.value}
              onChange={(e) =>
                handleFilterChange(index, "value", e.target.value)
              }
            >
              <option value="">Select Tag</option>
              <option value="new lead">new lead</option>
              <option value="MBA">MBA</option>
              <option value="bba">bba</option>
              <option value="important">important</option>
              <option value="warm lead">warm lead</option>
              <option value="Closed">Closed</option>
              <option value="CAT">CAT</option>
              <option value="Qualified Lead">Qualified Lead</option>
            </SelectField>
          ) : (
            <InputField
              type="text"
              placeholder="Value"
              value={filter.value}
              onChange={(e) =>
                handleFilterChange(index, "value", e.target.value)
              }
            />
          )}
          {index === filters.length - 1 && (
            <AddIcon onClick={handleAddFilter}>+</AddIcon>
          )}
        </FilterField>
      ))}

      {/* Apply and Clear All Buttons */}
      <ButtonContainer>
        <ClearAllButton onClick={handleClearAll}>Clear All</ClearAllButton>
        <ApplyButton onClick={handleApply}>Apply</ApplyButton>
      </ButtonContainer>
    </FilterModalContainer>
  );
};

// Add the FilterModal component definition

// Broadcast Component
const Broadcast = ({ selectedUsersCount, onClose }) => {
  const { isDarkMode } = useTheme();
  const [campaignName, setCampaignName] = useState("");
  const [messageType, setMessageType] = useState("preApproved");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [templateParameters, setTemplateParameters] = useState(["", "", "", "", "", ""]);
  const [mediaUrl, setMediaUrl] = useState("");
  const [displayFileName, setDisplayFileName] = useState("");

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  const handleParameterChange = (index, value) => {
    const updatedParameters = [...templateParameters];
    updatedParameters[index] = value;
    setTemplateParameters(updatedParameters);
  };

  const handleMediaUrlChange = (e) => {
    setMediaUrl(e.target.value);
  };

  const handleDisplayFileNameChange = (e) => {
    setDisplayFileName(e.target.value);
  };

  return (
    <BroadcastContainer $isDarkMode={isDarkMode}>
      <CloseButton onClick={onClose} $isDarkMode={isDarkMode}>
        <RiCloseLine />
      </CloseButton>
      <h2>Create Campaign</h2>

      {/* Info Bar */}
      <InfoSection>
        <InfoTwo>
        <InfoText $isDarkMode={isDarkMode}>Template Messaging Tier</InfoText>
        <InfoValue $isDarkMode={isDarkMode}>Tier 1</InfoValue>
        </InfoTwo>
        <InfoTwo>
        <InfoText $isDarkMode={isDarkMode}>Remaining Quota</InfoText>
        <InfoValue $isDarkMode={isDarkMode}>1000</InfoValue>
        </InfoTwo>
        <InfoTwo>
        <InfoText $isDarkMode={isDarkMode}>Audience</InfoText>
        <InfoValue $isDarkMode={isDarkMode}>
          {selectedUsersCount} contacts selected
        </InfoValue>
        </InfoTwo>
       
      </InfoSection>

      {/* Campaign Name Section */}
      <CampaignNameSection>
        <CampaignNameText>
          <CampaignNameLabel>Campaign Name</CampaignNameLabel>
          <CampaignNameSubtext $isDarkMode={isDarkMode}>
            Pick something that describes your audience & goals.
          </CampaignNameSubtext>
        </CampaignNameText>
        <CampaignNameInput
          type="text"
          placeholder="Enter your campaign here"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          $isDarkMode={isDarkMode}
        />
      </CampaignNameSection>

      {/* Message Type Section */}
      <MessageTypeSection>
        <MessageTypeText>
          <MessageTypeLabel>Message Type</MessageTypeLabel>
          <MessageTypeSubtext $isDarkMode={isDarkMode}>
            Send template messages from one of your pre-approved templates. You
            can also opt to send regular messages to active users.
          </MessageTypeSubtext>
        </MessageTypeText>
        <RadioButtonContainer>
          <RadioButtonLabel>
            <input
              type="radio"
              value="preApproved"
              checked={messageType === "preApproved"}
              onChange={() => setMessageType("preApproved")}
            />
            Pre-approved Template Message
          </RadioButtonLabel>
          <RadioButtonLabel>
            <input
              type="radio"
              value="regular"
              checked={messageType === "regular"}
              onChange={() => setMessageType("regular")}
            />
            Regular Message
          </RadioButtonLabel>
        </RadioButtonContainer>
      </MessageTypeSection>

      {/* Template Name Section */}
      <TemplateSection>
        <TemplateLabel>Template Name</TemplateLabel>
        <TemplateSelect
          value={selectedTemplate}
          onChange={handleTemplateChange}
          $isDarkMode={isDarkMode}
        >
          <option value="">Select template</option>
          <option value="event_reminder_msg">event_reminder_msg</option>
        </TemplateSelect>
      </TemplateSection>

      {/* Template Parameters Section */}
      {selectedTemplate === "event_reminder_msg" && (
        <ParameterSection>
          <ParameterLabel>Parameters</ParameterLabel>
          {templateParameters.map((param, index) => (
            <ParameterInput
              key={index}
              type="text"
              placeholder={`Parameter ${index + 1}`}
              value={param}
              onChange={(e) => handleParameterChange(index, e.target.value)}
              $isDarkMode={isDarkMode}
            />
          ))}
        </ParameterSection>
      )}

      {/* Media Section */}
      <MediaSection>
        <MediaLabel>Media</MediaLabel>
        <MediaInput
          type="text"
          placeholder="Media URL"
          value={mediaUrl}
          onChange={handleMediaUrlChange}
          $isDarkMode={isDarkMode}
        />
        <MediaInput
          type="text"
          placeholder="Display file name"
          value={displayFileName}
          onChange={handleDisplayFileNameChange}
          $isDarkMode={isDarkMode}
        />
      </MediaSection>

      {/* Send Now and Cancel Buttons */}
      <ButtonContainer>
        <SendButton onClick={() => alert("Send Now functionality")}>
          Send Now
        </SendButton>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ButtonContainer>
    </BroadcastContainer>
  );
};

const ManageUsers = () => {
  const { isDarkMode } = useTheme();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [isBroadcastOpen, setIsBroadcastOpen] = useState(false); // State for Broadcast modal

  // Combine existing users with additional users
  const [users, setUsers] = useState([
    // Existing users...
    ...additionalUsers, // Add the 100 additional users
  ]);

  const [modalState, setModalState] = useState({
    isOpen: false,
    isEditMode: false,
    userToEdit: null,
  });

  // State to track selected users
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Toggle user selection
  const handleUserSelection = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // Handle "Select All" checkbox
  const handleSelectAll = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]); // Deselect all
    } else {
      setSelectedUsers(currentUsers.map((user) => user.id)); // Select all
    }
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  // Get users for the current page
  const currentUsers = users.slice(startIndex, endIndex);

  // Handle page navigation
  const handleNextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Export users to CSV
  const handleExport = () => {
    const headers = ["ID", "Name", "Mobile Number", "Status", "Tags", "Source"];
    const csvContent =
      "data:text/csv;charset=utf-8," +
      headers.join(",") +
      "\n" +
      users
        .map((user) =>
          [
            user.id,
            user.name,
            user.mobileNumber,
            user.status,
            user.tags.join(", "),
            user.source,
          ].join(",")
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Import users from CSV
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const rows = text.split("\n").slice(1); // Skip header row
        const importedUsers = rows
          .filter((row) => row.trim() !== "")
          .map((row) => {
            const [id, name, mobileNumber, status, tags, source] = row.split(",");
            return {
              id: parseInt(id),
              name,
              mobileNumber,
              status,
              tags: tags.split(", "),
              source,
              imageUrl: defaultImg, // Use the default image for imported users
            };
          });
        setUsers((prevUsers) => [...prevUsers, ...importedUsers]);
      };
      reader.readAsText(file);
    }
  };

  return (
    <>
      <ManageUsersContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MainContent $isDarkMode={isDarkMode}>
          <Header>Contacts</Header>
          <TopBar>
          <FilterButton onClick={() => setIsFilterModalOpen(true)}>
                Filter
              </FilterButton>
            <InfoBar $isDarkMode={isDarkMode}>
              <InfoText>
                <span>Template Messaging Tier</span>
                <span>🎯</span>
                <BoldText>Tier 1</BoldText>
              </InfoText>
              <InfoText>
                <span>Remaining Task</span>
                <span>🎯</span>
                <span>1000</span>
              </InfoText>
            </InfoBar>
            
            <ActionButtonsContainer>
             
              <ActionButton onClick={handleExport}>
                <FaFileExport />
                Export
              </ActionButton>
              <ActionButton>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleImport}
                  style={{ display: "none" }}
                  id="import-file"
                />
                <label htmlFor="import-file">
                  <FaFileImport />
                  Import
                </label>
              </ActionButton>
            </ActionButtonsContainer>
          </TopBar>

          {/* Render the Filter Modal */}
          {isFilterModalOpen && (
            <FilterModal
              onClose={() => setIsFilterModalOpen(false)}
              onApply={(filterData) => {
                console.log("Applied Filters:", filterData);
                setIsFilterApplied(true);
              }}
            />
          )}

          {/* Render the Broadcast Modal */}
          {isBroadcastOpen && (
            <Broadcast
              selectedUsersCount={selectedUsers.length}
              onClose={() => setIsBroadcastOpen(false)}
            />
          )}

          <TableContainer>
            {/* Show SelectedContactsBar above the table if users are selected */}
            {selectedUsers.length > 0 && isFilterApplied && (
              <SelectedContactsBar $isDarkMode={isDarkMode}>
                <span>{selectedUsers.length} Contact Selected</span>
                <ClearButton onClick={() => setSelectedUsers([])}>Clear</ClearButton>
                <ActionButtonStyled onClick={() => setIsBroadcastOpen(true)}>
                  Broadcast
                </ActionButtonStyled>
                <ActionButtonStyled onClick={() => alert("Manage Tags functionality")}>
                  Manage Tags
                </ActionButtonStyled>
              </SelectedContactsBar>
            )}

            {/* Always show the table */}
            <Table>
              <TableHead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === currentUsers.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Tags</th>
                  <th>Source</th>
                </tr>
              </TableHead>
              <TableBody $isDarkMode={isDarkMode}>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleUserSelection(user.id)}
                      />
                    </td>
                    <td>
                      <AvatarUsernameWrapper>
                        {user.name} {/* Only display the name */}
                      </AvatarUsernameWrapper>
                    </td>
                    <td>{user.mobileNumber}</td>
                    <td>
                      <TagsColumn>
                        {user.tags.map((tag) => (
                          <Tag key={tag} $isDarkMode={isDarkMode}>
                            {tag}
                          </Tag>
                        ))}
                      </TagsColumn>
                    </td>
                    <td>
                      <SourceColumn>{user.source}</SourceColumn>
                    </td>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination Section */}
          <PaginationWrapper>
            <PageButton
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              $isDarkMode={isDarkMode}
            >
              <RiArrowLeftSLine />
            </PageButton>
            <PageRange $isDarkMode={isDarkMode}>
              {startIndex + 1}-{Math.min(endIndex, users.length)}
            </PageRange>
            <PageButton
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(users.length / usersPerPage)}
              $isDarkMode={isDarkMode}
            >
              <RiArrowRightSLine />
            </PageButton>
          </PaginationWrapper>
        </MainContent>
      </ManageUsersContainer>
    </>
  );
};

export default ManageUsers;