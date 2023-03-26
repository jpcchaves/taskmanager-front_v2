import {useNavigate} from "react-router-dom";
import {useLoginMutation} from "../../../../../store/auth/authApiSlice";
import Toast from "../toast/makeToastFactory";
import {LoginServiceImpl} from "../../services/impl/LoginServiceImpl";
import {useDispatch} from "react-redux";

const MakeLoginService = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, {isLoading, isError, error}] = useLoginMutation();
    const [makeToast] = Toast();

    return [new LoginServiceImpl(dispatch, navigate, login, makeToast), isLoading, isError, error] as const;
};

export default MakeLoginService;