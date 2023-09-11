interface Props {
    text: string
}
export const Subheader: React.FC<Props> = ({text}) => {
    return (
      <>
        <div className="pt-[16px] text-primary3">
          {text}
        </div>
      </>
    );
  };