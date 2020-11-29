import React, {useEffect} from "react";
import { useRouter } from "next/router";

const useProtected = ({isAuthorized}) => {
    const router = useRouter();
    useEffect(() => {
        console.log(isAuthorized)
        if(!isAuthorized) {
            router.replace('/');
        }
    }, [isAuthorized])
};

export default useProtected;
