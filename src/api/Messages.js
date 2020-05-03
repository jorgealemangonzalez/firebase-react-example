
let server = "https://europe-west2-notes-9e2e3.cloudfunctions.net"
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    server = "http://localhost:5001/notes-9e2e3/europe-west2"

export const addMessage = (message) => {
    return fetch(server+ "/messages", {
        headers: {"Content-Type": "application/json; charset=utf-8"},
        method: 'POST',
        body: JSON.stringify({
            data: message
        })
    }).then(result => result.json())
}