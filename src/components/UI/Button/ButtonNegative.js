import React from 'react'

function ButtonNegative() {
  return (
    <button
          className="relative btn-neg mt-7 uppercase font-semibold tracking-wider leading-none rounded-lg "
          type="button"
        >
          <span className="absolute inset-0 rounded-lg bg-white"></span>
          <div className="relative px-8 py-4 rounded-lg bg-teal-700 text-white">Main menu</div>
        </button>
  )
}

export default ButtonNegative