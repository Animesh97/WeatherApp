import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/favServlet")
public class favServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("application/json");			/*Set Response type to application/JSON*/
		PrintWriter out=response.getWriter();					/*Create PrintWriter*/
		File file=new File("/home/animeshp/StackRoute/WeatherApp/src/data.json");
		BufferedReader br=new BufferedReader(new FileReader(file));		/*Read the JSON data from the file*/
		String s=br.readLine();
		System.out.println(s);
		out.println(s);											/*Print the JSON string object using response writer*/
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
