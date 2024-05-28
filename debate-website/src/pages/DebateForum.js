import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const DebateForum = () => {
  const [debates, setDebates] = useState([]);

  useEffect(() => {
    const fetchDebates = async () => {
      const debateCollection = await firestore.collection('debates').get();
      setDebates(debateCollection.docs.map(doc => doc.data()));
    };

    fetchDebates();
  }, []);

  return (
    <div>
      <h1>Debat Forumu</h1>
      {debates.map((debate, index) => (
        <div key={index}>
          <h2>{debate.title}</h2>
          <p>{debate.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DebateForum;
