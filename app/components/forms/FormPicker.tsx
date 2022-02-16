import { FormikValues, useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

interface IFormPickerProps {
  items: any;
  name: string;
  numberOfColumns: number;
  PickerItemComponent: any;
  placeholder: string;
  width: string;
}

const FormPicker: React.FunctionComponent<IFormPickerProps> = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<FormikValues>();
  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item: any) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormPicker;
