import React from "react";
import { FormContact } from "../../data/ContactData";
import { Button } from "../../globalStyles";
import { FormControl, FormInput, TextArea } from "./InputStyle";

function InputBox() {
  return (
    <FormControl>
      {FormContact.formData.map((item, index) => (
        <FormInput key={index} type={item.type} name={item.inputName} placeholder={item.inputName} />
      ))}
      <TextArea name={FormContact.TextMessage} placeholder={FormContact.TextMessage} />
      <Button btnText={FormContact.btnText}>{FormContact.btnText}</Button>
    </FormControl>
  );
}

export default InputBox;
