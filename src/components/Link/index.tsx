import { Link } from "./styles";

const Links = ({ title, icon, url, className }: any) => {
  return (
    <Link href={url} className={className} target={"_blank"}>
      <img title={`Icon ${title}`} src={icon} alt={title} />
      {title}
    
    </Link>
  );
};

export { Links };
