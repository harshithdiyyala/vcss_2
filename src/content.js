import CanadaFlag from "./assets/images/countries/ca.png"
import GreatBritainFlag from "./assets/images/countries/gb.png"
import EventsecurityCanada from "./assets/images/services/canada/event-security.png"
import ConstructionsecurityCanada from "./assets/images/services/canada/construction-security.jpg"
import AlarmresponseCanada from "./assets/images/services/canada/alarm-response.jpg"
import FireprotectionCanada from "./assets/images/services/canada/fire-protection.jpg"
import ResidentialsecurityCanada from "./assets/images/services/canada/residential-security.jpg"
import CommercialsecurityCanada from "./assets/images/services/canada/commercial-security.jpg"
import MobilesecurityCanada from "./assets/images/services/canada/mobile-security.jpeg"
import onsitesecurityCanada from "./assets/images/services/canada/onsite-security.jpg"
import uniformedsecurityCanada from "./assets/images/services/canada/uniformed-security.jpg"
import losspreventionCanada from "./assets/images/services/canada/loss-prevention.jpg"
import EventsecurityUK from "./assets/images/services/uk/event-security.png"
import AlarmresponseUK from "./assets/images/services/uk/alarm-response.jpg"
import ConstructionsecurityUK from "./assets/images/services/uk/construction-security.jpg"
import FireprotectionUK from "./assets/images/services/uk/fire-protection.jpg"
import CCTVSecurityUK from "./assets/images/services/uk/cctv.jpg"
import CleanerServiceUK from "./assets/images/services/uk/cleaner.jpg"
//import CommercialsecurityUK from "./assets/images/services/uk/commercial-security.jpg"
import OnsiteSecurityUK from "./assets/images/services/uk/onsite-security.jpg"
import UniformedSecurityUK from "./assets/images/services/uk/uniformed-security.jpg"
//import losspreventionUK from "./assets/images/services/uk/loss-prevention.jpg"
//import MobilesecurityUK from "./assets/images/services/uk/mobile-security.jpeg"
import StewardService from "./assets/images/services/uk/steward.jpg"
import GlobalFlag from "./assets/images/countries/global.png"
import VCSSBLog1 from "./assets/images/blogs/vcss_with_dog.jpeg"
import VCSSBLog2 from "./assets/images/blogs/vcss_personnel.jpeg"
import VCSSBLog3 from "./assets/images/blogs/vcss_security.jpeg"
import VCSSBLog4 from "./assets/images/blogs/vcss_with_dog2.jpeg"

export const countries = [
  { name: "Global", flag: GlobalFlag, code: "Global" },
  { code: "UK", name: "UK", flag: GreatBritainFlag },
  { code: "CA", name: "Canada", flag: CanadaFlag },
]

export const sections = [
  { id: "home", content: "Home" },
  { id: "services", content: "Our Services" },
  { id: "about", content: "About Us" },
  { id: "contact", content: "Contact Us" },
]

export const heroContent = {
  Canada: "The V Connect Security Services (VCSS), a leading provider of job opportunities across the Canada. Our mission is to connect job seekers with rewarding employment opportunities from Security Guard Services in a variety of sectors.",
  UK: "The V Connect, a leading provider of job opportunities across the United Kingdom. Our mission is to connect job seekers with rewarding employment opportunities in a variety of sectors, including security services, Staffing/recruiting services, events, and many others.",
  Global: "The V Connect, a leading provider of job opportunities across the globe. Our mission is to connect job seekers with rewarding employment opportunities in a variety of sectors, including security services, Staffing/recruiting services, events, and many others.",
}

export const logoContent = {
  Canada: "VCSS SECURITY",
  UK: "VCSS",
  Global: "VCSS",
}

export const servicesContent = {
  Canada: [
    {
      imgLink: EventsecurityCanada,
      title: "Event Security",
      content: "Ensuring your event stays safe and disruption-free with vigilant monitoring and quick incident response.",
    },
    {
      imgLink: ConstructionsecurityCanada,
      title: "Construction Security",
      content: "Protecting construction sites with skilled guards and proactive emergency response.",
    },
    {
      imgLink: losspreventionCanada,
      title: "Loss Prevention",
      content: "24/7 patrols to prevent theft and safeguard your property day and night.",
    },
    {
      imgLink: AlarmresponseCanada,
      title: "Alarm Response",
      content: "Quick investigation and reporting of alarm-triggered incidents to secure your site.",
    },
    {
      imgLink: ResidentialsecurityCanada,
      title: "Residential & Retail Security",
      content: "Reliable and professional service to meet all your residential and retail security needs.",
    },
    {
      imgLink: CommercialsecurityCanada,
      title: "Commercial & Industrial Security",
      content: "Expertly trained guards ensuring unmatched safety for your assets, facilities, and people.",
    },
    {
      imgLink: onsitesecurityCanada,
      title: "On-site Security",
      content: "Maintaining site security and preventing damage with dedicated on-site vigilance.",
    },
    {
      imgLink: FireprotectionCanada,
      title: "Life & Fire Protection",
      content: "Comprehensive site patrols ensuring safety and peace of mind.",
    },
    {
      imgLink: MobilesecurityCanada,
      title: "Mobile Patrols",
      content: "Regular property checks to keep your premises safe and secure.",
    },
    {
      imgLink: uniformedsecurityCanada,
      title: "Uniformed Protection",
      content: "Visible, approachable guards offering safety and assistance for your customers.",
    },
  ],
  UK: [
    {
      imgLink: OnsiteSecurityUK,
      title: "Security Services",
      content: "Join a network of security professionals dedicated to keeping people safe.",
    },
    {
      imgLink: UniformedSecurityUK,
      title: "SIA Training",
      content: "Comprehensive training programs to prepare you for a successful security career.",
    },
    {
      imgLink: CleanerServiceUK,
      title: "Cleaning Services",
      content: "Join a team of skilled cleaners ensuring safe and hygienic environments.",
    },
    {
      imgLink: FireprotectionUK,
      title: "Fire Marshal",
      content: "Become part of a dedicated team focused on fire safety and hazard prevention.",
    },
    {
      imgLink: AlarmresponseUK,
      title: "Alarm Response",
      content: "Quick and reliable alarm investigations for site security.",
    },
    {
      imgLink: ResidentialsecurityCanada,
      title: "Residential & Retail Security",
      content: "Reliable, professional service tailored to your specific security needs.",
    },
    {
      imgLink: CCTVSecurityUK,
      title: "CCTV Monitoring",
      content: "Keep a close watch on your property with expert CCTV monitoring services.",
    },
    {
      imgLink: StewardService,
      title: "Stewards",
      content: "Passionate stewards ensuring seamless operations and guest satisfaction.",
    },
    {
      imgLink: EventsecurityUK,
      title: "Event Security",
      content: "Providing safety and peace of mind for your events with expert guards.",
    },
    {
      imgLink: ConstructionsecurityUK,
      title: "Construction Security",
      content: "Protecting construction sites with professional monitoring and quick response.",
    },
  ],
  Global: [],
}

