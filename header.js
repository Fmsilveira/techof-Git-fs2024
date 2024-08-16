function renderHeader() {
  const header = document.getElementById('header');
  const user = JSON.parse(localStorage.getItem('user'));
  const isUserLoggedIn = !!user;
  header.innerHTML = `
    <a href="./home.html">Home</a>
      <a href="./Flats.html">Flats</a>
      <a href="./profile.html">Profile</a>
      

      <img src="./logo.png"></img>

      ${isUserLoggedIn ? `<p>Hello, ${user.firstName} </p> ` : `<a href="./login.html">Login</a>`}
      ${isUserLoggedIn ? `<p> ${user.lastName} </p> ` : `<a href="./register.html">Register</a>`}
`
}
document.addEventListener('onload', renderHeader())