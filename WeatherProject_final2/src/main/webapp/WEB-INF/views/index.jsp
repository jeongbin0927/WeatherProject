<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Everything about the weather</title>
<!--  index CSS  -->
<link rel="stylesheet" href="resources/css/index.css">
<!-- bootstrap css -->
<link rel="stylesheet" href="resources/css/bootstrap.min.css">
<!-- bootstrap js -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script type="text/javascript" src="resources/js/bootstrap.bundle.min.js"></script>
<!-- moment.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<!-- weather.js -->
<script type="text/javascript" src="resources/js/jQuery.js"></script>
<script type="text/javascript" src="resources/js/weather.js"></script>
<!--  apexchart.js -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</head>
<body>
	<!--고정 메뉴-->
	<table id="MenuArea">
		<tr>
			<td id="MenuButton" colspan="4" align="center">
				<button type="button" class="btn btn-outline-primary" id="tap1">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
  				<path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
				</svg>
					Weather
				</button>

				<button type="button" class="btn btn-outline-primary" id="tap2">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
  				<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
				</svg>
					Analysis Weather
				</button>
			</td>
		</tr>
		<tr>
			<td colspan="2" id="LocArea" class="getMyLocation" align="right"><svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" ="2.5rem" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
			<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
			</svg> 내 위치</td>
			<td class="dropdownLocation" align="center">
				<button class="btn btn-secondary btn-sm dropdown-toggle sbtn2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Location</button>
				<ol class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<li class="dropdown-item drop1" value='seoul'><input class="lat" type="hidden" value="37.56571689230394"> <input class="lon" type="hidden" value="126.97785926753444"> 서울</li>
					<li class="dropdown-item drop1" value="incheon"><input class="lat" type="hidden" value="37.45606653335775"> <input class="lon" type="hidden" value="126.70587029241372"> 인천</li>
					<li class="dropdown-item drop1" value="gangneung"><input class="lat" type="hidden" value="37.752003025896514"> <input class="lon" type="hidden" value="128.87610541920756"> 강릉</li>
					<li class="dropdown-item drop1" value="cheongju"><input class="lat" type="hidden" value="36.64170434189167"> <input class="lon" type="hidden" value="127.48893635958754"> 청주</li>
					<li class="dropdown-item drop1" value="daejeon"><input class="lat" type="hidden" value="36.350378910329425"> <input class="lon" type="hidden" value="127.38484015587358"> 대전</li>
					<li class="dropdown-item drop1" value="daegu"><input class="lat" type="hidden" value="35.871528213399365"> <input class="lon" type="hidden" value="128.6015843577696"> 대구</li>
					<li class="dropdown-item drop1" value="jeonju"><input class="lat" type="hidden" value="35.823993100157296"> <input class="lon" type="hidden" value="127.14786102331885"> 전주</li>
					<li class="dropdown-item drop1" value="gwangju"><input class="lat" type="hidden" value="35.159818742437686"> <input class="lon" type="hidden" value="126.8515526340527"> 광주</li>
					<li class="dropdown-item drop1" value="busan"><input class="lat" type="hidden" value="35.179536842651395"> <input class="lon" type="hidden" value="129.07473980872092"> 부산</li>
					<li class="dropdown-item drop1" value="jeju"><input class="lat" type="hidden" value="33.49858269092581"> <input class="lon" type="hidden" value="126.53095500890178"> 제주</li>
				</ol>
			</td>
			<td id="GraphButtonArea" class="btn-group dropright" align="left">
				<button class="btn btn-secondary btn-sm dropdown-toggle sbtn2" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Year</button>
				<ol class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<li class="dropdown-item drop2">2020</li>
					<li class="dropdown-item drop2">2019</li>
					<li class="dropdown-item drop2">2018</li>
					<li class="dropdown-item drop2">2017</li>
					<li class="dropdown-item drop2">2016</li>
					<li class="dropdown-item drop2">2015</li>
					<li class="dropdown-item drop2">2014</li>
					<li class="dropdown-item drop2">2013</li>
					<li class="dropdown-item drop2">2012</li>
					<li class="dropdown-item drop2">2011</li>
					<li class="dropdown-item drop2">2010</li>
					<li class="dropdown-item drop2">2009</li>
					<li class="dropdown-item drop2">2008</li>
					<li class="dropdown-item drop2">2007</li>
					<li class="dropdown-item drop2">2006</li>
					<li class="dropdown-item drop2">2005</li>
					<li class="dropdown-item drop2">2004</li>
					<li class="dropdown-item drop2">2003</li>
					<li class="dropdown-item drop2">2002</li>
					<li class="dropdown-item drop2">2001</li>
				</ol>
			</td>
		</tr>
		<tr>
			<td colspan="4" align="center" id="location"></td>
		</tr>
	</table>

	<!--데이터-------------------------------------------------------------->
	<!--내 위치, Location 버튼 ------------------------------------------>

	<table id="WeatherTbl">
		<!--현재 날씨 데이터 ------------------------------------------>
		<tr>
			<td id="LiveArea" colspan="2">
				<table id="LiveWeatherTbl">
					<!-- 날씨 아이콘 -->
					<tr>
						<td align="center" colspan="4"><img id="LiveClimateImg"></td>
					</tr>
					<!-- 날씨 설명, 온도 -->
					<tr>
						<td id="LiveClimateText" align="right" colspan="2"></td>
						<td id="LiveAvgTmpArea" align="left" colspan="2"></td>
					</tr>
					<!-- 최고온도 최저온도 -->
					<tr>
						<td id="LiveMaxTmpArea" class="Live3" align="right" colspan="2"></td>
						<td id="LiveMinTmpArea" class="Live3" align="left" colspan="2"></td>
					</tr>
					<!-- 미세먼지,  pm2.5, pm10 -->
					<tr>
						<td id="LiveAqiText" colspan="2" class="Live3" align="right"></td>
						<td id="LivePm25Text" class="Live4" align="center"></td>
						<td id="LivePm10Text" class="Live4" align="center"></td>
					</tr>
					<!-- 오존, 아황산가스, 일산화탄소, 이산화질소  -->
					<tr>
						<td id="LiveO3Text" class="Live5" align="right"></td>
						<td id="LiveSo2Text" class="Live5" align="center"></td>
						<td id="LiveCoText" class="Live5" align="center"></td>
						<td id="LiveNo2Text" class="Live5" align="center"></td>
					</tr>
				</table>
			</td>
		</tr>
		<!-- 시간별 날씨 데이터 ------------------------------------------>
		<tr>
			<td id="DailyTimeArea" colspan="2">
				<table id="DailyTimeTbl">
					<tr>
						<td align="right" colspan="5"><img src="resources/icon/left.png" id="goBeforeGraph2" class="changeTimeBtn"> <img src="resources/icon/right.png" id="goAfterGraph2" class="changeTimeBtn"></td>
					</tr>
					<tr id="DailyTimeTr" align="center"></tr>
				</table>
			</td>
		</tr>
		<!-- 요일별 날씨 데이터 ------------------------------------------>
		<tr>
			<td id="DayArea" colspan="2" align="center">
				<table id="DayArea2">
					<tr>
						<td align="center">
							<table id="DayTblTitle">
								<tr align="center">
									<td class="DayTblIcon"></td>
									<td colspan="2" align="center" id="DayTblDateDay" class="DayTblTitleTd">날짜</td>
									<td class="DayTblTemp" id="DayTblTitleTd1">평균 온도</td>
									<td class="DayTblTemp" id="DayTblTitleTd2">최고 온도</td>
									<td class="DayTblTemp" id="DayTblTitleTd3">최저 온도</td>
									<td class="DayTblPop" id="DayTblTitleTd4">강수 확률</td>
									<td class="DayTblSun" id="DayTblTitleTd5">일출 시간</td>
									<td class="DayTblSun" id="DayTblTitleTd6">일몰 시간</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td align="center">
							<table id="DayTblData"></table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<!-- 그래프 버튼 ------------------------------------------>
		<tr>
			<td align="center" colspan="2" id="Graph1Area">
				<table id="graph1Area" class="graphTbl">
					<tr>
						<td align="center" id="graph1Title"></td>
					</tr>
					<tr>
						<td>
							<div id="chart1" style="width: 100%;"></div>
						</td>
					</tr>
					<tr>
						<td align="center"><img src="resources/icon/legend.png" class="legend"></td>
					</tr>
				</table>
			</td>
		</tr>
		<!-- 그래프 2------------------------------------------>
		<tr>
			<td colspan="2" align="center" id="Graph2Area">

				<table id="graph2Area" class="graphTbl">
					<tr>
						<td align="center" id="graph2Title" colspan="4"></td>
					</tr>
					<tr>
						<td id="chart2" style="height: 250px; width: 25%;"></td>
						<td id="chart3" style="height: 250px; width: 25%;"></td>
						<td id="chart4" style="height: 250px; width: 25%;"></td>
						<td id="chart5" style="height: 250px; width: 25%;"></td>
					</tr>
					<tr>
						<td align="center" colspan="4"><img src="resources/icon/legend.png" class="legend"></td>
					</tr>
				</table>
			</td>
		</tr>
		<!-- 그래프3------------------------------------------>
		<tr>
			<td id="Graph3Area" colspan="2" align="center">
				<table id="graph3Area" class="graphTbl" border="1">
					<tr>
						<td align="center" id="graph3Title">[ 여름 평균 온도와 겨울 평균 온도 차이 분석 ]</td>
					</tr>
					<tr>
						<td align="right"><img src="resources/icon/left.png" id="goBeforeGraph"> <img src="resources/icon/right.png" id="goAfterGraph"></td>
					</tr>
					<tr>
						<td align="center" colspan="4" id="chart6"></td>
					</tr>
				</table>
			</td>
		</tr>
		<!-- 분석 ------------------------------------------>
		<tr>
			<td colspan="2" align="center"><img id="Graph4"></td>
		</tr>
		<!-- copyWrite ------------------------------------------>
		<tr>
			<td id="CopyWriteArea" colspan="2" align="center">Weather Project <br> Wontaek Song & Jeongbin Lee <br>
			</td>
		</tr>
	</table>
</body>
</html>