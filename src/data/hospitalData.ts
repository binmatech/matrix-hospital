import { Service, Doctor, Department, Testimonial, FAQItem, GalleryItem } from '../types';

export const servicesData: Service[] = [
  {
    id: 'internal-medicine',
    title: 'Internal Medicine',
    shortDescription: 'Comprehensive management of complex, chronic, and acute medical illnesses in adults.',
    longDescription: 'Our Internal Medicine department provides superlative primary and specialist care for adult patients. We specialize in diagnosing, treating, and preventing chronic conditions such as Hypertension, Diabetes, Asthma, cardiovascular diseases, and complex multi-system disorders.',
    icon: 'Stethoscope',
    benefits: [
      'Chronic disease management plans',
      'Preventive health screenings and full-body physicals',
      'Comprehensive specialist consultations',
      'Tailored evidence-based treatment regimens'
    ]
  },
  {
    id: 'emergency-care',
    title: 'Emergency Care',
    shortDescription: '24/7 immediate trauma and acute care with prompt medical attention.',
    longDescription: 'Matrix Prime Hospital operates a state-of-the-art 24/7 emergency unit. Equipped with emergency life support, critical monitoring systems, and a dedicated, prompt triage team of doctors and trauma nurses ready to handle medical, surgical, pediatric, and obstetric emergencies.',
    icon: 'Activity',
    benefits: [
      '24/7/365 availability with zero wait-time for critical cases',
      'Advanced Cardiac Life Support (ACLS) & trauma care',
      'Fully equipped dedicated emergency resuscitation bays',
      'Rapid standby medical response and ambulance support'
    ]
  },
  {
    id: 'maternity-gynecology',
    title: 'Maternity & Gynecology',
    shortDescription: 'Exceptional maternal care, safe deliveries, and specialized women’s health services.',
    longDescription: 'We provide warm, safe, and clinical excellence for women at every stage of life. From pre-conception planning and elite prenatal care, to comfortable labor suites, painless delivery options, and sophisticated neonatal support, alongside advanced gynecological management.',
    icon: 'Baby',
    benefits: [
      'Comprehensive prenatal and postnatal care programs',
      'Modern, safe, private labor and delivery suites',
      'Postnatal lactation and recovery consultations',
      'Minimal access surgery for gynecological issues'
    ]
  },
  {
    id: 'general-surgery',
    title: 'General Surgery',
    shortDescription: 'Advanced minimally invasive and major surgical procedures guided by top surgeons.',
    longDescription: 'Our surgical team is highly trained in performing major and minor elective and emergency surgeries. Utilizing advanced diagnostic workups and sterile operating environments, we offer open, laparoscopic, and specialized pediatric surgeries with excellent clinical safety records.',
    icon: 'Scissors',
    benefits: [
      'State-of-the-art sterile operating theatres',
      'Minimally invasive (laparoscopic) keyhole procedures',
      'Prompt outpatient day-case surgeries',
      'Empathetic and careful post-surgical follow-up'
    ]
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics & Child Health',
    shortDescription: 'Specialized healthcare, immunization, and developmental support for children.',
    longDescription: 'We offer specialized medical and surgical services for infants, young children, and adolescents. Our cheerful environment reduces hospital anxiety, making immunizations, growth monitoring, developmental checks, and childhood illness treatments smooth and stress-free.',
    icon: 'Heart',
    benefits: [
      'Standardized scheduled baby immunizations',
      'Strategic pediatric nutrition & growth tracking',
      'Kid-friendly inpatient pediatric wards',
      'Experienced pediatric emergency specialists'
    ]
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    shortDescription: 'In-house access to genuine, high-quality, and securely stored medicines.',
    longDescription: 'Our 24-hour pharmaceutical service is fully stocked with authentic, verified medicines. Manned by licensed clinical pharmacists who perform dynamic dosage checks and patient medication counseling to guarantee absolute recovery and treatment safety.',
    icon: 'Pill',
    benefits: [
      '24/7 medicine availability with guaranteed authenticity',
      'Professional patient education on medication schedule',
      'Seamless digital integration with prescribing doctors',
      'Securely controlled cold-chain vaccine storage'
    ]
  },
  {
    id: 'laboratory-diagnostics',
    title: 'Laboratory & Diagnostics',
    shortDescription: 'Ultra-precise sample analysis, biochemistry, ultrasound, and digital diagnostics.',
    longDescription: 'Matrix Prime boasts a modern in-house laboratory running automated diagnostics. We provide fast, highly accurate hematology, biochemistry, infectious panels, pelvic and obstetric ultra-scans, and digital ECG tests to aid immediate clinical decisions.',
    icon: 'FlaskConical',
    benefits: [
      'Automated, high-precision analyzer systems',
      'Digital delivery of secure patient test reports',
      'Comprehensive pre-employment and wellness panels',
      'Highly trained, qualified laboratory scientists'
    ]
  },
  {
    id: 'eye-clinic',
    title: 'Eye Clinic',
    shortDescription: 'Comprehensive vision tests, optical prescriptions, and eye medical treatment.',
    longDescription: 'Our Optometry & Eye Clinic delivers comprehensive vision testing, glaucoma screening, treatment for bacterial and structural eye infections, and custom physical optics options with a beautiful, modern frames catalog.',
    icon: 'Eye',
    benefits: [
      'Advanced digital visual acuity mapping',
      'Comprehensive glaucoma and diabetic retinopathy checks',
      'Wide catalog of premium prescription frames and lenses',
      'Aesthetic and visual posture consultations'
    ]
  }
];

