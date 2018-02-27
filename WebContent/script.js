function getWeather(cityId)
		{
			var xmlHttp=new XMLHttpRequest();
			var url="http://dataservice.accuweather.com/forecasts/v1/daily/1day/"+cityId+"?apikey=eEqCryv3F64kuAGrHDeGHKNkAbGuIGP3";
			xmlHttp.open("GET",url,true);
			xmlHttp.send();
			xmlHttp.onreadystatechange=function(){
				if(this.readyState==4 && this.status==200){
					var myArr=JSON.parse(this.responseText);
					var data=JSON.stringify(myArr);
					//document.write(data);
					var summary=myArr.Headline.Text;
					var categoury=myArr.Headline.Category;
					var date=myArr.DailyForecasts[0].Date;
					var maxtemp=myArr.DailyForecasts[0].Temperature.Maximum.Value;
					var mintemp=myArr.DailyForecasts[0].Temperature.Minimum.Value;
					/*document.write("<br>Date:"+date);*/document.getElementById("city").innerHTML=city;
					document.write("<br>Maximum Temperature : "+maxtemp);document.getElementById("maxTemp").innerHTML=maxtemp;
					document.write("<br>Minimum Temperature : "+mintemp);document.getElementById("minTemp").innerHTML=mintemp;
					document.write("<br>Forecast : "+summary);document.getElementById("forecast").innerHTML=summary;
					document.write("<br>Season : "+categoury);document.getElementById("season").innerHTML=categoury;
					document.write("<br>Day Conditions : "+myArr.DailyForecasts[0].Day.IconPhrase);
					document.write("<br>Night Conditions : "+myArr.DailyForecasts[0].Night.IconPhrase);
				}
			}
		}
		function getData()
		{
			var xmlHttp = new XMLHttpRequest();
			var city=document.getElementById("city").value;
			document.write(city+"<br>");
			var url ="http://dataservice.accuweather.com/locations/v1/cities/search?apikey=eEqCryv3F64kuAGrHDeGHKNkAbGuIGP3&q="+city;
			xmlHttp.open("GET",url, true);
			xmlHttp.send();
			xmlHttp.onreadystatechange = function() {
			   if(this.readyState == 4 && this.status == 200){
			       var myArr= JSON.parse(this.responseText);
			       //var dataObj= JSON.stringify(myArr);
			      // document.write(dataObj);
			       var cityId=myArr[0].Key;
			    //   document.write(myArr);
			       getWeather(cityId); 
			   }
			};
		}