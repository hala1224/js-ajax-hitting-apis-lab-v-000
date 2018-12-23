// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  const username = document.getElementById('username').value;
  req.addEventListener("load", displayRepositories);
  req.open("GET",
  'https://api.github.com/users/' + username + '/repos');
  req.send();
  return false;
}