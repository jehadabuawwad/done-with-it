import AppButton from "./AppButton";

import { useFormikContext } from "formik";
import { FormikValues } from "formik";

interface ISubmitButtonProps {
  title: string;
}

const SubmitButton: React.FunctionComponent<ISubmitButtonProps> = ({
  title,
}) => {
  const { handleSubmit } = useFormikContext<FormikValues>();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
