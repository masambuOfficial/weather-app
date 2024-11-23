
---

# Weather App 🌤️  

This is a weather forecasting application built with [Next.js](https://nextjs.org) and the [OpenWeatherMap API](https://openweathermap.org/). The app provides users with a 5-day weather forecast in hourly intervals for their chosen city.

## Features  

- View real-time weather data for any city worldwide.
- Detailed 5-day hourly weather forecasts.
- Optimized for fast performance using Next.js.  

## Getting Started  

### Prerequisites  

1. Ensure you have **Node.js** (v18 or higher) installed.  
2. Sign up for an API key from [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/weather-app.git  
   cd weather-app  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   # or  
   yarn install  
   ```  

3. Create a `.env.local` file in the root directory and add your API key:  
   ```env  
   NEXT_PUBLIC_WEATHER_KEY=your_openweathermap_api_key  
   ```  

4. Start the development server:  
   ```bash  
   npm run dev  
   # or  
   yarn dev  
   ```  

5. Open [http://localhost:3000](http://localhost:3000) in your browser to access the app.  

## Using the Weather App  

1. Enter the name of a city (e.g., "Pune") in the search bar.  
2. View the 5-day hourly weather forecast, including temperature, humidity, and wind speed.  

The app uses the following API request to fetch weather data:  
```javascript  
const { data } = await axios.get(  
  `https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`  
);  
```  
- `q`: The city name.  
- `appid`: Your OpenWeatherMap API key.  
- `cnt`: Number of time intervals to fetch (56 = 5 days).  

## Project Structure  

- `app/`: Contains the main pages of the application.  
- `components/`: Reusable UI components for the app.  
- `styles/`: CSS modules for styling.  

## Learn More  

- [Next.js Documentation](https://nextjs.org/docs)  
- [OpenWeatherMap API Docs](https://openweathermap.org/api)  

## Deployment  

You can deploy this app using [Vercel](https://vercel.com):  

1. Push your project to a GitHub repository.  
2. Sign in to [Vercel](https://vercel.com/) and import your repository.  
3. Set the `NEXT_PUBLIC_WEATHER_KEY` environment variable in the Vercel settings.  
4. Deploy the app, and you’re good to go!  

## Contributing  

Feel free to submit pull requests or create issues for suggestions and improvements.  

---  