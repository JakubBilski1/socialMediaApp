import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function NavLink(props: any) {
  return (
      <Link href={props.link} className="flex gap-5 items-center">
        <FontAwesomeIcon icon={props.icon} className="w-10"/>
        <p className="">{props.text}</p>
      </Link>
  )
}

export default NavLink