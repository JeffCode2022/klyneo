export const peruvianUniversities = [
    "Universidad Nacional Mayor de San Marcos (UNMSM)",
    "Universidad Nacional de Ingeniería (UNI)",
    "Pontificia Universidad Católica del Perú (PUCP)",
    "Universidad Peruana Cayetano Heredia (UPCH)",
    "Universidad de Lima",
    "Universidad del Pacífico (UP)",
    "Universidad Nacional Agraria La Molina (UNALM)",
    "Universidad Peruana de Ciencias Aplicadas (UPC)",
    "Universidad San Ignacio de Loyola (USIL)",
    "Universidad Científica del Sur",
    "Universidad Tecnológica del Perú (UTP)",
    "Universidad Nacional de San Agustín (UNSA)",
    "Universidad Nacional de Trujillo (UNT)",
    "Universidad Nacional San Antonio Abad del Cusco (UNSAAC)",
    "Universidad ESAN",
    "Universidad Ricardo Palma",
    "Universidad de Piura",
    "Universidad San Martín de Porres",
    "Universidad Nacional Federico Villarreal",
    "Universidad Nacional del Callao",
]

export const featuredProjects = [
    {
        id: 1,
        title: "Sistema de Gestión Empresarial con IA",
        description:
            "Plataforma integral para la administración de recursos y procesos empresariales con inteligencia artificial predictiva",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        category: "Tecnología",
        university: "Universidad Nacional de Ingeniería (UNI)",
        rating: 4.8,
        forSale: true,
        price: "S/. 15,000",
    },
    {
        id: 2,
        title: "Rediseño UX para Aplicación Financiera",
        description:
            "Rediseño completo de la experiencia de usuario para aplicación móvil de servicios financieros enfocado en accesibilidad",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        category: "Diseño",
        university: "Universidad de Lima",
        rating: 4.5,
        forSale: false,
        price: "S/. 8,500",
    },
    {
        id: 3,
        title: "Análisis Predictivo de Mercados Emergentes",
        description:
            "Estudio avanzado de patrones de consumo utilizando inteligencia artificial y big data para mercados emergentes",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        category: "Análisis de Datos",
        university: "Pontificia Universidad Católica del Perú (PUCP)",
        rating: 4.9,
        forSale: true,
        price: "S/. 12,000",
    },
]

export const testimonials = [
    {
        id: 1,
        name: "María González",
        role: "Estudiante de Ingeniería de Sistemas",
        quote:
            "Gracias a KLYNEO pude conectar con empresas que valoraron mi proyecto final y me ofrecieron oportunidades laborales que nunca imaginé conseguir tan pronto.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
        id: 2,
        name: "Carlos Rodríguez",
        role: "Director de Innovación en TechPeru",
        quote:
            "Encontramos talento excepcional a través de KLYNEO. Los estudiantes traen ideas frescas y perspectivas innovadoras que han transformado nuestra empresa.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
        id: 3,
        name: "Ana Martínez",
        role: "Profesora Universitaria",
        quote:
            "La plataforma ha sido una excelente manera de mostrar el trabajo de mis estudiantes y conectarlos con oportunidades reales en el mercado laboral peruano e internacional.",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    },
]

export const stats = [
    { id: 1, value: "2,500+", label: "Proyectos publicados" },
    { id: 2, value: "150+", label: "Universidades participantes" },
    { id: 3, value: "500+", label: "Empresas colaboradoras" },
    { id: 4, value: "85%", label: "Tasa de conexión exitosa" },
]

