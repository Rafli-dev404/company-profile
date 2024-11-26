export default function Welcome(
    props: {
        model: { message: string };
    }
) {
    const { message } = props.model;
    return (
        <div>
            {message}
        </div>
    );
}
