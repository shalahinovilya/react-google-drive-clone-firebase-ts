import React, {useState} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {useAuth} from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom";

const LogIn = () => {

    const {signIn} = useAuth()
    const navigate = useNavigate()

    const submit = async () => {
        try {
            await signIn()
            await navigate('/')
        }
        finally {
        }
    }

    return (
        <Container sx={{marginTop: '10rem'}}>
            <Grid sx={{alignItems: 'center', justifyContent: 'center'}} container>
                <Grid item>
                    <Box component="span" sx={{
                        p: 3,
                        border: '1px dashed grey',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Button onClick={submit} sx={{fontSize: 24}}>Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LogIn;