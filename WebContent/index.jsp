<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport"
		content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
		integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
		crossorigin="anonymous">
	<title>Insert title here</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<!-- Adding Navbar for displaying links and Serach box -->
	<nav class="navbar navbar-toggleable-md bg-inverse">
		<button class="navbar-toggler navbar-toggler-right" type="button"
			data-toggle="collapse" data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<a class="navbar-brand text-white" href="#">Weather App</a>
	
		<div class="collapse navbar-collapse text-white" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active"><a class="nav-link text-white" href="#">Home
						<span class="sr-only">(current)</span>
				</a></li>
				<li class="nav-item"><a class="nav-link text-white" href="#">Report</a></li>
				<li class="nav-item"><a class="nav-link disabled text-white" href="#">Extras</a>
				</li>
			</ul>
		</div>
	</nav>
<!-- Inserting Jumbotron To display main area -->
	<div class="container">
		<div class="jumbotron jumbotron-fluid">
			<div class="container text-white">
				<h1 class="display-3">Weather Application</h1>
				<p class="lead">Get updated weather headlines of your desired locations anytime,.</p>
				<form class="form-inline my-2 my-lg-0 pt-5">
					<input class="form-control mr-sm-2" type="text" id="city" placeholder="Enter City Name">
					<button class="btn btn-secondary my-2 my-sm-0" type="submit" onClick="getData()">Search</button>
				</form>
			</div>
		</div>
	</div>
<!-- Main Document area starts here -->
	<div>
		<h3>City: </h3>	<p id="city"></p>
		<h3>Date: </h3>	<p id="date"></p>
		<h3>Maximum Temperature: </h3>	<p id="maxTemp"></p>
		<h3>Minimum Temperature: </h3>	<p id="minTemp"></p>
		<h3>Forecast: </h3>	<p id="forecast"></p>
		<h3>Season: </h3>	<p id="season"></p>
		<h3>Day Conditions: </h3>	<p id="day"></p>
		<h3>Night Conditions: </h3>	<p id="night"></p>
	</div>
	<script type="text/javascript" src="script.js"></script>
	<!-- jQuery first, then Tether, then Bootstrap JS. -->
	<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
		integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
		integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
		crossorigin="anonymous"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
		integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
		crossorigin="anonymous"></script>
</body>
</html>