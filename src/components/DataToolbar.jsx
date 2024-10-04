import React from 'react';
import {Box, Typography} from "@mui/material";
import {GridToolbarContainer, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";

const DataToolbar = () => {
    return (
        <>
            <Box display="flex" gap={5} justifyContent="space-between" alignItems="center" marginX={3} marginY={.5}>
                <div>
                    <Typography color="primary" variant="h6" component="h2">Books Data Table</Typography>
                </div>
                <GridToolbarContainer>
                    <GridToolbar/>
                    <GridToolbarQuickFilter/>
                </GridToolbarContainer>
            </Box>

        </>
    );
};

export default DataToolbar;