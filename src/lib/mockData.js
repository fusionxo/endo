export const gymData = {
  name: "Endorphin Strength & Yoga",
  location: "Deoghar, Jharkhand",
  phone: "+91 98765 43210",
  email: "info@endorphingym.com",
  address: "1st Floor, Shivoham Tower, More, Kunda, Deoghar, Jharkhand 814112",
  
  stats: {
    members: 500,
    experience: 5,
    trainers: 15,
    successRate: 98
  },

  memberships: [
    {
      name: "Basic",
      price: 999,
      duration: "month",
      features: [
        "Gym Access",
        "Basic Equipment",
        "Locker Access",
        "2 Group Classes/Week"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: 1499,
      duration: "month",
      features: [
        "Full Gym Access",
        "All Equipment",
        "Unlimited Group Classes",
        "Nutrition Consultation",
        "Progress Tracking"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: 2499,
      duration: "month",
      features: [
        "Everything in Standard",
        "Personal Training (4 sessions)",
        "Diet Plan",
        "Body Composition Analysis",
        "Priority Booking"
      ],
      popular: false
    },
    {
      name: "Student",
      price: 749,
      duration: "month",
      features: [
        "Gym Access",
        "Group Classes",
        "Study Area Access",
        "Flexible Timing"
      ],
      popular: false,
      discount: "25% Off"
    }
  ],

  trainers: [
    {
      name: "Rahul Sharma",
      designation: "Head Trainer & Founder",
      specialization: "Strength Training, Yoga",
      experience: "5+ years",
      certifications: ["ACE Certified", "Yoga Alliance RYT-200"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
      bio: "Passionate about combining traditional yoga with modern fitness science."
    },
    {
      name: "Anita Singh",
      designation: "Yoga Instructor",
      specialization: "Hatha Yoga, Meditation",
      experience: "4+ years",
      certifications: ["Yoga Alliance RYT-500", "Meditation Teacher"],
      image: "https://images.unsplash.com/photo-1594824505341-ec2d83c50eea",
      bio: "Dedicated to helping students find inner peace through yoga practice."
    },
    {
      name: "Vikash Kumar",
      designation: "Strength Coach",
      specialization: "Powerlifting, HIIT",
      experience: "3+ years",
      certifications: ["NASM Certified", "Powerlifting Coach"],
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c",
      bio: "Focused on helping members achieve their strength and fitness goals."
    }
  ]
}
