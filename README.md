# Rain Check

Rain Check is your go-to weather companion for staying ahead of the elements. With a sleek and user-friendly interface, Rain Check allows you to effortlessly search for any location and access detailed weather information instantly. Whether you're planning a weekend getaway or simply checking the forecast for your daily commute, Rain Check has you covered.

### Technologies Used
- Vite + React + TypeScript
- React Query
- Tailwind CSS
- OpenWeather API

### Setting up Environment Variables
1. Create a file named `.env.local` in the root directory.
2. If you don't already have an API key from OpenWeather, you'll need to sign up for an account on the OpenWeather website and obtain your API key. This key will be used to authenticate your requests to the OpenWeather API.
3. In the `.env.local` file, define your OpenWeather API key in the following format:
```
VITE_API_BASE_URL="https://api.openweathermap.org/data/2.5/"
VITE_API_KEY=your_openweather_api_key_here
```

#
**Note**: Make sure not to commit your `.env.local` file to version control to avoid exposing your API key. Instead, add it to your `.gitignore` file to prevent accidental commits.