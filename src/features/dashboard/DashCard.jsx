import React from 'react';

const DashCard = () => {
  const cardData = [
    {
      id: 1,
      title: 'Goal',
      content: 'This Month',
    },
    {
      id: 2,
      title: 'Goal',
      content: '8 Goals',
    },
    {
      id: 3,
      title: 'Focus Area',
      content: 'React + DSA',
    },
    {
      id: 4,
      title: 'Due Date',
      content: '20 Nov, 2025',
    },
    {
      id: 5,
      title: 'Goal Achieved',
      content: '4 Goals',
    },
  ];

  return (
    <div className="flex items-center gap-4 w-full py-6 overflow-x-auto">
      {cardData.map((card, index) => (
        <React.Fragment key={card.id}>
          <div className="card px-6 py-4 min-w-[200px]">
            <h2 className="text-md font-semibold text-gray-600 mont-font">{card.title}</h2>
            <p className="text-lg font-bold">{card.content}</p>
          </div>
          {index !== cardData.length - 1 && (
            <div className='h-16 bg-gray-300 w-0.5'></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DashCard;
