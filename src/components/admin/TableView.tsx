import React from 'react';

interface TableRow {
  id: number;
  name: string;
  email: string;
}

interface TableViewProps {
  data: TableRow[];
  onRemove: (id: number) => void;
  onEdit: (row: TableRow) => void;
}

const TableView: React.FC<TableViewProps> = ({ data, onRemove, onEdit }) => {
  return (
    <table className="table-fixed w-full border bg-white">
      <thead className='bg-gray-200'>
        <tr className='text-left'>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td className='flex space-x-2'>
              <button onClick={() => onEdit(row)}>Edit</button>
              <button onClick={() => onRemove(row.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
