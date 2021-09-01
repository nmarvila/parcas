import React, { useLayoutEffect, useRef } from 'react';
import './Modal.css';

export default (props) => {

    const box = useRef();

    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleWindowClick = (e) => {
        if (!box.current.contains(e.target)) {
            props.closeAction();
        }
    };

    return (
        <div className="modal-window" onClick={handleWindowClick}>
            <div className="modal-close">[ fechar ]</div>
            <div className="modal-box" ref={box}>
                {props.children}
            </div>
        </div>
    );

};