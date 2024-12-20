# Running an HTML File with JavaScript from a Folder

This guide explains how to run an HTML file with a JavaScript file from a local folder on your computer.

## Prerequisites

1. A text editor or IDE (e.g., VS Code, Sublime Text, or Notepad++)
2. A web browser (e.g., Google Chrome, Firefox, or Edge)

## Folder Structure

Ensure your folder contains the following:

```
project-folder/
  |— index.html
  |— script.js
```

### Example `index.html` File
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample HTML with JavaScript</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <script src="script.js"></script>
</body>
</html>
```

### Example `script.js` File
```javascript
console.log('JavaScript is connected!');
```

## Steps to Run

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
