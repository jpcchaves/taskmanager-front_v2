import {ToastPosition, useToast} from "@chakra-ui/react";

export enum ToastStatus {
    info = "info",
    warning = "warning",
    success = "success",
    error = "error"
}

const Toast = () => {

    const toast = useToast()
    const makeToast = (title: string,
                       description: string,
                       status: ToastStatus,
                       duration: number,
                       position: ToastPosition,
                       isClosable: boolean,
    ) => {
        toast({
            title,
            description,
            status,
            duration,
            position,
            isClosable
        })
    }

    return [makeToast] as const;
};

export default Toast;