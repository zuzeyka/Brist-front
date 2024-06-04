import React, { useState } from 'react';

interface TableRow {
    id: number;
    name: string;
    email: string;
}

interface InsertFormProps {
    onSave: (newRow: TableRow) => void;
}

const InsertForm: React.FC<InsertFormProps> = ({ onSave }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ id: 0, name, email });
        setName('');
        setEmail('');
    };

    return (
        <form className='flex flex-col space-y-2 justify-center' onSubmit={handleSubmit}>
            <h2 className='text-lg font-semibold'>Insert New Row</h2>
            <div className='flex space-x-2'>
                <label className='text-sm font-medium'>Name:</label>
                <input className='rounded-full border bg-gray-200' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className='flex space-x-2'>
                <label className='text-sm font-medium'>Email:</label>
                <input className='rounded-full border bg-gray-200' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button className='rounded-md border bg-gray-200 p-2 w-64' type="submit">Save</button>
        </form>
    );
};

export default InsertForm;
