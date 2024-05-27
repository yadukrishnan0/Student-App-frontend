import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="bg-gray-400 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">STUDENTS</div>
        <nav>
          <ul className="flex space-x-4">
            <Link to='/admin/home'>
            <li>Home</li>
            </Link>
            
            <Link to='/admin/courses'>
            <li>Course</li>
            </Link>
            <Link to='/admin/students'>
            <li>Students</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
