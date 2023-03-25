import {useNavigate} from "react-router-dom";
import {useRegisterMutation} from "../../../../store/auth/authApiSlice";
import {AuthServiceImpl} from "../services/impl/AuthServiceImpl";
import Toast from "./toast/makeToastFactory";


const MakeAuthRegisterService = () => {


    const navigate = useNavigate();
    const [register, {isLoading, isError, error}] = useRegisterMutation();
    const [makeToast] = Toast();

    return [new AuthServiceImpl(navigate, register, makeToast), isLoading, isError, error] as const;
};

export default MakeAuthRegisterService;