const updateCheck = async (checker: boolean, id: string) => {
  const urlBackend = "http://localhost:9000/updatetask";
  const objectTask = {id: id, check: checker}

  try {
    const response = await fetch(urlBackend, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objectTask),
      method: "POST"
    });

    if(response.status === 203) {
      return;     
    }
    else {
      throw new Error("Something did not go well!");
    }
  }catch(error) {
    throw new Error("This happens: " +error);
  } 
}

export default updateCheck;
