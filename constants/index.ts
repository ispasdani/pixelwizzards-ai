export const navLinks = [
  {
    label: "Home",
    route: "/",
    icon: "/assets/icons/home.svg",
    iconWhite: "/assets/icons/homeWhite.svg",
  },
  {
    label: "Image Restore",
    route: "/transformations/add/restore",
    icon: "/assets/icons/imageRestore.svg",
    iconWhite: "/assets/icons/imageRestoreWhite.svg",
  },
  {
    label: "Generative Fill",
    route: "/transformations/add/fill",
    icon: "/assets/icons/generativeFill.svg",
    iconWhite: "/assets/icons/generativeFillWhite.svg",
  },
  {
    label: "Object Remove",
    route: "/transformations/add/remove",
    icon: "/assets/icons/objectRemove.svg",
    iconWhite: "/assets/icons/objectRemoveWhite.svg",
  },
  {
    label: "Object Recolor",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/objectColor.svg",
    iconWhite: "/assets/icons/objectColorWhite.svg",
  },
  {
    label: "Object Replace",
    route: "/transformations/add/replace",
    icon: "/assets/icons/objectReplace.svg",
    iconWhite: "/assets/icons/objectReplaceWhite.svg",
  },
  {
    label: "Background Remove",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/backgroundRemove.svg",
    iconWhite: "/assets/icons/backgroundRemoveWhite.svg",
  },
  {
    label: "Profile",
    route: "/profile",
    icon: "/assets/icons/profile.svg",
    iconWhite: "/assets/icons/profileWhite.svg",
  },
  {
    label: "Buy Credits",
    route: "/credits",
    icon: "/assets/icons/buyCredits.svg",
    iconWhite: "/assets/icons/buyCreditsWhite.svg",
  },
];

export const plans = [
  {
    _id: 1,
    name: "Pay as you go",
    icon: "/assets/icons/free-plan.svg",
    price: 1.99,
    credits: 1,
    inclusions: [
      {
        label: "1 Credit",
        isIncluded: true,
      },
      {
        label: "Access to all Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Base User",
    icon: "/assets/icons/free-plan.svg",
    price: 9.99,
    credits: 10,
    inclusions: [
      {
        label: "10 Credits",
        isIncluded: true,
      },
      {
        label: "Access to all Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Pro User",
    icon: "/assets/icons/free-plan.svg",
    price: 49.99,
    credits: 70,
    inclusions: [
      {
        label: "70 Credits",
        isIncluded: true,
      },
      {
        label: "Access to all Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "backgroundRemove.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "generativeFill.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "objectRemove.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "objectColor.svg",
  },
  replace: {
    type: "replace",
    title: "Object Replace",
    subTitle: "Identify and replace objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "objectReplace.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
