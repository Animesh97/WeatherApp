
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

@WebServlet("/server")
public class server extends HttpServlet {
	private static final long serialVersionUID = 1L;
	static JSONArray jarr=new JSONArray();
	static JSONObject jobj=new JSONObject();
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html");
		String city = request.getParameter("city");
		String url=request.getParameter("url");
		System.out.println(city);
		System.out.println(url);
		JSONObject jsobj=new JSONObject();
		jobj.put("city", city);
		jobj.put("url", url);
		jarr.add(jsobj);
		jobj.put("favCity",jarr);
		System.out.println("Writing into the JSON File");
		try {
			FileWriter file=new FileWriter("/home/sapient/Documents/STS_Workspace/WeatherApp/src/data.json");
			file.write(jobj.toJSONString());
			file.flush();
			file.close();
		}catch(IOException e) {
			System.out.println(e.getMessage());
		}
		System.out.println(jobj);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
