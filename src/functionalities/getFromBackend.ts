export async function getFromBackend() {
 try {
  const urlBackend = "http://localhost:9000/getalltask";


  const response = await fetch(urlBackend, { 
    method: "GET"
  });

  const convertInJSON = await response.json();

  return convertInJSON; //Sendind like a Object JavaScript
 } catch(error) {
    console.log("Error in getData " + error);
 }
}
