import employeeData from "../data/__mocks__/employeeData.json";
import studentRecords from "../data/__mocks__/studentRecords.json";

const getQueryData = (query) => {
    switch (query) {
        case "q1":
            return employeeData;
        case "q2":
            return studentRecords;
        default:
            return null;
    }
};

export default getQueryData;
