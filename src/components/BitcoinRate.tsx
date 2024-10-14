import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import Image from "next/image"
import BitCoinRate from "../../public/bitcoinrate.svg"

const BitcoinRate = () => {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);

  useEffect(() => {
 // Fetch Bitcoin price
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
        );
        const price = response.data.bitcoin.usd;
        const change = parseFloat(response.data.bitcoin.usd_24h_change.toFixed(2));

        setBtcPrice(price);
        setPriceChange(change);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <Box display="flex" alignItems="center" py={1} px={2} borderRadius="50px" bgcolor="#F4F2F0">
      <Box mr={2}>
      <Image src={BitCoinRate} alt="Bit Coin Logo" />
      </Box>
      <Typography variant="h6">BTC: ${btcPrice || 'N/A'}USD</Typography>
      <Typography
        variant="body2"
        color={priceChange && priceChange > 0 ? 'green' : 'red'}
        ml={2}
        className='bg-[#03D4180D] px-4 py-2 font-bold text-lg rounded'
      >
        {priceChange !== null ? `${priceChange > 0 ? `+ ${priceChange}%` : `${priceChange}%`}` : 'N/A'}
      </Typography>
    </Box>
  );
};

export default BitcoinRate;
