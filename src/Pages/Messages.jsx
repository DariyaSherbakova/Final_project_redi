// import React from 'react'

// function Messages({messages}) {
//   return (
//     <div>
//         <div className="overflow-x-auto">
//   <table className="table table-zebra">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Client</th>
//         <th>Phone</th>
//         <th>Email</th>
//         <th>Message</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr>
//         <th>1</th>
//         <td>Cy Ganderton</td>
//         <td>Quality Control Specialist</td>
//         <td>Blue</td>
//       </tr>
//       {/* row 2 */}
//       <tr>
//         <th>2</th>
//         <td>Hart Hagerty</td>
//         <td>Desktop Support Technician</td>
//         <td>Purple</td>
//       </tr>
//       {/* row 3 */}
//       <tr>
//         <th>3</th>
//         <td>Brice Swyre</td>
//         <td>Tax Accountant</td>
//         <td>Red</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
//     </div>
//   )
// }

// export default Messages







import React, { useEffect, useState } from 'react';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('https://backend-for-redi.onrender.com/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  const handleDelete = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div className="overflow-x-auto">
      <div className="table table-xs">
        <table className="">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-1/20 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="w-1/16 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="w-2/16 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="w-2/16 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="w-6/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
              <th className="w-1/12 px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.map((message, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{message.client}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{message.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{message.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{message.message}</td>
                <td className="px-6 py-4 text-right text-sm font-medium">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Messages;







