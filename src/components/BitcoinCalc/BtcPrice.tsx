import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BtcPrice: React.FC = () => {
  // State to hold the fetched BTC value
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch BTC price
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
          params: {
            ids: 'bitcoin',
            vs_currencies: 'USD', // Change 'USD' to any other currency if needed
          },
        });
        setBtcPrice(response.data.bitcoin.usd); // Set the price
        setLoading(false); // Turn off loading
      } catch (err) {
        setError('Failed to fetch Bitcoin price');
        setLoading(false);
      }
    };

    fetchBitcoinPrice(); // Call the fetch function
  }, []);

  if (loading) return <div>Loading...</div>; // Display loading state

  if (error) return <div>{error}</div>; // Display error if any

  return (
    <div className="">
      {btcPrice ? (
        <p className="text-base text-[#B3B0B0]">1 BTC = ${btcPrice.toLocaleString()}</p>
      ) : (
        <p>Unable to fetch the price.</p>
      )}
    </div>
  );
};

export default BtcPrice;
