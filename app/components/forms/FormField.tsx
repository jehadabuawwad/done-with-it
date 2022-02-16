import { FormikValues, useFormikContext } from "formik";

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
  const { handleChange, errors, setFieldTouched, touched } =
    useFormikContext<FormikValues>();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
