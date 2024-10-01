import { Ref } from "react";
import { Controller, ControllerProps, FieldValues } from "react-hook-form";
import { TextInput } from "react-native";

import { TextField, type TextFieldProps } from "./TextField";

export interface FormTextFieldProps<TFieldValues extends FieldValues>
  extends Omit<ControllerProps<TFieldValues>, "render"> {
  input?: TextFieldProps["input"] | undefined;
  inputRef?: Ref<TextInput> | undefined;
}

export const FormTextField = <TFieldValues extends FieldValues>({
  input,
  inputRef,
  ...props
}: FormTextFieldProps<TFieldValues>) => (
  <Controller
    {...props}
    render={({ field: { value, onChange, onBlur }, fieldState }) => (
      <TextField
        ref={inputRef}
        input={{
          ...input,
          value: value,
          onChangeText: onChange,
          onBlur: onBlur,
        }}
        errorMessage={fieldState.error?.message}
      />
    )}
  />
);
