import React from 'react';

function Header() {
  return (
    <header
      className="flex justify-end p-3 fixed top-0 right-0 w-3/4 bg-black"
      style={{
        boxShadow: '0px 0.9825618267059326px 7.456404209136963px 0px #5c5c5c',
      }}
    >
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <img
          src="https://placehold.it/50x50"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
