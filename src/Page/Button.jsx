import React from 'react';

export default function Button() {
  function handleclick(num) {
    alert(num);
  }

  function Butt({ num }) {
    return (
      <button type="button" className="btn" onClick={() => handleclick(num)}>
        -
      </button>
    );
  }
  return (
    <div>
      <Butt />
    </div>
  );
}
