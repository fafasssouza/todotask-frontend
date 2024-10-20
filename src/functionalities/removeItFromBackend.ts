const removeItFromBackend = async (id: string) => {
  const urlBackend = "http://localhost:9000/deletetask";
  const objectTask = {id: id}

  try {
    const response = await fetch(urlBackend, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectTask),
      method: "POST"
    });

    if(response.status === 200) {
      return;      
    }
    else {
      throw new Error("Something did not go well!");
    }
  }catch(error) {
    throw new Error("This happens: " +error);
  } 
}

export default removeItFromBackend;
