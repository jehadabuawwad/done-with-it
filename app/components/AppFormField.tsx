import { FormikValues, useFormikContext } from "formik";

import { AppTextInput } from "./AppTextInput";
import ErrorMessage from "./Error";

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
