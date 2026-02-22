const socialWorkers = [
    {
        id: 1,
        name: "Mr. Kamuze Jonathan",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Trauma, PTSD, Family Support",
        languages: ["English", "Luganda"],
        rating: 4.9,
        about: "With over 12 years of experience in social work, Mr. Kamuze specializes in trauma recovery and psychological rehabilitation for survivors of extreme violence. He has worked extensively with local and international NGOs to develop healing frameworks for communities.",
        areas: [
            "PTSD Treatment",
            "Anxiety & Depression",
            "Women's Empowerment",
            "Survivor Advocacy"
        ],
        availability: "Mon - Fri: 8:00 AM - 5:00 PM"
    },
    {
        id: 2,
        name: "Mrs. Calamus",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Family Counseling, Youth Support",
        languages: ["English", "Acholi", "Swahili"],
        rating: 4.5,
        about: "Mrs. Calamus is dedicated to strengthening family bonds and supporting youth through critical developmental stages.",
        areas: [
            "Family Therapy",
            "Youth Mentorship",
            "Conflict Resolution",
            "Parenting Support"
        ],
        availability: "Mon - Fri: 9:00 AM - 4:00 PM"
    },
    {
        id: 3,
        name: "Kirungi Elmos",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "School Social Worker, Children & Youth",
        languages: ["English", "Luganda", "Runyoro"],
        rating: 5.0,
        about: "Kirungi Elmos focuses on the well-being of children in educational settings, ensuring they have the support needed to thrive.",
        areas: [
            "School Counseling",
            "Child Behavioral Support",
            "Special Education Advocacy",
            "Crisis Intervention"
        ],
        availability: "Mon - Fri: 8:00 AM - 4:00 PM"
    },
    {
        id: 4,
        name: "Mr. Bwayo Ivan",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Community Outreach, Family Welfare",
        languages: ["English", "Luganda"],
        rating: 4.8,
        about: "Mr. Bwayo Ivan is passionate about connecting communities with essential resources and improving family welfare.",
        areas: [
            "Community Organizing",
            "Resource Linkage",
            "Family Case Management",
            "Health Education"
        ],
        availability: "Mon - Sat: 9:00 AM - 5:00 PM"
    },
    {
        id: 5,
        name: "Mrs. Nankya Florence",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Child Protection, Counseling",
        languages: ["English", "Luganda"],
        rating: 4.7,
        about: "Mrs. Nankya Florence is a strong advocate for child rights and protection, providing counseling to vulnerable children.",
        areas: [
            "Child Protection Services",
            "Trauma Counseling for Kids",
            "Legal Advocacy for Minors",
            "Foster Care Support"
        ],
        availability: "Mon - Fri: 8:30 AM - 4:30 PM"
    },
    {
        id: 6,
        name: "Mr. Kiseka Vicente",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Youth Empowerment, Mentorship",
        languages: ["English", "Luganda"],
        rating: 4.9,
        about: "Mr. Kiseka Vicente works to empower youth through mentorship, skills development, and positive guidance.",
        areas: [
            "Youth Leadership Programs",
            "Career Counseling",
            "Life Skills Training",
            "Peer Support Groups"
        ],
        availability: "Tue - Sat: 10:00 AM - 6:00 PM"
    },
    {
        id: 7,
        name: "Mr. SSebuyungo Marvin",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Community Integration, Rehab",
        languages: ["English", "Luganda"],
        rating: 4.6,
        about: "Mr. SSebuyungo Marvin assists individuals in reintegrating into their communities after rehabilitation or displacement.",
        areas: [
            "Reintegration Support",
            "Substance Abuse Rehab",
            "Community Based Rehabilitation",
            "Social Skills Training"
        ],
        availability: "Mon - Fri: 9:00 AM - 5:00 PM"
    },
    {
        id: 8,
        name: "Mr. Ssekayiba Martin",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Mental Health Support, Counseling",
        languages: ["English", "Luganda"],
        rating: 4.8,
        about: "Mr. Ssekayiba Martin provides compassionate mental health support and counseling to individuals facing emotional challenges.",
        areas: [
            "Individual Therapy",
            "Group Counseling",
            "Stress Management",
            "Mental Health Awareness"
        ],
        availability: "Mon - Fri: 8:00 AM - 5:00 PM"
    },
    {
        id: 9,
        name: "Kirabo Vicky",
        role: "Verified Social Worker",
        title: "Certified Social Worker",
        specialization: "Community Support, Family Counseling",
        languages: ["English", "Luganda", "Lusoga"],
        rating: 4.9,
        about: "Kirabo Vicky is dedicated to building strong families and supportive communities through counseling and outreach.",
        areas: [
            "Family Mediation",
            "Community Support Groups",
            "Marital Counseling",
            "Domestic Violence Support"
        ],
        availability: "Wed - Sun: 10:00 AM - 6:00 PM"
    },
    {
        id: 10,
        name: "Mrs. Adong Florence",
        role: "Verified Social Worker",
        title: "Senior Specialist",
        specialization: "Psychosocial Support, Community Development",
        languages: ["English", "Acholi"],
        rating: 5.0,
        about: "Mrs. Adong Florence is a Senior Specialist with extensive expertise in Psychosocial Support, Community Development, and Family & Child Welfare. She focuses on mobilizing communities and strengthening local structures while providing emotional support and counseling.",
        areas: [
            "Psychosocial Support (Counseling, Stress Management)",
            "Community Development (Participatory Planning)",
            "Family & Child Welfare (Parenting, Child Protection)",
            "Safeguarding & Strengthening Local Structures"
        ],
        availability: "Mon - Fri: 8:00 AM - 5:00 PM"
    }
];

function getWorkerById(id) {
    return socialWorkers.find(worker => worker.id == id);
}
