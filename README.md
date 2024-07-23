# Lab 5 - INFO6144

## Overview

This lab project creates a simple Node.js website that reads a URL from a text file, retrieves JSON data from the URL, and saves the JSON data to another text file.

## Requirements

1. Node.js
2. npm (Node Package Manager)

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Designated-AICoder/Lab5-INFO6144.git
   cd Lab5-INFO6144
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Ensure `urls.txt` file is in the root directory with the following content:**

   ```txt
   https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1&startDate=2023-07-07&endDate=2023-07-07
   ```

## Running the Project

1. **Start the server:**

   ```sh
   npm start
   ```

   Alternatively, you can run the server directly using node:

   ```sh
   node server.js
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

3. **Expected Output:**
   - The JSON data from the provided URL will be saved to `JSON.txt` in the root directory.
   - The browser will display the message: "JSON data saved to file".
   - The console will echo the same message.

## Project Structure

```
Lab5/
├── LICENSE
├── Lab5.pdf
├── README.md
├── package.json
├── server.js
└── urls.txt
```

## Notes

- Ensure `urls.txt` contains a valid URL to retrieve JSON data.
- `JSON.txt` will be created automatically upon a successful data retrieval.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
