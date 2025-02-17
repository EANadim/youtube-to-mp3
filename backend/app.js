const express = require('express');
const cors = require('cors'); // Add the CORS package
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Download MP3 endpoint
app.post('/download', (req, res) => {
    const youtubeUrl = req.body.youtube_url;
    if (!youtubeUrl) {
        return res.status(400).json({ error: 'YouTube URL is required' });
    }

    // Call the mwader/ydls Docker container
    const command = `docker run --rm -v "$PWD:$PWD" -w "$PWD" mwader/ydls ${youtubeUrl} mp3`
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            if (!res.headersSent) {
                return res.status(500).json({ error: error.message });
            }
        }

        const fileName = extractFileName(stdout);
        const filePath = path.join(__dirname, fileName);

        // Ensure that file exists before attempting to send
        sendFile(res, filePath, fileName);
    });
});

function extractFileName(inputString) {
    // Remove leading \r and other whitespace characters
    const trimmedString = inputString.trimStart();

    const mp3Index = trimmedString.indexOf('.mp3');

    if (mp3Index !== -1) {
        return trimmedString.substring(0, mp3Index + 4); // +4 to include '.mp3'
    }

    return null;
}

function sendFile(res, filePath, fileName) {
    if (!fs.existsSync(filePath)) {
        console.error('MP3 file not found!');
        if (!res.headersSent) {
            return res.status(500).json({ error: 'MP3 file was not created: ' + fileName });
        }
    }

    const sanitizedFileName = (filename) => {
        return filename.replace(/[^a-zA-Z0-9.-_]/g, '_');  // Replace invalid characters with an underscore
    };
    
    res.setHeader('Content-Disposition', `attachment; filename="${sanitizedFileName(fileName)}"`);
    res.download(filePath, fileName, (err) => {
        if (err) {
            console.error(`Error sending file: ${err}`);
            if (!res.headersSent) {
                return res.status(500).json({ error: 'Failed to send MP3 file' });
            }
        }

        // Clean up the file after sending
        fs.unlinkSync(filePath);
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
