import { useSearchParams } from "react-router-dom";
import ServiceChauffaeur from "./ServiceChauffaeur";
import ServiceSelfdrive from "./ServiceSelfdrive";
import ServiceCorperatefleet from "./ServiceCorperatefleet";
import ServiceShuttle from "./ServiceShuttle";
import ServiceDriverpersonnel from "./ServiceDriverpersonnel";
import ServiceEventticketing from "./ServiceEventticketing";
import ServiceSecurityescort from "./ServiceSecurityescort";
import ServiceTourpackages from "./ServiceTourpackages";
import ServiceMeet from "./ServiceMeet";
import ServiceThirdParty from "./ServiceThirdParty";

const ServiceDetail = () => {
  let [searchParams] = useSearchParams();
  let page = searchParams.get("name");
  switch (page) {
    case "service_chauffaeur":
      return <ServiceChauffaeur />;
    case "service_selfdrive":
      return <ServiceSelfdrive />;
    case "service_corperatefleet":
      return <ServiceCorperatefleet />;
    case "service_shuttle":
      return <ServiceShuttle />;
    case "service_driverpersonnel":
      return <ServiceDriverpersonnel />;
    case "service_eventticketing":
      return <ServiceEventticketing />;
    case "service_securityescort":
      return <ServiceSecurityescort />;
    case "service_tourpackages":
      return <ServiceTourpackages />;
    case "service_meet":
      return <ServiceMeet />;
    case "service_thirdparty":
      return <ServiceThirdParty />;
    default:
      break;
  }
};

export default ServiceDetail;
