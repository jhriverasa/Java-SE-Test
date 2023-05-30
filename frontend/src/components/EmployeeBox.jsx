import { Box } from "@mui/material";
import "./EmployeeBox.css";

const EmployeeBox = ({
  name,
  lastname,
  monthlySalary,
  annualSalary,
  dateOfHire,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 2,
        border: "1px solid #90caf9",
        borderRadius: 2,
        width: "250px",
      }}
    >
      <Box
        sx={{ textAlign: "center", paddingBottom: 2, color: "#00ffc5" }}
      >{`${name} ${lastname}`}</Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: 1,
          }}
        >
          Monthly Salary:
        </Box>
        <Box>{`${monthlySalary} $`}</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: 1,
          }}
        >
          Annual Salary:
        </Box>
        <Box>{`${annualSalary} $`}</Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginRight: 1,
            justifyContent: "space-between",
          }}
        >
          Date of Hire:
        </Box>
        <Box>{`${dateOfHire}`}</Box>
      </Box>
    </Box>
  );
};

export default EmployeeBox;
