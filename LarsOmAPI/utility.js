/**
 * Fetches JSON data from a URL, and handles the error cases
 * 
 * @param {string} url 
 * @returns JSON Object
 */
export async function getJson(url) {
    // Hva skal skje viss vi ikke får kontakt med serveren?
    let response
    try {
      response = await fetch(url)
    } catch (error) {
      console.error("Failed communicating with server!")
      setTimeout(() => getJson(url), 20 * 1000) // Timeout is in Milliseconds
    }
  
    // Hva skal skje viss serveren gir en feilmelding?
    if (!response.ok) {
      console.error("Server responde with not OK status, code: " + response.status)
  
      if (response.status >= 400 && response.status < 500) {
        console.error("Client side error, fix!")
      }
  
      if (response.status >= 500 && response.status < 600) {
        console.error("Server side error, try again later!")
      }
  
      return
    }
  
    // Hva skal skje viss vi ikke klare å lese dataen?
    let data
    try {
      data = await response.json()
    } catch (error) {
      console.error("Failed parsing html body, not correct JSON!")
      return
    }
  
    return data
  }