import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";


const useLogin = () => {
    const [errors, setErrors] = useState(false)

    const {loginWithGoogle, handleUsersLogin } = useAuth();

    let history = useHistory();
    let location = useLocation();
    const redirect_uri = location.state?.from || '/home'

    const googleUser = () => {
        loginWithGoogle()
       .then((result) => {         
            history.push(redirect_uri)
            // const user = result.user;
            console.log(user.result);
        }).catch((error) => {
            setErrors(error.message);
        });
    }

    const normalUser = (email, password) => {
        handleUsersLogin(email, password)
        .then((result) => {         
            history.push(redirect_uri)
            // const user = result.user;
            console.log(user.result);
        }).catch((error) => {
            setErrors(error.message);
        });
    }

    return {
        errors,
        setErrors,
        googleUser,
        normalUser
    }
}
export default useLogin;