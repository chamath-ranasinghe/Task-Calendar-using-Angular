package com.uom.chamath.taskCalendar.repository;

import com.uom.chamath.taskCalendar.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task,Integer> {
}
