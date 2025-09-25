var http = require('http');

// HTML content with animation
var htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Veera Sir - DevOps Training</title>
<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    overflow: hidden;
    text-align: center;
  }

  h1 {
    font-size: 4em;
    animation: bounce 2s infinite;
  }

  h2 {
    font-size: 2em;
    margin-bottom: 30px;
    animation: fadeIn 3s ease-in-out;
  }

  button {
    padding: 15px 30px;
    font-size: 1.2em;
    border: none;
    border-radius: 30px;
    background-color: #ff6a00;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    transform: scale(1.1);
    background-color: #ff3d00;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25px); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .circle {
    position: absolute;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: rgba(255,255,255,0.2);
    animation: float 6s infinite;
  }

  @keyframes float {
    0% { transform: translateY(100vh) translateX(0); opacity: 1; }
    100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
  }
</style>
</head>
<body>
  <div>
    <h1>Veera Sir</h1>
    <h2>Welcome to DevOps Training</h2>
    <button onclick="alert('Hello from Veera Sir!')">Join Now</button>
  </div>

  <!-- Floating Circles -->
  <div class="circle" style="left:10%; animation-delay:0s;"></div>
  <div class="circle" style="left:25%; animation-delay:1s;"></div>
  <div class="circle" style="left:40%; animation-delay:2s;"></div>
  <div class="circle" style="left:55%; animation-delay:3s;"></div>
  <div class="circle" style="left:70%; animation-delay:4s;"></div>
  <div class="circle" style="left:85%; animation-delay:5s;"></div>
</body>
</html>
`;

//create a server object:
http.createServer(function (req, res) {
  res.write(htmlContent); //write the animated HTML response
  res.end(); //end the response
}).listen(9090); //the server object listens on port 81
