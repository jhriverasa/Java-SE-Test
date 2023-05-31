import { axiosReq } from "./req";
import { URL_PATHS } from "./constants";

const getAllEmployees = ({ onSuccess, onError }) => {
  axiosReq({
    reqOption: "get",
    path: URL_PATHS.REST_API_PATH_V1 + "/employees",
    onSuccess,
    onError,
  });
};

const getEmployeeById = ({ employeeId, onSuccess, onError }) => {
  axiosReq({
    reqOption: "get",
    path: URL_PATHS.REST_API_PATH_V1 + "/employee/" + employeeId,
    onSuccess,
    onError,
  });
};

export { getAllEmployees, getEmployeeById };
