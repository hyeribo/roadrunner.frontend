// intro
import Login from "@pages/Intro/Login";
import Join from "@pages/Intro/Join";

// main
import Home from "@pages/Home";
import MyRequests from "@pages/My/MyRequests";
import Chattings from "@pages/Chatting/Chattings";
import MyPage from "@pages/My/MyPage";

// sub
import Write from "@pages/Intro/Write";
import RequestWrite from "@pages/Request/RequestWrite";
import RequestModify from "@pages/Request/RequestModify";
import RequestDetail from "@pages/Request/RequestDetail";
import MyRequestDetail from "@pages/Request/MyRequestDetail";
import ProposalWrite from "@pages/Proposal/ProposalWrite";
import ProposalModify from "@pages/Proposal/ProposalModify";
import ProposalDetail from "@pages/Proposal/ProposalDetail";
import MyProposalDetail from "@pages/Proposal/MyProposalDetail";
import MyInfo from "@pages/My/MyInfo";
import MyPassword from "@pages/My/MyPassword";
import MyReviews from "@pages/My/MyReviews";
import MySettings from "@pages/My/MySettings";
import Notice from "@pages/Public/Notice";
import Faq from "@pages/Public/Faq";
import Terms from "@pages/Public/Terms";
import CustomerService from "@pages/Public/CustomerService";
import Team from "@pages/Public/Team";
import ChattingsModify from "@pages/Chatting/ChattingsModify";
import ChattingRoom from "@pages/Chatting/ChattingRoom";

const routes = [
  {
    path: "/login",
    component: Login,
    auth: false,
  },
  {
    path: "/join",
    component: Join,
    auth: false,
  },
  {
    path: "/home",
    component: Home,
    auth: true,
  },
  {
    path: "/my/requests",
    component: MyRequests,
    auth: true,
  },
  {
    path: "/my/request/detail/:request_id",
    component: MyRequestDetail,
    auth: true,
  },
  {
    path: "/my/proposal/detail/:proposal_id",
    component: MyProposalDetail,
    auth: true,
  },
  {
    path: "/chattings",
    component: Chattings,
    auth: true,
  },
  {
    path: "/my",
    component: MyPage,
    auth: true,
  },
  {
    path: "/write",
    component: Write,
    auth: true,
  },
  {
    path: "/request/write",
    component: RequestWrite,
    auth: true,
  },
  {
    path: "/request/modify/:request_id",
    component: RequestModify,
    auth: true,
  },
  {
    path: "/request/detail/:request_id",
    component: RequestDetail,
    auth: true,
  },
  {
    path: "/proposal/write",
    component: ProposalWrite,
    auth: true,
  },
  {
    path: "/proposal/modify/:proposal_id",
    component: ProposalModify,
    auth: true,
  },
  {
    path: "/proposal/detail/:proposal_id",
    component: ProposalDetail,
    auth: true,
  },
  {
    path: "/my/info",
    component: MyInfo,
    auth: true,
  },
  {
    path: "/my/password",
    component: MyPassword,
    auth: true,
  },
  {
    path: "/my/reviews",
    component: MyReviews,
    auth: true,
  },
  {
    path: "/my/settings",
    component: MySettings,
    auth: true,
  },
  {
    path: "/notice",
    component: Notice,
    auth: true,
  },
  {
    path: "/faq",
    component: Faq,
    auth: true,
  },
  {
    path: "/terms",
    component: Terms,
    auth: true,
  },
  {
    path: "/cs",
    component: CustomerService,
    auth: true,
  },
  {
    path: "/team",
    component: Team,
    auth: true,
  },
  {
    path: "/chattings/modify",
    component: ChattingsModify,
    auth: true,
  },
  {
    path: "/chattings/room/:room_key",
    component: ChattingRoom,
    auth: true,
  },
];

export default routes;
