# To Run The Project The Following Guideline

This guide explains how to run an HTML file with a JavaScript file from a local folder on your computer.

## Prerequisites

1. A text editor or IDE (e.g., VS Code)
2. A web browser (e.g., Google Chrome, Firefox, or Edge)

## Folder Structure

Ensure your folder contains the following:

```
Softnio-Assignment-HTML-VersionL/
  |— index.html
  |— script.js
  |— assets/
        
```
### Steps to Pull a Repository

1. **Clone the Repository**
   - Open a terminal or command prompt.
   - Navigate to the folder where you want to clone the repository.
   - Run the following command:
     ```bash
     git clone <repository-url>
     ```
     

2. **Navigate to the Cloned Repository**
   - Move into the cloned repository's directory:
     ```bash
     cd <repository-folder>
     ```
   

#$# Steps to Run

1. **Locate the Folder**
   - Open the folder containing `index.html` and `script.js`.

2. **Install Live Server Extension** (for VS Code users)
   - Open VS Code.
   - Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
   - Search for **"Live Server"** and install it.

3. **Open Live Server**
   - Open the `index.html` file in VS Code.
   - Right-click anywhere in the HTML file and select **"Open with Live Server"**.
   - This will launch a live preview of your HTML file in your default web browser.

4. **View the Output**
   - The HTML content will display in your browser.
   - Open the browser's developer tools to view JavaScript output:
     - Right-click on the page and select **"Inspect"** or **"Inspect Element"**.
     - Go to the **"Console"** tab to see the JavaScript logs (e.g., `JavaScript is connected!`).

## Additional Notes

- Make sure the `script.js` file is correctly linked in your `index.html` file using the `<script>` tag.
- If you encounter issues, check the browser's console for errors and ensure the file paths are correct.
