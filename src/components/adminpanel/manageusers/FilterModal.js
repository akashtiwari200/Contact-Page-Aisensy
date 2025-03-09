// import React, { useState } from "react";
// import styled from "styled-components";

// const FilterModalContainer = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   z-index: 1000;
//   width: 450px;
// `;

// const FilterHeader = styled.h3`
//   font-size: 18px;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const FilterField = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 15px;
// `;

// const SelectField = styled.select`
//   padding: 8px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 14px;
//   flex: 1;
// `;

// const InputField = styled.input`
//   padding: 8px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   font-size: 14px;
//   flex: 1;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   gap: 10px;
//   margin-top: 20px;
// `;

// const ApplyButton = styled.button`
//   background-color: rgb(8, 91, 14);
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 8px 16px;
//   cursor: pointer;
//   font-size: 14px;
// `;

// const ClearAllButton = styled.button`
//   background: none;
//   border: none;
//   color: rgb(8, 91, 14);
//   cursor: pointer;
//   font-size: 14px;
// `;

// const FilterModal = ({ onClose, onApply, users }) => {
//   const [filters, setFilters] = useState([
//     {
//       attribute: "Name",
//       condition: "is",
//       value: "",
//     },
//   ]);

//   const handleAddFilter = () => {
//     setFilters([
//       ...filters,
//       {
//         attribute: "Name",
//         condition: "is",
//         value: "",
//       },
//     ]);
//   };

//   const handleFilterChange = (index, field, value) => {
//     const updatedFilters = [...filters];
//     updatedFilters[index][field] = value;
//     setFilters(updatedFilters);
//   };

//   const handleApply = () => {
//     onApply(filters);
//     onClose();
//   };

//   const handleClearAll = () => {
//     setFilters([
//       {
//         attribute: "Name",
//         condition: "is",
//         value: "",
//       },
//     ]);
//   };

//   return (
//     <FilterModalContainer>
//       <FilterHeader>Filter Users</FilterHeader>
//       {filters.map((filter, index) => (
//         <FilterField key={index}>
//           <SelectField
//             value={filter.attribute}
//             onChange={(e) =>
//               handleFilterChange(index, "attribute", e.target.value)
//             }
//           >
//             <option value="Name">Name</option>
//             <option value="Mobile Number">Mobile Number</option>
//             <option value="Tags">Tags</option>
//           </SelectField>
//           <SelectField
//             value={filter.condition}
//             onChange={(e) =>
//               handleFilterChange(index, "condition", e.target.value)
//             }
//           >
//             <option value="is">is</option>
//             <option value="are">are</option>
//           </SelectField>
//           {filter.attribute === "Tags" ? (
//             <SelectField
//               value={filter.value}
//               onChange={(e) =>
//                 handleFilterChange(index, "value", e.target.value)
//               }
//             >
//               <option value="">Select Tag</option>
//               <option value="new lead">New Lead</option>
//               <option value="MBA">MBA</option>
//               <option value="bba">BBA</option>
//               <option value="important">Important</option>
//               <option value="warm lead">Warm Lead</option>
//               <option value="Closed">Closed</option>
//               <option value="CAT">CAT</option>
//               <option value="Qualified Lead">Qualified Lead</option>
//             </SelectField>
//           ) : filter.attribute === "Name" ? (
//             <SelectField
//               value={filter.value}
//               onChange={(e) =>
//                 handleFilterChange(index, "value", e.target.value)
//               }
//             >
//               <option value="">Select Name</option>
//               {users.map((user) => (
//                 <option key={user.id} value={user.name}>
//                   {user.name}
//                 </option>
//               ))}
//             </SelectField>
//           ) : (
//             <InputField
//               type="text"
//               placeholder="Value"
//               value={filter.value}
//               onChange={(e) =>
//                 handleFilterChange(index, "value", e.target.value)
//               }
//             />
//           )}
//           {index === filters.length - 1 && (
//             <button onClick={handleAddFilter}>+</button>
//           )}
//         </FilterField>
//       ))}
//       <ButtonContainer>
//         <ClearAllButton onClick={handleClearAll}>Clear All</ClearAllButton>
//         <ApplyButton onClick={handleApply}>Apply</ApplyButton>
//       </ButtonContainer>
//     </FilterModalContainer>
//   );
// };

// export default FilterModal;