let weather = {
    "apiKey" : "3fa2b8945383376b0c83b33e90235baf",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+ 
        "&appid="+this.apiKey+
        "&units=metric#"
        ).then((response)=> response.json())
         .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        const { name }= data;
        const{ icon , description}= data.weather[0];
        const{ temp, humidity}= data.main;
        const{speed}= data.wind;
        console.log(name , icon , description, temp, humidity, speed);


    // displaying data on screen

        document.querySelector(".city").innertext= "Weather in "+ name;
        document.querySelector(".icon").src= "http://openweathermap.org/img/wn/"+ icon +"@2x.png"


    }
};