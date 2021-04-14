// 위치가 없을 경우 서울, 기본년도 2020년으로 지정
let lat1 = 37.56571689230394;
let lng1 = 126.97785926753444;
var year1 = 2020;
var year2 = 2001;
var region = "seoul";
var start = (moment().add(1, 'h')).format('YYYY-MM-DD:HH');

// 날씨 아이콘
let icon = null;

// 첫 접속 시 사용자의 좌표값 및 지역 가지고 오기
function getMyLoc() {
	navigator.geolocation.getCurrentPosition(function(geo) {
		lat1 = geo.coords.latitude; // 위도
		lng1 = geo.coords.longitude;// 경도
		var URI = "https://dapi.kakao.com/v2/local/geo/coord2regioncode.json";
		$.ajax({
			url : URI,
			data : {
				x : lng1,
				y : lat1
			},
			beforeSend : function(request) {
				request.setRequestHeader("Authorization",
						"");
			},
			success : function(data) {
				var map = data.documents[0].region_1depth_name;
				region = ChangeRegion(map);
			}
		});
		
		// 시간별 예보 버튼 및 시간 초기화
		$("#goBeforeGraph2").css("visibility", "visible");
		$("#goAfterGraph2").css("visibility", "visible");
		start = (moment().add(1, 'h')).format('YYYY-MM-DD:HH');
		
		startLiveMyLocWeather(lat1, lng1);
		LiveLocAir(lat1, lng1);
		ForecastLocHourly(lat1, lng1);
		ForecastLocDaily(lat1, lng1);

		selectYear(region);
		yearlyDesRatio(region, year1);
		SeasonDesRatio(region, year1);
		yearlySummerAndWinterTempRatio(region, year2);
		showGraph4(region);

	});
}

//좌표값으로 지역 값 도출
function ChangeRegion(map) {
	if (String(map).indexOf("서울") == 0 || String(map).indexOf("경기") == 0) {
		return "seoul";
	} else if (String(map).indexOf("부산") == 0
			|| String(map).indexOf("경상남도") == 0
			|| String(map).indexOf("울산") == 0) {
		return "busan";
	} else if (String(map).indexOf("대구") == 0
			|| String(map).indexOf("경상북도") == 0) {
		return "daegu";
	} else if (String(map).indexOf("인천") == 0) {
		return "incheon";
	} else if (String(map).indexOf("전라남도") == 0
			|| String(map).indexOf("광주") == 0) {
		return "gwangju";
	} else if (String(map).indexOf("대전") == 0 || String(map).indexOf("세종") == 0
			|| String(map).indexOf("충청남도") == 0) {
		return "daejeon";
	} else if (String(map).indexOf("강원") == 0) {
		return "gangneung";
	} else if (String(map).indexOf("전라북도") == 0) {
		return "jeonju";
	} else if (String(map).indexOf("충청북도") == 0) {
		return "cheongju";
	} else if (String(map).indexOf("제주") == 0) {
		return "jeju";
	}
}

//내 위치 버튼 클릭 시 내 위치값으로 데이터 변경
function clickGetMyLoc() {
	$(".getMyLocation").click(function() {
		getMyLoc();
		$("#location").text("");
	});
}

// Location 버튼 클릭 시 해당 지역의 좌표값으로 데이터 변경하기
function selectRegionGetLoc() {
	$(".drop1").click(function() {
		region = $(this).attr('value');
		var lat1 = $(this).children(".lat").attr('value');
		var lng1 = $(this).children(".lon").attr('value');
		var location = $(this).text();
		$("#location").text(location);
		
		// 시간별 예보 버튼 및 시간 초기화
		$("#goBeforeGraph2").css("visibility", "visible");
		$("#goAfterGraph2").css("visibility", "visible");
		start = (moment().add(1, 'h')).format('YYYY-MM-DD:HH');

		selectLiveRegionWeather(region);
		LiveLocAir(lat1, lng1);
		ForecastLocHourly(lat1, lng1);
		ForecastLocDaily(lat1, lng1);

		selectYear(region);
		yearlyDesRatio(region, year1);
		SeasonDesRatio(region, year1);
		yearlySummerAndWinterTempRatio(region, year2);
		showGraph4(region);
	});
}

