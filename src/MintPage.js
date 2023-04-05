import { useState } from "react";
import { Container, Grid, Typography, Button, TextField, Card, CardContent, CardMedia } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import styles from './MintPage.module.css';
import detectEthereumProvider from '@metamask/detect-provider';


const MintPage = () => {


  const handleMint = async () => {

  };

  const handleConnectWallet = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      try {
        // Запрос пользователю разрешения на доступ к его счетам
        const accounts = await provider.request({ method: 'eth_requestAccounts' });
        console.log('Connected Wallet:', accounts[0]);
      } catch (error) {
        console.error('User rejected wallet connection:', error);
      }
    } else {
      console.error('No Ethereum-compatible browser detected. Please install MetaMask.');
    }
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <Container sx={{ mt: 5 }}>
      <animated.div style={fadeIn}>
        <Typography variant="h4" className={styles.title}>
          Pandas Roly-Poly Mint
        </Typography>
        <Grid container sx={{ mt: 5 }} spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image={`${process.env.PUBLIC_URL}/icon3.png`} // Замените это ссылкой на изображение вашего NFT
                alt="NFT Image"
              />
              <CardContent>
                <Typography variant="h6">Pandas Roly-Poly</Typography>
                <Button sx={{ mt: 2 }}
                  variant="outlined"
                  color="secondary"
                  onClick={handleConnectWallet}
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Connect Wallet
                </Button>
                <Button sx={{ mt: 2, ml: 34 }}
                  variant="outlined"
                  color="primary"
                  onClick={handleMint}
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  Mint NFT
                </Button>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </animated.div>
    </Container>
  );
};

export default MintPage;