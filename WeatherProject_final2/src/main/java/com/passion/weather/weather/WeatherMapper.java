package com.passion.weather.weather;

import java.util.List;

public interface WeatherMapper {

	public abstract List<Weather> getSeoulDesJson();

	public abstract List<Weather> getJeonjuDesJson();

	public abstract List<Weather> getJejuDesJson();

	public abstract List<Weather> getIncheonDesJson();

	public abstract List<Weather> getGwangjuDesJson();

	public abstract List<Weather> getGangneungDesJson();

	public abstract List<Weather> getDaejeonDesJson();

	public abstract List<Weather> getDaeguDesJson();

	public abstract List<Weather> getCheongjuDesJson();

	public abstract List<Weather> getBusanDesJson();
}
