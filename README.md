# DjangularGeoWeatherTasks

DjangularGeoWeatherTasks is a feature-rich TODO application that allows users to effortlessly manage their tasks. It not only provides basic task management functionalities, such as creating, editing, deleting, and marking tasks as done, but also enhances the user experience by incorporating location-based weather information. The system dynamically adjusts the background color of tasks based on the current temperature, offering a visual cue to users. For instance, blue signifies "cold," yellow-orange represents "fresh," orange indicates "warm," and red denotes "hot."

## Technologies

### Frontend

- **Angular v17.0.0:** The frontend of DjangularGeoWeatherTasks is developed using Angular, leveraging the latest features and improvements in version 17.0.0.

### Backend

- **Django v4.2.7:** DjangularGeoWeatherTasks utilizes Django as its backend framework, benefitting from the robust features and security enhancements introduced in version 4.2.7.

- **Django Rest Framework v3.14.0:** The application employs Django Rest Framework to simplify the development of APIs and enhance the capabilities of the Django backend, using version 3.14.0.

### Database

- **Postgres:** DjangularGeoWeatherTasks relies on the Postgres database for data storage and retrieval.

## Location-Based Weather Integration

Users have the ability to choose the location of a task when creating or updating it. Utilizing the location data, the system retrieves the current weather conditions and dynamically adjusts the background color of the task based on the temperature. The color scheme is as follows:

- Temperature < 10°C: 'lightskyblue'
- 10°C < Temperature ≤ 20°C: 'lemonchiffon'
- 20°C < Temperature ≤ 35°C: 'orange'
- Temperature > 35°C: 'darkorange'

## Docker Compose Configuration

The application is conveniently packaged using a Docker Compose file, which defines three services:

1. **Postgres Database (db):** Utilizes the official Postgres Docker image, configured for trust-based connections.

2. **Django Backend API (dj):** Built from a Dockerfile located in todo_backend/deploy. Maps the local todo_backend/django_api folder to /src_code within the container and exposes the app on port 80 of the host.

3. **Frontend (ng):** Built from a directory named todo_frontend, presumably containing its Dockerfile. Accessible via port 8080 on the host machine.

Run `docker-compose build --no-cache` to build the Docker images, ensuring that no cache is used during the build process:

By executing `docker-compose up -d` with this configuration file, all three services start together. The Django backend connects to the Postgres database, and the frontend can seamlessly communicate with the Django backend.

After starting the services, initialize the database by executing the following commands:
`docker exec -it dj bash`
`python manage.py migrate` 

## Take a look at the running front and back end

Visit the designated addresses in your browser to observe the functioning of both the front and back end:<br>
`http://localhost:8080/`<br>
`http://localhost/admin/`

## Contributions

Contributions to DjangularGeoWeatherTasks are welcome! Please adhere to the established coding standards and feel free to submit pull requests to enhance the application.

## License

DjangularGeoWeatherTasks is licensed under the [MIT License](LICENSE). You are encouraged to use, modify, and distribute the application in accordance with the license terms.

