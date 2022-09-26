import { useState } from "react";
import { 
    Button,
    ButtonGroup,
    HStack,
    Input
} from "@chakra-ui/react";

const SearchInput = ({ setQuery, setUnits }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setQuery({ q: inputValue });
        setInputValue("");
    }

    return (
        <HStack
            w="full"
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    "width": "100%"
                }}
            >
                <Input
                    backgroundColor="cyan.300"
                    _hover={{
                        "backgroundColor": "cyan.300"
                    }}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    type="text"
                    variant="filled"
                    value={inputValue}
                />
            </form>
            <ButtonGroup>
                <Button
                    _hover={{
                        "backgroundColor": "cyan.600"
                    }}
                    onClick={() => setUnits("metric")}
                    variant="ghost"
                >C°</Button>
                <Button
                    _hover={{
                        "backgroundColor": "cyan.600"
                    }}
                    onClick={() => setUnits("imperial")}
                    variant="ghost"
                >F°</Button>
            </ButtonGroup>
        </HStack>
    );
}

export default SearchInput