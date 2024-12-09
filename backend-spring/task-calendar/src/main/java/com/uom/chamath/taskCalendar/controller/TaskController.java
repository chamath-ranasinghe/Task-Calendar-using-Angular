package com.uom.chamath.taskCalendar.controller;

import com.uom.chamath.taskCalendar.model.Task;
import com.uom.chamath.taskCalendar.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:4200")
public class TaskController {

  @Autowired
  private TaskService taskService;

  @GetMapping("/tasks")
  public List<Task> get(){
    return taskService.getTasks();
  }

  @PutMapping("/tasks")
  public Task getTasks(@RequestBody Task task){
    return taskService.addTask(task);
  }

  @DeleteMapping("/tasks/{id}")
  public Task deleteTask(@PathVariable int id){
    return taskService.deleteTask(id);
  }
}
