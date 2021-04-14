package com.passion.weather.weather;

import java.util.List;

public class Weathers {
	private List<Weather> weather;

	public Weathers() {
		// TODO Auto-generated constructor stub
	}

	public Weathers(List<Weather> weather) {
		super();
		this.weather = weather;
	}

	public List<Weather> getWeather() {
		return weather;
	}

	public void setWeather(List<Weather> weather) {
		this.weather = weather;
	}

}
