import * as Yup from 'yup';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { useState } from 'react';
import axios from '../api/axios';
import Message from './Message';

interface Message {
        name: string,
        phone: string,
        email: string,
        message: string
}

function Contact() {

        const [alert, setAlert] = useState<string>("");
        const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

        const initialValues: Message = {
                name: "",
                phone: "",
                email: "",
                message: ""
        }

        const validationSchema = Yup.object().shape({
                name: Yup.string().required(),
                phone: Yup.string().required(),
                email: Yup.string().required(),
                message: Yup.string().required()
        })

        const formik = useFormik({
                initialValues,
                validationSchema,
                onSubmit: async (values, { resetForm }) => {
                        try{
                                await axios.post('/portfolio', values);

                                setAlert("Message Sent Successfully");
                                setIsDisplayed(true);

                                resetForm({
                                        values: {
                                                name: "",
                                                phone: "",
                                                email: "",
                                                message: ""
                                        }
                                });
                        } catch (err) {
                                setAlert("Couldn't Send Message");
                                setIsDisplayed(true);
                        }
                },
        });

        const removeMessage = () => {
                setIsDisplayed(false);
        }

        return (
                <div className=" h-screen w-[90vw] flex justify-center items-center max-[600px]:w-screen max-[600px]:h-[90dvh] max-[600px]:items-start max-[600px]:py-10 scrollable">
                        <div className="text-xs flex flex-col w-[80%]">
                                <div className="flex flex-col gap-8">

                                        <div className="flex flex-col gap-4">

                                                <div className="text-3xl mb-2">Contact Me</div>

                                                <div className="flex justify-around">
                                                        <div className="flex text-xl gap-2 select-all">
                                                                <img src="phone.svg" width={'45px'} />+91 9312711492
                                                        </div>
                                                        <div className="flex text-xl gap-2 select-all">
                                                                <img src="mail.svg" width={'45px'} />malay4singh@gmail.com
                                                        </div>
                                                </div>

                                        </div>
                                        
                                        <div className="flex flex-col gap-4">
                                                <div className="text-3xl pb-2">Or Leave a Message....</div>

                                                <form onSubmit={formik.handleSubmit} className='flex flex-col w-[80%] mx-auto gap-2'>
                                                        <TextField
                                                                label="Name*"
                                                                variant="outlined"
                                                                name="name"
                                                                size='small'
                                                                value={formik.values.name}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.name && Boolean(formik.errors.name)}
                                                        />

                                                        <TextField
                                                                label="Phone Number*"
                                                                variant="outlined"
                                                                name="phone"
                                                                size='small'
                                                                value={formik.values.phone}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                        />

                                                        <TextField
                                                                label="Email Address*"
                                                                variant="outlined"
                                                                name="email"
                                                                size='small'
                                                                value={formik.values.email}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                        />

                                                        <TextField
                                                                label="Message*"
                                                                variant="outlined"
                                                                name="message"
                                                                size='small'
                                                                multiline
                                                                minRows={4}
                                                                value={formik.values.message}
                                                                onChange={formik.handleChange}
                                                                error={formik.touched.message && Boolean(formik.errors.message)}
                                                        />

                                                        <button className='bg-[#156064] w-[fit-content] py-1 px-2 rounded text-[#fffff0] flex item-center gap-2' type='submit'><img src="send.svg" width={'20px'} />SEND</button>
                                                </form>
                                        </div>

                                </div>
                        </div>

                        {isDisplayed &&
                                <Message message={alert} onClose={removeMessage} />
                        }
                </div>
        )
}

export default Contact