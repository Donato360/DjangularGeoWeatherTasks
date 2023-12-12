/*
    task-list.compnent.ts

    Class that defines the class TaskListComponent 

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
*/


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@api/api.service';
import { LocationService } from '@locations/location.service';
import { WeatherService } from '@weather/weather.service'
import { ConfirmationService } from 'primeng/api';

import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

import { Task, LocationObject } from '@interfaces/models';

@Component({
  selector: 'app-task-list',                     
  templateUrl: './task-list.component.html',    
  providers: [MessageService],                 
  styleUrls: ['./task-list.component.css']      
})

export class TaskListComponent implements OnInit {
  // Initialize an empty task object as a baseline structure for tasks
  empty_task: Task = {
    id: undefined,        
    title: '',           
    description: '',     
    location: '',        
    temperature: undefined,
    is_done: false       
  };

  // Reactive property for binding and handling the single selected or edited task
  task: Task = this.empty_task;

  // Array to hold all tasks displayed in the task list
  tasks: Task[] = [];

  // Object to keep track of cloned tasks for editing the rows in the UI
  clonedTasks: { [s: string]: Task; } = {};

  // Arrays to store location objects and their details for selecting location in the UI
  locationsObjects: any[] = [];
  locations: any[] = [];

  // Object to bind and handle the selected location in the task form
  selectedLocation = { capital: '', name: '', code: '' };

  // Array of status options for the task status dropdown
  statuses: SelectItem[] = [];

  // Boolean value to control the visibility of the task dialog (modal)
  taskDialog: boolean = false;

  // Boolean flag to keep track of form submission state
  submitted: boolean = false;

  // Constructor with dependency injection for various services used within the component
  constructor(
    private apiService: ApiService,
    private locationService: LocationService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private weatherService: WeatherService,
  ) { }

  
  ngOnInit() {
    // Retrieve the initial list of tasks via the ApiService
    this.getList();

    // Fetch country locations using the LocationService and process the response
    this.locationService.getAllCountries().subscribe(
      (data) => {
        // Mapping received location data into a usable structure for the UI
        this.locationsObjects = data.map((location) => ({
          alpha2Code: location.alpha2Code,
          capital: location.capital,
        }));

        // Concatenate location names and codes for better visualization and sort them
        this.locations = this.concatenateLocationDetails(this.locationsObjects).sort();
      },
      (error) => {
        // Error handler for failed location fetch operation
        console.error('Error fetching countries', error);
      }
    );

    // Initializing available statuses for binding to a task status dropdown
    this.statuses = [{ label: 'true', value: 'true' }, { label: 'false', value: 'false' }]
  }

  // Method to concatenate location details for display purposes
  concatenateLocationDetails(locations: LocationObject[]): string[] {
    return locations.map(location => location.capital + ', ' + location.alpha2Code);
  }

  // Method to retrieve tasks using the ApiService and assign them to the local tasks array
  getList() {
    this.apiService.getTasks().subscribe(
      (response) => {
        // Success handler: set the tasks array and call method to process temperatures
        this.tasks = response;
        this.processTemperatures(this.tasks);
        // Display success message using PrimeNG's message service
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Success: Tasks retrieved' });
      },
      (error) => {
        // Error handler: log the error and show error message to the user
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error: Tasks not retrieved' });
      }
    );
  }

  // Method to process temperature data for each task using the WeatherService
  processTemperatures(tasks: Task[]) {
    tasks.forEach(task => {
      if (!task.is_done) {
        // Fetch weather data for incomplete tasks only
        this.weatherService.getWeather(task.location).subscribe(
          (data: any) => {
            // Log weather data for debugging purposes
            console.log(data);
            // Update task temperature with weather data
            task.temperature = data.main.temp;
          }
        )
      }
    })
  }

  // Method to update a task using the ApiService and refreshing the task list upon success
  updateTask(task: Task) {
    this.apiService.putTask(task)
      .subscribe(
        (response) => {
          // Success handler: show success message and refresh task list
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Success: Task updated' });
          this.getList(); // Refresh the tasks list
        },
        (error) => {
          // Error handler: show error message to the user
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error: Task not updated' });
        }
      );
  }

  // Method to delete a task based on its ID using the ApiService and refreshing the list upon success
  deleteTask(task_id: number) {
    this.apiService.deleteTask(task_id)
      .subscribe(
        (response) => {
          // Success handler: show success message and refresh task list
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Success: Task successfully deleted!' });
          this.getList();
        },
        (error) => {
          // Error handler: show error message to the user
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error: Failed to delete task. Please try again.' });
        }
      );
  }

  // Method to initiate creation of a new task by resetting the task model and opening the task dialog
  openNew() {
    this.task = this.empty_task;
    this.submitted = false;
    this.taskDialog = true;
  }

  // Handler for initializing row edit operation; resets a task's completion status
  onRowEditInit(task: Task) {
    task.is_done = false;
  }

  // Handler for saving edited task on row; triggers task update process
  onRowEditSave(task: Task) {
    this.updateTask(task);
  }

  // Handler for row edit cancel operation; no specific action taken in this stub
  onRowEditCancel(task: Task, index: number) {
    
  }

  // Handler for deleting a task on row deletion; calls deleteTask method with the provided index
  onRowDelete(task: Task, index: number) {
    this.deleteTask(index);
  }

  // Method to hide the task dialog and reset the submission flag
  hideDialog() {
    this.taskDialog = false;
    this.submitted = false;
  }

  // Method to create or add a new task using the ApiService and refresh the list upon success
  saveProduct() {
    // Create or add the task through the ApiService
    this.apiService.postTask(this.task)
      .subscribe(
        (response) => {
          // Handle the successful response here; show success message and refresh task list
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Success: Task successfully created!' });
          this.getList();
        },
        (error) => {
          // Handle the error response here; show error message to the user
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error: Failed to create task. Please try again.' });
        }
      );
  }

}
