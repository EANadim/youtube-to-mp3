# YouTube to MP3 Converter

This project allows you to extract MP3 files from YouTube videos by providing a YouTube link. The project is divided into two main parts: a **frontend** built with Vue.js and a **backend** built with Node.js. The entire application can be easily set up and run using Docker.

---

## Table of Contents
1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Setup and Installation](#setup-and-installation)
4. [Build and Run the Docker Containers](#build-and-run-the-docker-containers)
5. [Access the Applications](#access-the-applications)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

---

## Project Structure
The project is divided into two main components:
- **Frontend**: A Vue.js application that provides the user interface for entering a YouTube link and downloading the MP3 file.
- **Backend**: A Node.js application that handles the extraction of MP3 files from the provided YouTube link.

---

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

---

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/youtube-to-mp3.git
   cd youtube-to-mp3
   ```

2. Ensure Docker and Docker Compose are installed and running on your machine.

---

## Build and Run the Docker Containers
Run the following commands in the root directory (`youtube-to-mp3`):

1. **Build the Docker images**:
   ```bash
   docker-compose build
   ```

2. **Start the containers**:
   ```bash
   docker-compose up
   ```

   To run the containers in detached mode (in the background), use:
   ```bash
   docker-compose up -d
   ```

---

## Access the Applications
- **Frontend**: Open [http://localhost:5173](http://localhost:5173) in your browser.
- **Backend**: Access the backend API at [http://localhost:3000](http://localhost:3000).

---

## Technologies Used
- **Frontend**: Vue.js
- **Backend**: Node.js, Express
- **Docker**: For containerization and easy deployment
- **YouTube MP3 Extraction**: [mwader/ydls](https://hub.docker.com/r/mwader/ydls/) - A tool for downloading and extracting audio from YouTube videos.

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy extracting MP3 files from YouTube videos! 🎶