// 년도 버튼 클릭 시 해당 년도의 데이터로 변경
function selectYear(region) {
	$(".drop2").click(function() {
		var year1 = $(this).text();
		yearlyDesRatio(region, year1);
		SeasonDesRatio(region, year1)
		showGraph4(region);
	});
}

// 날씨에 맞는 아이콘 지정
function WeatherIcon() {
	if (icon.match("03") || icon.match("04") || icon.match("02")) {
		icon = "02";
	} else if (icon.match("10") || icon.match("09")) {
		icon = "09";
	} else if (icon.match("01")) {
		icon = "01";
	} else if (icon.match("11")) {
		icon = "11";
	} else if (icon.match("13")) {
		icon = "13";
	} else if (icon.match("50")) {
		icon = "50";
	}
	$("#LiveClimateImg").attr("src", "resources/icon/" + icon + ".png");
}

// 접속 시 접속 위치의 실시간 날씨
function startLiveMyLocWeather(lat1, lng1) {
	var URI = "http://api.openweathermap.org/data/2.5/weather";
	$.ajax({
		url : URI,
		data : {
			lat : lat1,
			lon : lng1,
			appid : "",
			lang : "kr",
			units : "metric"
		},
		dataType : "json",
		success : function(data) {
			var description = data.weather[0].description;
			icon = data.weather[0].icon;
			var temp = data.main.temp;
			var temp_min = data.main.temp_min;
			var temp_max = data.main.temp_max;
			$("#LiveClimateText").text(description);
			$("#LiveAvgTmpArea").text(temp + " ℃");
			$("#LiveMaxTmpArea").text("최고 온도  " + temp_min + "  ℃");
			$("#LiveMinTmpArea").text("최저 온도  " + temp_max + "  ℃");
			WeatherIcon();
		}
	});
}

// 선택 지역의 실시간 날씨
function selectLiveRegionWeather(region) {
	var URI = "http://api.openweathermap.org/data/2.5/weather";
	$.ajax({
		url : URI,
		data : {
			q : region,
			appid : "",
			lang : "kr",
			units : "metric"
		},
		dataType : "json",
		success : function(data) {
			description = data.weather[0].description;
			icon = data.weather[0].icon;
			temp = data.main.temp;
			temp_min = data.main.temp_min;
			temp_max = data.main.temp_max;
			$("#LiveClimateText").text(description);
			$("#LiveAvgTmpArea").text(temp + " ℃");
			$("#LiveMaxTmpArea").text("최고 온도  " + temp_min + "  ℃");
			$("#LiveMinTmpArea").text("최저 온도  " + temp_max + "  ℃");
			WeatherIcon();
		}
	});
}

// 접속 시 접속 위치의 실시간 공기질
function LiveLocAir(lat1, lng1) {
	var URI = "http://api.openweathermap.org/data/2.5/air_pollution/forecast";
	$.ajax({
		url : URI,
		data : {
			lat : lat1,
			lon : lng1,
			appid : ""
		},
		dataType : "json",
		success : function(data) {
			var aqi = data.list[0].main.aqi;
			if (aqi == 1) {
				$("#LiveAqiText").text("미세먼지 매우 좋음").css("color", "green");
			} else if (aqi == 2) {
				$("#LiveAqiText").text("미세먼지 좋음").css("color", "green");
			} else if (aqi == 3) {
				$("#LiveAqiText").text("미세먼지 보통");
			} else if (aqi == 4) {
				$("#LiveAqiText").text("미세먼지 나쁨").css("color", "red");
			} else if (aqi == 5) {
				$("#LiveAqiText").text("미세먼지 매우 나쁨").css("color", "red");
			}
			var no2 = data.list[0].components.no2;
			var o3 = data.list[0].components.o3;
			var so2 = data.list[0].components.so2;
			var co = data.list[0].components.co;
			var pm25 = data.list[0].components.pm2_5;
			var pm10 = data.list[0].components.pm10;
			$("#LiveNo2Text").text("이산화질소 : " + no2 + "μg/m3");
			$("#LiveO3Text").text("오존 : " + o3 + "μg/m3");
			$("#LiveSo2Text").text("아황산가스 : " + so2 + "μg/m3");
			$("#LiveCoText").text("일산화탄소 : " + co + "μg/m3");
			$("#LivePm25Text").text("PM2.5 : " + pm25 + "μg/m3");
			$("#LivePm10Text").text("PM10 : " + pm10 + "μg/m3");
		}
	});
}