export const doctorsData: Doctor[] = [
  {
    id: 'doc-cmd',
    name: 'Dr. Afolabi Durosinmi',
    qualifications: 'MBBS, FWACS (Gen. Surgery)',
    specialty: 'Chief Medical Director & Chief Consultant Surgeon',
    department: 'General Surgery / Executive Leadership',
    experience: '22+ Years of Experience',
    bio: 'Dr. Durosinmi is an expert in general and laparoscopic surgery, specializing in complex gastrointestinal procedures. He has led various healthcare improvement drives across Lagos.',
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&q=80&w=600',
    availability: ['Mon', 'Tue', 'Wed', 'Fri'],
    contactEmail: 'a.durosinmi@matrixprime.org'
  },
  {
    id: 'doc-obgyn',
    name: 'Dr. Chioma Nkem-Okoro',
    qualifications: 'MBBS, FMCOG (Maternal Care)',
    specialty: 'Senior Consultant Obstetrician & Gynecologist',
    department: 'Maternity & Gynecology',
    experience: '15+ Years of Experience',
    bio: 'Dr. Chioma specializes in high-risk pregnancy management, obstetric emergencies, and advanced reproductive health. She is devoted to securing pleasant childbearing experiences for mothers.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    availability: ['Tue', 'Thu', 'Sat'],
    contactEmail: 'c.nkem@matrixprime.org'
  },
  {
    id: 'doc-peds',
    name: 'Dr. Babajide Sowemimo',
    qualifications: 'MBBS, FWACS (Paediatrics)',
    specialty: 'Consultant Pediatrician & Neonatologist',
    department: 'Pediatrics & Child Health',
    experience: '12+ Years of Experience',
    bio: 'Dr. Sowemimo is highly passionate about preventative pediatric healthcare, childhood respiratory management, and clinical care for preterm/newborn babies.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    availability: ['Mon', 'Wed', 'Thu', 'Sat'],
    contactEmail: 'b.sowemimo@matrixprime.org'
  },
  {
    id: 'doc-internal',
    name: 'Dr. Amara Eke-Alade',
    qualifications: 'MBBS, MWACP (Cardiology & Internal Med)',
    specialty: 'Lead Resident Consultant - Internal Medicine',
    department: 'Internal Medicine',
    experience: '10+ Years of Experience',
    bio: 'Dr. Amara has extensive clinical depth in Cardiology, managing refractory Hypertension, adult endocrinology issues, and customized diabetic management plans.',
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600',
    availability: ['Mon', 'Wed', 'Fri'],
    contactEmail: 'a.eke@matrixprime.org'
  }
];

