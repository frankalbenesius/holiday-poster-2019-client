import React from "react";
import fetch from "unfetch";
import styled from "@emotion/styled";
import { API_URL, COLORS } from "../constants";
import ImageTools from "../lib/ImageTools";
import { submissionsClosed } from "../hooks/useTimeUntil2020";

export default function ImageInput({
  label,
  passphrase,
  afterSubmit,
  inputId
}) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [file, setFile] = React.useState();
  const inputRef = React.useRef(null);

  async function handleImageSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!!file && !loading) {
      try {
        const formData = new FormData();
        formData.append("passphrase", passphrase);
        const tools = new ImageTools();
        const resizedBlob = await tools.resize(file, {
          width: 675,
          height: 675
        });
        formData.append("image", resizedBlob);
        setError("");
        setLoading(true);
        fetch(API_URL + "/upload", {
          method: "POST",
          body: formData
        })
          .then(res => {
            if (res.ok) {
              setFile(undefined);
            } else {
              res.json().then(err => {
                if (err.message) {
                  setError(err.message);
                } else {
                  setError("Something went wrong.");
                }
              });
            }
          })
          .catch(err => {
            console.warn("Error:", err);
            setError("Something went wrong.");
          })
          .finally(() => {
            setLoading(false);
            afterSubmit();
          });
      } catch (err) {
        console.warn("Caught err:", err);
        setError("Something went wrong.");
      }
    }
  }

  function handleImageChange(e) {
    if (!e.target.files[0]) {
      return;
    }
    const file = e.target.files[0];
    setFile(file);
  }
  // actually reset the file input's value to null if the file is undefined
  // keeps it in sync
  React.useEffect(() => {
    if (file === undefined && inputRef.current) {
      inputRef.current.value = null;
    }
  }, [file]);

  const id = "image_input" + inputId;

  if (submissionsClosed()) {
    return <div>Submissions are closed.</div>;
  }

  return (
    <Form onSubmit={handleImageSubmit}>
      <Label htmlFor={id}>
        {label ? label : "Upload an image for your square:"}
      </Label>
      <InputAndSubmitWrapper>
        <FakeImageInput htmlFor={id}>
          {file ? (
            file.name
          ) : (
            <>
              <i className="fas fa-upload"></i>&nbsp; Select an image
            </>
          )}
        </FakeImageInput>
        <Button disabled={!file || loading} type="submit">
          {loading ? <i className="fas fa-spinner fa-pulse"></i> : "Submit"}
        </Button>
      </InputAndSubmitWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <HiddenInput
        ref={inputRef}
        id={id}
        type="file"
        onChange={handleImageChange}
        accept="image/png, image/jpeg, image/jpg"
      />
    </Form>
  );
}

const Form = styled.form`
  max-width: 500px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  width: 100%;
`;

const InputAndSubmitWrapper = styled.div`
  display: flex;
`;

const FakeImageInput = styled.label`
  padding: 1rem 1rem;
  font-size: 1em;
  display: block;
  flex: 1 0;
  border: 1px solid ${COLORS.tealDark};
  border-radius: 3px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  left: -100px;
  top: -100px;
  pointer-events: none;
  width: 1px;
  height: 1px;
`;

const ErrorMessage = styled.div`
  margin: 0.25em 0;
  color: red;
  font-size: 0.9em;
`;