// 시간별 날씨 예보
function ForecastLocHourly(lat1, lng1) {
	var num = 0;
	var day = moment().format('YYYY-MM-DD:HH');
	var URI = "https://api.weatherbit.io/v2.0/forecast/hourly";
	$.ajax({
		url : URI,
		data : {
			key : "",
			lat : lat1,
			lon : lng1
		},
		dataType : "json",
		success : function(fw) {
			$("#DailyTimeTr").empty();
			for (var i = 0; i < (fw.data).length; i++) {
				if (fw.data[i].datetime == start) {
					num = i;
				}
			}
			for (var j = num; j <= num + 4; j++) {
				var iconSrc = "https://www.weatherbit.io/static/img/icons/"
						+ (fw.data[j].weather.icon) + ".png";
				var iconImg = $("<img>").attr("src", iconSrc);
				var iconTd = $("<td></td>").append(iconImg);

				var dateTd = $("<td></td>").text(
						(fw.data[j].datetime).replace(":", "  ") + "시").attr(
						"class", "futureDate");
				var tempTd = $("<td></td>").text(
						"예상 온도 " + fw.data[j].temp + "℃").attr("class",
						"DailyTimeTd");
				var appTempTd = $("<td></td>").text(
						"체감 온도 " + fw.data[j].app_temp + "℃").attr("class",
						"DailyTimeTd");
				var popTd = $("<td></td>")
						.text("강수 확률 " + fw.data[j].pop + "%").attr("class",
								"DailyTimeTd");

				var iconTr = $("<tr></tr>").append(iconTd);
				var dateTr = $("<tr></tr>").append(dateTd);
				var tempTr = $("<tr></tr>").append(tempTd);
				var appTempTr = $("<tr></tr>").append(appTempTd);
				var popTr = $("<tr></tr>").append(popTd);

				var dataTbl = $("<table></table>").append(iconTr, dateTr,
						tempTr, appTempTr, popTr).attr("class",
						"futureWeatherTBL");
				dataTbl = dataTbl.attr("class", "DailyTimeTbls");
				var dataTd = $("<td></td>").append(dataTbl);

				$("#DailyTimeTr").append(dataTd);
			}
		}
	});
}

//시간별 날씨 예보 버튼
function changeHourlyWeather() {
	$("#goBeforeGraph2").click(function() {
		start = (moment(start, 'YYYY-MM-DD:HH').add(-1, 'h')).format('YYYY-MM-DD:HH');
		if (start == (moment().format('YYYY-MM-DD') + ":06")) {
			$("#goBeforeGraph2").css("visibility", "hidden");
		}else if (start == (moment().add(+9, 'h')).format('YYYY-MM-DD:HH')) {
			$("#goAfterGraph2").css("visibility", "visible");
		}
		ForecastLocHourly(lat1, lng1);
	});
	
	$("#goAfterGraph2").click(function() {
		start = (moment(start, 'YYYY-MM-DD:HH').add(+1, 'h')).format('YYYY-MM-DD:HH');
		if (start == (moment().add(+10, 'h')).format('YYYY-MM-DD:HH')) {
			$("#goAfterGraph2").css("visibility", "hidden");
		}else if (start == (moment().format('YYYY-MM-DD') + ":07")) {
			$("#goBeforeGraph2").css("visibility", "visible");
		}
		ForecastLocHourly(lat1, lng1);
	});
}

