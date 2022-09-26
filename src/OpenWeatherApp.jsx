import { useEffect, useState } from "react";
import {
    Box,
    VStack
 } from "@chakra-ui/react";
import SearchInput from "./components/SearchInput";
import CitiesButtons from "./components/CitiesButtons";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import { getFormattedWeatherData } from "./services/services";

const OpenWeatherApp = () => {
    const [query, setQuery] = useState({q: "Buenos Aires"});
    const [units, setUnits] = useState("metric");
    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        const fetchWeather = async() => {
            await getFormattedWeatherData({...query, units}).then(data => setWeather(data));
        }

        fetchWeather();
    }, [query, units]);

    return (
        <Box
            alignItems="flex-start"
            bgGradient="linear(to-b, cyan.400, blue.600)"
            color="white"
            display="flex"
            h="100vh"
            justifyContent="center"
        >
            <VStack
                mt={6}
                spacing={4}
            >
                <VStack
                    w="full"
                    spacing={4}
                >
                    <SearchInput
                        setUnits={setUnits}
                        setQuery={setQuery}
                    />
                    <CitiesButtons
                        setQuery={setQuery}
                    />
                </VStack>
                {
                    weather
                    ?
                    <VStack
                        w="full"
                    >
                        <VStack
                            justifyContent="space-around"
                            w="full"
                        >
                            <TimeAndLocation {...weather}/>
                            <TemperatureAndDetails {...weather}/>
                        </VStack>
                        <VStack
                            w="full"
                        >
                            <Forecast title="Hourly forecast" items={weather.hourly}/>
                            <Forecast title="Daily forecast" items={weather.daily}/>
                        </VStack>
                    </VStack>  
                    :
                    <Loader/>
                }
            </VStack>
        </Box>
    );
}

export default OpenWeatherApp