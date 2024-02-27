// import React from 'react'

// function MemberDetails(props) {
//   return (
    
//     <div className='absolute top-0 left-0 w-[100vw] h-[100vh] backdrop-blur-[1px] z-10 flex justify-center items-center overflow-hidden'>
//         <div className='w-[900px] h-[500px] bg-transparent rounded  flex'>
            
//             {/*---------- left div-------------- */}
//             <div className='bg-white w-[30%] me-[14px] border-blue-900 border-b-2'>
//                 <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
//                     <img className=' rounded-full h-[180px] w-[180px] border-4 object-cover'  src={"data:image/png;base64," + props.member.image} alt='Profile photo'/>
//                 </div>
//                 <div className='w-full h-[40%] text-blue-950 text-center pt-10'>
//                     <h1 className='text-xl font-bold'>{props.member.firstName} {props.member.lastName}</h1>
//                     <p className='text-xl'>{props.member.regNo}</p>
//                 </div> 
//             </div>
            

//             {/*---------- right div-------------- */}
//             <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>

//                 <div className='w-full flex'>
//                     <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
//                     <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[385px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={ () => { props.handleCloseViewMemberDetails() } }>x</button>
//                 </div>
                

//                 <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4'>
//                     <div className='w-full h-full overflow-y-auto'>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Date of Birth</div>
//                             <div>{props.member.DOB}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Email</div>
//                             <div>{props.member.email}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Phone number</div>
//                             <div>{props.member.phone}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Address</div>
//                             <div>{props.member.address}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Office Address</div>
//                             <div>{props.member.officeAddress}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk Name</div>
//                             <div>Jasmine</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk phone</div>
//                             <div>987654323456</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Blood Group</div>
//                             <div>{props.member.bloodGroup}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Welfare member</div>
//                             <div>{props.member.welfareMember}</div>
//                         </div>
//                         <div>
//                             <div>Enrollment Date</div>
//                             <div>{props.member.enrollmentDate}</div>
//                         </div>
//                         <div>
//                             <div>Pincode</div>
//                             <div>{props.member.pincode}</div>
//                         </div>
//                         <div>
//                             <div>District</div>
//                             <div>{props.member.district}</div>
//                         </div>
//                         <div>
//                             <div>State</div>
//                             <div>{props.member.state}</div>
//                         </div>
//                         <div>
//                             <div>Whatsapp No</div>
//                             <div>{props.member.whatsAppno}</div>
//                         </div>
//                         <div>
//                             <div>Paid Amount</div>
//                             <div>6894</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                     </div> 
//                 </div>
//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default MemberDetails






// // MemberDetails.js
// import React from 'react';
// import { AiFillDelete } from "react-icons/ai";

// function MemberDetails(props) {
//   const handleCloseDetails = () => {
//     props.handleCloseViewMemberDetails();
//   };
  

//   return (
//     <div className='fixed top-0 left-0 w-full h-full backdrop-blur-[1px] z-10 flex justify-center items-center overflow-hidden'>
//       <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
//         <div className='bg-white w-[30%] border-blue-900 border-b-2'>
//           <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
//             <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={props.member.image? `data:image/png;base64,${props.member.image}` : "/profile_dummy.jpeg"} alt='Profile photo' />
//           </div>
//           <div className='w-full h-[40%] text-blue-950 text-center pt-10'>
//             <h1 className='text-xl font-bold'>{`${props.member.firstName} `}</h1>
//             <p className='text-xl'>{props.member.regNo}</p>
//             <div className='mt-12 text-[16px] text-red-400 font-light flex justify-center items-center text cursor-pointer'>
//               <AiFillDelete className="text-2xl me-1"/> Delete Member
//             </div>
//           </div>

//         </div>

//         <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
//           <div className='w-full flex'>
//             <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
//             <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[385px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={handleCloseDetails}>x</button>
//           </div>

//           <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Date of Birth</div>
//               <div>{props.member.DOB}</div>
//             </div>
//             <div className='mb-3'>
//               <div className='font-bold text-blue-900'>Email</div>
//               <div>{props.member.email}</div>
//             </div>
//             {/* ... (other member details) */}




