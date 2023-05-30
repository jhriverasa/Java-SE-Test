package com.jhriverasa.app.responses;

import com.jhriverasa.app.models.Employee;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class EmployeeResponse {
    private final Employee employee;
    private final BigDecimal annualSalary;

    public EmployeeResponse(Employee employee, BigDecimal annualSalary) {
        this.employee = employee;
        this.annualSalary = annualSalary;
    }

}