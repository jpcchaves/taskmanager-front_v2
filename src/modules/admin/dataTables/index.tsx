// Chakra imports
import {Box, SimpleGrid} from '@chakra-ui/react';
import DevelopmentTable from 'modules/admin/dataTables/components/DevelopmentTable';
import CheckTable from 'modules/admin/dataTables/components/CheckTable';
import ColumnsTable from 'modules/admin/dataTables/components/ColumnsTable';
import ComplexTable from 'modules/admin/dataTables/components/ComplexTable';
import tableDataDevelopment from 'modules/admin/dataTables/variables/tableDataDevelopment';
import tableDataCheck from 'modules/admin/dataTables/variables/tableDataCheck';
import tableDataColumns from 'modules/admin/dataTables/variables/tableDataColumns';
import tableDataComplex from 'modules/admin/dataTables/variables/tableDataComplex';

export default function Settings() {
    // Chakra Color Mode
    return (
        <Box pt={{base: '130px', md: '80px', xl: '80px'}}>
            <SimpleGrid mb='20px' columns={{sm: 1, md: 2}} spacing={{base: '20px', xl: '20px'}}>
                <DevelopmentTable tableData={tableDataDevelopment}/>
                <CheckTable tableData={tableDataCheck}/>
                <ColumnsTable tableData={tableDataColumns}/>
                <ComplexTable tableData={tableDataComplex}/>
            </SimpleGrid>
        </Box>
    );
}
