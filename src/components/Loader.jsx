import { 
    Spinner,
    VStack 
} from "@chakra-ui/react";

const Loader = () => {
    return (
        <VStack
            alignItems="center"
            justifyContent="center"
            h="90vh"
        >
            <Spinner size="lg"/>
        </VStack>
    );
}

export default Loader