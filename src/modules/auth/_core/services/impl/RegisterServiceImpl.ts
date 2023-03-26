import {NavigateFunction} from "react-router/dist/lib/hooks";
import {Dispatch} from "@reduxjs/toolkit";
import {RegisterServiceModel} from "../models/RegisterServiceModel";
import {IUserRegisterRequest} from "../../../models/register/IUserRegisterRequest";
import {FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition} from "@reduxjs/toolkit/query";
import {BaseQueryApi, FetchArgs} from "@reduxjs/toolkit/query/react";
import {QueryReturnValue} from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {MutationTrigger} from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {ToastStatus} from "../../factories/toast/makeToastFactory";
import {ToastPositionWithLogical} from "@chakra-ui/react";

export class RegisterServiceImpl implements RegisterServiceModel {
    readonly dispatch: Dispatch;
    private navigate: NavigateFunction;
    private readonly registerMutation: MutationTrigger<MutationDefinition<any, (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>, never, any, "api">>
    private readonly makeToast: (title: string,
                                 description: string,
                                 status: ToastStatus,
                                 duration: number,
                                 position: ToastPositionWithLogical,
                                 isClosable: boolean) => void

    constructor(navigate: NavigateFunction,
                registerMutation: MutationTrigger<MutationDefinition<any, (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>, never, any, "api">>,
                makeToast: (title: string,
                            description: string,
                            status: ToastStatus,
                            duration: number,
                            position: ToastPositionWithLogical,
                            isClosable: boolean,
                ) => void
    ) {
        this.navigate = navigate;
        this.registerMutation = registerMutation;
        this.makeToast = makeToast;
    }

    register(user: IUserRegisterRequest): Promise<void> {
        return this.registerMutation(user)
            .unwrap()
            .then(
                () => {
                    this.makeToast("Conta criada com sucesso!", "Você será redirecionado para a tela de login!", ToastStatus.success, 3000, "top-end", true)

                    setTimeout(() => {
                        this.navigate("/login")
                    }, 3000)
                }
            )
            .catch(
                (err) => this.makeToast("Ocorreu um erro", err?.data?.message, ToastStatus.error, 3000, "top-end", true)
            );
    }
}