import React from 'react'
import ReactDOM from 'react-dom'
export default function NotFoundPage() {
    return (
        <div className="container">
            <div className="alert alert-warning">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <strong>Không tìm thấy trang</strong>
            </div>

        </div>
    );
}

