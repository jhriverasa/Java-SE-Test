package com.jhriverasa.app.business;
import com.jhriverasa.app.models.Employee;

import java.math.BigDecimal;

public class EmployeeBusiness {
    private static final BigDecimal MONTHS_IN_YEAR = BigDecimal.valueOf(12);

    public static BigDecimal calculateAnnualSalary(Employee employee) {
        BigDecimal monthlySalary = employee.getMonthSalary();
        BigDecimal annualSalary = monthlySalary.multiply( MONTHS_IN_YEAR );
        return annualSalary;
    }
}
