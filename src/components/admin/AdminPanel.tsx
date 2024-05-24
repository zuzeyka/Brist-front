import React, { useState } from 'react';
import TableView from './TableView';
import EditForm from './EditForm';
import InsertForm from './InsertForm';
import * as Interfaces from '../../shared/lib/interfaces';

interface TableRow {
    id: number;
    name: string;
    email: string;
}

interface TableData {
    [key: string]: TableRow[];
}

const initialData: TableData = {
    users: [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    ],
    products: [
        { id: 1, name: 'Product A', email: 'product.a@example.com' },
        { id: 2, name: 'Product B', email: 'product.b@example.com' },
    ],
};

const AdminPanel: React.FC = () => {
    const [data, setData] = useState<TableData>(initialData);
    const [selectedTable, setSelectedTable] = useState<keyof TableData>('users');
    const [editRow, setEditRow] = useState<TableRow | null>(null);

    const handleRemove = (id: number) => {
        setData({
            ...data,
            [selectedTable]: data[selectedTable].filter(row => row.id !== id),
        });
    };

    const handleInsert = (newRow: TableRow) => {
        setData({
            ...data,
            [selectedTable]: [...data[selectedTable], { ...newRow, id: data[selectedTable].length + 1 }],
        });
    };

    const handleUpdate = (updatedRow: TableRow) => {
        setData({
            ...data,
            [selectedTable]: data[selectedTable].map(row => (row.id === updatedRow.id ? updatedRow : row)),
        });
        setEditRow(null);
    };

    return (
        <div className="admin-panel flex flex-col justify-start h-screen bg-gray-100 space-y-4 p-4">
            <h1 className='text-2xl font-bold'>Admin Panel</h1>
            <div className="table-selector flex space-x-4 mt-4 bg-gray-300 p-4 rounded-2xl">
                <button onClick={() => setSelectedTable('users')}>Users</button>
                <button onClick={() => setSelectedTable('products')}>Products</button>
            </div>
            {editRow ? (
                <EditForm row={editRow} onSave={handleUpdate} onCancel={() => setEditRow(null)} />
            ) : (
                <InsertForm onSave={handleInsert} />
            )}
            <TableView data={data[selectedTable]} onRemove={handleRemove} onEdit={setEditRow} />
        </div>
    );
};

export default AdminPanel;

