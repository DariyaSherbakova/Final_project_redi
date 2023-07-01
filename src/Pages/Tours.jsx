import React, { useState, useEffect } from 'react';

function Tours() {
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://backend-for-redi.onrender.com/tours')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        return response.json();
      })
      .then(data => setTours(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {tours && tours.map(tour => (
              <tr key={tour.id}>
                <th>{tour.id}</th>
                <td>{tour.client}</td>
                <td>{tour.phone}</td>
                <td>{tour.date}</td>
                <td>{tour.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tours;
