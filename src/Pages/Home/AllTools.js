import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const AllTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='my-10 px-12 mx-auto'>
            <h4 className='text-primary fw-bold mb-10 text-2xl' >Painting Brush</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tools.slice(0, 6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>

        </div>
    );
};

export default AllTools;