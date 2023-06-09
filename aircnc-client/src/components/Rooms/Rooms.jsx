import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                }
                else {
                    setRooms(data)
                }
                setLoading(false)
        })
    }, [category])
    if (loading) {
        return <Loader/>
      }
    return (
        <div>
            <Container>
                {
                    rooms && rooms.length>0? <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8'>
                    {
                        rooms.map((room, i) => <Card
                            key={i}
                            room={room}
                        ></Card>)
                    }
                    </div> : <div className='pt-12'>
                            <Heading
                                title="No rooms available in this category"
                                subtitle="Please select other categories"
                                center={true}
                            ></Heading>
                </div>
                }
            </Container>
        </div>
    );
};

export default Rooms;