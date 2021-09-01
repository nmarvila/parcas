import { useState, useEffect } from "react";

export default (initialState) => {
    const [value, setValue] = useState(initialState);

    useEffect(() => {
        document.title = value;
    });

    return [value, setValue];
};