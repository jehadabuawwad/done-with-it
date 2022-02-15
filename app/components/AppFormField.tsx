import { FormikValues, useFormikContext } from "formik";

import { AppTextInput } from "./AppTextInput";
import ErrorMessage from "./Error";

interface IAppFormFieldProps {
  name: string;
  autoCorrect?: boolean;
  autoCapitalize?: any;
  icon?: any;
  keyboardType?: any;
  placeholder?: string;
  secureTextEntry?: boolean;
  textContentType?: any;
  onChangeText?: any;
  onBlur?: any;
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
      <ErrorMessage error={errors[name]} visiable={touched[name]} />
    </>
  );
};

export default AppFormField;
