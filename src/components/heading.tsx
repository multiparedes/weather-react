interface Props {
  title: String;
  description?: String;
}
export default function Heading(props: Props) {
  return (
    <>
      <h1 className="font-semibold text-lg">{props.title}</h1>
      {props.description && <p>{props.description}</p>}
    </>
  );
}
