// import React from 'react'


// function PaymentTable(props) {
  
//   return (
//     <div className='w-full h-full m-0 p-0'>
//         <div className='w-full h-[10%] flex justify-between items-center mb-2'>
//             <div className='w-[85%] h-full flex items-center'>
//               <input type='text' className='w-[90%] h-full me-2 bg-[hsla(360,100%,100%,.4)] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded' placeholder ='Search'/>
//               <button className='w-[100px] h-full rounded  bg-blue-950 text-white hover:bg-blue-700' >Search</button>
//             </div> 
//         </div>
//         <div className='w-full h-[90%] overflow-y-auto rounded'>
//         <table className='w-full h-full bg-[#edececa3] '>
//             <thead className=''>
//             <tr className='text-left h-[60px] w-full'>
//                 <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '>Paid Amount</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '>Due Amount</th>
//                 <th className='sticky top-0 bg-blue-950 text-white '></th>
//             </tr>

//          </thead>
//             {/* <tr className='border-black border-b-2'>
//                 <td>1.</td>
//                 <td>Krishnadas R</td>
//                 <td>K/687272/1985</td>
//                 <td>view</td>
//                 <td>📈</td>
//             </tr> */}
//             {props.data.map((member, index) => {
//                return(
//                 <tr className='border-black border-b-[1px] h-[55px]'>
//                   <td  className='ps-4'>{index + 1}</td>
//                   <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={()=> { props.setEditPayment(true) }}>{member.firstName} </td>
//                   <td>{member.regNo}</td>
//                   <td>{member.regNo}</td>
//                   <td>{member.regNo}</td>
//                   <td>
//                     <button className='w-20 h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
//                       onClick={()=> { props.setEditPayment(true) }}
//                     >Edit</button>
//                   </td>
//                 </tr>
//                )
//             })}
//         </table>
//         </div>
//     </div>
//   )
// }

// export default PaymentTable




import React, { useEffect, useState } from 'react';
import PaymentView from './paymentView'
import axios from 'axios';

function PaymentTable(props) {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        if(searchTerm === ""){
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin/list-valid-users`);
          setUserData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm, userData]);  

  
  const handleSearch = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin/search_users`, {
        search: searchTerm,
      });
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleEditClick = (user) => {
    setSelectedUser(user);
    props.setEditPayment(true);
  };


  return (
    <div className='w-full h-full m-0 p-0'>
      <div className='w-full h-[10%] flex justify-between items-center mb-2'>
        <div className='w-[85%] h-full flex items-center'>
          <input
              type='text'
              className='w-[90%] h-full me-2 bg-[#ffffff4e] placeholder:text-blue-950 placeholder:font-bold focus:outline-none focus:border-2 ps-5 rounded'
              placeholder='Search'
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
            />
          <button className='w-[100px] h-full rounded bg-blue-950 text-white hover:bg-blue-700' onClick={handleSearch}>
              Search
            </button>
        </div>
      </div>
      <div className='w-full h-[90%] overflow-y-auto rounded'>

        <table className='w-full max-h-full bg-[#edececa3] '>
          <thead className=''>
            <tr className='text-left h-[60px] w-full'>
              <th className='ps-2 sticky top-0 bg-blue-950 text-white'>Sl NO.</th>
              <th className='sticky top-0 bg-blue-950 text-white '>Name</th>
              <th className='sticky top-0 bg-blue-950 text-white '>Enrollment No</th>
              <th className='sticky top-0 bg-blue-950 text-white '>Paid Amount</th>
              <th className='sticky top-0 bg-blue-950 text-white '>Due Amount</th>
              <th className='sticky top-0 bg-blue-950 text-white '></th>
            </tr>
          </thead>
          {
            userData.map((member, index) => (
              
              <tr key={index} className='border-black border-b-[1px] h-[55px]'>
                <td className='ps-4'>{index + 1}</td>
                <td className='font-bold cursor-pointer hover:underline hover:text-blue-900' onClick={() => handleEditClick(member)}>{member.firstName}</td>
                <td>{member.regNo}</td>
                <td>{member.paidAmount}</td>
                <td>{member.annualFee}</td>
                <td>
                  <button className='w-[110px] h-8 rounded-md bg-blue-900 hover:bg-blue-600 text-white text-sm'
                    onClick={() => handleEditClick(member)}
                  >Update Fees</button>
                </td>
              </tr>
            ))
          }
        </table>

      
      </div>
    
      { props.editPayment && <PaymentView user={selectedUser} setEditPayment={props.setEditPayment} />}
      
    </div>
  );
}

export default PaymentTable;






