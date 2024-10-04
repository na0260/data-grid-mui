import React from 'react';
import {GridToolbarContainer, GridToolbar, GridToolbarQuickFilter} from "@mui/x-data-grid";

const DataToolbar = () => {
    return (
        <>
            <GridToolbarContainer>
                <GridToolbar/>
                <GridToolbarQuickFilter/>
            </GridToolbarContainer>
        </>
    );
};

export default DataToolbar;