async function getData(location = "mumbai") {
  try {
    let responce = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=3a5327c8a4ab4fa3b34110849230304&q=${location}`,
      { mode: "cors" }
    );
    let result = await responce.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

getData().then((data) => {
    console.log(data)
  let img = document.createElement('img')
  let body = document.querySelector('body')
  img.src = data.current.condition.icon
  body.appendChild(img)
});
