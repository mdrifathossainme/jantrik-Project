import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';

const SingleBoge = () => {
    const { id } = useParams()
     const {data,isLoading}=useQuery('blog',()=>fetch(`https://immense-plains-72444.herokuapp.com/blog/${id}`).then(res=>res.json()))

  if (isLoading) {
    return<Loading/>
  }
    return (
        <div className='p-12'>
            <h4 className='lg:text-5xl mb-4'>Blog Id{data.name}</h4>
            <img className='w-full' src={data?.img} alt="" />
            <p className='my-4'>{data?.description}</p>
            <img src={data?.inerimg} alt="" />
            <p className='my-4'>{ data?.point}</p>
        </div>
    );
};

export default SingleBoge;