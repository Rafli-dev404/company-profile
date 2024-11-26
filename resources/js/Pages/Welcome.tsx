export default function Welcome(props: {
  model: { data: { message: string } };
}) {
  const { data } = props.model;
  console.log("message", data.message);
  return <div className={"text-red-500"}>{data.message}</div>;
}
