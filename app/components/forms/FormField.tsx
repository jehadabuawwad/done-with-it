import { FormikValues, useFormikContext } from "formik";
import React from "react";

import { AppTextInput } from "../TextInput";
import ErrorMessage from "./ErrorMessage";

interface IAppFormFieldProps {
  name: string;
  autoCorrect?: boolean;
  autoCapitalize?: string;
  icon?: any;
  keyboardType?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: string;
  onChangeText?: Function;
  onBlur?: Function;
  maxLength?: number;
  width?: number;
  multiline?: boolean;
  numberOfLines?: number;
}

const AppFormField: React.FunctionComponent<IAppFormFieldProps> = ({
  name,
  ...otherProps
}) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    touched,
    errors,
  } = useFormikContext<FormikValues>();

  return (
    <>
      <AppTextInput
        onChangeText={(text: string) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
