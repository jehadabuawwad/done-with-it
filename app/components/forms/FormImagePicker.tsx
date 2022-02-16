import { FormikValues, useFormikContext } from "formik";
import React from "react";
import { ErrorMessage } from ".";
import ImageInputList from "../ImageInputList";

interface IFormImagePickerProps {
  name: string;
}
const FormImagPicker: React.FunctionComponent<IFormImagePickerProps> = ({
  name,
}) => {
  const { errors, setFieldValue, touched, values } =
    useFormikContext<FormikValues>();

  const imageUris = values[name];
  
  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onRemoveImage={handleRemove}
        onAddImage={handleAdd}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagPicker;
