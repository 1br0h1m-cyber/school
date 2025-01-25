import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { BarLoader } from 'react-spinners';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={
        <div className='flex flex-col justify-center items-center h-screen gap-2'>
          <BarLoader color="#E5B300" height={10} width={200} speedMultiplier={2} />
          <div className='text-[#E5B300] font-semibold text-[30px]'>Loading...</div>
        </div>
      }>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
