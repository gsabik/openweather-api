import { 
    Divider,
    Flex,
    Heading,
    HStack, 
    Image,
    Text,
    VStack 
} from "@chakra-ui/react";
import { iconUrlfromCode } from "../services/services";

const Forecast = ({ title, items }) => {
    return (
        <VStack>
            <Flex
                justifyContent="flex-start"
                w="full"
            >
                <Text
                    fontWeight="semibold"
                    fontSize="lg"
                >{title}</Text>
            </Flex>Flex
            <Divider/>
            <HStack>
                {
                    items.map(({ title, icon, temp }, index) => (
                        <VStack key={index} >
                            <Text>{title}</Text>
                            <Image
                                src={iconUrlfromCode(icon)}
                            />
                            <Text
                                fontWeight="semibold"
                            >{`${temp.toFixed()}°`}</Text>
                        </VStack>
                    ))
                }
            </HStack>
        </VStack>
    );
}

export default Forecast