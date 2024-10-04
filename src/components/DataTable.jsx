'use client';
import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import DataToolbar from "@/components/DataToolbar";
import {Button} from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'title',
        headerName: 'Title',
        width: 200,
    },
    {
        field: 'author',
        headerName: 'Author Name',
        width: 180,
    },
    {
        field: 'genre',
        headerName: 'Genre',
        width: 120,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 800,
    },
    {
        field: 'isbn',
        headerName: 'Isbn',
        width: 150,
    },
    {
        field: 'published',
        headerName: 'Published',
        width: 120,
    },
    {
        field: 'publisher',
        headerName: 'Publisher',
        width: 150,
    },
];
const DataTable = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://fakerapi.it/api/v2/books?_quantity=1000')
            .then((response) => response.json())
            .then(data => setBooks(data.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <DataGrid
                slots={{
                    toolbar: DataToolbar,
                    BaseButton: Button
                }}
                sx={{height: 'calc(100vh - 50px)', width: '100%'}}
                loading={loading}
                rows={books}
                autoPageSize={true}
                columns={columns}
                checkboxSelection
                slotProps={{
                    baseButton:{
                        variant: 'outlined',
                        color: 'primary'
                    }
                }}
            />
        </>
    );
};

export default DataTable;