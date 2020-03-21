import React from 'react';
import axios from 'axios';
import Head from 'next/head';

const Home = () =>(
    <div>
        <Head>
            <title>Home - Everton</title>
            <meta name='robots' content='index,follow'/>
            <meta name='description' content='Site de Perfil  Everton Vitor'/>
        </Head>
         Bem vindo Everton
    </div>
);
//conectando com a api
Home.getInitialProps = async () =>{
   var response = await axios.get(
        'http://localhost:8080/usuarios'
    );
    console.log(response.data)
    return {response:response.data}
};


export default Home;