/*
    interfaces/models.ts

    Class the provide interfaces to enforces strict data type adherence

    Author information is provided for reference.
    Donato Cappiello (dino.cappiello@gmail.com)
*/

// Define the structure of a Task object.
export interface Task {
  id?: number;           // Unique identifier for the task.
  title: string;        // The title of the task.
  description: string;  // A detailed description of the task.
  location: string;     // Location where the task is to be performed or is relevant.
  temperature?: number;  // Temperature value associated with the task (could represent the required temperature for the task).
  is_done: boolean;     // Flag indicating whether the task has been completed or not.
}

export interface LocationObject {
    name: string;
    alpha2Code: string;
    capital: string;
}
