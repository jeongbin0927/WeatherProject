package com.passion.weather.weather;

import java.math.BigDecimal;

public class Weather {
	private BigDecimal w_no;
	private String w_chart_no;
	private BigDecimal w_year;
	private String w_season;
	private BigDecimal w_cloudy;
	private BigDecimal w_sunny;
	private BigDecimal w_snow;
	private BigDecimal w_dust;
	private BigDecimal w_rain;
	private BigDecimal w_thunder;
	private String w_summber_avgmaxtemp;
	private String w_winter_avgmintemp;

	public Weather() {
		// TODO Auto-generated constructor stub
	}

	public Weather(BigDecimal w_no, String w_chart_no, BigDecimal w_year, String w_season, BigDecimal w_cloudy,
			BigDecimal w_sunny, BigDecimal w_snow, BigDecimal w_dust, BigDecimal w_rain, BigDecimal w_thunder,
			String w_summber_avgmaxtemp, String w_winter_avgmintemp) {
		super();
		this.w_no = w_no;
		this.w_chart_no = w_chart_no;
		this.w_year = w_year;
		this.w_season = w_season;
		this.w_cloudy = w_cloudy;
		this.w_sunny = w_sunny;
		this.w_snow = w_snow;
		this.w_dust = w_dust;
		this.w_rain = w_rain;
		this.w_thunder = w_thunder;
		this.w_summber_avgmaxtemp = w_summber_avgmaxtemp;
		this.w_winter_avgmintemp = w_winter_avgmintemp;
	}

	public BigDecimal getW_no() {
		return w_no;
	}

	public void setW_no(BigDecimal w_no) {
		this.w_no = w_no;
	}

	public String getW_chart_no() {
		return w_chart_no;
	}

	public void setW_chart_no(String w_chart_no) {
		this.w_chart_no = w_chart_no;
	}

	public BigDecimal getW_year() {
		return w_year;
	}

	public void setW_year(BigDecimal w_year) {
		this.w_year = w_year;
	}

	public String getW_season() {
		return w_season;
	}

	public void setW_season(String w_season) {
		this.w_season = w_season;
	}

	public BigDecimal getW_cloudy() {
		return w_cloudy;
	}

	public void setW_cloudy(BigDecimal w_cloudy) {
		this.w_cloudy = w_cloudy;
	}

	public BigDecimal getW_sunny() {
		return w_sunny;
	}

	public void setW_sunny(BigDecimal w_sunny) {
		this.w_sunny = w_sunny;
	}

	public BigDecimal getW_snow() {
		return w_snow;
	}

	public void setW_snow(BigDecimal w_snow) {
		this.w_snow = w_snow;
	}

	public BigDecimal getW_dust() {
		return w_dust;
	}

	public void setW_dust(BigDecimal w_dust) {
		this.w_dust = w_dust;
	}

	public BigDecimal getW_rain() {
		return w_rain;
	}

	public void setW_rain(BigDecimal w_rain) {
		this.w_rain = w_rain;
	}

	public BigDecimal getW_thunder() {
		return w_thunder;
	}

	public void setW_thunder(BigDecimal w_thunder) {
		this.w_thunder = w_thunder;
	}

	public String getW_summber_avgmaxtemp() {
		return w_summber_avgmaxtemp;
	}

	public void setW_summber_avgmaxtemp(String w_summber_avgmaxtemp) {
		this.w_summber_avgmaxtemp = w_summber_avgmaxtemp;
	}

	public String getW_winter_avgmintemp() {
		return w_winter_avgmintemp;
	}

	public void setW_winter_avgmintemp(String w_winter_avgmintemp) {
		this.w_winter_avgmintemp = w_winter_avgmintemp;
	}

}
