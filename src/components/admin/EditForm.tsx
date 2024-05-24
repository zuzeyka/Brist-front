import React, { useState, useEffect } from 'react';

interface TableRow {
  id: number;
  name: string;
  email: string;
}

interface EditFormProps {
  row: TableRow;
  onSave: (updatedRow: TableRow) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ row, onSave, onCancel }) => {
  const [name, setName] = useState(row.name);
  const [email, setEmail] = useState(row.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...row, name, email });
  };

  useEffect(() => {
    setName(row.name);
    setEmail(row.email);
  }, [row]);

  return (
    <form className='flex flex-col space-y-2 justify-center' onSubmit={handleSubmit}>
      <h2 className='text-lg font-semibold'>Edit Row</h2>
      <div className='flex space-x-2 items-center'>
        <label className='text-sm font-medium'>Name:</label>
        <input className='rounded-full border bg-gray-200 p-2' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className='flex space-x-2 items-center'>
        <label className='text-sm font-medium'>Email:</label>
        <input className='rounded-full border bg-gray-200 p-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className='flex space-x-2'>
        <button className='rounded-md border bg-gray-200 p-2' type="submit">Save</button>
        <button className='rounded-md border bg-gray-200 p-2' type="button" onClick={onCancel}>Cancel</button>
      </div>
      
    </form>
  );
};

export default EditForm;
