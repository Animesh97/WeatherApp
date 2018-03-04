var addFavourite;
function getWeather(cityId,city) {			/*Function to get the weather conditions using the CityID*/
	console.log(city);
	console.log(cityId);
	var myArr;
	var xmlHttp = new XMLHttpRequest();		/*For making AJAX call to the API*/
	var url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/"+cityId+"?apikey=90yI8PiEyBeShiJML1ONlNxLrYXSbBlh";
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myArr = JSON.parse(this.responseText);			/*Parsing the received JSON Object*/
			var summary = myArr.Headline.Text;
			var categoury = myArr.Headline.Category;				
			var date = myArr.DailyForecasts[0].Date;
			var maxtemp = myArr.DailyForecasts[0].Temperature.Maximum.Value;
			var mintemp = myArr.DailyForecasts[0].Temperature.Minimum.Value;
			var show=document.getElementById("showArea");		/*Dynamically Creating the HTML to display the weather report*/
			show.innerHTML+="<br><strong>City:</strong>"+city;
			show.innerHTML+="<br><strong>Maximum Temperature:</strong>"+maxtemp;
			show.innerHTML+="<br><strong>Minimum Temperature:</strong>"+mintemp;
			show.innerHTML+="<br><strong>Forecast:</strong>"+summary;
			show.innerHTML+="<br><strong>Weather:</strong>"+categoury;
			show.innerHTML+="<br><strong>Day Time:</strong>"+myArr.DailyForecasts[0].Day.IconPhrase;
			show.innerHTML+="<br><strong>Day Time:</strong>"+myArr.DailyForecasts[0].Night.IconPhrase;
			show.innerHTML+="<br><hr>";
			document.getElementById("addButton").innerHTML = `<input type='button' value='Add to Favourites' onClick='addFavourite()'>`;			
			}
	}
	addFavourite=function () {			/*Function to add a particular city to Favourites*/
		console.log("Hello");
		var fav={
				"city":city,
				"url":url
		};
		console.log(fav);
		var xmlHttp = new XMLHttpRequest();			/*For making AJAX call to the Servlet*/
		var servletUrl="http://localhost:9090/WeatherApp/server?city="+city+"&cityId="+cityId;
		xmlHttp.open("GET",servletUrl,true);
		xmlHttp.send();
		xmlHttp.onreadystatechange=function(){
			if(this.readyState == 4 && this.status == 200)
			{
				console.log("Added");
				alert("Added To Favourites");
			}
		}
	}
}

function getData() {							/*Function to get the city id from AccuWeather API*/
	var xmlHttp = new XMLHttpRequest();
	var city = document.getElementById("city").value;
	var url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=90yI8PiEyBeShiJML1ONlNxLrYXSbBlh&q="
			+ city;								/*Making AJAX call to the API to get City ID*/
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);			/*Parsing JSON Object in response text*/
			var cityId = myArr[0].Key;							/*Extracting CityID*/
			getWeather(cityId,city);							/*Call function to get weather report using CityID*/
		}
	};
}

function viewFavourites(){			/*Function to display favourite cities*/ 
	var xml=new XMLHttpRequest();
	var url="http://localhost:9090/WeatherApp/favServlet";		/*Call to servlet to read the JSON File and send favourite cities*/
	xml.open("GET",url,true);
	xml.send();
	xml.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200) {
			var myArr=JSON.parse(this.responseText);
			var l=myArr.favCity.length;
			console.log(myArr.favCity.length);
			for(i=0;i<l;i++){
				getWeather(myArr.favCity[i].cityId,myArr.favCity[i].city);		/*Function call to print weather report of favourite cities*/
			}
		}
	}
}