## js-nowInfo

- 현재 시간(time)과 위치(location)에 따른 온도(temperature)를 가져온다.
- 현재 시간은 js에서 제공하는 Date 함수로 가져왔고, 위치는 navigator.geolocation.getCurrentPosition()을 사용했다.
- 온도는 open API인 openweathermap에서 위도, 경도, api키를 통해 가져왔다. 
- 이름(name)과 해야 할일(to do list)을 등록할 수 있다.
- 등록한 정보는 로컬저장소(Local Storage)에 저장되어 새로고침이나 다시 접속시 데이터가 저장되어 나타난다.

배포된 url :
  - deploy url : https://shlee0882.github.io/js-nowInfo/
