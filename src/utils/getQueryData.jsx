import employeeData from "../data/__mocks__/employeeData.json";
import studentRecords from "../data/__mocks__/studentRecords.json";
import productData from "../data/__mocks__/productData.json";

const getQueryData = (query) => {
    switch (query) {
        case "(small-dataset) SELECT * FROM Employee":
            return employeeData;
        case "(medium-dataset) SELECT * FROM Student":
            return studentRecords;
        case "(large-dataset) SELECT * FROM Product":
            return productData;
        default:
            return null;
    }
};

export default getQueryData;
