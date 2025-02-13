import React from 'react';
import notFound from '../../assets/images/404_page-not-found.png';

export default function NotFound() {
  return (
    <div>
      <img src={notFound} alt="404" className="img-fluid w-50" />
    </div>
  );
}
