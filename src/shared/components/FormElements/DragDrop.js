import React from 'react';

import './DragDrop.css';



const DragDrop = () => {

    return (
        <div className="drag-body">
            <div className="container">
                <div className="drag-drag">
                    {/* <h3>Upload</h3> */}
                    <div className="drag-icon">
                        <i class="p-icon fa fa-picture-o"></i>
                    </div>
                    <span className="drag-header">Drag & Drop</span>
                    <span className="drag-header mb-2">or <span className="drag-button text-primary">browse</span></span>
                    <span className="drag-support">Accepts JPEG, JPG and PNG</span>
                </div>
            </div>
        </div>
    );
};

export default DragDrop;