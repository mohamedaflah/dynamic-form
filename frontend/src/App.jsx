import { useQuery } from "react-query";
import {
  TextInput,
  DropdownSingle,
  CheckboxList,
  RadioList,
  DatePicker,
  LoaderCircle,
} from "oolib";
import "./App.css";

import { fetchSampleData } from "./utils/fetch-sampledata";
import { useEffect } from "react";

const components = {
  TextInput,
  DropdownSingle,
  CheckboxList,
  RadioList,
  DatePicker,
};

const App = () => {
  const {
    data: formConfig,
    isLoading: loading,
    error,
  } = useQuery("formConfig", fetchSampleData);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1>oolib Form</h1>
      {loading ? (
        <div>
          <LoaderCircle />
        </div>
      ) : (
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            {formConfig?.map((component, index) => {
              const FormComponent = components[component.comp];
              if (!FormComponent) return null;

              return (
                <div key={index}>
                  <FormComponent
                    {...component.props}
                    isRequired={component.isRequired}
                  />
                </div>
              );
            })}
          </form>
        </>
      )}
    </div>
  );
};

export default App;
