import employeeData from "../data/__mocks__/employeeData.json";
import studentRecords from "../data/__mocks__/studentRecords.json";
import productData from "../data/__mocks__/productData.json";

const getQueryData = (query) => {
    switch (query) {
        case "q1":
            return employeeData;
        case "q2":
            return studentRecords;
        case "q3":
            return productData;
        default:
            return null;
    }
};

export default getQueryData;
