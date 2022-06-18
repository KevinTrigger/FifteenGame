import React from 'react'

function ButtonNegative() {
  return (
    <button
          className="extra-sm:w-3/4 relative btn-pos mt-7 border uppercase font-semibold tracking-wider leading-none"
          type="button"
        >
          <span className="absolute inset-0 bg-white"></span>
          <div className="relative px-8 py-4 bg-slate-200 text-slate-700">Main menu</div>
        </button>
  )
}

export default ButtonNegative