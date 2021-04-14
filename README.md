# weatherProject
### 지역별 실시간 날씨와 날씨 예보, 20년간 날씨 관련 통계분석

![image](https://user-images.githubusercontent.com/80930401/114674600-5be3f300-9d42-11eb-8d88-5bb2e500f23d.png)


### motive and topic
  지구온난화가 세계 공통 이슈로 부각되면서 대한민국 기후에 대한 궁금증이 생겨 
  이를 확인하기 위해 20년 기상데이터를 바탕으로 지역의 연도별, 계절별 날씨 비율의 차트를 제작
  기상관련 API를 활용해서 실생활에서 자주 사용할 수 있는 실시간 기상정보, 기상 예보 제작

### requirements
  #### 1. 실시간 기상정보 및 대기오염 정보 조회
  - openWeather API를 활용하여 실시간 기상, 대기오염 데이터 조회
  - 첫 접속, 내 위치 버튼 클릭 시 navigator.geolocation을 사용하여 사용자의 접속 위치의 위도, 경도 값을 설정
  - location 버튼 클릭 시 input에 value로 설정해놓은 각 지역별 위도, 경도 값을 받음 
  - 대기 질 지수 AQI의 값을 바탕으로 대기 질의 정도에 따라 글자색이 변하도록 설정
  - API의 description을 바탕으로 기상 이미지를 설정

  #### 2. 시간별, 일일 기상 예보
  - Weatherbit API를 활용하여 시간별 기상 데이터 조회
  - 첫 접속, 내 위치 버튼 클릭 시 navigator.geolocation을 사용하여 사용자의 접속 위치의 위도, 경도 값을 설정
  - location 버튼 클릭 시 input에 value로 설정해놓은 각 지역별 위도, 경도 값을 받음
  - Moment.js를 활용하여 사용자의 접속 시간을 API에서 요구하는 parameter 값 형태로 가공하여 사용
  - 좌우 버튼을 생성 접속시간 기준 1시간 단위로 이전 이후의 기상 데이터를 제공
  - 데이터 제공 시간에 따라 좌우 버튼이 보이지 않도록 설정

  #### 3. 빅데이터를 활용한 계절별, 연도별 날씨 차트
  - 기상청에서 제공하는 과거 기상 API를 활용하여 java와 Python을 활용, 필요한 데이터만 parsing하여 csv파일로 생성
  - 직관적으로 보여질 수 있도록 사전적 정의를 바탕으로 날씨 데이터 정제
  - hadoop을 활용하여 데이터 분석
  - DB에 지역별 table로 구분하여 데이터를 저장, java Spring을 활용하여 JSON으로 가공
  - Apexchart.js를 활용하여 차트 제작
  - location과 year 버튼을 활용, 각 지역별, 연도별 데이터를 차트로 표현

  #### 4. 빅데이터를 활용한 여름 최고 온도의 평균과 겨울 최저 온도의 평균의 차이 차트
  - 기상청에서 제공하는 과거 기상 API를 활용하여 java와 Python을 활용, 필요한 데이터만 parsing하여 csv파일로 생성
  - java의 반복문과 조건문을 활용,여름의 최고 온도와 겨울의 최저 온도의 평균값을 가공 후 DB의 지역별 table에 삽입
  - 사용자의 시각적 편의성을 고려하여 10년 단위로 차트를 구성
  - 좌우 버튼을 생성하여 총 20년의 데이터를 표현 

  #### 5. 지역별 최고온도, 최저온도, 최다강수량 분석
  - 기상청에서 제공하는 과거 기상 API를 활용하여 java와 Python을 활용, 필요한 데이터만 parsing하여 csv파일로 생성
  - java를 활용하여 최고온도, 최저온도, 최다 강수량 데이터를 확보
  - 이미지 파일로 만든후 location 버튼을 활용하여 각 지역별 데이터를 제공

### DB / E-R Diagram
 ![image](https://user-images.githubusercontent.com/80930401/114675084-d6147780-9d42-11eb-917e-d210708a5dd6.png)


### Used Programs
 
![image](https://user-images.githubusercontent.com/80930401/114675074-d1e85a00-9d42-11eb-9d37-73996f7317e1.png)

