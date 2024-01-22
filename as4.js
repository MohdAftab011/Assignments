function downloader(url, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const downloadedData = "Dummy dowloaded data";
            callback(downloadedData);
            resolve(downloadedData);
        }, 4000);
    });
}

function writeFile(data, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filename = "dummyFile.txt";
            callback(filename);
            resolve(filename);
        }, 2000);
    });
}
function uploadFile(filename, newUrl, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Message = "File successfully uploaded tonew URL";
            callback(Message);
            resolve(Message);
        }, 3000);
    });
}

console.log("Starting the program")
downloader("www.google.com", (downloadedData) => {
    writeFile(downloadedData, (fileName) => {
        uploadFile(fileName, "www.drive.google.com", (uploadResponse) => {
            console.log("Status of upload: ", uploadResponse);
        })
    })
})
