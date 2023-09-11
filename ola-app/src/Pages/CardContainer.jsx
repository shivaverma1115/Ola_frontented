import React, { useEffect, useState } from 'react'
import CardShow from './CardShow';
import { Box, Grid, Input } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsFailer, getPostsRequest, getPostsSuccess } from '../Components/Redux/action';

const CardContainer = () => {
    const [catego,setCatego] = useState('') ;
    const [nameSer,setnameSer] = useState('') ;
    const dispatch = useDispatch() ;
    const fetchData = async () => {
        try {
            dispatch(getPostsRequest()) ;
            const res = await fetch(`https://backened-55ca95bcg-shivaverma1115.vercel.app/browse?name=${nameSer}&category=${catego}`);
            const ans = await res.json();
            dispatch(getPostsSuccess(ans.posts))
        } catch (error) {
            console.log(error) ;
            dispatch(getPostsFailer) ;
        }
    }
    useEffect(() => {
        fetchData();
    }, [catego])

    const posts = useSelector((state)=>state.posts) ;
    return (
        <>
        <Box m={'20px'} width={'fit-content'}margin={'auto'}fontSize={20} >
        <select style={{margin:"20px"}} onChange={(e)=>setCatego(e.target.value)} >
            <option value={''} >Category</option>
            <option value={'clothing'}>Clothing</option>
            <option value={'electronics'}>Electronics</option>
            <option value={'Furniture'}>Furniture</option>
        </select>
        <Input type='text' onChange={(e)=>setnameSer(e.target.value)} placeholder='Search by name' />
        </Box>
        <Grid justifyContent={'center'} m={'auto'} container rowSpacing={1} columnSpacing={2}>
            {
                posts.map((ele, i) => {
                    return (
                        <Grid item xs={[2,2,2]}>
                            <CardShow key={i} ele={ele} />
                        </Grid>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default CardContainer
