function addFlat() {
  const city = document.getElementById('city').value;
  const street = document.getElementById('street').value;
  const number = document.getElementById('number').value;
  const area = document.getElementById('area').value;
  const AC = document.getElementById('ac').value;
  const yearbuilt = document.getElementById('year built').value;
  const price = document.getElementById('price').value;
  const available = document.getElementById('available').value;
  console.log('addflat')

  const flats = localStorage.getItem('flats') ? JSON.parse(localStorage.getItem('flats')) : [];
  flats.push({
    city,
    street,
    number,
    area,
    AC,
    yearbuilt,
    price,
    available,
  })

  localStorage.setItem('flats', JSON.stringify(flats));
  alert("Registration Successfully")
  window.location.href ='./Flats.html';
}
