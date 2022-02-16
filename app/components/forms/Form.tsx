import * as React from "react";
import { Formik } from "formik";

interface IAppFormProps {
  initialValues: Object;
  onSubmit: any;
  validationSchema: Object;
}

const AppForm: React.FunctionComponent<IAppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
