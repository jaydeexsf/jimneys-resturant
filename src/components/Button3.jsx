import React from 'react';
// import useState from 'react';

 const Button3 = ({cont}) => {
  // const [category, setCategory] = useState("All");

  const handleClick = ()=> {
    // setCategory(cont)
      console.log(cont);
  }

//  function gg() {
//  console.log(HandleClick)
//  }

  return (
    <div>
        <button onClick={handleClick} className="btn w-auto px-[15px] bg-gray-300 text-black text-xs border flex justify-center items-center rounded-[5px] h-[33px]">{cont}</button>
    </div>
  )
}

export default Button3;