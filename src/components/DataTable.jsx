'use client';
import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import DataToolbar from "@/components/DataToolbar";

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
        width: 150,
    },
    {
        field: 'genre',
        headerName: 'Genre',
        width: 120,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 500,
    },
    {
        field: 'isbn',
        headerName: 'Isbn',
        width: 150,
    },
    {
        field: 'published',
        headerName: 'Published',
        width: 110,
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
                }}
                sx={{height: 800}}
                loading={loading}
                rows={books}
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </>
    );
};

export default DataTable;