var addFavourite;
function getWeather(cityId,city) {
	console.log(city);
	console.log(cityId);
	var myArr;
	var xmlHttp = new XMLHttpRequest();
	var url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/"+cityId+"?apikey=90yI8PiEyBeShiJML1ONlNxLrYXSbBlh";
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myArr = JSON.parse(this.responseText);
			var data = JSON.stringify(myArr);
			//document.write(data);
			var summary = myArr.Headline.Text;
			var categoury = myArr.Headline.Category;
			var date = myArr.DailyForecasts[0].Date;
			var maxtemp = myArr.DailyForecasts[0].Temperature.Maximum.Value;
			var mintemp = myArr.DailyForecasts[0].Temperature.Minimum.Value;
			//	document.getElementById("city").innerHTML=city;
			document.getElementById("date").innerHTML = date;
			document.getElementById("maxTemp").innerHTML = maxtemp;
			document.getElementById("minTemp").innerHTML = mintemp;
			document.getElementById("forecast").innerHTML = summary;
			document.getElementById("season").innerHTML = categoury;
			document.getElementById("day").innerHTML = myArr.DailyForecasts[0].Day.IconPhrase;
			document.getElementById("night").innerHTML = myArr.DailyForecasts[0].Night.IconPhrase;
			document.getElementById("add").innerHTML = `<input type='button' value='Add to Favourites' onClick='addFavourite()'>`;
		}
	}
	addFavourite=function () {
		console.log("Hello");
		var fav={
				"city":city,
				"url":url
		};
		console.log(fav);
		var xmlHttp = new XMLHttpRequest();
		var servletUrl="http://localhost:9090/WeatherApp/server?city="+city+"&cityId="+cityId;
		xmlHttp.open("GET",servletUrl,true);
		xmlHttp.send();
		xmlHttp.onreadystatechange=function(){
			if(this.readyState == 4 && this.status == 200)
				console.log("Added");
		}
	}
}

function getData() {
	//	console.log("Hello");
	var xmlHttp = new XMLHttpRequest();
	var city = document.getElementById("city").value;
	document.getElementById("cityName").innerHTML = city;
	var url = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=90yI8PiEyBeShiJML1ONlNxLrYXSbBlh&q="
			+ city;
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myArr = JSON.parse(this.responseText);
			//var dataObj= JSON.stringify(myArr);
			// document.write(dataObj);
			var cityId = myArr[0].Key;
			//   document.write(myArr);
			getWeather(cityId,city);
		}
	};
}

function viewFavourites(){
	var xml=new XMLHttpRequest();
	var url="http://localhost:9090/WeatherApp/favServlet";
	xml.open("GET",url,true);
	xml.send();
	xml.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200) {
			var myArr=JSON.parse(this.responseText);
			var l=myArr.favCity.length;
			console.log(myArr.favCity.length);
			for(i=0;i<l;i++){
				getWeather(myArr.favCity[i].cityId,myArr.favCity[i].city);
			//	console.log(myArr.favCity[i].cityId);
			//	console.log(myArr.favCity[i].city)
			}
		}
	}
}