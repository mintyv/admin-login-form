import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './action';


function Posts(props) {

    const dispatch = useDispatch();
const value = useSelector((state)=>
{
    return state;
})

    
    useEffect(()=>{
        dispatch(fetchPosts());

    },[dispatch])

const renderPosts = () => {
    if(value.loading){
        return<h1>Loading...</h1>
    }

    return value.items.map(el => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Active?</th>
                        <th>Posts</th>
                        <th>Messages</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.data.map(el =>
                    <tr key={el.id}>
                        <td>{el.firstName}</td>
                        <td>{el.lastName}</td>
                        <td>{el.active ? 'Yes' : 'No'}</td>
                        <td>{el.posts}</td>
                        <td>{el.messages}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}}; 
 
    // return <h3 key={el.id}>{el.title}</h3>
 

return (
    <div>
        {renderPosts()}
)
    </div>
    );
}

export default Posts;
