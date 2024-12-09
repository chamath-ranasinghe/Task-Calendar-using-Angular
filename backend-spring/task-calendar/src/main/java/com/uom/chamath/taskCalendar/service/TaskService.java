package com.uom.chamath.taskCalendar.service;

import com.uom.chamath.taskCalendar.model.Task;
import com.uom.chamath.taskCalendar.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

  @Autowired
  private TaskRepository taskRepository;

  public Task addTask(Task task) {
    return taskRepository.save(task);
  }

  public List<Task> getTasks() {
    return taskRepository.findAll();
  }

  public Task deleteTask(int id) {
    Task task = taskRepository.findById(id).orElse(null);
    taskRepository.deleteById(id);
    return task;
  }
}
