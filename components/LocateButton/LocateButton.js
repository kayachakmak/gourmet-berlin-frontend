import styled from "styled-components";

const StyledButton = styled.button`
  background-color: black;
  z-index: 2;
`;

export default function LocateButton({ onClick }) {
  console.log("iwas ckickec");
  return <StyledButton onClick={onClick}>Locate Me</StyledButton>;
}
