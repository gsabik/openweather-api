import {
    Heading,
    VStack 
} from "@chakra-ui/react";
import { formatToLocalTime } from "../services/services";

const TimeAndLocation = ({ dt, timezone, name, country }) => {
    return (
        <VStack
            spacing={4}
        >
            <Heading
                size="lg"
                fontWeight="normal"
            >{formatToLocalTime(dt, timezone)}</Heading>
            <Heading
                fontWeight="semibold"
            >{`${name}, ${country}`}</Heading>
        </VStack>
    );
}

export default TimeAndLocation