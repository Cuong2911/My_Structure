import './main.scss';

interface Props {
    children: string | JSX.Element | JSX.Element[];
}

const index = (props: Props) => {
    const { children } = props;
    return <div>{children}</div>;
};

export default index;
