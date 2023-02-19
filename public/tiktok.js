
async function sendPostRequest(url,data) {
  console.log("about to send post request");
  let response = await fetch(url, {
    method: 'POST', 
    headers: {'Content-Type': 'text/plain'},
    body: data });
  if (response.ok) {
    let data = await response.text();
    return data;
  } else {
    throw Error(response.status);
  }
}

function getUserInput() {
  let username = document.getElementById("user").value
  let url = document.getElementById("url").value
  let nickname = document.getElementById("video").value;
  let inputData = {"username":username ,"url": url,"nickname":nickname};
  console.log("sending", inputData);

  
sendPostRequest('/videoData', inputData)
  .then(function(data) {
    sessionStorage.setItem("nickname",inputData.nickname);
    window.location = "/acknowledgement.html";  })
  .catch(function(error) {
    console.log("Error occurred:", error)
  });
}






