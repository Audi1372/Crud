import React, { useEffect, useState } from 'react'
import { Button, Container, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams } from 'react-router-dom';
export default function Action() {
    let intialformValues={
        image: "",
        name: "",
        price: "",
        discription: "",
    }
        const {id}=useParams()
    // const nav = useNavigate('')

    const [formValues, setFormValues] = useState( intialformValues)
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        if (id) {
            fetch('https://637b66a36f4024eac20c7f30.mockapi.io/users/'+id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            })
                .then((data) => console.log(data))
                .then((res) =>
                    setFormValues(intialformValues),
                    
toast.success('Product updated successfully'))
                   
            
        } else {
            fetch('https://637b66a36f4024eac20c7f30.mockapi.io/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            })
                .then((data) => console.log(data))
                .then((res) =>
                    setFormValues(intialformValues),
                    toast.success('Product added successfully'))
        
        }
    }
    useEffect(() => {
        console.log(id)
        if (id) {
            fetch('https://637b66a36f4024eac20c7f30.mockapi.io/users/'+id)
            .then((data) => data.json())
            .then((res) => setFormValues(res))
        }
    }, [id])
 
   
    return (
        <Container>
            <ToastContainer/>
            <form>
          
                <Input
                    type='text'
                    name='image'
                    value={formValues.image}
                    onChange={handleChange}
                    className='mb-4'
                    placeholder='EnterImage'
                />
                <Input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    className='mb-4'
                   
                    placeholder='Enter Name'
                />
                <Input
                    type='number'
                    name='price'
                    value={formValues.price}
                    onChange={handleChange}
                    className='mb-4'
                    placeholder='Enter Product Price'
                />
                <Input
                    type='text'
                    name='discription'
                    value={formValues.discription}
                    onChange={handleChange}
                    className='mb-4'
                    
                    placeholder='Enter Product Discription'

                />

                { formValues.image ?<img src={formValues.image} className='mb-5' height='150' alt='not loades' /> : ''}

                <div>
                <Button className='mb-5' color='primary' onClick={handleSubmit}>Submit</Button> 
                 
 
                 </div> 
                
                  
              
            </form>
          
        </Container>
    )
}
