import axios from 'axios';

export default async function usePost () {
    const [errorMessage, setErrorMessage] = useState('');
    
    try {
        const res = await axios.post(
            'http://localhost:3001/migrate',
            form,
        );
        if (res.status === 201) {
            console.log('success');
            // navigate('/login', {
            //     message: 'Your account has been created now you can login now',
            // });
        }
    } catch (err) {
        setErrorMessage(err.response.data.message);
    }
}