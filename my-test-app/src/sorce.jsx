    // memo_data.js
export const memos = [
    {
      id: 1,
      date: '2023-02-07 10:00:00',
      title: 'React入門',
      content: 'Reactは、ユーザインターフェースを構築するための人気のあるJavaScriptライブラリで、特にシングルページアプリケーションに使用されます。Webアプリとモバイルアプリのビューレイヤーの管理に使用されます。'
    },
    {
      id: 2,
      date: '2023-03-12 12:00:00',
      title: 'Reactコンポーネント',
      content: 'コンポーネントは、Reactアプリケーションの基本的な構成要素で、一つのアプリは通常、複数のコンポーネントから構成されます。コンポーネントは基本的にユーザインターフェースの一部です。'
    }
  ];

    // MemoList.js
    import React from 'react';
import MemoFilter from './components/MemoFilter';

    const MemoList = ({ memos }) => {
      return (
        <ul>
          {memos.map((memo) => (
            <li key={memo.id}>
              <h3>{memo.title}</h3>
              <span>ID: {memo.id}</span>
              <span>{memo.date}</span>
              <p>{memo.content}</p>
            </li>
          ))}
        </ul>
      );
    };
    
    export default MemoList;

    // MemoFilter.js
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

    // App.js
    import React, { useState, useMemo } from 'react';
    import MemoList from './components/MemoList';
    import MemoFilter from './components/MemoFilter';
    import { memos } from './memo_data';
    import './App.css';
    
    const App = () => {
      const [filter, setFilter] = useState('');
      const [sortField, setSortField] = useState('date');
      const [sortOrder, setSortOrder] = useState('asc');
    
      const filteredMemos = useMemo(() => {
        return memos
          .filter((memo) =>
            memo.title.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a, b) => {
            if (sortField === 'date') {
              const dateA = new Date(a.date);
              const dateB = new Date(b.date);
              return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
            } else if (sortField === 'id') {
              return sortOrder === 'asc' ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
            } else {
              return sortOrder === 'asc'
                ? a[sortField].localeCompare(b[sortField])
                : b[sortField].localeCompare(a[sortField]);
            }
          });
      }, [filter, sortField, sortOrder]);
    
      return (
        <div className="container">
          <h2>Memo List</h2>
          <MemoFilter filter={filter} setFilter={setFilter} />
          <button onClick={() => { setSortField('id'); setSortOrder('asc'); }}>ID(昇順)</button>
          <button onClick={() => { setSortField('id'); setSortOrder('desc'); }}>ID(降順)</button>
          <button onClick={() => { setSortField('title'); setSortOrder('asc'); }}>タイトル(昇順)</button>
          <button onClick={() => { setSortField('title'); setSortOrder('desc'); }}>タイトル(降順)</button>
          <button onClick={() => { setSortField('date'); setSortOrder('asc'); }}>日付(昇順)</button>
          <button onClick={() => { setSortField('date'); setSortOrder('desc'); }}>日付(降順)</button>
          <MemoList memos={filteredMemos} />
        </div>
      );
    };
    
    export default App;
