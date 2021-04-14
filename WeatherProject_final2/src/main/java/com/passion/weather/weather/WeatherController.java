package com.passion.weather.weather;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WeatherController {

	@Autowired
	private WeatherDAO WDAO;

	@RequestMapping(value = "/seoul.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getSeoulDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getSeoulDesJson(request);
	}

	@RequestMapping(value = "/jeonju.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getJeonjuDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getJeonjuDesJson(request);
	}

	@RequestMapping(value = "/jeju.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getJejuDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getJejuDesJson(request);
	}

	@RequestMapping(value = "/incheon.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getIncheonDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getIncheonDesJson(request);
	}

	@RequestMapping(value = "/gwangju.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getGwangjuDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getGwangjuDesJson(request);
	}

	@RequestMapping(value = "/gangneung.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getGangneungDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getGangneungDesJson(request);
	}

	@RequestMapping(value = "/daejeon.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getDaejeonDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getDaejeonDesJson(request);
	}

	@RequestMapping(value = "/daegu.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getDaeguDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getDaeguDesJson(request);
	}

	@RequestMapping(value = "/cheongju.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getCheongjuDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getCheongjuDesJson(request);
	}

	@RequestMapping(value = "/busan.Des.get", method = RequestMethod.GET, produces = "application/json; charset=utf-8")
	public @ResponseBody Weathers getBusanDesJson(HttpServletRequest request, HttpServletResponse response) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		return WDAO.getBusanDesJson(request);
	}

}
