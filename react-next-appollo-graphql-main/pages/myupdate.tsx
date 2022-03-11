
import * as React from 'react';
import UpdateTasksForm from "../components/UpdateTasksForm";
import {useRouter} from "next/router";
import {query} from "express";

export default function Myupdate() {
    const router = useRouter()
    const {
        query: { id , title },
    } = router;
    return (
        <div>{id}{title}</div>
    );
}

