import React from 'react';
import {Breadcrumbs} from "@mui/material";
import {Link} from "react-router-dom";


interface BreadcrumbProps {
    folder: {
        id: string,
        parentId: string,
        folderName: string,
        path: [{name: string, id: number}]
    } | null
}

const Breadcrumb = ({folder} : BreadcrumbProps) => {

    const path = folder ? folder.path : [{name: 'root', id: null}]

    return (
        <Breadcrumbs sx={{marginTop: 5, marginLeft: 5, fontSize: 25}}  aria-label="breadcrumb">
            {path.map((el, index) => (
                <Link
                    color="inherit"
                    key={index === 0 ? index : el.id}
                    to={index === 0 ? '/' : `/${el.id}/`}
                    state={{folderName: el.name, id: el.id, parentId: path[index - 1] || null, path: path.slice(0, index + 1)}}
                >
                    {el.name}
                </Link>
            ))}
        </Breadcrumbs>
    );
};

export default Breadcrumb;