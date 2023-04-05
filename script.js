const search = document.querySelector('#search');
const tempreturePara = document.querySelector('.temprature-para')
const wheatherIcon = document.querySelector('#wheather-icon')

async function fetchWetherData(location = "mumbai") {
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

document.addEventListener('keypress', function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    updatePage(search.value)
   }

});

function updatePage(location='Mumbai'){
  fetchWetherData(location).then((data) => {
    console.log(data)
    updateWeb(data)
});

}


function updateWeb(data){
 tempreturePara.innerHTML=`${data.current['temp_c']}<span>°C</span>`
  wheatherIcon.src=`${data.current.condition.icon}`
}


updatePage()