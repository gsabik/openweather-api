import { 
    Button,
    HStack 
} from "@chakra-ui/react";

const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            city: "Buenos Aires, AR"
        },
        {
            id: 2,
            city: "Génova, IT"
        },
        {
            id: 3,
            city: "Berlin, DE"
        },
        {
            id: 4,
            city: "Washington, US"
        },
        {
            id: 5,
            city: "Tokyo, JP"
        }
    ]

    return (
        <HStack
            justifyContent="space-between"
            w="full"
        >
            {
                cities.map(({ id, city }) => (
                    <Button
                        colorScheme="gray"
                        _hover={{
                            "backgroundColor" : "cyan.600"
                        }}
                        key={id}
                        onClick={() => setQuery({ q: city })} 
                        variant="ghost"
                    >{city}</Button>
                ))
            }
        </HStack>
    );
}

export default TopButtons