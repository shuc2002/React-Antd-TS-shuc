import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

// 根据 React 18，我们可以选择使用并发模式
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