// 요일별 날씨 예보
function ForecastLocDaily(lat1, lng1) {
	var URI = "https://api.weatherbit.io/v2.0/forecast/daily";
	$.ajax({
		url : URI,
		data : {
			key : "",
			lat : lat1,
			lon : lng1
		},
		dataType : "json",
		success : function(fw) {
			$("#DayTblData").empty();
			var week = [ '(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)' ];

			var startDay = moment().add(1, 'd').format('YYYY-MM-DD');
			var num = 0;

			for (var i = 0; i < (fw.data).length; i++) {
				if (fw.data[i].datetime == startDay) {
					num = i;
				}
			}

			for (var j = num; j < num + 7; j++) {
				var iconImg = fw.data[j].weather.icon;
				var iconSrc = "https://www.weatherbit.io/static/img/icons/"
						+ iconImg + ".png";
				var date = fw.data[j].datetime;

				var temp = fw.data[j].temp + "℃";
				var high_temp = fw.data[j].max_temp + "℃";
				var low_temp = fw.data[j].low_temp + "℃";
				var pop = fw.data[j].pop + "%";

				var sunrise_ts = fw.data[j].sunrise_ts;
				var transSR = new Date(sunrise_ts * 1000);
				var sunriseTime = transSR.getHours() + '시 '
						+ transSR.getMinutes() + '분 ' + transSR.getSeconds()
						+ '초';
				var day = week[transSR.getDay()];

				var sunset_ts = fw.data[j].sunset_ts;
				var transSS = new Date(sunset_ts * 1000);
				var sunsetTime = transSS.getHours() + '시 '
						+ transSS.getMinutes() + '분 ' + transSS.getSeconds()
						+ '초';

				var iconBox = $("<img>").attr("src", iconSrc);
				var iconTd = $("<td></td>").append(iconBox).attr("class",
						"DayTblIcon");
				var dateTd = $("<td></td>").append(date).attr("id",
						"DayTblDate");
				var dayTd = $("<td></td>").append(day).attr("id", "DayTblday");
				var tempTd = $("<td></td>").append(temp).attr("class",
						"DayTblTemp");
				var highTempTd = $("<td></td>").append(high_temp).attr("class",
						"DayTblTemp");
				var lowTempTd = $("<td></td>").append(low_temp).attr("class",
						"DayTblTemp");
				var popTd = $("<td></td>").append(pop).attr("class",
						"DayTblPop");
				var sunriseTd = $("<td></td>").append(sunriseTime).attr(
						"class", "DayTblSun");
				var sunsetTd = $("<td></td>").append(sunsetTime).attr("class",
						"DayTblSun");

				var tr = $("<tr></tr>").append(iconTd, dateTd, dayTd, tempTd,
						highTempTd, lowTempTd, popTd, sunriseTd, sunsetTd);

				$("#DayTblData").append(tr);
			}
		}
	});
}

// 지역, 년도별 날씨 구성 그래프1
function yearlyDesRatio(region, year1) {
	var URI = "http://localhost/weather/" + region + ".Des.get";
	$.ajax({
		url : URI,
		success : function(data) {
			$("#graph1Title").text("[ " + year1 + " 날씨 비율 ]")
			$.each(data.weather, function(i, o) {
				if (o.w_chart_no == "chart1") {
					if (o.w_year == year1) {
						$("#chart1").empty();
						var cloudy = o.w_cloudy;
						var sunny = o.w_sunny;
						var snow = o.w_snow;
						var dust = o.w_dust;
						var rain = o.w_rain;
						var thunder = o.w_thunder;
						var year = o.w_year;

						var options = {
								series : [ 
									{name : '흐림', data : [ cloudy ]
									}, {name : '맑음', data : [ sunny ]
									}, {name : '눈', data : [ snow ]
									}, {name : '황사', data : [ dust ]
									}, {name : '비', data : [ rain ]
									}, {name : '천둥', data : [ thunder ]
									} ],
								chart : {
									type : 'bar',
									height : '100px',
									stacked : true,
									stackType : '100%'
								},
								dataLabels : {
									enabled : true,
									enabledOnSeries : undefined,
									textAnchor : 'middle',
									distributed : false,
										style : {
											fontSize : '15px',
											fontFamily : 'Helvetica, Arial, sans-serif',
											fontWeight : 'bold',
											colors : [ '#000000' ]
											}
								},
								plotOptions : {
									bar : {
										horizontal : true,
									},
								},
								stroke : {
									width : 1,
									colors : [ '#fff' ]
								},
								xaxis : {
									categories : [ '' ],
								},
								fill : {
									opacity : 0.8,
									type : 'solid'
								},
								legend : {
									show : false,
								}
							};
						var chart = new ApexCharts(document.querySelector("#chart1"), options);
						chart.render();
					}
				}
			});
		}
	});
}

