-- seoul
create table seoul_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table seoul_des_s CASCADE CONSTRAINTS;
create sequence seoul_des_s_seq;
drop sequence seoul_des_s_seq;
select * from seoul_des_s order by w_no;

--jeonju
create table jeonju_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table jeonju_des_s CASCADE CONSTRAINTS;
create sequence jeonju_des_s_seq;
drop sequence jeonju_des_s_seq;
select * from jeonju_des_s order by sd_no;

-- jeju
create table jeju_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table jeju_des_s CASCADE CONSTRAINTS;
create sequence jeju_des_s_seq;
drop sequence jeju_des_s_seq;
select * from jeju_des_s order by sd_no;

--incheon
create table incheon_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table incheon_des_s CASCADE CONSTRAINTS;
create sequence incheon_des_s_seq;
drop sequence incheon_des_s_seq;
select * from incheon_des_s order by sd_no;

-- gwangju
create table gwangju_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table gwangju_des_s CASCADE CONSTRAINTS;
create sequence gwangju_des_s_seq;
drop sequence gwangju_des_s_seq;
select * from gwangju_des_s order by sd_no;

-- gangneung
create table gangneung_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table gangneung_des_s CASCADE CONSTRAINTS;
create sequence gangneung_des_s_seq;
drop sequence gangneung_des_s_seq;
select * from gangneung_des_s order by sd_no;

-- daejeon
create table daejeon_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table daejeon_des_s CASCADE CONSTRAINTS;
create sequence daejeon_des_s_seq;
drop sequence daejeon_des_s_seq;
select * from daejeon_des_s order by sd_no;

-- daegu
create table daegu_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table daegu_des_s CASCADE CONSTRAINTS;
create sequence daegu_des_s_seq;
drop sequence daegu_des_s_seq;
select * from daegu_des_s order by sd_no;

-- cheongju
create table cheongju_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table cheongju_des_s CASCADE CONSTRAINTS;
create sequence cheongju_des_s_seq;
drop sequence cheongju_des_s_seq;
select * from cheongju_des_s order by sd_no;

-- busan
create table busan_des_s(
	w_no number(4)primary key,
	w_chart_no varchar2(6)not null,
	w_year number(4) not null,
	w_season varchar2(6) not null,
	w_cloudy number(4)not null,
	w_sunny number(4)not null,
	w_snow number(4)not null,
	w_dust number(4)not null,
	w_rain number(4)not null,
	w_thunder number(4)not null,
	w_summber_avgmaxtemp varchar2(6)not null,
	w_winter_avgmintemp varchar2(6)not null
);

drop table busan_des_s CASCADE CONSTRAINTS;
create sequence busan_des_s_seq;
drop sequence busan_des_s_seq;
select * from busan_des_s order by sd_no;
