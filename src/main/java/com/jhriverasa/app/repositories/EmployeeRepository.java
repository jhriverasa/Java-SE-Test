package com.jhriverasa.app.repositories;
import org.springframework.data.repository.CrudRepository;
import com.jhriverasa.app.models.Employee;

import java.util.UUID;

public interface EmployeeRepository extends CrudRepository<Employee, UUID> {

}




