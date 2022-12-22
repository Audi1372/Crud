import React, { useEffect, useState } from 'react'
import { FaTrash, FaPen, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Table, Button } from "reactstrap";



export default function Products() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const getUsers = () => {
        fetch('https://637b66a36f4024eac20c7f30.mockapi.io/users')
            .then((data) => data.json())
            .then((res) => setUsers(res))
    }
    useEffect(() => {
        getUsers()
    }, [])
    const handleDelete = (id) => {
        fetch('https://637b66a36f4024eac20c7f30.mockapi.io/users/' + id, { method: 'DELETE' })
            .then((data) => data.json())
            .then((res) => {
                getUsers();
                toast.warn('deleted successfully')
            })
    }

    return (
        <Container>
            <ToastContainer />
           
            <Table>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th> Image </th>
                        <th> Name</th>
                        <th> Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map((data, index) => {
                        return (
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td><img src={data.image} height='150' alt='not loades' /></td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td>{data.discription}</td>
                                <td>
                                    <Button className='mb-3 mr-3' color="warning" onClick={() => navigate(`/action/${data.id}/false`)}><FaPen /></Button>
                                    <Button className='mb-3' color="info" onClick={() => navigate(`/action/${data.id}/true`)}><FaEye /></Button>
                                    <Button className='mb-3 ' color="danger" onClick={() => handleDelete(data.id)}><FaTrash /></Button>

                                </td>

                            </tr>


                        )
                    })}



                </tbody>
            </Table>
        </Container>
    )

}