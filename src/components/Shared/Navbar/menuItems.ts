export interface MenuItem {
  display: string;
  href: string;
  children?: MenuItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { display: "Home", href: "/" },
  { display: "Services", href: "/services" },
  { display: "Projects", href: "/projects" },
  { display: "About", href: "/about" },
  { display: "Contact", href: "/contact" },
];

// TODO: replace with the construction company's real phone number/hours
export const CONTACT_PHONE = "+1 (202) 555-0198";
export const OPEN_HOURS = "Mon - Sat, 8am - 6pm";