export const departmentsData: Department[] = [
  {
    id: 'dept-internal',
    name: 'Internal Medicine Department',
    description: 'Expert diagnostics and therapeutics for chronic diseases and acute adult systemic illnesses.',
    headOfDepartment: 'Dr. Amara Eke-Alade',
    icon: 'Stethoscope',
    servicesIncluded: ['Hypertension & Diabetes Clinics', 'Cardiology Assessments', 'Asthma Control', 'Exec Health Screening'],
    image: 'https://images.unsplash.com/photo-1584515934003-7f164be237a0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dept-emergency',
    name: 'Emergency & Trauma Center',
    description: 'Advanced, rapid-response unit prepared for critical surgical and medical event actions 24/7.',
    headOfDepartment: 'Dr. Afolabi Durosinmi',
    icon: 'ShieldAlert',
    servicesIncluded: ['Trauma Resuscitation', 'Critical Airway Care', 'Cardiopulmonary Emergencies', 'Rapid Ambulance Dispatch'],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dept-maternity',
    name: 'Obstetrics, Gynecology & Neonatal Unit',
    description: 'Nurturing family clinic dealing with women health metrics, high-care maternity, and delivery rooms.',
    headOfDepartment: 'Dr. Chioma Nkem-Okoro',
    icon: 'Baby',
    servicesIncluded: ['Prenatal Ultrasound', 'Delivery (Painless options)', 'Neonatal Intensive Care (NICU)', 'Infertility Clinics & Laparoscopy'],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dept-pediatrics',
    name: 'Pediatrics Wing',
    description: 'Comprehensive preventative, general medical, and immunization support structures for young children.',
    headOfDepartment: 'Dr. Babajide Sowemimo',
    icon: 'HeartHandshake',
    servicesIncluded: ['Baby Assessment Clinics', 'Routine Vaccinations', 'Asthma Management', 'Lactation consultations'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mr. Emmanuel Olatunji',
    role: 'Alimosho Resident',
    content: 'My child had a high fever at 2 AM. The emergency crew at Matrix Prime attended to us immediately without delay. The pediatrician was highly professional and compassionate throughout our stay.',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    id: 'test-2',
    name: 'Mrs. Fatima Yusuf',
    role: 'Maternity Patient',
    content: 'Matrix Prime is quality care close to home. The obstetric care I received during my pregnancy and delivery was absolutely international grade. Clean rooms, supportive nurses, and a quiet postnatal ward.',
    rating: 5,
    date: '1 month ago'
  },
  {
    id: 'test-3',
    name: 'Elder Anthony Okereke',
    role: 'Chronic Health Program Member',
    content: 'Managing my diabetes was hard until I joined Dr. Amara’s internal medicine clinic here. Now, my glucose is steady, and I feel healthy. The pharmacy services are extremely responsive.',
    rating: 5,
    date: '3 weeks ago'
  }
];

export const faqData: FAQItem[] = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment easily by filling out our online booking form on the website, calling our support line, or visiting the reception desk directly. After booking, you will receive an automatic confirmation via SMS or email.',
    category: 'Appointments'
  },
  {
    question: 'Do you accept walk-in patients?',
    answer: 'Yes! While booking is advised for specialist consultations, we welcome walk-ins for general outpatient consultations, laboratory testing, pharmacy collection, and optometry services.',
    category: 'General'
  },
  {
    question: 'Are emergency services available 24/7?',
    answer: 'Absolutely. Our Emergency Care unit, Pharmacy, and Diagnostic Laboratory are fully staffed and open 24 hours a day, 7 days a week, including holidays.',
    category: 'Emergency'
  },
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept outstanding corporate packages and leading Health Maintenance Organizations (HMOs) in Nigeria, including Hygeia HMO, Reliance HMO, AXA Mansard, Total Health, Avon HMO, and NHIS programs. Please bring your corporate/HMO card for prompt eligibility clearance.',
    category: 'Services'
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-reception',
    title: 'Hospital Reception',
    category: 'Reception Area',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    description: 'Our spacious, air-conditioned, comfortable waiting lobby designed to inspire welcoming and peaceful energy.'
  },
  {
    id: 'gal-consultation',
    title: 'Consultation Suite',
    category: 'Consultation Rooms',
    image: 'https://images.unsplash.com/photo-1584515934003-7f164be237a0?auto=format&fit=crop&q=80&w=800',
    description: 'Fully equipped assessment environments where specialists conduct discrete, attentive healthcare consultations.'
  },
  {
    id: 'gal-lab',
    title: 'Precision diagnostic laboratory',
    category: 'Laboratory',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&q=80&w=800',
    description: 'In-house modern lab running clinical assays, biochemistry panels, hematology, and rapid testing.'
  },
  {
    id: 'gal-pharmacy',
    title: '24 Hour Pharmacy',
    category: 'Pharmacy',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
    description: 'Fully stocked pharmaceutical inventory offering authentic, secure medications and customized prescription counseling.'
  },
  {
    id: 'gal-theatre',
    title: 'Sterile Operating Theatre',
    category: 'Operating Theatre',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    description: 'Highly clinical surgical environment fitted with state of the art anesthetic, monitor, and air scrubber setups.'
  },
  {
    id: 'gal-maternity',
    title: 'Private Postnatal Maternity Wing',
    category: 'Maternity Ward',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    description: 'Cozy and serene private parameters configured for supportive, peaceful bonding between newborn and parents.'
  },
  {
    id: 'gal-pediatric',
    title: 'Child Care Clinic',
    category: 'Pediatric Unit',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    description: 'A comforting, playful waiting space configured to keep pediatric immunizations and checkups fun.'
  }
];

export const symptomTriageData = [
  { symptoms: ['headache', 'dizziness', 'high blood pressure', 'blurred vision', 'palpitations'], dept: 'dept-internal', suggestion: 'Internal Medicine Department (Dr. Amara Eke-Alade)' },
  { symptoms: ['abdominal pain', 'swelling', 'appendicitis', 'hernia', 'surgical opinion', 'wound infection'], dept: 'dept-internal', suggestion: 'General Surgery Department (Dr. Afolabi Durosinmi)' },
  { symptoms: ['pregnancy', 'labor pain', 'miscarriage risk', 'ovarian pain', 'gynae discharge', 'periods delay'], dept: 'dept-maternity', suggestion: 'Maternity & Gynecology Department (Dr. Chioma Nkem-Okoro)' },
  { symptoms: ['child fever', 'baby vomiting', 'pediatric cough', 'child vaccination', 'newborn weight'], dept: 'dept-pediatrics', suggestion: 'Pediatrics & Child Health (Dr. Babajide Sowemimo)' },
  { symptoms: ['chest pain', 'severe breathing difficulty', 'unconsciousness', 'heavy blood loss', 'fracture', 'poisoning'], dept: 'dept-emergency', suggestion: '24/7 Emergency Care Center (Immediate Triage)' }
];
