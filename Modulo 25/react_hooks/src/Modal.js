import React, { useLayoutEffect } from 'react';
import './Modal.css';

export default (props) => {

    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleCloseModal = () => {
        props.closeAction(false);
    };

    return (
        <div className="modal-window">
            <div className="modal-close" onClick={handleCloseModal}>[ fechar ]</div>
            <div className="modal-box">
                ...
            </div>
        </div>
    );

};