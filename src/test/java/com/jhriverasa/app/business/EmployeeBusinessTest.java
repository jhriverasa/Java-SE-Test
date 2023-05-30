package com.jhriverasa.app.business;


import com.jhriverasa.app.models.Employee;
import org.junit.jupiter.api.Test;
import java.math.BigDecimal;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class EmployeeBusinessTest {

    @Test
    public void testCalculateAnnualSalary() {
        // Mocks  Employee object
        Employee employee = mock(Employee.class);
        BigDecimal monthlySalary = BigDecimal.valueOf(5000);
        when(employee.getMonthSalary()).thenReturn(monthlySalary);

        // Gets annual salary using EmployeeBusiness
        BigDecimal expectedAnnualSalary = monthlySalary.multiply(BigDecimal.valueOf(12));
        BigDecimal actualAnnualSalary = EmployeeBusiness.calculateAnnualSalary(employee);

        // verifies that salary is  the expected
        assertEquals(expectedAnnualSalary, actualAnnualSalary);
    }
}
