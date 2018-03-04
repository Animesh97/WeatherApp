
import java.io.*;
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
		String city = request.getParameter("city");
		String cityId = request.getParameter("cityId");
		System.out.println(city);
		System.out.println(cityId);
		try {
			File file = new File("/home/animeshp/StackRoute/WeatherApp/src/data.json");
			BufferedReader br = new BufferedReader(new FileReader(file));
			JSONObject jobj = new JSONObject();
			JSONObject jtemp = new JSONObject();
			JSONArray jarr = new JSONArray();
			jtemp.put("city", city);
			jtemp.put("cityId", cityId);
			String s = br.readLine();
			if (s==null) {
				jarr.add(jtemp);
				jobj.put("favCity", jarr);
			} else {
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
			FileWriter fr = new FileWriter("/home/animeshp/StackRoute/WeatherApp/src/data.json");
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

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
