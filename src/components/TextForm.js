import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../constants";

export default function TextForm(props) {
  const [text, setText] = React.useState("");

  function handleSubmit(e) {
    if (text && !props.loading) {
      e.preventDefault();
      e.stopPropagation();
      props.onSubmit(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor={props.name}>{props.label}</Label>
      <InputAndSubmitWrapper>
        <Input
          id={props.name}
          value={text}
          placeholder={props.placeholder}
          onChange={e => setText(e.target.value)}
        />
        <Button disabled={props.loading || text.length < 1} type="submit">
          {props.loading ? (
            <i className="fas fa-spinner fa-pulse"></i>
          ) : (
            props.buttonText || "Submit"
          )}
        </Button>
      </InputAndSubmitWrapper>
      {props.errorText && <ErrorMessage>{props.errorText}</ErrorMessage>}
    </form>
  );
}

const ErrorMessage = styled.div`
  margin: 0.25em 0;
  color: red;
  font-size: 0.9em;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  width: 100%;
`;

const InputAndSubmitWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  padding: 1rem 1rem;
  font-size: 1em;
  display: block;
  flex: 1 0;
  border: 1px solid ${COLORS.tealDark};
  border-radius: 3px;
`;

const Button = styled.button`
  flex: 0 0;
  padding: 1rem 1rem;
  margin-left: 0.5rem;
  display: block;
  background: ${COLORS.teal};
  font-weight: bold;
  border: none;
  border-radius: 3px;
`;
