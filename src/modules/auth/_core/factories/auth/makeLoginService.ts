import { useNavigate } from "react-router-dom";
// import {useLoginMutation} from "../../../../../store/auth/authApiSlice";
import Toast from "../../../../../factories/toast/makeToastFactory";
// import {LoginServiceImpl} from "../../services/impl/LoginServiceImpl";

const MakeLoginService = (): null => {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [login, {isLoading, isError, error}] = useLoginMutation();
  const [makeToast] = Toast();

  // return [new LoginServiceImpl(dispatch, navigate, login, makeToast), isLoading, isError, error] as const;
  return null;
};

export default MakeLoginService;
