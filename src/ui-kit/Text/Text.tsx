import { FC } from "react";

interface IProps {
    text: string;
}

export const Text: FC<IProps> = ({ text }) => {
    return (
        <h1>{text}</h1>
    )
}