// Generating the Global array
servicesContent.Global = [...new Map([...servicesContent.Canada, ...servicesContent.UK].map((service) => [service.title, service])).values()]

export const aboutUsContent = {
  title: "V Connect Security Services - VCSS",
  content:
    "At V Connect Security Services (VCSS), we are a leading security guard services company dedicated to providing top-notch protection and peace of mind. With our team of highly trained professionals, cutting-edge technology, and customized solutions, we strive to exceed our clients' expectations by delivering comprehensive security services for construction sites, events, executives, residential and commercial properties, as well as offering risk assessment, alarm response, and facility management. Our unwavering commitment to excellence and our focus on ensuring safety and security make us the trusted choice for all your security needs.",
}

export const socialContactLinks = {
  Canada: [
    { icon: "<i class='bi bi-linkedin'></i>", name: "linkedin", link: "https://www.linkedin.com/company/v-connect-security/about/" },
    { icon: "<i class='bi bi-instagram'></i>", link: "https://instagram.com/v_connect_security?igshid=OGQ5ZDc2ODk2ZA==", name: "instagram" },
  ],
  UK: [{ icon: "<i class='bi bi-instagram'></i>", name: "whatsapp", link: "https://wa.me/+447864512999" }],
}

export const footerDescription = "The V Connect, a leading provider of job opportunities across the United Kingdom. Our mission is to connect job seekers with rewarding employment opportunities in a variety of sectors, including security services, Staffing/recruiting services, events, and many others."
export const footerContent = {
  Canada: { addressLine1: "25 Baymills Blvd", addressLine2: "Barrie, ON. L4N 7C9", mail: "info@vcsscanada.com", tel: "+1(579)995-3402" },
  UK: { addressLine1: "18 Fern dells, Hatfield", addressLine2: "AL10 9HX, United Kingdom", mail: "info@vcss.uk", tel: "+447864512999", additionalData: "Company registered in England and Wales under the Company number: 14675823" },
}

export const termsAndConditions = [
  {
    title: "Welcome to VCSS - V Connect Security Services!",
    content: [
      `These terms and conditions outline the rules and regulations for the use of VCSS - V Connect Security Services's Website, located at ${window.location.href}`,
      "By accessing this website we assume you accept these terms and conditions. Do not continue to use  VCSS - V Connect Security Services if you do not agree to take all of the terms and conditions stated on this page.",
      `The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of ca. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`,
    ],
  },
  {
    title: "Cookies",
    content: [
      "We employ the use of cookies. By accessing VCSS - V Connect Security Services, you agreed to use cookies in agreement with the VCSS - V Connect Security Services's Privacy Policy.",
      "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.",
    ],
  },
  {
    title: "License",
    content: [
      "Unless otherwise stated, VCSS - V Connect Security Services and/or its licensors own the intellectual property rights for all material on VCSS - V Connect Security Services. All intellectual property rights are reserved. You may access this from VCSS - V Connect Security Services for your own personal use subjected to restrictions set in these terms and conditions.",
    ],
  },
]

export const emails = {
  Canada: "infovcss.ca@gmail.com",
  UK: "vcss.uk@gmail.com",
}

export const contacts = {
  Canada: "+1 (705) 241-9177",
  UK: "+44 (786) 4512-999",
}

export const blogContent = [
  {
    title: "Your Shield of Safety",
    description: "At VCSS, we redefine security with tailored solutions for every need, ensuring peace of mind with precision and care.",
    imgLink: VCSSBLog1,
  },
  {
    title: "Excellence in Every Guarded Moment",
    description: "From construction sites to executive protection, we deliver unmatched expertise and technology",
    imgLink: VCSSBLog2,
  },
  {
    title: "Security Beyond Boundaries",
    description: " Whether safeguarding properties or managing risks, VCSS stands as a beacon of trust and reliability",
    imgLink: VCSSBLog3,
  },
  {
    title: "Committed to Your Safety, 24/7",
    description: "With trained professionals and cutting-edge tools, we protect what matters most to you.",
    imgLink: VCSSBLog4,
  },
]
