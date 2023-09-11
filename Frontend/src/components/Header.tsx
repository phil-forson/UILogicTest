interface Props {
  text: string;
}
export const Header: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div>{text}</div>
    </>
  );
};
