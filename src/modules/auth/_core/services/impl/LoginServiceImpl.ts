// import {LoginServiceModel} from "../models/LoginServiceModel";
// import {ILoginRequest} from "../../../models/login/ILoginRequest";
// import {Dispatch} from "@reduxjs/toolkit";
// import {NavigateFunction} from "react-router/dist/lib/hooks";
// import {MutationTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";
// import {FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition} from "@reduxjs/toolkit/query";
// import {BaseQueryApi, FetchArgs} from "@reduxjs/toolkit/dist/query/react";
// import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
// import {ToastStatus} from "../../factories/toast/makeToastFactory";
// import {ToastPositionWithLogical} from "@chakra-ui/react";
// import {SessionStorageUtils} from "../../../utils/cache/SessionStorageUtils";
// import {ILoginResponse} from "../../../models/login/ILoginResponse";
// import {setCredentials} from "../../../../../store/auth/authSlice";

// export class LoginServiceImpl implements LoginServiceModel {

//     readonly dispatch: Dispatch;
//     private navigate: NavigateFunction;
//     private readonly loginMutation: MutationTrigger<MutationDefinition<any, (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => Promise<QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta>>, never, any, "api">>
//     private readonly makeToast: (title: string,
//                                  description: string,
//                                  status: ToastStatus,
//                                  duration: number,
//                                  position: ToastPositionWithLogical,
//                                  isClosable: boolean) => void

//     constructor(dispatch: Dispatch,
//                 navigate: NavigateFunction,
//                 loginMutation: MutationTrigger<MutationDefinition<any, (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => Promise<QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta>>, never, any, "api">>,
//                 makeToast: (title: string,
//                             description: string,
//                             status: ToastStatus,
//                             duration: number,
//                             position: ToastPositionWithLogical,
//                             isClosable: boolean,
//                 ) => void
//     ) {
//         this.dispatch = dispatch;
//         this.navigate = navigate;
//         this.loginMutation = loginMutation;
//         this.makeToast = makeToast;
//     }

//     login(userData: ILoginRequest): Promise<void> {
//         const {usernameOrEmail, password, remember} = userData;

//         const valuesToSubmit = {
//             usernameOrEmail,
//             password
//         }

//         return this.loginMutation(valuesToSubmit)
//             .unwrap()
//             .then((res: ILoginResponse) => {
//                 this.dispatch(setCredentials(res))

//                 this.makeToast("Usuário autenticado com sucesso!", "Você será redirecionado para o dashboard", ToastStatus.success, 3000, "top-end", true)

//                 this.navigate("/tarefas")

//                 if (remember) {
//                     SessionStorageUtils.saveUserAndToken(res)
//                 } else {
//                     SessionStorageUtils.saveToken("accessToken", res.accessToken);
//                 }
//             })
//             .catch(
//                 (err) => this.makeToast("Ocorreu um erro", err?.data?.message, ToastStatus.error, 3000, "top-end", true
//                 )
//             )
//     }
// }