//             <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Phone number</div>
//                             <div>{props.member.phone}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Address</div>
//                             <div>{props.member.address}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Office Address</div>
//                             <div>{props.member.officeAddress}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk Name</div>
//                             <div>Jasmine</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Clerk phone</div>
//                             <div>987654323456</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Blood Group</div>
//                             <div>{props.member.bloodGroup}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Welfare member</div>
//                             <div>{props.member.welfareMember}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Enrollment Date</div>
//                             <div>{props.member.enrollmentDate}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Pincode</div>
//                             <div>{props.member.pincode}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>District</div>
//                             <div>{props.member.district}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>State</div>
//                             <div>{props.member.state}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Whatsapp No</div>
//                             <div>{props.member.whatsAppno}</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Paid Amount</div>
//                             <div>6894</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div className='mb-3'>
//                             <div className='font-bold  text-blue-900'>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                         </div>
//                         <div>
//                             <div>Due Amount</div>
//                             <div>500</div>
//                             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberDetails;













// MemberDetails.js
import React from 'react';
import { AiFillDelete } from "react-icons/ai";


function MemberDetails(props) {


  const handleCloseDetails = () => {
    props.handleCloseViewMemberDetails();
  };

  const handleDeleteMember = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this member?");
    if (isConfirmed) {
      const userId = props.member._id; // Adjust this based on your data structure
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/delete/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to delete member: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.message === 'User deleted successfully') {
          console.log('Member deleted successfully');
          handleCloseDetails();
          
        } else if (data.message === 'User not found') {
          console.error('User not found');
        } else {
          console.error(`Failed to delete member: ${data.message}`);
        }
      })
      .catch(error => {
        console.error('Error while deleting member:', error);
      });
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full backdrop-blur-[4px] z-10 flex justify-center items-center overflow-hidden'>
      <div className='w-[900px] h-[500px] bg-transparent rounded flex'>
        <div className='bg-white w-[30%] border-blue-900 border-b-2'>
          <div className='w-full h-[60%] bg-blue-900 flex items-center justify-center'>
            <img className='rounded-full h-[180px] w-[180px] border-4 object-cover' src={props.member.image? `data:image/png;base64,${props.member.image}` : "/profile_dummy.jpeg"} alt='Profile photo' />
          </div>
          <div className='w-full h-[40%] text-blue-950 text-center pt-10'>
            <h1 className='text-xl font-bold'>{`${props.member.firstName} `}</h1>
            <p className='text-xl'>{props.member.regNo}</p>
            <div className='mt-12 text-[16px] text-red-400 font-light flex justify-center items-center text cursor-pointer' onClick={handleDeleteMember}>
              <AiFillDelete className="text-2xl me-1"/> Delete Member
            </div>
          </div>
        </div>

        <div className='bg-white w-[70%] h-full p-5 border-blue-900 border-b-2'>
          <div className='w-full flex'>
            <p className='text-xl font-semibold text-blue-900'>Personal Details</p>
            <button className='h-8 w-8 bg-blue-200 text-2xl relative left-[385px] bottom-[5px] hover:bg-blue-700 hover:text-white' onClick={handleCloseDetails}>x</button>
          </div>

          <div className='w-full h-[93%] mx-auto pt-2 border-blue-900 border-t-4 overflow-y-auto'>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Date of Birth</div>
              <div>{props.member.DOB}</div>
            </div>
            <div className='mb-3'>
              <div className='font-bold text-blue-900'>Email</div>
              <div>{props.member.email}</div>
            </div>
            
                  <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Phone number</div>
                       <div>{props.member.phone}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Address</div>
                       <div>{props.member.address}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Office Address</div>
                       <div>{props.member.officeAddress}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Clerk 1 Name</div>
                       <div>{props.member.clerkName1}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Clerk 1 phone</div>
                       <div>{props.member.clerkPhone1}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Clerk 2 Name</div>
                       <div>{props.member.clerkName2}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Clerk 2 phone</div>
                       <div>{props.member.clerkPhone2}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Blood Group</div>
                       <div>{props.member.bloodGroup}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Welfare member</div>
                       <div>{props.member.welfareMember}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Enrollment Date</div>
                       <div>{props.member.enrollmentDate}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Pincode</div>
                       <div>{props.member.pincode}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>District</div>
                       <div>{props.member.district}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>State</div>
                       <div>{props.member.state}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Whatsapp No</div>
                       <div>{props.member.whatsAppno}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Paid Amount</div>
                       <div>{props.member.paidAmount}</div>
                   </div>
                   <div className='mb-3'>
                       <div className='font-bold  text-blue-900'>Due Amount</div>
                       <div>{props.member.annualFee}</div>
                   </div>
                   
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;
