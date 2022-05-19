import React from "react";
import { useParams } from "react-router-dom";
import DetailUser from "./DetailUser";

const DetailUserParam = () => {
    const params = useParams();
    return (
        <DetailUser userId={params.userId} />
    )
}

export default DetailUserParam;
