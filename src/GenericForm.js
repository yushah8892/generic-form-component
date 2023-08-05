import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  /* Default styles */
  border: 1px solid #ccc;
  padding: 20px;
  /* Override styles based on customStyles.form */
  ${(props) => props.customStyles && props.customStyles.form}
`;

const Label = styled.label`
  /* Default styles */
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  /* Default styles */
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  /* Override styles based on customStyles.input */
  ${(props) => props.customStyles && props.customStyles.input}
`;

const Select = styled.select`
  /* Default styles */
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  /* Override styles based on customStyles.select */
  ${(props) => props.customStyles && props.customStyles.select}
`;

const ErrorMessage = styled.div`
  /* Default styles */
  color: red;
`;

const GenericForm = ({ onSubmit, customStyles }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [toggleValue, setToggleValue] = useState(false);
  const [options, setOptions] = useState(["Option 1", "Option 2", "Option 3"]);

  const handleInput1Change = (event) => {
    const inputValue = event.target.value;

    // Validate input1 to allow only numeric values
    if (!Number.isNaN(Number(inputValue)) && inputValue.length <= 5) {
      setInput1(inputValue);
    } else {
      // Throw an error when more than 5 characters are entered
      alert("Input 1 should be numeric and up to 5 characters long.");
    }
  };

  const handleInput2Change = (event) => {
    const inputValue = event.target.value;

    // Validate input2 to allow only alphabets and up to 5 characters
    if (/^[A-Za-z]*$/.test(inputValue) && inputValue.length <= 5) {
      setInput2(inputValue);
    } else {
      // Throw an error when more than 5 characters are entered
      alert("Input 2 should contain only alphabets and up to 5 characters.");
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleToggleChange = (event) => {
    setToggleValue(event.target.checked);
  };

  useEffect(() => {
    // Update the dropdown options based on the toggle value
    if (toggleValue) {
      setOptions(["Option A", "Option B", "Option C"]);
    } else {
      setOptions(["Option 1", "Option 2", "Option 3"]);
    }
  }, [toggleValue]);

  const handleSubmit = () => {
    // Perform validation on input1 and input2
    if (!input1 || !input2) {
      alert("Please fill in all the fields.");
      return;
    }

    // Submit the form data
    onSubmit({
      input1,
      input2,
      selectedOption
    });

    // Reset the form after submission
    setInput1("");
    setInput2("");
    setSelectedOption("");
    setToggleValue(false);
  };

  return (
    <FormWrapper style={customStyles && customStyles.form}>
      <Label>
        Input 1 (Numeric Only):
        <Input
          type="text"
          value={input1}
          onChange={handleInput1Change}
          style={customStyles && customStyles.input}
        />
      </Label>
      <br />
      <Label>
        Input 2 (Alphabets Only):
        <Input
          type="text"
          value={input2}
          onChange={handleInput2Change}
          style={customStyles && customStyles.input}
        />
      </Label>
      <br />
      <Label>
        Select an option:
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          style={customStyles && customStyles.select}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Label>
      <br />
      <Label>
        Toggle Switch:
        <Input
          type="checkbox"
          checked={toggleValue}
          onChange={handleToggleChange}
        />
      </Label>
      <br />
      <ErrorMessage>
        {/* Error message display logic can be added here */}
      </ErrorMessage>
      <button onClick={handleSubmit}>Submit</button>
    </FormWrapper>
  );
};

export default GenericForm;
