import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";

const OurTeam = () => {
  return (
    <div className="w-full">
      <BreadCrumb title="Our Team">
        <Link href="/">Home</Link> - <Link href="#">Our Team</Link>
      </BreadCrumb>
    </div>
  );
};
