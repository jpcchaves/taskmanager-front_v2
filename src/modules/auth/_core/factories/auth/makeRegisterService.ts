import {useNavigate} from "react-router-dom";
import {useRegisterMutation} from "../../../../../store/auth/authApiSlice";
import {RegisterServiceImpl} from "../../services/impl/RegisterServiceImpl";
import Toast from "../toast/makeToastFactory";


const MakeRegisterService = () => {


    const navigate = useNavigate();
    const [register, {isLoading, isError, error}] = useRegisterMutation();
    const [makeToast] = Toast();

    return [new RegisterServiceImpl(navigate, register, makeToast), isLoading, isError, error] as const;
};

export default MakeRegisterService;