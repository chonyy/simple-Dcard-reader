import React, { Component } from "react";
import "./ReaderModal.css";

export default class ReaderModal extends Component {
    render() {
        let readerModal = this.props.readerContent;
        //adding hidden class to modal if it's not opened
        let backgroundClass =
            "reader-background " + (!readerModal.isOpened ? "hidden" : "");
        let readerClass =
            "post-reader " + (!readerModal.isOpened ? "hidden" : "");
        //only assign title and content when the modal is opened to avoid undefined
        let title = readerModal.isOpened ? readerModal.title : "";
        let content = readerModal.isOpened ? readerModal.content : "";

        return (
            <div className="reader-container">
                <div
                    className={backgroundClass}
                    onClick={() => this.props.closeReaderModal()}
                ></div>
                <div className={readerClass}>
                    <div className="reader-title">{title}</div>
                    <div className="reader-content">
                        {content.split("\n").map((line, i) => {
                            return <p key={i}>{line}</p>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
