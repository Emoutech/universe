// utils
import { paramCase } from "src/utils/change-case";
import { _id, _postTitles } from "src/_mock/assets";

// ----------------------------------------------------------------------

const MOCK_ID = _id[1];

const MOCK_TITLE = _postTitles[2];

// ----------------------------------------------------------------------

export const paths = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page403: "/403",
  page404: "/404",
  page500: "/500",
  components: "/components",
  docs: "https://docs.minimals.cc",
  changelog: "https://docs.minimals.cc/changelog",
  zoneUI: "https://mui.com/store/items/zone-landing-page/",
  minimalUI: "https://mui.com/store/items/minimal-dashboard/",
  freeUI: "https://mui.com/store/items/minimal-dashboard-free/",
  figma:
    "https://www.figma.com/file/kAYnYYdib0aQPNKZpgJT6J/%5BPreview%5D-Minimal-Web.v5.0.0?type=design&node-id=0%3A1&t=Al4jScQq97Aly0Mn-1",
  product: {
    root: `/product`,
    checkout: `/product/checkout`,
    details: (id: string) => `/product/${id}`,
    demo: {
      details: `/product/${MOCK_ID}`,
    },
  },
  post: {
    root: `/post`,
    details: (title: string) => `/post/${paramCase(title)}`,
    demo: {
      details: `/post/${paramCase(MOCK_TITLE)}`,
    },
  },
  // DASHBOARD
  demo: {
    root: "/",
    mail: `/mail`,
    chat: `/chat`,
    blank: `/blank`,
    kanban: `/kanban`,
    calendar: `/calendar`,
    fileManager: `/file-manager`,
    permission: `/permission`,
    general: {
      app: `/app`,
      ecommerce: `/ecommerce`,
      analytics: `/analytics`,
      banking: `/banking`,
      booking: `/booking`,
      file: `/file`,
    },
    user: {
      root: `/user`,
      new: `/user/new`,
      list: `/user/list`,
      cards: `/user/cards`,
      profile: `/user/profile`,
      account: `/user/account`,
      edit: (id: string) => `/user/${id}/edit`,
      demo: {
        edit: `/user/${MOCK_ID}/edit`,
      },
    },
    product: {
      root: `/product`,
      new: `/product/new`,
      details: (id: string) => `/product/${id}`,
      edit: (id: string) => `/product/${id}/edit`,
      demo: {
        details: `/product/${MOCK_ID}`,
        edit: `/product/${MOCK_ID}/edit`,
      },
    },
    invoice: {
      root: `/invoice`,
      new: `/invoice/new`,
      details: (id: string) => `/invoice/${id}`,
      edit: (id: string) => `/invoice/${id}/edit`,
      demo: {
        details: `/invoice/${MOCK_ID}`,
        edit: `/invoice/${MOCK_ID}/edit`,
      },
    },
    post: {
      root: `/post`,
      new: `/post/new`,
      details: (title: string) => `/post/${paramCase(title)}`,
      edit: (title: string) => `/post/${paramCase(title)}/edit`,
      demo: {
        details: `/post/${paramCase(MOCK_TITLE)}`,
        edit: `/post/${paramCase(MOCK_TITLE)}/edit`,
      },
    },
    order: {
      root: `/order`,
      details: (id: string) => `/order/${id}`,
      demo: {
        details: `/order/${MOCK_ID}`,
      },
    },
    job: {
      root: `/job`,
      new: `/job/new`,
      details: (id: string) => `/job/${id}`,
      edit: (id: string) => `/job/${id}/edit`,
      demo: {
        details: `/job/${MOCK_ID}`,
        edit: `/job/${MOCK_ID}/edit`,
      },
    },
    tour: {
      root: `/tour`,
      new: `/tour/new`,
      details: (id: string) => `/tour/${id}`,
      edit: (id: string) => `/tour/${id}/edit`,
      demo: {
        details: `/tour/${MOCK_ID}`,
        edit: `/tour/${MOCK_ID}/edit`,
      },
    },
  },
  authDemo: {
    classic: {
      login: `/classic/login`,
      register: `/classic/register`,
      forgotPassword: `/classic/forgot-password`,
      newPassword: `/classic/new-password`,
      verify: `/classic/verify`,
    },
    modern: {
      login: `/modern/login`,
      register: `/modern/register`,
      forgotPassword: `/modern/forgot-password`,
      newPassword: `/modern/new-password`,
      verify: `/modern/verify`,
    },
  },
};
