import "./Home.css";

import { useState, useEffect } from "react";
import { TextField, Box, Button, Grid } from "@mui/material";

import { isValidUUID } from "../utils/utils";
import { getAllEmployees, getEmployeeById } from "../utils/requests";
import Layout from "../components/base/Layout";
import EmployeeBox from "../components/EmployeeBox";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [employeeInputText, setEmployeeInputText] = useState("");

  useEffect(() => {
    getAllEmployees({
      onSuccess: (response) => {
        if (Array.isArray(response.data)) {
          setEmployees(response.data);
        }
        console.log(response.data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  }, []);

  useEffect(() => {
    if (employeeInputText === "") {
      getAllEmployees({
        onSuccess: (response) => {
          if (Array.isArray(response.data)) {
            setEmployees(response.data);
          }
          console.log(response.data);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  }, [employeeInputText]);

  const handleSearch = () => {
    if (isValidUUID(employeeInputText)) {
      getEmployeeById({
        employeeId: employeeInputText,
        onSuccess: (response) => {
          if (response.data) {
            setEmployees([response.data]);
          }
          console.log([response.data]);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log("not valid UUID");
    }
  };

  const handleChangeEmployeeInput = (e) => {
    setEmployeeInputText(e.target.value);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
          /*border: "1px solid  red",*/
        }}
      >
        <TextField
          id="outlined-basic"
          label="Employee UUID"
          variant="outlined"
          value={employeeInputText}
          onChange={handleChangeEmployeeInput}
        />
        <Button
          variant="outlined"
          sx={{ marginX: "6px" }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          p: 4,
          border: "1px solid #002b4e",
          borderRadius: 1,
        }}
      >
        <Grid container spacing={1}>
          {employees.length === 0 && (
            <Box sx={{ textAlign: "center", width: "100%" }}>
              Employees not found.
            </Box>
          )}
          {employees.map((employee) => {
            const aSalary = employee.annualSalary;
            const curEmp = employee.employee;

            return (
              <Grid key={curEmp.id} item xs={8} md={6} lg={4}>
                <EmployeeBox
                  annualSalary={aSalary}
                  dateOfHire={curEmp.dateOfHire}
                  lastname={curEmp.lastname}
                  name={curEmp.name}
                  monthlySalary={curEmp.monthSalary}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Home;
