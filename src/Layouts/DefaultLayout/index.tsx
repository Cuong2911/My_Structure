interface Props {
    children: string | JSX.Element | JSX.Element[];
}

const index = (props: Props) => {
    const { children } = props;
    return (
        <div>
            <h1>Layout</h1>
            {children}
        </div>
    );
};

export default index;
