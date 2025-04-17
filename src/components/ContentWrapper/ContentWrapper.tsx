import "./ContentWrapper.scss";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="ContentWrapper">{children}</div>;
}
