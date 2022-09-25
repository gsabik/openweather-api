import { 
    Divider,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    SimpleGrid,
    Text,
    VStack 
} from "@chakra-ui/react"; 
import {
    WiDaySunny,
    WiSunrise,
    WiSunset,
    WiThermometer,
    WiHumidity,
    WiWindy
} from "react-icons/wi";
import { formatToLocalTime, iconUrlfromCode } from "../services/services";

const TemperatureAndDetails = ({ 
    timezone,
    details, 
    icon, 
    temp,
    temp_min,
    temp_max, 
    sunrise, 
    sunset, 
    speed,
    humidity, 
    feels_like 
}) => {
    return (
        <VStack
            w="full"
            pt={6}
            spacing={4}
        >
            <Heading
                fontWeight="normal"
                size="lg"
            >{details}</Heading>
            <SimpleGrid
                columns={3}
                gap={4}
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                >
                    <Image
                        src={iconUrlfromCode(icon)}
                    />
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading
                        size="2xl"
                    >{`${temp.toFixed()}°`}</Heading>
                </Flex>
                <HStack
                    w="full"
                >
                    <VStack
                        w="full"
                    >
                        <HStack>
                            <Icon as={WiThermometer} boxSize={8}/>
                            <Text>
                                Real feel: <Text as="span" fontWeight="semibold">{`${feels_like.toFixed()}°`}</Text>
                            </Text>
                        </HStack>
                        <HStack>
                            <Icon as={WiHumidity} boxSize={8}/>   
                            <Text>
                                Humidity: <Text as="span" fontWeight="semibold">{`${humidity}%`}</Text>
                            </Text>
                        </HStack>
                        <HStack>
                            <Icon as={WiWindy} boxSize={8}/>
                            <Text>
                                Wind: <Text as="span" fontWeight="semibold">{`${speed} KM/H`}</Text>
                            </Text>
                        </HStack>
                    </VStack>
                </HStack>
            </SimpleGrid>
            <HStack>
                <HStack>
                    <Icon as={WiSunrise} boxSize={8}/>
                    <Text>
                        Rise: <Text as="span" fontWeight="semibold">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</Text>
                    </Text>
                </HStack>
                <Divider orientation="vertical" h="20px"/>
                <HStack>
                    <Icon as={WiSunset} boxSize={8}/>
                    <Text>
                        Set: <Text as="span" fontWeight="semibold">{formatToLocalTime(sunset, timezone, "hh:mm a")}</Text>
                    </Text>
                </HStack>
                <Divider orientation="vertical" h="20px"/>
                <HStack>
                    <Icon as={WiDaySunny} boxSize={8}/>
                    <Text>
                        High: <Text as="span" fontWeight="semibold">{`${temp_max.toFixed()}°`}</Text>
                    </Text>
                </HStack>
                <Divider orientation="vertical" h="20px"/>
                <HStack>
                    <Icon as={WiDaySunny} boxSize={8}/>
                    <Text>
                        Low: <Text as="span" fontWeight="semibold">{`${temp_min.toFixed()}°`}</Text>
                    </Text>
                </HStack>
            </HStack>
        </VStack>
    );
}

export default TemperatureAndDetails