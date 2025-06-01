import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import Recipes from '../../components/recipes/Recipes';
import Skeleton from '../skeleton/Skeleton';

const Home = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        api
        .get("/recipes")
        .then(res => setData(res.data))
        .catch(err => setError(err))
        .finally(()=> setLoading(false))
    }, [])
    
  return (
    <div>
        <Recipes data={data?.recipes}/>
        {loading && <Skeleton count={30}/>}
    </div> 
  )
}

export default React.memo(Home)