// 지역, 년도, 계절별 날씨 구성 그래프 2
function SeasonDesRatio(region, year1) {
	var URI = "http://localhost/weather/" + region + ".Des.get";
	$.ajax({
		url : URI,
		success : function(data) {
			$("#graph2Title").text("[ " + year1 + " 계절별 날씨 비율 ]")
			var numbering = 1;
			$("#chart2").empty();
			$("#chart3").empty();
			$("#chart4").empty();
			$("#chart5").empty();
			for (var i = 0; i < (data.weather).length; i++) {
				if (data.weather[i].w_chart_no == "chart2") {
					if (data.weather[i].w_year == year1) {
						var cloudy = data.weather[i].w_cloudy;
						var sunny = data.weather[i].w_sunny;
						var snow = data.weather[i].w_snow;
						var dust = data.weather[i].w_dust;
						var rain = data.weather[i].w_rain;
						var thunder = data.weather[i].w_thunder;
						numbering += 1;
						var options = {
							series : [ cloudy, sunny, snow, dust, rain, thunder ],
							labels : [ 'cloudy', 'sunny', 'snow', 'dust', 'rain', 'thunder' ],
							chart : { 
								type : 'donut'
							},
							dataLabels : {
								enabled : true,
								enabledOnSeries : undefined,
								textAnchor : 'middle',
								distributed : false,
								style : {
									fontSize : '15px',
									fontFamily : 'Helvetica, Arial, sans-serif',
									fontWeight : 50,
									colors : [ '#000000' ]
								}
							},
							legend : {
								show : false
							},
							plotOptions : {
								pie : {
									expandOnClick : true,
									offsetX : 0,
									offsetY : 0
								},
								donut : {
									size : '100%',
									background : 'transparent',
								}
							},
							responsive : [ {
								breakpoint : 480,
								options : {
									chart : {
										width : 200
									},
								}
							} ]
						};

						var chart = new ApexCharts(document.querySelector("#chart" + numbering), options);
						chart.render();
					}
				}
			}
		}
	});
}

