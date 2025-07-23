import React from 'react';

const Table = () => {
  const tableData = [
    {
      id: 1,
      goalName: 'Android Studio Course',
      dueDate: '2023-10-15',
      goalTarget: 'Intermediate Level',
      progress: '50%',
      status: 'In Progress',
      createdAt: '2023-10-01',
    },
    {
      id: 2,
      goalName: 'React Projects',
      dueDate: '2023-10-25',
      goalTarget: 'Advanced',
      progress: '75%',
      status: 'In Progress',
      createdAt: '2023-10-05',
    },
  ];

  return (
    <div className="overflow-x-auto p-4">
      <table className="table w-full mont-font">
        <thead className="text-[#a7a7a7]">
          <tr className="h-16 font-normal">
            <th></th>
            <th className='font-semibold'>Goal Name</th>
            <th className='font-semibold'>Due Date</th>
            <th className='font-semibold'>Target</th>
            <th className='font-semibold'>Progress</th>
            <th className='font-semibold'>Status</th>
            <th className='font-semibold'>Created At</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((goal, index) => (
            <tr
              key={goal.id}
              className="h-16 hover:bg-[#22201F] cursor-pointer hover:text-white transition duration-200">
              <td>{index + 1}</td>
              <td>{goal.goalName}</td>
              <td>{goal.dueDate}</td>
              <td>{goal.goalTarget}</td>
              <td>{goal.progress}</td>
              <td>{goal.status}</td>
              <td>{goal.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
