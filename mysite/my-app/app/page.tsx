"use client";

import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
import { useSearchParams } from 'next/navigation';

const HomePage = () => {
  const searchParam = useSearchParams();
  const view = searchParam.get('view'); // URLのクエリパラメータを取得

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        {view === 'create' && <CreateTodo />}
        {view === 'list' && <ListTodo />}
        {!view && <div>最初に表示するメッセージやデフォルトコンポーネントをここに配置できます。</div>}
      </div>
    </div>
  );
};

export default HomePage;