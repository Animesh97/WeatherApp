
import java.io.*;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

@WebServlet("/server")
public class server extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");		
		PrintWriter out=response.getWriter();
		String city = request.getParameter("city");				/*Extracting city name from request*/
		String cityId = request.getParameter("cityId");			/*Extracting city ID from request*/
		System.out.println(city);
		System.out.println(cityId);
		try {
			File file = new File("/home/animeshp/StackRoute/WeatherApp/src/data.json");
			BufferedReader br = new BufferedReader(new FileReader(file));			/*Read the JSON File*/
			JSONObject jobj = new JSONObject();					/*Object for storing the JSONArray*/
			JSONObject jtemp = new JSONObject();				/*Temporary JSON Object to store internal values*/
			JSONArray jarr = new JSONArray();					/*JSONArray Object*/
			jtemp.put("city", city);
			jtemp.put("cityId", cityId);
			String s = br.readLine();
			if (s==null) {										/*If JSON file is empty,directly insert into the file*/
				jarr.add(jtemp);
				jobj.put("favCity", jarr);
			} else {											/*If not empty,extract JSONArray and append the values to it*/
				JSONParser parser = new JSONParser();
				Object obj = parser.parse(new FileReader("/home/animeshp/StackRoute/WeatherApp/src/data.json"));
				JSONObject jsonObject = (JSONObject) obj;
				System.out.println(jsonObject);
				jarr = (JSONArray) jsonObject.get("favCity");
				jarr.add(jtemp);
				jobj.put("favCity", jarr);
				System.out.println();
			}
			if(jarr.size()>10) {
				//jarr[0].remove("city");
			}
			FileWriter fr = new FileWriter("/home/animeshp/StackRoute/WeatherApp/src/data.json");		/*Finally write back to the JSON File*/
			fr.write(jobj.toString());
			fr.close();
			br.close();
			jobj = null;
			jtemp = null;
		} catch (IOException | ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
