import React from "react";
import styled from "@emotion/styled";

export default function LoadingScreen() {
  return (
    <LoadingScreenWrapper>
      <i className="fas fa-spinner fa-pulse"></i>
    </LoadingScreenWrapper>
  );
}

const LoadingScreenWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;
