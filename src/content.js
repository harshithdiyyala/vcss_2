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
import ServiceContent1 from "./assets/images/services/content/sia_content1.png"
import ServiceContent2 from "./assets/images/services/content/sia_content2.jpg"
import ServiceContent3 from "./assets/images/services/content/sia_content3.webp"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"

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
  Canada: "VCSS",
  UK: "VCSS",
  Global: "VCSS",
}

export const servicesContent = {
  Canada: [
    {
      link: "event-security",
      imgLink: EventsecurityCanada,
      title: "Event Security",
      content: "Ensuring your event stays safe and disruption-free with vigilant monitoring and quick incident response.",
      longContent: "Our Event Security service offers meticulous planning and execution to guarantee the safety and smooth functioning of your events. From crowd management to emergency response, our trained professionals ensure a secure environment for attendees, leaving you free to focus on delivering a memorable experience.",
    },
    {
      link: "construction-security",
      imgLink: ConstructionsecurityCanada,
      title: "Construction Security",
      content: "Protecting construction sites with skilled guards and proactive emergency response.",
      longContent: "With our Construction Security service, we provide round-the-clock surveillance and on-site security measures to safeguard your assets and equipment. Our trained guards proactively address potential risks and ensure compliance with safety regulations to keep your projects running smoothly.",
    },
    {
      link: "loss-prevention",
      imgLink: losspreventionCanada,
      title: "Loss Prevention",
      content: "24/7 patrols to prevent theft and safeguard your property day and night.",
      longContent: "Our Loss Prevention services focus on minimizing risks by employing advanced monitoring techniques and strategic patrolling. We help deter theft, reduce inventory shrinkage, and provide real-time reporting to ensure the safety of your valuable assets.",
    },
    {
      link: "alarm-response",
      imgLink: AlarmresponseCanada,
      title: "Alarm Response",
      content: "Quick investigation and reporting of alarm-triggered incidents to secure your site.",
      longContent: "Our Alarm Response service is designed to address any triggered alarms swiftly and efficiently. Our team investigates potential breaches, provides detailed incident reports, and takes necessary actions to ensure your property remains secure at all times.",
    },
    {
      link: "residential-security",
      imgLink: ResidentialsecurityCanada,
      title: "Residential & Retail Security",
      content: "Reliable and professional service to meet all your residential and retail security needs.",
      longContent: "We offer specialized Residential and Retail Security services to create a safe and welcoming environment for your homes and businesses. From surveillance to on-site security personnel, we tailor our approach to meet your unique needs and provide peace of mind.",
    },
    {
      link: "commercial-security",
      imgLink: CommercialsecurityCanada,
      title: "Commercial & Industrial Security",
      content: "Expertly trained guards ensuring unmatched safety for your assets, facilities, and people.",
      longContent: "Our Commercial & Industrial Security services are designed to protect your facilities, personnel, and valuable assets. With highly trained guards and modern security protocols, we provide comprehensive solutions to minimize risks and enhance operational security.",
    },
    {
      link: "onsite-security",
      imgLink: onsitesecurityCanada,
      title: "On-site Security",
      content: "Maintaining site security and preventing damage with dedicated on-site vigilance.",
      longContent: "Our On-site Security service ensures that your premises are continuously monitored and protected. By deploying vigilant security professionals, we proactively address vulnerabilities and safeguard your property against potential threats.",
    },
    {
      link: "fire-protection",
      imgLink: FireprotectionCanada,
      title: "Life & Fire Protection",
      content: "Comprehensive site patrols ensuring safety and peace of mind.",
      longContent: "Our Life & Fire Protection service prioritizes the safety of your property and personnel. We conduct regular site patrols, implement fire prevention strategies, and ensure compliance with safety standards to mitigate risks and maintain a secure environment.",
    },
    {
      link: "mobile-patrols",
      imgLink: MobilesecurityCanada,
      title: "Mobile Patrols",
      content: "Regular property checks to keep your premises safe and secure.",
      longContent: "With Mobile Patrols, we provide dynamic security solutions to monitor and protect your property. Our team conducts scheduled and unscheduled visits, ensuring consistent coverage and rapid response to any incidents.",
    },
    {
      link: "uniformed-protection",
      imgLink: uniformedsecurityCanada,
      title: "Uniformed Protection",
      content: "Visible, approachable guards offering safety and assistance for your customers.",
      longContent: "Our Uniformed Protection service offers a reassuring presence to maintain order and safety. Trained to be both professional and approachable, our guards enhance the security of your establishment while providing assistance to customers and visitors.",
    },
  ],
  UK: [
    {
      link: "security-services",
      imgLink: OnsiteSecurityUK,
      title: "Security Services",
      content: "Join a network of security professionals dedicated to keeping people safe.",
      longContent: "Our Security Services connect you with highly trained professionals committed to ensuring the safety of individuals and properties. From event security to on-site protection, we deliver comprehensive solutions to meet diverse security needs.",
    },
    {
      link: "sia-training",
      imgLink: UniformedSecurityUK,
      title: "SIA Training",
      content: "Comprehensive training programs to prepare you for a successful security career.",
      longContent: "Our SIA Training program equips aspiring security professionals with the skills and certifications needed for a thriving career. With expert-led courses and hands-on training, we ensure you are fully prepared for industry challenges.",
    },
    {
      link: "cleaning-services",
      imgLink: CleanerServiceUK,
      title: "Cleaning Services",
      content: "Join a team of skilled cleaners ensuring safe and hygienic environments.",
      longContent: "Our Cleaning Services provide meticulous and reliable solutions for maintaining clean, safe, and healthy environments. From routine cleaning to specialized services, we tailor our approach to meet your specific requirements.",
    },
    {
      link: "fire-marshal",
      imgLink: FireprotectionUK,
      title: "Fire Marshal",
      content: "Become part of a dedicated team focused on fire safety and hazard prevention.",
      longContent: "Our Fire Marshal services ensure comprehensive fire safety measures, including hazard identification, fire prevention strategies, and emergency response planning. We prioritize the safety and well-being of your property and personnel.",
    },
    {
      link: "alarm-response",
      imgLink: AlarmresponseUK,
      title: "Alarm Response",
      content: "Quick and reliable alarm investigations for site security.",
      longContent: "Our Alarm Response service in the UK offers rapid investigation and mitigation of alarm-triggered incidents. We ensure prompt action to secure your property and prevent any potential escalation.",
    },
    {
      link: "residential-security",
      imgLink: ResidentialsecurityCanada,
      title: "Residential & Retail Security",
      content: "Reliable, professional service tailored to your specific security needs.",
      longContent: "We provide bespoke Residential and Retail Security services that cater to the unique requirements of each client. Our solutions combine advanced security measures with a customer-centric approach to deliver exceptional results.",
    },
    {
      link: "cctv-monitoring",
      imgLink: CCTVSecurityUK,
      title: "CCTV Monitoring",
      content: "Keep a close watch on your property with expert CCTV monitoring services.",
      longContent: "Our CCTV Monitoring service offers real-time surveillance to ensure the safety of your property. With advanced monitoring systems and experienced operators, we provide comprehensive coverage and timely reporting.",
    },
    {
      link: "stewards",
      imgLink: StewardService,
      title: "Stewards",
      content: "Passionate stewards ensuring seamless operations and guest satisfaction.",
      longContent: "Our Stewards play a vital role in ensuring the success of your events. With a focus on organization and guest assistance, they create a positive experience while maintaining a safe and secure environment.",
    },
    {
      link: "event-security",
      imgLink: EventsecurityUK,
      title: "Event Security",
      content: "Providing safety and peace of mind for your events with expert guards.",
      longContent: "Our Event Security services in the UK are designed to protect your events with precision and expertise. From managing entry points to addressing potential threats, we ensure a secure and enjoyable experience for all attendees.",
    },
    {
      link: "construction-security",
      imgLink: ConstructionsecurityUK,
      title: "Construction Security",
      content: "Protecting construction sites with professional monitoring and quick response.",
      longContent: "Our Construction Security solutions offer comprehensive protection for your sites. We deploy skilled guards and advanced monitoring systems to prevent unauthorized access and ensure smooth project execution.",
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
    { icon: <FaLinkedin />, name: "Linkedin", link: "https://www.linkedin.com/company/v-connect-security/about/" },
    { icon: <FaInstagram />, link: "https://instagram.com/v_connect_security?igshid=OGQ5ZDc2ODk2ZA==", name: "Instagram" },
  ],
  UK: [{ icon: <FaWhatsapp />, name: "WhatsApp", link: "https://wa.me/+447864512999" }],
}

export const socialContactLinksGlobal = [...socialContactLinks.Canada, ...socialContactLinks.UK]

export const footerDescription = "The V Connect, a leading provider of job opportunities across the United Kingdom. Our mission is to connect job seekers with rewarding employment opportunities in a variety of sectors, including security services, Staffing/recruiting services, events, and many others."
export const footerContent = {
  Canada: { addressLine1: "25 Baymills Blvd", addressLine2: "Barrie, ON. L4N 7C9", mail: "info@vcsscanada.com", tel: "+1(579)995-3402" },
  UK: { addressLine1: "2nd Floor, Titan Court, Bishop Square", addressLine2: "Hatfield AL10 9NA, United Kingdom", mail: "info@vcss.uk", tel: "+447864512999", additionalData: "Company registered in England and Wales under the Company number: 14675823" },
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

export const servicesDescriptionsCanada = [
  {
    link: "event-security",
    category: "Event Security",
    content: [
      "Planning an event demands attention to every detail, and ensuring the safety and security of all involved is paramount. Our Event Security services are designed to create a safe and enjoyable environment, whether it's a corporate conference, a large music festival, or a private gathering. We specialize in risk assessment, access control, and managing crowd dynamics, ensuring every event proceeds without disruptions.",
      "Our trained professionals proactively monitor venues, handle potential disturbances, and respond swiftly to incidents. Utilizing advanced technologies and proven strategies, we address unforeseen challenges while maintaining a calm and controlled atmosphere.",
      "Every event is unique, and so are our solutions. We work closely with organizers to tailor our security measures to the specific scale and nature of the event. With our expertise, you can focus on delivering an exceptional experience while we ensure the safety of everyone involved.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "construction-security",
    category: "Construction Security",
    content: [
      "Construction sites are critical assets that require robust security to prevent theft, vandalism, and other risks. Our Construction Security services provide round-the-clock monitoring to safeguard equipment, materials, and personnel, ensuring uninterrupted progress on your projects.",
      "We deploy experienced guards, cutting-edge surveillance systems, and mobile patrols to deter unauthorized access and minimize potential hazards. By focusing on proactive prevention, we help you avoid costly delays and maintain operational efficiency.",
      "Whether you manage a small construction site or a large industrial project, we customize our security solutions to meet your specific needs. With us as your partner, your property and workforce remain protected at all times.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "loss-prevention",
    category: "Loss Prevention",
    content: [
      "Maintaining profitability and operational efficiency hinges on effective loss prevention strategies. Our Loss Prevention services are designed to identify vulnerabilities, deter theft, and minimize shrinkage, helping your business operate securely and efficiently.",
      "We collaborate with your team to implement tailored measures, combining real-time monitoring, data-driven insights, and preventative techniques to mitigate risks. From employee training to advanced surveillance, we address both internal and external threats effectively.",
      "By integrating our services into your operations, you not only protect assets and inventory but also create a safer environment for employees and customers. Trust us to safeguard what matters most to your business.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "alarm-response",
    category: "Alarm Response",
    content: [
      "An efficient alarm response system is essential for securing your property against potential threats. Our Alarm Response services ensure that every alarm is addressed swiftly and professionally, offering you peace of mind around the clock.",
      "Our highly trained responders analyze alarm signals, assess risks, and take prompt action, whether dealing with break-ins, fire hazards, or other emergencies. Detailed incident reports provide transparency and insights into every response.",
      "With 24/7 availability and a commitment to excellence, we prioritize the safety of your premises. Rely on our Alarm Response services to protect your property, day or night.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "residential-security",
    category: "Residential & Retail Security",
    content: [
      "Residential and retail spaces require specialized security solutions to ensure safety while maintaining a welcoming environment. Our Residential & Retail Security services offer comprehensive protection for your home, business, and customers, tailored to your unique needs.",
      "From uniformed guards to advanced monitoring systems, we provide proactive measures that safeguard your property against potential threats. Our focus on community integration ensures that security remains seamless and non-disruptive.",
      "Whether protecting a residential community or a bustling retail establishment, our strategies prioritize safety, trust, and peace of mind. Choose us to protect your property and foster a secure environment.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "commercial-security",
    category: "Commercial & Industrial Security",
    content: [
      "Commercial and industrial facilities present unique challenges that demand advanced security solutions. Our Commercial & Industrial Security services are designed to protect your assets, employees, and infrastructure while ensuring seamless operations.",
      "From access control to surveillance and emergency response, we implement comprehensive strategies that address risks specific to your industry. Our skilled personnel and innovative tools ensure every aspect of your facility remains secure.",
      "Partner with us for a security solution tailored to your operations, allowing you to focus on growth and productivity. With our expertise, your business remains safeguarded and resilient.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "onsite-security",
    category: "On-Site Security",
    content: [
      "When constant vigilance is required, our On-Site Security services provide a dedicated presence to ensure your property and personnel remain safe. Our security professionals are stationed on-site to monitor activities, control access, and respond to incidents swiftly.",
      "Through regular patrols, incident management, and proactive risk assessment, our team ensures a secure environment for your operations. We customize our approach to meet the specific needs of your property, offering round-the-clock protection.",
      "With our reliable on-site security solutions, you can operate with confidence, knowing your premises are under watchful protection.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "fire-protection",
    category: "Life & Fire Protection",
    content: [
      "Ensuring safety from fire hazards is a fundamental responsibility for any property owner. Our Life & Fire Protection services focus on implementing preventive measures, conducting thorough inspections, and preparing for emergencies to safeguard lives and assets.",
      "We provide training, evacuation planning, and compliance support to ensure your property adheres to fire safety regulations. Our proactive strategies minimize risks and enhance readiness in critical situations.",
      "Partner with us to establish a comprehensive fire protection plan that prioritizes safety, protects your property, and provides peace of mind.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "mobile-patrols",
    category: "Mobile Patrols",
    content: [
      "For properties requiring regular monitoring without a constant on-site presence, our Mobile Patrol services provide a cost-effective and reliable solution. Scheduled and random patrols ensure your premises remain secure around the clock.",
      "Our patrol officers are trained to identify suspicious activities, address safety concerns, and respond swiftly to incidents. Using advanced communication tools, we provide real-time updates and ensure effective coordination.",
      "Whether for residential, commercial, or industrial properties, our Mobile Patrol services offer flexible and efficient security coverage to meet your needs. Trust us to safeguard your property day and night.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "uniformed-protection",
    category: "Uniformed Protection",
    content: [
      "A visible security presence can act as a strong deterrent against threats while fostering a sense of safety and trust. Our Uniformed Protection services provide highly trained guards who are both approachable and professional.",
      "From greeting visitors to managing conflicts and responding to emergencies, our uniformed personnel ensure a secure and welcoming environment for your employees and customers. Their expertise in conflict resolution and safety management ensures all situations are handled effectively.",
      "With our Uniformed Protection services, you gain a dependable partner dedicated to maintaining security while upholding your organization’s values and standards.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
]

export const servicesDescriptionsUK = [
  {
    link: "security-services",
    category: "Security Services",
    content: [
      "A career in security provides an opportunity to make a meaningful impact by safeguarding people and properties. Our Security Services offer a comprehensive platform for individuals to join a team of skilled professionals dedicated to ensuring safety and peace of mind.",
      "We provide an extensive range of security solutions tailored to the unique needs of various industries. From on-site guards to advanced surveillance systems, our services are designed to deliver reliable and seamless protection that our clients trust.",
      "By becoming part of our team, you’ll benefit from a supportive work environment, ongoing training programs, and avenues for professional growth. Whether you’re a seasoned expert or starting your security career, we are committed to helping you succeed.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "sia-training",
    category: "SIA Training",
    content: [
      "Earning professional certification is a vital step toward building a rewarding career in the security industry. Our SIA Training programs are designed to equip individuals with the essential skills, knowledge, and qualifications required for success in security roles.",
      "The training covers critical topics such as conflict resolution, risk assessment, and effective communication, enabling participants to tackle real-world challenges with confidence. Delivered by experienced instructors, the program ensures a thorough and engaging learning experience.",
      "Upon successful completion, participants receive SIA certification, unlocking numerous opportunities in the security sector. Invest in your future with our career-focused training programs that set you up for long-term success.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "cleaning-services",
    category: "Cleaning Services",
    content: [
      "A clean and hygienic environment is essential for health, safety, and productivity. Our Cleaning Services offer professional and tailored solutions for residential, commercial, and industrial spaces, ensuring every area meets the highest standards of cleanliness.",
      "From routine maintenance to specialized deep cleaning, our team uses advanced equipment and eco-friendly practices to deliver exceptional results. We address every corner of your premises, creating a welcoming and safe environment for occupants and visitors alike.",
      "Our dedicated professionals take pride in providing reliable and meticulous cleaning services. Experience the benefits of a cleaner, healthier space with our trusted and professional solutions.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "fire-marshal",
    category: "Fire Marshal",
    content: [
      "Fire safety is a critical aspect of protecting lives and property. Our Fire Marshal services are designed to ensure that your premises are fully prepared to handle fire-related emergencies in compliance with safety regulations.",
      "Our trained Fire Marshals conduct thorough risk assessments, develop evacuation plans, and implement fire safety protocols to mitigate risks. They are equipped to respond swiftly and effectively to emergencies, minimizing potential hazards.",
      "Choosing our Fire Marshal services means partnering with experts committed to safeguarding your property and people. Trust us to deliver excellence in fire safety management, ensuring your peace of mind.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "alarm-response",
    category: "Alarm Response",
    content: [
      "A swift and professional alarm response is essential to protect your property and assets. Our Alarm Response services ensure rapid intervention whenever an alarm is triggered, minimizing risks and providing reliable protection.",
      "Our trained responders handle a variety of scenarios, including break-ins, fire alarms, and other emergencies. Available 24/7, we provide prompt actions and detailed reports to keep you informed and reassured at all times.",
      "With our Alarm Response services, you can rely on professional and timely support to address any security concerns effectively. We prioritize your safety and deliver peace of mind around the clock.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "residential-security",
    category: "Residential & Retail Security",
    content: [
      "Protecting residential and retail spaces is essential to creating a safe and thriving environment. Our Residential & Retail Security services provide comprehensive solutions tailored to safeguard your property, assets, and people.",
      "From highly trained personnel to cutting-edge surveillance systems, we offer robust security measures that deter threats and respond to incidents effectively. Our approach emphasizes safety without compromising the welcoming atmosphere of your space.",
      "Whether you’re securing a residential community or a busy retail location, our professional team is committed to delivering reliable protection. Trust us to keep what matters most to you safe and secure.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "cctv-monitoring",
    category: "CCTV Monitoring",
    content: [
      "Surveillance is a cornerstone of modern security solutions. Our CCTV Monitoring services provide 24/7 oversight of your property, ensuring real-time detection and response to unusual activities.",
      "Using state-of-the-art technology and skilled operators, we monitor critical areas and provide actionable intelligence to enhance security measures. Our services are suitable for residential, commercial, and industrial settings, deterring crime and protecting assets.",
      "Partner with us for cutting-edge CCTV Monitoring solutions tailored to your unique requirements. Stay secure and informed with our reliable surveillance services.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "stewards",
    category: "Stewards",
    content: [
      "Efficient event management relies on the expertise of dedicated personnel. Our Steward services provide experienced professionals who ensure smooth operations and excellent guest experiences during public and private events.",
      "Trained to handle various scenarios, our stewards excel in crowd management, safety protocols, and customer assistance. Their approachable and professional demeanor enhances the overall experience for attendees, ensuring a successful event.",
      "From small gatherings to large-scale events, our stewards deliver reliable support tailored to your specific needs. Trust us to contribute to the success of your events with our exceptional services.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "event-security",
    category: "Event Security",
    content: [
      "Organizing a successful event requires thorough planning, including comprehensive security measures. Our Event Security services ensure that every aspect of your event remains secure, allowing you to focus on creating memorable experiences.",
      "From access control and crowd management to on-site security personnel, our services are designed to handle events of all sizes. We provide visible and proactive security solutions that deter potential threats and ensure the safety of attendees.",
      "Choose our Event Security services for a seamless and secure event experience. We prioritize safety and professionalism, ensuring your event proceeds without interruptions.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
  {
    link: "construction-security",
    category: "Construction Security",
    content: [
      "Construction sites face unique security challenges, including theft, vandalism, and unauthorized access. Our Construction Security services provide comprehensive protection to safeguard your materials, equipment, and personnel.",
      "With a combination of trained guards, regular patrols, and advanced monitoring systems, we proactively identify risks and implement measures to mitigate them. Our approach ensures that your site remains secure around the clock.",
      "Trust our Construction Security solutions to maintain the integrity of your projects. We are committed to delivering tailored and reliable protection for construction sites of all sizes.",
    ],
    images: [ServiceContent1, ServiceContent2, ServiceContent3],
  },
]

export const servicesDescriptionsGlobal = [...new Map([...servicesDescriptionsCanada, ...servicesDescriptionsUK].map((service) => [service.category, service])).values()]
