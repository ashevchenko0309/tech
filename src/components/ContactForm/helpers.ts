import { ErrorCode, FileRejection } from "react-dropzone";

export const beatifyDroppedFilesErrors = (dropErrors: FileRejection[]) => {
    return dropErrors.reduce<string[]>((acc, { errors, file }) => {
        errors.map(({ code }) => {
            switch (code) {
                case ErrorCode.FileTooLarge: {
                    acc.push(`${file.name} - is too big, max size is 5 MB`);
                    break;
                }
                case ErrorCode.TooManyFiles: {
                    acc.push(`${file.name} - didnt uploaded, max allowed files 2`);
                    break;
                }
                case ErrorCode.FileInvalidType: {
                    acc.push(`${file.name} - has incorrect file type`);
                    break;
                }
            }
        });

        return acc;
    }, []);
};
