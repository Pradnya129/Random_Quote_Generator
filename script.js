
function fetchQuote(){
fetch("https://type.fit/api/quotes")
  .then((response)=> {
    return response.json();
  })
  .then((data)=> {
    
    let random = Math.floor(Math.random()* data.length)
    document.getElementById('quote').innerText=data[random].text;
    document.getElementById('author').innerText=data[random].author;
    


  });
}