export const upcomingEvents = [
    {
        id: 1,
        title: "Feria Virtual de Talento Tecnológico",
        date: "15 de Abril, 2025",
        description: "Conecta con las principales empresas tecnológicas del Perú y presenta tus proyectos en tiempo real.",
        image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6",
    },
    {
        id: 2,
        title: "Webinar: Cómo monetizar tus ideas universitarias",
        date: "22 de Abril, 2025",
        description: "Aprende estrategias efectivas para convertir tus proyectos académicos en oportunidades de negocio.",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4",
    },
    {
        id: 3,
        title: "Workshop: Portfolio Digital para Estudiantes",
        date: "30 de Abril, 2025",
        description: "Taller práctico para crear un portfolio digital que destaque tus habilidades y proyectos.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
]

// Dashboard Mock Data

export const studentStats = [
    { title: "Proyectos Activos", value: "3", icon: "FileText", color: "text-blue-400" },
    { title: "Visualizaciones", value: "1,240", icon: "Eye", color: "text-[#FF6B00]" },
    { title: "Ofertas Guardadas", value: "8", icon: "Bookmark", color: "text-purple-400" },
    { title: "Postulaciones", value: "5", icon: "Send", color: "text-green-400" },
]

export const companyStats = [
    { title: "Ofertas Publicadas", value: "12", icon: "Briefcase", color: "text-blue-400" },
    { title: "Candidatos", value: "45", icon: "Users", color: "text-[#FF6B00]" },
    { title: "Entrevistas", value: "8", icon: "Calendar", color: "text-purple-400" },
    { title: "Contratados", value: "3", icon: "CheckCircle", color: "text-green-400" },
]

export const recommendedOffers = [
    {
        id: 101,
        title: "Desarrollador Frontend Junior",
        company: "Tech Solutions Peru",
        location: "Lima, Perú (Híbrido)",
        salary: "S/. 2,500 - S/. 3,500",
        type: "Tiempo Completo",
        posted: "Hace 2 días",
        match: "95%",
    },
    {
        id: 102,
        title: "Diseñador UX/UI Trainee",
        company: "Innova Digital",
        location: "Remoto",
        salary: "S/. 1,200 - S/. 1,800",
        type: "Prácticas",
        posted: "Hace 5 horas",
        match: "88%",
    },
    {
        id: 103,
        title: "Analista de Datos Junior",
        company: "Banco Futuro",
        location: "San Isidro, Lima",
        salary: "S/. 3,000 - S/. 4,000",
        type: "Tiempo Completo",
        posted: "Hace 1 día",
        match: "92%",
    },
]

export const recentApplications = [
    {
        id: 201,
        role: "Practicante de Desarrollo Web",
        company: "Agencia Creativa Lima",
        date: "02 Dic 2025",
        status: "En revisión",
        statusColor: "text-yellow-400",
    },
    {
        id: 202,
        role: "Asistente de Marketing Digital",
        company: "Retail Peru S.A.",
        date: "28 Nov 2025",
        status: "Entrevista programada",
        statusColor: "text-green-400",
    },
    {
        id: 203,
        role: "Junior Python Developer",
        company: "DataScience Corp",
        date: "25 Nov 2025",
        status: "Rechazado",
        statusColor: "text-red-400",
    },
]

export const companyOffersList = [
    {
        id: 301,
        title: "Senior React Developer",
        applicants: 15,
        status: "Activo",
        posted: "Hace 3 días",
        views: 245,
    },
    {
        id: 302,
        title: "Product Designer",
        applicants: 8,
        status: "Activo",
        posted: "Hace 1 semana",
        views: 180,
    },
    {
        id: 303,
        title: "Marketing Intern",
        applicants: 32,
        status: "Cerrado",
        posted: "Hace 2 semanas",
        views: 520,
    },
]

export const recommendedTalent = [
    {
        id: 401,
        name: "Juan Pérez",
        role: "Estudiante de Ing. de Software",
        university: "Universidad Nacional de Ingeniería (UNI)",
        skills: ["React", "Node.js", "TypeScript"],
        match: "98%",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
        id: 402,
        name: "Lucía Campos",
        role: "Egresada de Diseño Gráfico",
        university: "Pontificia Universidad Católica del Perú (PUCP)",
        skills: ["Figma", "Adobe XD", "Branding"],
        match: "94%",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
        id: 403,
        name: "Miguel Ángel",
        role: "Estudiante de Ciencia de Datos",
        university: "Universidad de Lima",
        skills: ["Python", "SQL", "Tableau"],
        match: "91%",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
]
