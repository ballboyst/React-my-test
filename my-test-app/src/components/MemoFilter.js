import React from 'react';

const MemoFilter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input type="text" id="filter" value={filter} onChange={handleChange} placeholder='検索キーワードをいれてください' />
    </div>
  );
};

export default MemoFilter;