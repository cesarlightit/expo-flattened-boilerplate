import { forwardRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

export interface TextFieldProps extends ViewProps {
  input: TextInputProps;
  errorMessage?: string | undefined;
}

export const TextField = forwardRef<TextInput, TextFieldProps>(
  ({ input: { style, ...input }, errorMessage, ...props }, ref) => (
    <View {...props}>
      <TextInput
        ref={ref}
        style={StyleSheet.flatten([styles.input, style])}
        {...input}
      />
      {errorMessage !== undefined && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  ),
);

TextField.displayName = "TextField";

interface Styles {
  input: ViewStyle;
  errorMessage: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  errorMessage: {
    color: "red",
  },
});
