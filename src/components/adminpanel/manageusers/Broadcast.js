// import React, { useState } from "react";
// import styled from "styled-components";
// import { useTheme } from "../../context/ThemeContext";
// import { RiCloseLine } from "react-icons/ri";

// // Styled Components (same as before)
// const BroadcastContainer = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
//   width: 600px;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: none;
//   border: none;
//   cursor: pointer;
//   font-size: 20px;
//   color: #333;
// `;

// const Heading = styled.h2`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const InfoBar = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: rgba(8, 91, 14, 0.1); /* Light background color */
//   padding: 15px;
//   border-radius: 8px;
//   margin-bottom: 20px;
// `;

// const InfoSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const InfoText = styled.div`
//   font-size: 14px;
//   color: #333;
//   display: flex;
//   align-items: center;
//   gap: 5px;
// `;

// const InfoValue = styled.div`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
// `;

// const CampaignNameSection = styled.div`
//   margin-bottom: 20px;
// `;

// const CampaignNameLabel = styled.div`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 5px;
// `;

// const CampaignNameDescription = styled.div`
//   font-size: 14px;
//   color: #666;
//   margin-bottom: 10px;
// `;

// const CampaignNameInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 14px;
// `;

// const MessageTypeSection = styled.div`
//   margin-bottom: 20px;
// `;

// const MessageTypeLabel = styled.div`
//   font-size: 16px;
//   font-weight: bold;
//   color: #333;
//   margin-bottom: 5px;
// `;

// const MessageTypeDescription = styled.div`
//   font-size: 14px;
//   color: #666;
//   margin-bottom: 10px;
// `;

// const RadioButtonContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const RadioButtonLabel = styled.label`
//   font-size: 14px;
//   font-weight: bold;
//   color: #333;
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const RadioButton = styled.input`
//   margin: 0;
// `;

// // Broadcast Component
// const Broadcast = ({ onClose, selectedContactsCount }) => {
//   const [campaignName, setCampaignName] = useState("");
//   const [messageType, setMessageType] = useState("preApproved");

//   const handleCampaignNameChange = (e) => {
//     setCampaignName(e.target.value);
//   };

//   const handleMessageTypeChange = (e) => {
//     setMessageType(e.target.value);
//   };

//   return (
//     <BroadcastContainer>
//       <CloseButton onClick={onClose}>
//         <RiCloseLine />
//       </CloseButton>
//       <Heading>Create Campaign</Heading>

//       {/* Info Bar */}
//       <InfoBar>
//         <InfoSection>
//           <InfoText>
//             <span>Template Messaging Tier</span>
//             <span>🎯</span>
//           </InfoText>
//           <InfoValue>Tier 1</InfoValue>
//         </InfoSection>
//         <InfoSection>
//           <InfoText>
//             <span>Remaining Quota</span>
//             <span>🎯</span>
//           </InfoText>
//           <InfoValue>1000</InfoValue>
//         </InfoSection>
//         <InfoSection>
//           <InfoText>
//             <span>Audience</span>
//             <span>🎯</span>
//           </InfoText>
//           <InfoValue>{selectedContactsCount} Contact Selected</InfoValue>
//         </InfoSection>
//       </InfoBar>

//       {/* Campaign Name Section */}
//       <CampaignNameSection>
//         <CampaignNameLabel>Campaign Name</CampaignNameLabel>
//         <CampaignNameDescription>
//           Pick something that describes your audience & goals.
//         </CampaignNameDescription>
//         <CampaignNameInput
//           type="text"
//           placeholder="Enter your campaign here"
//           value={campaignName}
//           onChange={handleCampaignNameChange}
//         />
//       </CampaignNameSection>

//       {/* Message Type Section */}
//       <MessageTypeSection>
//         <MessageTypeLabel>Message Type</MessageTypeLabel>
//         <MessageTypeDescription>
//           Send template messages from one of your pre-approved templates. You can
//           also opt to send regular messages to active users.
//         </MessageTypeDescription>
//         <RadioButtonContainer>
//           <RadioButtonLabel>
//             <RadioButton
//               type="radio"
//               name="messageType"
//               value="preApproved"
//               checked={messageType === "preApproved"}
//               onChange={handleMessageTypeChange}
//             />
//             Pre-approved Template Message
//           </RadioButtonLabel>
//           <RadioButtonLabel>
//             <RadioButton
//               type="radio"
//               name="messageType"
//               value="regular"
//               checked={messageType === "regular"}
//               onChange={handleMessageTypeChange}
//             />
//             Regular Message
//           </RadioButtonLabel>
//         </RadioButtonContainer>
//       </MessageTypeSection>
//     </BroadcastContainer>
//   );
// };

// export default Broadcast;