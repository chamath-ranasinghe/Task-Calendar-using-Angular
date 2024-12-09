package com.uom.chamath.taskCalendar.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Task")
public class Task {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String text;
  private String date;

  public Task() {}

  public Task(int id, String text, String date, boolean reminder) {
    this.id = id;
    this.text = text;
    this.date = date;
    this.reminder = reminder;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public boolean isReminder() {
    return reminder;
  }

  public void setReminder(boolean reminder) {
    this.reminder = reminder;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  private boolean reminder;
}
