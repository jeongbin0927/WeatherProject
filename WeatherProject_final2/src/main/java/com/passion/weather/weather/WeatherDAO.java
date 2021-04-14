package com.passion.weather.weather;

import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WeatherDAO {

	@Autowired
	SqlSession ss;

	public Weathers getSeoulDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getSeoulDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getJeonjuDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getJeonjuDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getJejuDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getJejuDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getIncheonDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getIncheonDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getGwangjuDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getGwangjuDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getGangneungDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getGangneungDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getDaejeonDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getDaejeonDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getDaeguDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getDaeguDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getCheongjuDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getCheongjuDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}

	public Weathers getBusanDesJson(HttpServletRequest request) {
		List<Weather> weathers = ss.getMapper(WeatherMapper.class).getBusanDesJson();
		Weathers weatherss = new Weathers(weathers);
		return weatherss;
	}
	
	
}
