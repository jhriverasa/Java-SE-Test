package com.jhriverasa.app.controllers;

import com.jhriverasa.app.business.EmployeeBusiness;
import com.jhriverasa.app.responses.EmployeeResponse;
import com.jhriverasa.app.responses.EmptyResponse;

import com.jhriverasa.app.responses.StringResponse;

import net.datafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jhriverasa.app.models.Employee;
import com.jhriverasa.app.repositories.EmployeeRepository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1/") // URL's starts with /
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping(path = "/employees")
    public ResponseEntity<Object> getAllEmployees(){
        try{
            List<Employee> employeesInDb = (List<Employee>) employeeRepository.findAll();
            List<EmployeeResponse> response = new ArrayList<>();;
            for(Employee cur: employeesInDb){
                EmployeeResponse curRes = new EmployeeResponse(cur, EmployeeBusiness.calculateAnnualSalary(cur));
                response.add( curRes );
            }

            return new ResponseEntity<>(response, HttpStatus.OK);
        }catch (Exception e){
            System.out.println("Something went wrong.");
            System.out.println("Error message: " + e.getMessage());
            return new ResponseEntity<>(new StringResponse("An error has occurred."), HttpStatus.INTERNAL_SERVER_ERROR);
        }



    }

    @GetMapping(path = "/employee/{id}")
    public ResponseEntity<Object> getEmployeeById(@PathVariable("id") UUID id){
        try{
            Optional<Employee> response = employeeRepository.findById(id);
            if (response.isPresent()){
                Employee employee = response.get();
                EmployeeResponse res = new EmployeeResponse(employee,EmployeeBusiness.calculateAnnualSalary(employee));
                return new ResponseEntity<>(res, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(new EmptyResponse(), HttpStatus.OK);
            }



        } catch (Exception e) {
            System.out.println("Something went wrong.");
            System.out.println("Error message: " + e.getMessage());
            return new ResponseEntity<>(new StringResponse("An error has occurred."), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }


    // Basically creates a new user with fake data.
    @GetMapping(path = "/employee/create")
    public ResponseEntity<Object> creteNewEmployee(){
        try{
            // creates data for new employees
            Faker faker = new Faker();
            Employee empToCreate = new Employee();
            empToCreate.setName(faker.name().firstName());
            empToCreate.setLastname(faker.name().lastName());
            empToCreate.setDateOfHire(LocalDate.now());
            empToCreate.setMonthSalary(BigDecimal.valueOf(faker.number().numberBetween(1000,20000)));

            employeeRepository.save(empToCreate);

            return new ResponseEntity<>(empToCreate, HttpStatus.OK);



        } catch (Exception e) {
            System.out.println("Something went wrong.");
            System.out.println("Error message: " + e.getMessage());
            return new ResponseEntity<>(new StringResponse("An error has occurred."), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
