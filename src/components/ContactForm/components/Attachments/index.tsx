import React, { FC, useState } from "react";
import CloseIcon from "@/shared/uiKit/icons/CloseIcon";
import { FileRejection, useDropzone } from "react-dropzone";
import { beatifyDroppedFilesErrors } from "@/components/ContactForm/helpers";
import { MAX_FILE_SIZE, MAX_FILES_COUNT } from "@/components/ContactForm/constants";
import AttachmentIcon from "@/shared/uiKit/icons/AttachmentIcon";

interface AttachmentsProps {
    onDrop: (files: File[]) => void;
}

const Attachments: FC<AttachmentsProps> = ({ onDrop }) => {
    const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
    const [dropError, setDropError] = useState<string[]>([]);

    const onDropRejected = (dropErrors: FileRejection[]) => {
        setDropError(beatifyDroppedFilesErrors(dropErrors));
    };

    const onDropAccepted = (dropped: File[]) => {
        const acceptedFiles = [...droppedFiles, ...dropped].slice(0, 2);
        onDrop(acceptedFiles);
        setDroppedFiles(acceptedFiles);
    };

    const onDeleteFile = (index: number) => () => {
        setDroppedFiles(prev => {
            const start = prev.slice(0, index);
            const end = prev.slice(index + 1);
            return [...start, ...end];
        });
    };

    const { getRootProps, getInputProps } = useDropzone({
        maxFiles: MAX_FILES_COUNT,
        maxSize: MAX_FILE_SIZE,
        disabled: droppedFiles.length >= MAX_FILES_COUNT,
        onFileDialogOpen: () => {
            setDropError([]);
        },
        onDropAccepted,
        onDropRejected,
        accept: {
            "image/bmp": [],
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
            "video/*": [".mp4", ".mpeg"],
            "application/msword": [".doc"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
            "application/zip": [".zip"],
            "application/pdf": [".pdf"],
        },
    });
    const isDropErrorExist = Boolean(dropError.length);
    const isDropFilesExist = Boolean(droppedFiles.length);
    const isMaxFilesCountRiches = droppedFiles.length === MAX_FILES_COUNT;

    return (
        <div>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} name="attachments" />
                <div
                    className={`${
                        isMaxFilesCountRiches ? "text-gray-100" : "text-slate"
                    } mb-2 flex cursor-pointer gap-3`}
                >
                    <AttachmentIcon className={`${isMaxFilesCountRiches ? "fill-gray-100" : "fill-slate"} h-6 w-6`} />
                    {isMaxFilesCountRiches ? "Attachment have been added" : "Add attachment"}
                </div>
            </div>
            {isDropFilesExist && (
                <div>
                    {droppedFiles.map((file, index) => (
                        <div key={index} className="mb-2 flex items-center justify-between">
                            <span className="text-gray-100">{file.name}</span>
                            <span>
                                <CloseIcon
                                    className="h-6 w-6 cursor-pointer fill-slate"
                                    onClick={onDeleteFile(index)}
                                />
                            </span>
                        </div>
                    ))}
                </div>
            )}
            {isDropErrorExist && (
                <div>
                    {dropError.map(error => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Attachments;
