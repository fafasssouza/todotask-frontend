async function sendToBackend(action: string) {
  const urlBackend = "http://localhost:9000/sendtask";
  const objectTask = {task: action, check: false};

  const response = await fetch(urlBackend, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objectTask),
    method: "POST"
  });

  return response.status;
}

export default sendToBackend;