// 지역, 년도 별 여름평균온도, 겨울 평균온도의 분포 그래프3
function yearlySummerAndWinterTempRatio(region, year2) {

	var w_no;

	var URI = "http://localhost/weather/" + region + ".Des.get";
	$.ajax({
		url : URI,
		success : function(data) {
			$("#chart6").empty();
			for (var i = 0; i < (data.weather).length; i++) {
				if (data.weather[i].w_chart_no == "chart3") {

					if (data.weather[i].w_year == year2) {
						w_no = data.weather[i].w_no;
						w_no = w_no - 1;
					}
				}
			}
			var summer = data.weather[w_no].w_summber_avgmaxtemp + 0;
			var winter = data.weather[w_no].w_winter_avgmintemp + 0;

			var options = {
				series : [ {
					name : 'summer',
					data : [ {
						x : data.weather[w_no].w_year,
						y : data.weather[w_no].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 1].w_year,
						y : data.weather[w_no + 1].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 2].w_year,
						y : data.weather[w_no + 2].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 3].w_year,
						y : data.weather[w_no + 3].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 4].w_year,
						y : data.weather[w_no + 4].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 5].w_year,
						y : data.weather[w_no + 5].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 6].w_year,
						y : data.weather[w_no + 6].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 7].w_year,
						y : data.weather[w_no + 7].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 8].w_year,
						y : data.weather[w_no + 8].w_summber_avgmaxtemp
					}, {
						x : data.weather[w_no + 9].w_year,
						y : data.weather[w_no + 9].w_summber_avgmaxtemp
					} ]
				}, {
					name : 'winter',
					data : [ {
						x : data.weather[w_no].w_year,
						y : data.weather[w_no].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 1].w_year,
						y : data.weather[w_no + 1].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 2].w_year,
						y : data.weather[w_no + 2].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 3].w_year,
						y : data.weather[w_no + 3].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 4].w_year,
						y : data.weather[w_no + 4].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 5].w_year,
						y : data.weather[w_no + 5].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 6].w_year,
						y : data.weather[w_no + 6].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 7].w_year,
						y : data.weather[w_no + 7].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 8].w_year,
						y : data.weather[w_no + 8].w_winter_avgmintemp
					}, {
						x : data.weather[w_no + 9].w_year,
						y : data.weather[w_no + 9].w_winter_avgmintemp
					} ]
				} ],
				chart : {
					type : 'area',
					height : 350
				},
				dataLabels : {
					enabled : false
				},
				stroke : {
					curve : 'straight'
				},
				xaxis : {
					type : 'datetime',
					axisBorder : {
						show : false
					},
					axisTicks : {
						show : false
					}
				},
				yaxis : {
					tickAmount : 4,
					floating : false,

					labels : {
						style : {
							colors : '#8e8da4',
						},
						offsetY : -7,
						offsetX : 0,
					},
					axisBorder : {
						show : false,
					},
					axisTicks : {
						show : false
					}
				},
				fill : {
					opacity : 0.5
				},
				tooltip : {
					x : {
						format : "yyyy",
					},
					fixed : {
						enabled : false,
						position : 'topRight'
					}
				},
				grid : {
					yaxis : {
						lines : {
							offsetX : -30
						}
					},
					padding : {
						left : 20
					}
				}
			};

			var chart = new ApexCharts(document.querySelector("#chart6"),
					options);
			chart.render();

		}
	});
}

//그래프 3번 버튼
function changeYearsGraph3() {
	$("#goAfterGraph").click(function() {
		year2 += 10;
		if (year2 == 2011) {
			$("#goAfterGraph").css("visibility", "hidden");
			$("#goBeforeGraph").css("visibility", "visible");
		}
		yearlySummerAndWinterTempRatio(region, year2);
	});
	$("#goBeforeGraph").click(function() {
		year2 -= 10;
		if (year2 <= 2001) {
			$("#goBeforeGraph").css("visibility", "hidden");
			$("#goAfterGraph").css("visibility", "visible");
		}
		yearlySummerAndWinterTempRatio(region, year2);
	});
}

// 지역별 Best 3 데이터 그래프4
function showGraph4(region) {
	$("#Graph4").attr("src", "resources/graph4/" + region + ".png");
}

// 위치 이동 버튼
function changePage() {
	goTap1Page();
	goTap2Page();
}

// tap1 날씨 컨텐츠가 있는 곳으로 이동
function goTap1Page() {
	$("#tap1").click(function() {
		$("html").animate({
			scrollTop : 0
		}, 500);
	});
}

// tap2 날씨 통계 컨텐츠가 있는 곳으로 이동
function goTap2Page() {
	var Tap2Where = $("#Graph1Area").offset().top;
	$("#tap2").click(function() {
		$("html").animate({
			scrollTop : Tap2Where + 550
		}, 500);
	});
}

$(function() {
	getMyLoc();
	changeYearsGraph3();
	changeHourlyWeather();
	selectRegionGetLoc();
	clickGetMyLoc();
	changePage();
});