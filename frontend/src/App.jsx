import React from "react";
import { useQuery } from "react-query";
import { TextInput,  DropdownSingle, CheckboxList, RadioList,  DatePicker,  } from "oolib";
import "./App.css";
const fetchFormConfig = async () => {
    const response = await fetch("http://localhost:5000/api/form");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
};

const componentMapping = {
    TextInput,
    // ImageInput,
    DropdownSingle,
    CheckboxList,
    RadioList,
    // VideoInput,
    DatePicker,
    // PDFInput,
};

const App = () => {
    const { data, error, isLoading } = useQuery("formConfig", fetchFormConfig);

    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>Error: {error.message}</div>;
    console.log("data", data);
    return (
        <div>
            <h1>Dynamic Form</h1>
            <form>
                {data.map((component, index) => {
                    const Component = componentMapping[component.comp];
                    if (!Component) return null;

                    return (
                        <div key={index}>
                            <Component {...component.props} isRequired={component.isRequired} />
                        </div>
                    );
                })}
            </form>
        </div>
    );
};

export default App;
