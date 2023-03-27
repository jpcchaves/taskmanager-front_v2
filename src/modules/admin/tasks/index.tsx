// Chakra imports
import {Box, SimpleGrid, useColorModeValue} from '@chakra-ui/react';
// Assets
// Custom components
import tableDataComplex from "../default/variables/tableDataComplex";
import Datatable from "./components/Datatable";

export default function TasksView() {
    // Chakra Color Mode
    const brandColor = useColorModeValue('brand.500', 'white');
    const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
    return (
        <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
            <SimpleGrid columns={{base: 1, md: 1, xl: 1}} gap='20px'>
                <Datatable tableData={tableDataComplex}/>
            </SimpleGrid>
        </Box>
    );
}
